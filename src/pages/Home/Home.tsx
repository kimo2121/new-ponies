import React, { useEffect } from "react";
import "./home.css";
import Timer from "../../components/Timer/Timer";

import RoadMap from "../../components/RoadMap/RoadMap";
import OurTeam from "../../components/OurTeam/OurTeam";
import CustomizedAccordions from "../../components/FAQ/FAQ";
import banner from "../../assets/images/banner.png";

import AOS from "aos";
import "aos/dist/aos.css";
import Perks from "../../components/Perks/Perks";
import Header from "../../components/Header/Header";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="home">
      <div className="banner">
        <h1 data-aos="slide-right" data-aos-duration="500">
          Welcome to Trick Poniez
        </h1>
        <img src={banner} alt="" />
        <p data-aos="zoom-in" data-aos-duration="500">
          Welcome to The Poniez Union, the place to be if you are considering
          becoming a Poniez collector, already a seasoned Poniez connoisseur or
          anything in between.
        </p>
        <p data-aos="zoom-in" data-aos-duration="500">
          Lets get straight to the point, you are skeptical and wondering who
          are The Poniez and what is The Poniez Union? Another pixelated, cute,
          slightly fuzzy animal?! We know what you're thinking, we were thinking
          the same thing too. But then we thought more about it, pixels are fun
          and a nice reminder of the past when MS Paint was the app of choice,
          and ponies, well what’s not to like about ponies? So we sat down and
          started thinking, talking, imbibing, and having fun. What happened
          after, is now history. The Poniez were born!
        </p>
        <h3 data-aos="zoom-in" data-aos-duration="500">
          The Poniez are all about being inclusive, which is what the world
          needs right now. The team behind The Poniez also believes that not
          everyone is perfect, everyone makes mistakes and things do not need to
          be perfect all the time. That is reflected in The Poniez, they aren't
          perfect, in fact some are downright funny looking. These are not prize
          works of art. They are representative of the world we live in and how
          everyone is different and brings their own set of unique qualities to
          the world we live in
        </h3>
        <p data-aos="zoom-in" data-aos-duration="500">
          Looking a bit different, feeling different, sounding different, does
          not matter here. When you are a part of The Poniez Union, you are
          accepted no matter what. Well not exactly, we have no room at the
          union for hate in any form and it is not tolerated. So if you have
          strong feelings about certain people, groups, religions, orientations
          etc. then Poniez and the Union might not be for you. but everyone else
          come on in!
        </p>
        <p data-aos="zoom-in" data-aos-duration="500">
          Check out the FAQ below, it should answer most housekeeping questions
          related to the technical aspects, minting etc. The Poniez roadmap is
          also right below and it points out some fun milestones and plans for
          the future. Want to know a secret? The future looks better with Poniez
        </p>
      </div>
      {/* <About /> */}
      <Timer mintStartAt={1632466800} />
      <div className="faq-section">
        <Header header="FAQs" />
        <div className="question-container">
          <CustomizedAccordions />
        </div>
      </div>
      <RoadMap />
      <Perks />
      <OurTeam />
    </div>
  );
};

export default Home;
