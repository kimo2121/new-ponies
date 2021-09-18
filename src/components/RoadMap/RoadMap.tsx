import React, { useEffect } from "react";
import "./roadMap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header/Header";

const RoadMap: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div id="RoadMap" className="road-map">
      {/* <Header header="ROAD MAP" /> */}
      <Header header="RoadMap" />
      <div
        data-aos="fade-in"
        data-aos-duration="500"
        className="vertical-time-line"
      >
        <div className="inner-line left">
          <span className="vertical-divider web-v-divider"></span>
          <div className="percent left">Sept 2021</div>
          <div className="line-detail left">
            <h4>Poniez Season 1 Launch</h4>
          </div>
        </div>
        <div className="inner-line right">
          <div className="percent right">Nov 2021</div>
          <div className="line-detail right">
            <h4>The Poniez Need a Home</h4>
          </div>
        </div>
        <div className="inner-line left">
          <div className="percent left">Q1 2022</div>
          <div className="line-detail left">
            <h4>Poniez Season 2</h4>
          </div>
        </div>
        <div className="inner-line right">
          <div className="percent right">Q2 2022</div>
          <div className="line-detail right">
            <h4>Watch this space</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
