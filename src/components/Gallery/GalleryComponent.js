import React, { Component } from "react";
import DztImageGalleryComponent from "reactjs-image-gallery";
import "./gallery.css";
import firstUnicorn from "../../assets/images/firstUnicorn.png";
import secondUnicorn from "../../assets/images/secondUnicorn.png";
import thirdUnicorn from "../../assets/images/thirdUnicorn.png";
import fourthUnicorn from "../../assets/images/firstUnicorn.png";
class Example extends Component {
  render() {
    let data = [
      {
        url: "https://i.ibb.co/fCGL9Wh/Untitled-design-5.png",
        thumbUrl: "https://i.ibb.co/dcRdFBf/first-Unicorn.png",
      },
      {
        url: "https://i.ibb.co/xmfzSQ3/Untitled-design-6.png",
        thumbUrl: "https://i.ibb.co/9tTv9Mx/second-Unicorn.png",
      },
      {
        url: "https://i.ibb.co/bB8QdLY/unicorn.png",
        thumbUrl: "https://i.ibb.co/LJbzVY3/third-Unicorn.png",
      },
      {
        url: "https://i.ibb.co/3vL86ZK/Untitled-design-4.png",
        thumbUrl: "https://i.ibb.co/6JY6wyN/fourth-Unicorn.png",
      },
    ];

    return (
      <div className="inner-gallery">
        <DztImageGalleryComponent images={data} />
      </div>
    );
  }
}
export default Example;
