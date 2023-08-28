import { Row ,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function ExploreTools() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when it loads
  }, []);
    return (
        <>
            <section className="   layout-pb-sm bg-white">
                <div className="container">
                    <div className="row justify-center pb-50">
                        <div className="col text-center">
                            <div className="sectionHeading ">
                                
                                <h2 className="sectionHeading__title">Explore Our Free Tools</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row   y-gap-16 sm:px-80 " >
        <div className="col-lg-3 col-md-6 col-sm-10 ">
          <Link
            to ="/compress"
            className="d-block  bg-dark  shadow-card decoration-none rounded-8"
            style={{
              background: "#444444 ",
              height: "147px",
              width: "240px",
            }}
          >
            <Row className="ratio ratio-37:25 rounded-8 ">
              <Col>
                <img
                  className="absolute-full-center object-fit-cover  pt-12 "
                  src="img\about-1\about\Video_Compressor_e61b0ca70a.webp"
                  alt="image"
                  style={{
                    borderRadius: "0 0 80px 0",
                    width: "210px",
                    height: "110px",
                    left: "30px",
                  }}
                />
              </Col>
              <Col>
                <span
                  class="icon "
                  style={{
                    position: "absolute",
                    bottom: "52px",
                    left: "218px",
                  }}
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="white"
                    height="24"
                    width="24"
                    strokeWidth={2}
                  >
                    <path d="M326 664H104c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h174v176c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V696c0-17.7-14.3-32-32-32zm16-576h-48c-8.8 0-16 7.2-16 16v176H104c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h222c17.7 0 32-14.3 32-32V104c0-8.8-7.2-16-16-16zm578 576H698c-17.7 0-32 14.3-32 32v224c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V744h174c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm0-384H746V104c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v224c0 17.7 14.3 32 32 32h222c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16z" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                    Compress
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link
            to="/resize"
            className="d-block  bg-dark  shadow-card decoration-none rounded-8"
            style={{
              background: "#444444 ",
              height: "147px",
              width: "240px",
            }}
          >
            <Row className="ratio ratio-37:25 rounded-8 ">
              <Col>
                <img
                  className="absolute-full-center object-fit-cover  pt-12 "
                  src="img\about-1\about\images (5).jpg"
                  alt="image"
                  style={{
                    borderRadius: "0 0 80px 0",
                    width: "210px",
                    height: "110px",
                    left: "30px",
                  }}
                />
              </Col>
              <Col>
                <span
                  class="icon "
                  style={{
                    position: "absolute",
                    bottom: "52px",
                    left: "218px",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="white" height="24" width="24">
                    <path d="M10.59 12l4-4H11V6h7v7h-2V9.41l-4 4V16h8V4H8v8h2.59M22 2v16H12v4H2V12h4V2h16M10 14H4v6h6v-6z" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>Resize</p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link
            to="/ConvertToJPG"
            className="d-block  bg-dark  shadow-card decoration-none rounded-8"
            style={{
              background: "#444444 ",
              height: "147px",
              width: "240px",
            }}
          >
            <Row className="ratio ratio-37:25 rounded-8 ">
              <Col>
                <img
                  className="absolute-full-center object-fit-cover  pt-12 "
                  src="img\about-1\about\download (6).jpg"
                  alt="image"
                  style={{
                    borderRadius: "0 0 80px 0",
                    width: "210px",
                    height: "110px",
                    left: "30px",
                  }}
                />
              </Col>
              <Col>
                <span
                  class="icon "
                  style={{
                    position: "absolute",
                    bottom: "52px",
                    left: "217px",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="white" height="24" width="24">
                    <path d="M12 0l-.66.03 3.81 3.81L16.5 2.5c3.25 1.57 5.59 4.74 5.95 8.5h1.5C23.44 4.84 18.29 0 12 0m0 4c-1.93 0-3.5 1.57-3.5 3.5S10.07 11 12 11s3.5-1.57 3.5-3.5S13.93 4 12 4M.05 13C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81L7.5 21.5c-3.25-1.56-5.59-4.74-5.95-8.5H.05M12 13c-3.87 0-7 1.57-7 3.5V18h14v-1.5c0-1.93-3.13-3.5-7-3.5z" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                    Convert to JPG
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link
            to="/Crop"
            className="d-block  bg-dark  shadow-card decoration-none rounded-8"
            style={{
              background: "#444444 ",
              height: "147px",
              width: "240px",
            }}
          >
            <Row className="ratio ratio-37:25 rounded-8 ">
              <Col>
                <img
                  className="absolute-full-center object-fit-cover  pt-12 "
                  src="img\about-1\about\video-editing-7030355_1280.jpg"
                  alt="image"
                  style={{
                    borderRadius: "0 0 80px 0",
                    width: "210px",
                    height: "110px",
                    left: "30px",
                  }}
                />
              </Col>
              <Col>
                <span
                  class="icon "
                  style={{
                    position: "absolute",
                    bottom: "52px",
                    left: "218px",
                  }}
                >
                  <svg
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="23"
                    width="23"
                  >
                    <path d="M6 2v14a2 2 0 002 2h14" />
                    <path d="M18 22V8a2 2 0 00-2-2H2" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>Crop</p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
      </div>
                </div>
            </section>
        </>
    );
};
