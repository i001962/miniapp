add a Farcaster comment section and frame to croptop site
this is a defifa color scheme

# Farcaster Comments
## Add Farcaster comments to your site
Enable custom code in your <head> section via croptop's in desktop authoring app.

```js
<script type="module">
  import { sdk } from 'https://esm.sh/@farcaster/frame-sdk';

  async function inFrameContext() {
      const links = document.querySelectorAll("a[href^='http']");
      for (let link of links) {
          link.addEventListener("click", (event) => {
              event.preventDefault();
              sdk.actions.openUrl(link.getAttribute("href"));
          });
      }
      await sdk.actions.addFrame();
  }

  window.onload = async () => {
    try {
      await sdk.actions.ready();
      const ctx = await sdk.context;
      ctx ? await inFrameContext() : FrameBar();
    } catch (error) {
      console.error(error);
    }
  };
</script>
<meta name="fc:frame" content='{
  "version": "next",
  "imageUrl": "{{ social_image_url }}",
  "button": {
    "title": "See my innie",
    "action": {
      "type": "launch_frame",
      "name": "KMac has an innie app",
      "url": "https://kmacb.eth.sucks/{{ article.id }}/",
      "splashImageUrl": "https://kmacb.eth.sucks/avatar.png",
      "splashBackgroundColor": "#010513"
    }
  }
}' /><script>
;(function(){
  const FARCASTER_HUB = "https://hub.pinata.cloud"
  const POLL_INTERVAL = 15000  // ms
  async function fetchAllCasts(pageUrl) {
    console.log("fetchAllCasts ▶︎ start for", pageUrl)
    const u = pageUrl
    const res = await fetch(
      `${FARCASTER_HUB}/v1/castsByParent?url=${u}&pageSize=50&reverse=1`,
      { headers: { "Content-Type": "application/json" } }
    )
    if (!res.ok) {
      console.error("fetchAllCasts ✖︎ http error", res.status, res.statusText)
      throw new Error(res.statusText)
    }
    const { messages } = await res.json()
    console.log("fetchAllCasts ✔︎ fetched", messages.length, "messages")
    return messages
  }

  function partitionCasts(msgs) {
    console.log("partitionCasts ▶︎ partitioning", msgs.length, "messages")
    const root = msgs.find(m => !m.parentHash || m.parentHash === "0x0")
    const replies = msgs.filter(m => m.parentHash && m.parentHash !== "0x0")
    console.log("partitionCasts ✔︎ root:", root ? root.hash : null, "; replies:", replies.length)
    return { root, replies }
  }

  async function loadComments(pageUrl, containerId) {
    try {
      console.log("loadComments ▶︎ loading for", containerId)
      const all = await fetchAllCasts(pageUrl)
      const { root, replies } = partitionCasts(all)
      window[containerId + "_root"] = root
      window[containerId + "_replies"] = replies
      console.log("loadComments ✔︎ dispatching event for", containerId)
      window.dispatchEvent(new CustomEvent("FarcasterCommentsLoaded", {
        detail: { containerId, root, replies }
      }))
    } catch (e) {
      console.error("loadComments ✖︎ failed for", containerId, e)
    }
  }

  window.FarcasterCommentsInit = function(pageUrl, containerId) {
    console.log("FarcasterCommentsInit ▶︎ init", pageUrl, containerId)
    loadComments(pageUrl, containerId)
    setInterval(() => loadComments(pageUrl, containerId), POLL_INTERVAL)
  }
})()
</script>

```

## Add Farcaster comment frame to your site
The post-page.html has a Farcaster comment frame that will be used to display the comments. You can add this to your post page template in croptop.
this is a placeholder for initiating a cast to a Farcaster hub. 
first the published page needs to be without the ?id=1234 but have an abosute URL /1234
the code will call an open hub to retrieve the casts that have the same parentUrl as the page URL. from there all the replies will be retrieved and displayed in the comments section. This is a WIP waiting on farcaster sdk to support parentUrl setting in castCompose()
```html 
<div id="comments"></div>
<script type="module">
  import { sdk } from 'https://esm.sh/@farcaster/frame-sdk';

  const PAGE_URL = window.location.href;
  const CONTAINER = "comments";

  FarcasterCommentsInit(PAGE_URL, CONTAINER);

  async function setupLinksForFrame() {
    const links = document.querySelectorAll("a[href^='http']");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        sdk.actions.openUrl(link.getAttribute("href"));
      });
    }
    await sdk.actions.addFrame();
  }

  window.onload = async () => {
    try {
      await sdk.actions.ready();
      const ctx = await sdk.context;
      if (ctx) {
        await setupLinksForFrame();
      } else {
        FrameBar();
      }
    } catch (error) {
      console.error("Frame SDK init failed:", error);
    }
  };

  window.addEventListener("FarcasterCommentsLoaded", (evt) => {
    const { containerId, root, replies } = evt.detail;
    console.log("FarcasterCommentsLoaded ▶︎", containerId, root, replies);
    const el = document.getElementById(containerId);
    el.innerHTML = "";

    if (!root) {
      // Insert the Farcaster share button directly after #post-form-button
      setTimeout(() => {
        const postFormButton = document.getElementById("post-form-button");
        if (postFormButton && !document.getElementById("farcaster-comment-button")) {
          const shareBtn = document.createElement("button");
          shareBtn.id = "farcaster-comment-button";
          shareBtn.style.marginTop = "1rem";
          shareBtn.innerText = "💬 Share to Farcaster to enable comments";
          postFormButton.parentNode.insertBefore(shareBtn, postFormButton.nextSibling);
        }
        const button = document.getElementById("farcaster-comment-button");
        if (button) {
          button.onclick = async () => {
            console.log("💬 Comment button clicked");
            try {
              await sdk.actions.ready(); // ensures sdk is initialized
              const ctx = await sdk.context;
              console.log("SDK Context:", ctx);

              if (ctx) {
                await sdk.actions.composeCast({
                  text: PAGE_URL + ' [test] commenting system',
                  embeds: [PAGE_URL],
                  parent: {
                    type: "url",
                    url: PAGE_URL
                  }
                });
                return;
              } else {
                throw new Error("Not in frame context");
              } 
            } catch (e) {
              console.warn("Fallback to Warpcast due to error:", e.message);
              window.open(
                'https://warpcast.com/~/compose?text=' +
                  PAGE_URL + ' [test] commenting system' +
                  '&embeds[]=' +
                  PAGE_URL +
                  '&channelKey=' + PAGE_URL,
                '_blank'
              );
            }
          };
        }
      }, 0);
      return;
    }

    el.innerHTML += `
      <div class="comment-root">
        <strong>${root.username}</strong>
        <p>${root.text}</p>
        <small>${new Date(root.timestamp).toLocaleString()}</small>
      </div>
    `;
    replies.forEach(r => {
      el.innerHTML += `
        <div class="comment-reply" style="margin-left:20px">
          <strong>${r.username}</strong>
          <p>${r.text}</p>
          <small>${new Date(r.timestamp).toLocaleString()}</small>
        </div>
      `;
    });
  });
</script>
```html