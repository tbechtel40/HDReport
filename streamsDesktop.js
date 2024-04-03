document.addEventListener('DOMContentLoaded', function () {
    const streamsDesktop = document.getElementById('streamsDesktop');
  
    const htmlContent = `
      <div class="video-column">
        <div class="streamNamesContainer">
          <p id="ycStream" class="streamNames"><a target="_blank" href="https://www.twitch.tv/yachtclubhq">yachtclubhq</a></p>
          <p id="wplStream" class="streamNames"><a target="_blank" href="https://www.twitch.tv/waypoint_lounge">waypoint lounge</a></p>
        </div>
  
        <div class="streamBody">
          <div class="video-con">
            <iframe src="https://player.twitch.tv/?channel=yachtclubhq&parent=hdr.report" frameborder="1" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
          </div>
          <div class="video-con">
            <iframe src="https://player.twitch.tv/?channel=waypoint_lounge&parent=hdr.report" frameborder="1" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
          </div>
        </div>
  
        <div class="streamNamesContainer">
          <p id="rcStream" class="streamNames"><a target="_blank" href="https://www.twitch.tv/recupid">recupid</a></p>
          <p id="uwcStream" class="streamNames"><a target="_blank" href="https://www.twitch.tv/uwbothellsmashclub">uwbothellsmashclub</a></p>
        </div>
  
        <div class="streamBody">
          <div class="video-con">
            <iframe src="https://player.twitch.tv/?channel=recupid&parent=hdr.report" frameborder="1" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
          </div>
          <div class="video-con">
            <iframe src="https://player.twitch.tv/?channel=uwbothellsmashclub&parent=hdr.report" frameborder="1" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
          </div>
        </div>
  
        <div class="streamNamesContainer">
          <p id="dfwStream" class="streamNames"><a target="_blank" href="https://www.twitch.tv/dfw_esportsgg">dfw</a></p>
          <p id="kumaStream" class="streamNames"><a target="_blank" href="https://www.twitch.tv/kumatoraam">kumatora</a></p>
        </div>
  
        <div class="streamBody">
          <div class="video-con">
            <iframe src="https://player.twitch.tv/?channel=dfw_esportsgg&parent=hdr.report" frameborder="1" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
          </div>
          <div class="video-con">
            <iframe src="https://player.twitch.tv/?channel=kumatoraam&parent=hdr.report" frameborder="1" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
          </div>
        </div>
  
        <div class="streamNamesContainer">
          <p id="onStream" class="streamNames"><a target="_blank" href="https://www.twitch.tv/ONHDR">onhdr</a></p>
        </div>
  
        <div class="streamBody">
          <div class="video-con">
            <iframe src="https://player.twitch.tv/?channel=onhdr&parent=hdr.report" frameborder="1" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
          </div>
        </div>
      </div>
    `;
  
    streamsDesktop.innerHTML = htmlContent;
  });
  
  function loadScripts() {
    const streamsDesktop = document.getElementById('streamsDesktop');
// Check if the window width is less than or equal to 700px
if (window.innerWidth <= 700) {
// Add the "hidden" class to the streamsDesktop div
streamsDesktop.classList.remove('hidden');
} else {
console.log("Window width is greater than 700px, scripts not loaded.");
}
}
