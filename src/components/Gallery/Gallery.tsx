import React from "react";
import "./gallery.css";
import Example from "./GalleryComponent";

const Gallery: React.FC = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="inner-gallery">
        <Example />
      </div>
    </div>
  );
};

export default Gallery;
