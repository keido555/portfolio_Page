import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      //   autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div className="mt-24">
        <div className="mt-10 text-center">
          <p>Introduction</p>
          <h2 className="text-4xl">自己紹介</h2>
          <div className="mx-auto h-1 w-24 bg-cyan-400"></div>
        </div>
        <div className="mt-8 flex justify-center">
          <div style={{ width: "calc(100% - 50px)" }}>
            <Slider {...settings}>
              <div className=" h-36 w-8 bg-cyan-300">
                <h3 className="text-center">1</h3>
              </div>
              <div className=" h-36 w-8 bg-cyan-400">
                <h3 className="text-center">2</h3>
              </div>
              <div className=" h-36 w-8 bg-cyan-500">
                <h3 className="text-center">3</h3>
              </div>
              <div className=" h-36 w-8 bg-cyan-600">
                <h3 className="text-center">4</h3>
              </div>
              <div className=" h-36 w-8 bg-cyan-700">
                <h3 className="text-center">5</h3>
              </div>
              <div className=" h-36 w-8 bg-cyan-800">
                <h3 className="text-center">6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
