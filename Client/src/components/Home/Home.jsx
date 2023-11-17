import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="homeContainer">
      <div className="homeSectionA">
        <div className="homeBackVid">
          <div className="homeBackLogo"></div>
          <video
            id="home-bg-A"
            autoPlay
            loop
            muted
            src="https://www.leagueoflegends.com/static/hero-c35bd03ceaa5f919e98b20c905044a3d.webm"
            type="video/mp4"
          ></video>
        </div>
        <div className="homeFrontVidWrap">
          <div className="homeFrontVid">
            <video
              id="frontVid"
              autoPlay
              loop
              muted
              src="https://www.leagueoflegends.com/static/hero-c35bd03ceaa5f919e98b20c905044a3d.webm"
              type="video/mp4"
            ></video>
          </div>
          <div className="homeFrontVidFrame">
            <div className="homeFrontLogo"></div>
          </div>
        </div>
        <div className="homeSectionABottom"></div>
      </div>
      {/* <Map /> */}
      <Footer />
    </div>
  );
}

export default Home;
