import React from "react";

function NavBar() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: "\n      " }} />
      <div className="header-nav">
        <a href="index.html">
          <img
            className="plus-side-net-nav"
            src="https://github.com/pkzstar/HDReport/blob/main/images/logo-main.png?raw=true"
            alt="oops"
          />
        </a>
        <a
          className="twitter-link"
          href="https://twitter.com/HDRreport"
          target="_blank"
        >
          <img
            className="twitter-link"
            src="https://github.com/pkzstar/plus-side/blob/main/images/twitterlogo.png?raw=true"
          />
        </a>
        <a
          className="youtube-link"
          href="https://www.youtube.com/@HDRreport"
          target="_blank"
        >
          <img
            className="youtube-link"
            src="https://github.com/pkzstar/plus-side/blob/main/images/youtubelogo.png?raw=true"
          />
        </a>
        <section className="nav-text">
          <a href="/HDReport/index.html">
            <p id="navText">Events</p>
          </a>
          <a href="/HDReport/Articles.html">
            <p id="navText">Rankings</p>
          </a>
          <a href="/HDReport/Locals.html">
            <p id="navText">Locals</p>
          </a>
          <a href="/HDReport/Streams.html">
            <p id="navText">Streams</p>
          </a>
        </section>
      </div>
    </div>
  );
}

export default NavBar;
