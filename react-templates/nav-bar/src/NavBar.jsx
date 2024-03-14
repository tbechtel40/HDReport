import React from "react";

function NavBar() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito"
        rel="stylesheet"
      />
      <title>HDReport</title>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://github.com/pkzstar/plus-side/blob/main/images/favicon.png?raw=true"
      />
      <link rel="stylesheet" href="style.css" />
      <style dangerouslySetInnerHTML={{ __html: "\n      " }} />
      <div className="header-nav">
        <a className="plus-side-net-nav" href="index.html">
          <img
            className="plus-side-net-nav"
            src="https://github.com/pkzstar/HDReport/blob/main/images/1500x500.png?raw=true"
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
          href="https://www.youtube.com/@PPlusSide/featured"
          target="_blank"
        >
          <img
            className="youtube-link"
            src="https://github.com/pkzstar/plus-side/blob/main/images/youtubelogo.png?raw=true"
          />
        </a>
        <section className="nav-text">
          <a href="index.html">
            <p id="navText">Events</p>
          </a>
          <a href="Articles.html">
            <p id="navText">Rankings</p>
          </a>
        </section>
      </div>
    </div>
  );
}

export default NavBar;
