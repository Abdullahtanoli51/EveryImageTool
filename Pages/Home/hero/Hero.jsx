import React from "react";
import "./Hero.scss";
import Background from "../../../public/img/home-3/masthead/bg6.jpg";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
const Hero = () => {
  return ( 
   
    <div style={{ color: "white" }} className="hero-banner" >
      <div className="backdrop-img">
        <img src={Background}></img>
      </div>
      <section className="mast " >
       
        <div className="pt-120 sm:pt-30">
          <div className="row y-gap-64">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="masthead__content relative z-2 ">
                <div data-split="lines  ">
                  <h1
                    className="masthead__heading text-dark relative sm:fs-1"
                    style={{ fontSize: "40px" }}
                  >
                    Elevate Your Image With These Bulk 
                    <br className="lg:d-none" /> Image Tools Wizards
                  </h1>
                </div>
                <div data-split="px-120" >
                  <p className="masthead__text text-dark  pt-10 px-120" style={{fontSize:"16px" ,lineHeight:"24px"}}>
                    We are Pixlr, free photo editing and design tools with
                    AI-power. Edit photos and create stunning designs right in
                    your browser, on your phone or desktop for free. Start from
                    an empty canvas, a photo.
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

export default Hero;
