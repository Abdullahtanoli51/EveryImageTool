import React from "react";
import "./Hero.scss";
import Background from "../../../public/img/home-5//header/bg.png";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
const Hero1 = () => {
  return (
    <div style={{ color: "white" }} className="hero-banner">
      <div className="backdrop-img">
        <img src={Background}></img>
      </div>
      <section className="mast ">
      <div className="masthead__image absolute mt-60 ">
          <div className="atropos -no-shadow js-atropos">
            <div className="atropos-scale">
              <div className="atropos-rotate">
                <div className="atropos-inner overflow-visible d-flex justify-center items-center">
                  <img
                    className="initial-img  z-10"
                    src="/img/home-2/masthead/shapes.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 col-12 absolute-center z-10">
            
          </div>
        </div>
        
        <div className="pt-120 sm:pt-80">
          <div className="row pt-20 ">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="masthead__content relative z-2 ">
                <div data-split="lines ">
                  <h1 className="sectionHeading__title  fs-3x relative sm:fs-2 ">
                  Effortless Bulk Image Editing with AI Powered
                    <br className="lg:d-none" />  Image Artisan Tools

                  </h1>
                </div>
                <div data-split="px-120">
                  <p
                    className="masthead__text text-dark  pt-10 px-120 sm:px-40"
                    style={{ fontSize: "16px", lineHeight: "24px" }}
                  >
                  Discover Image Artisan, where cutting-edge AI meets intuitive design. Whether you're working with a single image or an entire batch, our platform has the tools you need. Dive in from any device, be it desktop or mobile, and watch your photos transform effortlessly.

                  </p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
        
       
      </section>
    </div>
  );
};

export default Hero1;
