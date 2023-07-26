import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./assets/banner/img1.jpg";
import img2 from "./assets/banner/img2.jpg";
import img3 from "./assets/banner/img3.jpg";
import img4 from "./assets/banner/img4.jpg";
import img5 from "./assets/banner/img5.jpg";

const Home = () => {
  return (
      <div className="relative">
        <div className="absolute w-full h-52 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img loading="lazy" src={img1} alt="banner1" />
          </div>
          <div>
            <img loading="lazy" src={img2} alt="banner2" />
          </div>
          <div>
            <img loading="lazy" src={img3} alt="banner3" />
          </div>
          <div>
            <img loading="lazy" src={img4} alt="banner3" />
          </div>
          <div>
            <img loading="lazy" src={img5} alt="banner3" />
          </div>
        </Carousel>
      </div>
  );
};

export default Home;
