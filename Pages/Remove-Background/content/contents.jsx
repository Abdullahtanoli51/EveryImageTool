import React from "react";
import { Link } from "react-router-dom";
import RemoveBackgroundSection from "../../Home/sections/RemoveBackgroundSection";

const RemoveBGContents = () => {
  return (
    <div>
     <RemoveBackgroundSection></RemoveBackgroundSection>
      <section className="layout-pt-sm layout-pb-sm bg-white ">
        <div className="container">
          <div className="row y-gap-48 justify-between">
            <div className="col-xl-6 col-lg-6 col-md-10 order-lg-1 order-2">
              <div className="sectionHeading mt-60 sm:mt-0 ">
               
                <h2 className="sectionHeading__title ">
                Add Transparent Background
                </h2>
              </div>
              <p className="mt-30 sm:mt-20  lg:pr-0">
              Change your background color or replace it with an image of your own. Customizing your pictures with emojis or simply add text to your image - it has never been easier! Check out our library of backgrounds and templates, if you want to get inspired.
              </p>
            </div>
            <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
              <img
                className="initial-img rounded-16"
                src="img\about-1\about\wo.jpg"
                alt="image "
                style={{height:"393px"
           }}
                
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemoveBGContents;
