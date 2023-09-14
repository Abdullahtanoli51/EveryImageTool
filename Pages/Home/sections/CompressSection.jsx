import { useState } from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

export default function CompressSection() {
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
      <section className=" layout-pb-lg sm:py-0 " style={{ padding: "4rem" }}>
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
            <div
              className="col-xl-6 col-lg-6 col-md-10 mb-80 sm:mb-0 order-1 order-lg-2 sm:px-20"
              style={{ paddingLeft: "4rem" }}
            >
              <div className="sectionHeading  ">
                <h2 className="sectionHeading__title">Bulk Image Compressor</h2>
              </div>
              <p className="mt-30 sm:mt-20  lg:pr-0 text-start ">
                Introducing 'Bulk Image Compressor' by Image Artisan. Optimize
                and reduce file sizes of multiple images in a flash without
                compromising on quality.
                <br></br>
                Perfect for faster web loading, email attachments, and saving
                storage space. Streamline your visuals, maintaining clarity and
                detail.
              </p>
              <Link
                to="/image-compressor"
                className="button -md rounded-8 -light-accent text-accent mt-20 "
              >
                Bulk Image Compressor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
