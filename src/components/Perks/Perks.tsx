import React, { useEffect } from "react";
import "./perks.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header/Header";
const Perks: React.FC = () => {
  useEffect(() => {
    AOS.init({
      // duration: 1400,
    });
  }, []);
  return (
    <div className="perks">
      <Header header="Perks" />
      <div
        data-aos="slide-left"
        data-aos-duration="500"
        className="inner-perks"
      >
        <p>
          We have created a fun and unique collection of Poniez. To celebrate
          the launch of season 1 we have some fun perks for everyone involved
        </p>
        <h3>
          First 500 minted will be entered into a draw - 5 Poniez from 1-100
          will be airdropped to 5 lucky collectors at random!
        </h3>
        <h3>
          First 3000 minted - .5ETH will be awarded to 3 random holders within
          the first 3000 Poniez Minted
        </h3>
        <h3>
          Total Sell Out - Every collector with a Poniez NFT will be entered
          into a drawing at random for a grand total of 3 ETH
        </h3>
        <div className="perk-ranks">
          <p>1st Place- 2 ETH</p>
          <p>2nd Place- .75ETH</p>
          <p>3rd Place- .25ETH</p>
        </div>
        <p>
          Thats not all folks! Like we mentioned at the beginning, we want the
          Poniez community to thrive and flourish. Once you are a Poniez
          collector you will be automatically included in any future airdrops
          that we have planned(Hint: The Poniez will need some new sleeping
          arrangements at some point, they will get cold otherwise) We also will
          be releasing some Poniez trivia, hopefully some cool swag and have
          some really interesting games planned. Season 1 is just the beginning,
          The Poniez are ready for some new homes and new adventures
        </p>
      </div>
    </div>
  );
};

export default Perks;
