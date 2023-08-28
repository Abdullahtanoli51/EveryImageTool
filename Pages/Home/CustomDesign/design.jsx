import { Link } from "react-router-dom";

export default function Reliability() {
    return (
        <>
            <section id="reliability" className="layout-pt-sm layout-pb-lg sm:py-0" style={{padding:"4rem"}}>
                <div className="">
                <div className="row ">
            <div className="col-xl-6 col-lg-7 col-md-10 order-lg-1 order-1">
              <div className="pr-48 lg:pr-0 pt-60 sm:pt-0">
                <div className="sectionHeading ">
                  <div className="sectionHeading__subtitle">
                    <span>Creative Vision</span>
                  </div>
                  <h2 className="sectionHeading__title ">
                  Collage maker
                  </h2>
                  <p className="sectionHeading__text mt-20">
                  Need to assemble photos on the fly? Create photo collages free online with our built-in pre-made collage templates. Just select a layout, upload images and start editing.
                  </p>
                </div>
                <Link
                  href="/about/about-1"
                  className="button -md rounded-8 -light-accent text-accent mt-20 sm:mb-60"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 order-lg-2 order-1 pt-30 ">
              <img
                className="initial-img rounded-16"
                src="img\about-1\about\collage-benefit-3.webp"
                alt="image "
                style={{ height: "393px" ,width:"510px",
                maxWidth:"100%",
                maxHeight:"100%",
                objectFit:"fit"
              
                
                
                 
              
              
              }}
              />
            </div>
          </div>
                </div>
            </section>
        </>
    );
};
