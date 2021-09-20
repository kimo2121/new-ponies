import React, { useEffect } from "react";
import "./disclaimer.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Disclaimer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      // duration: 1400,
    });
  }, []);
  return (
    <div className="disclaimer">
      <h1>Disclaimer</h1>
      <div
        data-aos="slide-left"
        data-aos-duration="800"
        className="inner-discalimer"
      >
        <p>
          <strong>Lorem Ipsum</strong>is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry’s standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
