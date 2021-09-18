import React, { useEffect } from "react";
import "./about.css";
import flyingUnicorn from "../../assets/images/flyingUnicorn.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      // duration: 1400,
    });
  }, []);
  return (
    <div className="about">
      <h1>About Trick Ponies</h1>
      <div className="parag-container">
        <div className="inner-about">
          <p data-aos="slide-right" data-aos-duration="800">
            <strong>Lorem Ipsum is simply dummy text</strong> of the printing
            and typesetting industry. Lorem Ipsum has been the industry’s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries. more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <div data-aos="slide-left" data-aos-duration="800">
            <img src={flyingUnicorn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
