import React, { useEffect } from "react";
import "./ourTeam.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header/Header";
const OurTeam: React.FC = () => {
  useEffect(() => {
    AOS.init({
      // duration: 1400,
    });
  }, []);
  return (
    <div id="Team" className="our-team">
      <Header header="Meet Our Team" />
      <p data-aos="zoom-in" data-aos-duration="500">
        The Poniez are a cool, inclusive, and a very worldwide bunch. Much like
        the team involved in bringing them to you now. The Poniez team is
        comprised of a few people here and a few people there. The US, the UK,
        Southeast Asia, like we said at the start..a worldwide bunch :)
      </p>
      <p data-aos="zoom-in" data-aos-duration="500">
        The Poniez Commander in Chief is the guy who has brought it all
        together. Feel free to reach out to him on Twitter or email him
        poniezcommander@poniezunion.com. He will also be available within any
        future communities as soon as they are running
      </p>
      <p data-aos="zoom-in" data-aos-duration="500">
        The Poniez team has lots of experience in many online spaces, from all
        areas of the web. What we can tell you confidently, is that the artists
        and developers involved in The Poniez project are very good at what they
        do and have loved working on Poniez and are excited for what the future
        holds
      </p>
      <p data-aos="zoom-in" data-aos-duration="500">
        The Poniez Commander did not start his life out planning to be the
        Poniez Commander, it just happened that way. Someone needed to step up
        and be the Poniez Commander in Chief, its a tough job but someone has to
        do it. As the commander says, the future looks bright, but its brighter
        with Poniez
      </p>
      <p data-aos="zoom-in" data-aos-duration="500">
        P.S. Watch this space, the commander is talking with a few artists who
        want to be a part of season 2 already. Guest artists will be hopping in
        here and there and season one collectors are the prime targets for guest
        artist airdrops
      </p>
    </div>
  );
};

export default OurTeam;
