import { useState } from "react";
import * as Icon from "react-feather";

export default function CreativeProcessOne() {
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
        className=" layout-pb-lg sm:py-0 "
        style={{ padding: "4rem" }}
      >
        <div className="container-fluid px-0 md:container md:px-20">
          <div className="row  items-center">
          <div className="col-xl-6 col-lg-5 order-lg-2 order-2 pt-30 sm:py-0 order-sm-2">
              <video
                autoPlay
                muted
                loop
                
                className="initial-video "
                style={{
                  height: "393px",
                  width: "490px",
                  maxWidth: "100%",
                  maxHeight: "100%",
                 
                }}
              >
                <source src="vedios\magic-retouch.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-10 mb-80 sm:mb-0 order-1 order-lg-2 sm:px-20" style={{paddingLeft:"4rem"}}>
              <div className="sectionHeading  ">
                <h2 className="sectionHeading__title">
                  Remove Objects
                 
                </h2>
              </div>
              <p className="mt-30 sm:mt-20  lg:pr-0">
                Change your background color or replace it with an image of your
                own. Customizing your pictures with emojis or simply add text to
                your image - it has never been easier! Check out our library of
                backgrounds and templates, if you want to get inspired.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
