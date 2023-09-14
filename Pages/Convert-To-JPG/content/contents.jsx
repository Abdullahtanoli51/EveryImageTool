import React from "react";
import { Link } from "react-router-dom";

const ToJPGcontents = () => {
  return (
    <div>
      <section className="layout-pt-sm layout-pb-sm bg-white">
        <div className="container">
          <div className="row y-gap-48  ">
            <div className="col-xl-5 col-lg-6">
              <img
                className="initial-img rounded-16"
                src="img\about-1\about\as.jpg"
                alt="image"
                style={{ height: "393px" }}
              />
            </div>
            <div className="col-xl-6 offset-xl-1 col-md-10 col-lg-6">
              <div className="sectionHeading ">
                <div className="sectionHeading__subtitle mt-40  sm:mt-0"></div>
                <h2 className="sectionHeading__title">Convert To JPG</h2>
              </div>
              <p className="mt-30 sm:mt-20  lg:pr-0 text-start ">
                Batch process multiple images, swiftly converting them to the
                widely-used JPG format with our AI-optimized tool. Great for
                large projects, web uploads, and consistent formatting. Save
                time while maintaining impeccable image integrity
              </p>
              <div className="mt-30">
                <Link
                  href="/services/services-3"
                  className="button -md -accent text-white -uppercase"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-sm layout-pb-sm bg-white ">
        <div className="container">
          <div className="row y-gap-48 justify-between ">
            <div className="col-xl-6 col-lg-6 col-md-10 order-lg-1 order-2">
              <div className="sectionHeading ">
                <h2 className="sectionHeading__title mt-60">
                  More free editing
                  <br /> options
                </h2>
              </div>
              <p className="mt-30 sm:mt-20  lg:pr-0 text-start">
                Change your background color or replace it with an image of your
                own. Customizing your pictures with emojis or simply add text to
                your image - it has never been easier! Check out our library of
                backgrounds and templates, if you want to get inspired.
              </p>
            </div>
            <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
              <img
                className="initial-img rounded-16"
                src="img\about-1\about\wo.jpg"
                alt="image "
                style={{ height: "393px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToJPGcontents;
