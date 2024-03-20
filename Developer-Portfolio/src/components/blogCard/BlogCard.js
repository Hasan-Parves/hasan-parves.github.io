import React from "react";
import "./BlogCard.css";
import { Fade } from "react-reveal";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function BlogCard({ blog }) {
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  const GetBullets = ({ bullets }) => {
    return bullets ? bullets.map((item) => <li className="blog-SubTitle">{item}</li>) : null
  };

  const GetImages = ({ images }) => {
    return images ? 
    <Carousel autoPlay infiniteLoop interval={5000} showStatus={true} showIndicators={false} showThumbs={false}>
              {/* Assuming blog.images is an array of image URLs */}
              {/* <GetImages images ={blog.images} /> */}
              {images.map((image, index) => (
                <div key={index}>
                <img src={image} alt={``} style={{ height: '700px', objectFit: 'contain'}} />
                </div>
              ))}
            </Carousel>
    : null
  };


  return (
    //<Fade bottom duration={1000} distance="20px">
      <div>
        <div
          className="blog-container"
          onClick={() => openUrlInNewTab(blog.url)}
        >
          <a className="blog-card" href="#blog">
          <div className="blog-carousel-container">
          <GetImages images ={blog.images} />
            </div>
            <div className="blog-details"> 
              <h3 className="blog-title">{blog.title}</h3>
              <p className="small">{blog.description}</p>
              <p style={{fontWeight: 'bold'}}>Main Challenges</p>
              <ul>
                <GetBullets bullets ={blog.mainChallenges} />
            </ul>
            </div>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
      </div>
    //</Fade>
  );
}
