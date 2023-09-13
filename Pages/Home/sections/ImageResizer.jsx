import { Link } from "react-router-dom";
export default function ImageResizer() {
  return (
    <>
      <div
        className=" bg-white  "
        style={{ width: "100%", overflow: "hidden", padding: "4rem" }}
      >
        <div className=" ">
          <div className="row ">
            <div className="col-xl-6 col-lg-7 col-md-10 order-lg-1 order-2">
              <div className="pr-48 lg:pr-0">
                <div className="sectionHeading ">
                  <div className="sectionHeading__subtitle">
                   
                  </div>
                  <h2 className="sectionHeading__title pt-60">
                    Resize Images
                  </h2>
                  <p className="sectionHeading__text mt-20">
                   Image Resizer is a tool designed to swiftly resize your images. It offers efficient bulk image resizing while ensuring 100% image quality.

                  </p>
                </div>
                <Link
                  to="/image-resizer"
                  className="button -md rounded-8 -light-accent text-accent mt-20 "
                >
                    Resize Image
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 order-lg-2 order-2 pt-30 sm:pt-0 order-sm-2">
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
                <source src="vedios\background-remover.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
