import { useState } from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
export default function RemoveBackgroundSection() {
  const [active, setActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (active.key === key) {
      setActive({
        status: false,
      });
    } else {
      setActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <section
        className="layout-pt-sm layout-pb-lg sm:pb-30  comp"
        style={{ padding: "4rem" }}
      >
        <div className="container-fluid px-0 md:container md:px-20">
          <div className="row y-gap-48 items-center">
            <div className="col-xl-6 col-lg-5 order-lg-2 order-2 pt-30 sm:pt-50 order-sm-2">
              <div className="wow animate__animated animate__fadeIn">
                <div className="image-comparison">
                  <ImgComparisonSlider>
                    <img
                      className="rounded-8"
                      slot="first"
                      src="img\about-2\about\bg1.jpg"
                      style={{
                        height: "393px",
                        width: "490px",
                        maxWidth: "100%",
                        border: "0px",
                        objectFit:"fill", 
                      }}
                    />
                    <img
                      className="rounded-8"
                      slot="second"
                      src="img\about-2\about\rmbg1.jpg"
                      style={{
                        height: "393px",
                        width: "490px",
                        objectFit:"fill", 
                        maxWidth: "100%",
                        border: "0px",
                        opacity:""
                      }}
                    />
                  </ImgComparisonSlider>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-10 mb-80 sm:mb-0 order-1 order-lg-2 sm:px-20   " style={{alignItems:"end" ,paddingLeft:"4rem"}}>
              <div className="sectionHeading  ">
                <h2 className="sectionHeading__title">
                  Remove Background
                 
                </h2>
              </div>
              <p className="mt-30 sm:mt-20  lg:pr-0">
              Use AI algorithms to accurately isolate objects, shapes, hair, and fur. We prefer smooth edge refinement, ensuring your subject is flawlessly separated from the background.
              </p>

              <Link
                  to="/remove-background"
                  className="button -md rounded-8 -light-accent text-accent mt-20 "
                >
                  Remove Background
                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
