import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./tools.scss";

const Tools = () => {
  return (
    <div
      className="tools-section  relative sm:pb-20"
      style={{ padding: "4rem" }}
    >
      <div className="row sm:px-30 sm:py-10 y-gap-16   px-120 ">
        <div className="col-lg-3 col-md-6">
          <Link
            to="/remove-background"
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
                  src="img\about-1\about\images (6).jpg"
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
                  <svg viewBox="0 0 24 24" fill="white" height="26" width="26">
                    <path d="M12.48 3L7.73 7.75 3 12.59a2 2 0 000 2.82l4.3 4.3A1 1 0 008 20h12v-2h-7l7.22-7.22a2 2 0 000-2.83L15.31 3a2 2 0 00-2.83 0zM8.41 18l-4-4 4.75-4.84.74-.75 4.95 4.95-4.56 4.56-.07.08z" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                    Remove Background
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-10  ">
          <Link
            to="/replace-background"
            className="d-block  bg-dark  shadow-card card1 decoration-none rounded-8"
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
                    Replace Background
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6">
          <Link
            to="/convert-to-jpg"
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
            to="/convert-from-jpg"
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
                  src="img\about-1\about\images (8).jpg"
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
                    Convert From JPG
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
      </div>
      <div className="row y-gap-16 sm:py-10  sm:px-30 px-120 ">
        <div className="col-lg-3 col-md-6">
          <Link
            to="/convert-to-png"
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
                  src="public\img\about-1\about\images (8).jpg"
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
                  <svg viewBox="0 0 24 24" fill="white" height="26" width="26 ">
                    <path d="M14 8.5a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5A1.5 1.5 0 0014 8.5m0 4a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5M10 17a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0-8.5A1.5 1.5 0 008.5 10a1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5A1.5 1.5 0 0010 8.5m4 12a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5m0-3.5a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m7-3.5a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5M18 5a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0 4a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0 8a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0-4a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m-8-.5A1.5 1.5 0 008.5 14a1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5M10 7a1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1 1 1 0 001 1m0-3.5a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5.5.5 0 00.5.5m0 17a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5m-7-7a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5m11-10a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5.5.5 0 00.5.5M14 7a1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1 1 1 0 001 1m7 3.5a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5.5.5 0 00.5.5M6 5a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1M3 9.5a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5M6 9a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0 8a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0-4a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1z" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                    Convert To PNG
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link
            to="/convert-to-webp"
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
                  src="img\about-1\about\images (8).jpg"
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
                  <svg viewBox="0 0 24 24" fill="white" height="26" width="26 ">
                    <path d="M14 8.5a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5A1.5 1.5 0 0014 8.5m0 4a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5M10 17a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0-8.5A1.5 1.5 0 008.5 10a1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5A1.5 1.5 0 0010 8.5m4 12a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5m0-3.5a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m7-3.5a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5M18 5a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0 4a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0 8a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0-4a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m-8-.5A1.5 1.5 0 008.5 14a1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5M10 7a1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1 1 1 0 001 1m0-3.5a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5.5.5 0 00.5.5m0 17a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5m-7-7a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5m11-10a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5.5.5 0 00.5.5M14 7a1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1 1 1 0 001 1m7 3.5a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5.5.5 0 00.5.5M6 5a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1M3 9.5a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5M6 9a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0 8a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0-4a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1z" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                    Convert To WEBP
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link
            to="/image-resizer"
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
        <div className="col-lg-3 col-md-6 col-sm-10  ">
          <Link
            to="/image-compressor"
            className="d-block  bg-dark  shadow-card card1 decoration-none rounded-8"
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
      </div>

      <div className="row y-gap-16 sm:px-30 px-120">
        <div className="col-lg-3 col-md-6">
          <Link
            to="/profile-image-maker"
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
                  src="img\about-1\about\download (8).jpg"
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
                  <svg viewBox="0 0 24 24" fill="white" height="26" width="26 ">
                    <path d="M14 8.5a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5A1.5 1.5 0 0014 8.5m0 4a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5M10 17a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0-8.5A1.5 1.5 0 008.5 10a1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5A1.5 1.5 0 0010 8.5m4 12a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5m0-3.5a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m7-3.5a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5M18 5a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0 4a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0 8a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0-4a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m-8-.5A1.5 1.5 0 008.5 14a1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5 1.5 1.5 0 00-1.5-1.5M10 7a1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1 1 1 0 001 1m0-3.5a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5.5.5 0 00.5.5m0 17a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5m-7-7a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5m11-10a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5.5.5 0 00.5.5M14 7a1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1 1 1 0 001 1m7 3.5a.5.5 0 00.5-.5.5.5 0 00-.5-.5.5.5 0 00-.5.5.5.5 0 00.5.5M6 5a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1M3 9.5a.5.5 0 00-.5.5.5.5 0 00.5.5.5.5 0 00.5-.5.5.5 0 00-.5-.5M6 9a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0 8a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m0-4a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1z" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                    Profile Image Maker
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6">
          <Link
            to="/watermark-image"
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
                  src="img\about-1\about\images (9).jpg"
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
                  <svg viewBox="0 0 24 24" fill="white" height="23" width="23">
                    <path d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2m0 16h-9v-6h9v6z" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                    Watermark Image
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <div
            className="d-block bg-dark shadow-card decoration-none rounded-8 position-relative"
            style={{
              background: "#444444",
              height: "147px",
              width: "240px",
            }}
          >
            {/* Blur overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100 blur-overlay"
              style={{
                backdropFilter: "blur(4px)", // Add the blur effect here
                zIndex: 1, // Set it above other content
              }}
            ></div>

            <Link className="text-white text-decoration-none">
              <Row className="ratio ratio-37:25 rounded-8">
                <Col>
                  <img
                    className="absolute-full-center object-fit-cover pt-12"
                    src="img\about-1\about\images (12).jpg"
                    alt="image"
                    style={{
                      borderRadius: "0 0 80px 0",
                      width: "210px",
                      height: "110px",
                      left: "30px",
                    }}
                  />
                </Col>
                <p
                  className="text-white "
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    top: "56px",
                    paddingLeft: "27px",
                    zIndex: "1",
                  }}
                >
                  Coming Soon
                </p>

                <Col>
                  <span
                    className="icon"
                    style={{
                      position: "absolute",
                      bottom: "52px",
                      left: "218px",
                    }}
                  >
                    <svg
                      fill="white"
                      viewBox="0 0 16 16"
                      height="24"
                      width="22"
                    >
                      {/* SVG Path */}
                    </svg>
                  </span>
                </Col>

                {/* "Coming Soon" text */}
                <div
                  className="d-flex justify-center items-start absolute-full-center pt-80"
                  style={{
                    zIndex: 2, // Set it above the blur overlay
                  }}
                >
                  <div className="py-4 ">
                    <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                      Blur faces
                    </p>
                  </div>
                </div>
              </Row>
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div
            className="d-block bg-dark shadow-card decoration-none rounded-8 position-relative"
            style={{
              background: "#444444",
              height: "147px",
              width: "240px",
            }}
          >
            {/* Blur overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100 blur-overlay"
              style={{
                backdropFilter: "blur(4px)", // Add the blur effect here
                zIndex: 1, // Set it above other content
              }}
            ></div>

            <Link className="text-white text-decoration-none">
              <Row className="ratio ratio-37:25 rounded-8">
                <Col>
                  <img
                    className="absolute-full-center object-fit-cover pt-12"
                    src="img\about-1\about\images (12).jpg"
                    alt="image"
                    style={{
                      borderRadius: "0 0 80px 0",
                      width: "210px",
                      height: "110px",
                      left: "30px",
                    }}
                  />
                </Col>
                <p
                  className="text-white "
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    top: "56px",
                    paddingLeft: "27px",
                    zIndex: "1",
                  }}
                >
                  Coming Soon
                </p>

                <Col>
                  <span
                    className="icon"
                    style={{
                      position: "absolute",
                      bottom: "52px",
                      left: "218px",
                    }}
                  >
                    <svg
                      fill="white"
                      viewBox="0 0 16 16"
                      height="24"
                      width="22"
                    >
                      {/* SVG Path */}
                    </svg>
                  </span>
                </Col>

                {/* "Coming Soon" text */}
                <div
                  className="d-flex justify-center items-start absolute-full-center pt-80"
                  style={{
                    zIndex: 2, // Set it above the blur overlay
                  }}
                >
                  <div className="py-4 ">
                    <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                      Circle Crop
                    </p>
                  </div>
                </div>
              </Row>
            </Link>
          </div>
        </div>
      </div>

      <div className="row y-gap-16 sm:px-30 px-120">
        <div className="col-lg-3 col-md-6">
          <div
            className="d-block bg-dark shadow-card decoration-none rounded-8 position-relative"
            style={{
              background: "#444444",
              height: "147px",
              width: "240px",
            }}
          >
            {/* Blur overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100 blur-overlay"
              style={{
                backdropFilter: "blur(4px)", // Add the blur effect here
                zIndex: 1, // Set it above other content
              }}
            ></div>

            <Link className="text-white text-decoration-none">
              <Row className="ratio ratio-37:25 rounded-8">
                <Col>
                  <img
                    className="absolute-full-center object-fit-cover pt-12"
                    src="img\about-1\about\images (6).jpg"
                    alt="image"
                    style={{
                      borderRadius: "0 0 80px 0",
                      width: "210px",
                      height: "110px",
                      left: "30px",
                    }}
                  />
                </Col>
                <p
                  className="text-white "
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    top: "56px",
                    paddingLeft: "27px",
                    zIndex: "1",
                  }}
                >
                  Coming Soon
                </p>

                <Col>
                  <span
                    className="icon"
                    style={{
                      position: "absolute",
                      bottom: "52px",
                      left: "218px",
                    }}
                  >
                    <svg
                      fill="white"
                      viewBox="0 0 16 16"
                      height="24"
                      width="22"
                    >
                      {/* SVG Path */}
                    </svg>
                  </span>
                </Col>

                {/* "Coming Soon" text */}
                <div
                  className="d-flex justify-center items-start absolute-full-center pt-80"
                  style={{
                    zIndex: 2, // Set it above the blur overlay
                  }}
                >
                  <div className="py-4 ">
                    <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                      Collage Maker
                    </p>
                  </div>
                </div>
              </Row>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div
            className="d-block bg-dark shadow-card decoration-none rounded-8 position-relative"
            style={{
              background: "#444444",
              height: "147px",
              width: "240px",
            }}
          >
            {/* Blur overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100 blur-overlay"
              style={{
                backdropFilter: "blur(4px)", // Add the blur effect here
                zIndex: 1, // Set it above other content
              }}
            ></div>

            <Link className="text-white text-decoration-none">
              <Row className="ratio ratio-37:25 rounded-8">
                <Col>
                  <img
                    className="absolute-full-center object-fit-cover pt-12"
                    src="img\about-1\about\downloa22.jpg"
                    alt="image"
                    style={{
                      borderRadius: "0 0 80px 0",
                      width: "210px",
                      height: "110px",
                      left: "30px",
                    }}
                  />
                </Col>
                <p
                  className="text-white "
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    top: "56px",
                    paddingLeft: "27px",
                    zIndex: "1",
                  }}
                >
                  Coming Soon
                </p>

                <Col>
                  <span
                    className="icon"
                    style={{
                      position: "absolute",
                      bottom: "52px",
                      left: "218px",
                    }}
                  >
                    <svg
                      fill="white"
                      viewBox="0 0 16 16"
                      height="24"
                      width="22"
                    >
                      {/* SVG Path */}
                    </svg>
                  </span>
                </Col>

                {/* "Coming Soon" text */}
                <div
                  className="d-flex justify-center items-start absolute-full-center pt-80"
                  style={{
                    zIndex: 2, // Set it above the blur overlay
                  }}
                >
                  <div className="py-4 ">
                    <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                      Upscale Image
                    </p>
                  </div>
                </div>
              </Row>
            </Link>
          </div>
        </div>
      </div>

      <div className="row y-gap-16  sm:py-10 sm:px-30 px-120">
        {/* <div className="col-lg-3 col-md-6">
          <div
            className="d-block bg-dark shadow-card decoration-none rounded-8 position-relative"
            style={{
              background: "#444444",
              height: "147px",
              width: "240px",
            }}
          >
          
            <div
              className="position-absolute top-0 start-0 w-100 h-100 blur-overlay"
              style={{
                backdropFilter: "blur(4px)", // Add the blur effect here
                zIndex: 1, // Set it above other content
              }}
            ></div>

            <Link className="text-white text-decoration-none">
              <Row className="ratio ratio-37:25 rounded-8">
                <Col>
                  <img
                    className="absolute-full-center object-fit-cover pt-12"
                    src="img\about-1\about\klk.png"
                    alt="image"
                    style={{
                      borderRadius: "0 0 80px 0",
                      width: "210px",
                      height: "110px",
                      left: "30px",
                    }}
                  />
                </Col>
                <p
                  className="text-white "
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    top: "56px",
                    paddingLeft: "27px",
                    zIndex: "1",
                  }}
                >
                  Coming Soon
                </p>

                <Col>
                  <span
                    className="icon"
                    style={{
                      position: "absolute",
                      bottom: "52px",
                      left: "218px",
                    }}
                  >
                    <svg
                      fill="white"
                      viewBox="0 0 16 16"
                      height="24"
                      width="22"
                    >
                     
                    </svg>
                  </span>
                </Col>

               
                <div
                  className="d-flex justify-center items-start absolute-full-center pt-80"
                  style={{
                    zIndex: 2, // Set it above the blur overlay
                  }}
                >
                  <div className="py-4 ">
                    <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                      Meme Generator
                    </p>
                  </div>
                </div>
              </Row>
            </Link>
          </div>
        </div> */}

        {/* <div className="col-lg-3 col-md-6">
          <div
            className="d-block bg-dark shadow-card decoration-none rounded-8 position-relative"
            style={{
              background: "#444444",
              height: "147px",
              width: "240px",
            }}
          >
          
            <div
              className="position-absolute top-0 start-0 w-100 h-100 blur-overlay"
              style={{
                backdropFilter: "blur(4px)", // Add the blur effect here
                zIndex: 1, // Set it above other content
              }}
            ></div>

            <Link className="text-white text-decoration-none">
              <Row className="ratio ratio-37:25 rounded-8">
                <Col>
                  <img
                    className="absolute-full-center object-fit-cover pt-12"
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
                <p
                  className="text-white "
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    top: "56px",
                    paddingLeft: "27px",
                    zIndex: "1",
                  }}
                >
                  Coming Soon
                </p>

                <Col>
                  <span
                    className="icon"
                    style={{
                      position: "absolute",
                      bottom: "52px",
                      left: "218px",
                    }}
                  >
                    <svg
                      fill="white"
                      viewBox="0 0 16 16"
                      height="24"
                      width="22"
                    >
                    
                    </svg>
                  </span>
                </Col>

               
                <div
                  className="d-flex justify-center items-start absolute-full-center pt-80"
                  style={{
                    zIndex: 2, // Set it above the blur overlay
                  }}
                >
                  <div className="py-4 ">
                    <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                      Rotate Image
                    </p>
                  </div>
                </div>
              </Row>
            </Link>
          </div>
        </div> */}
        {/* <div className="col-lg-3 col-md-6">
          <div
            className="d-block bg-dark shadow-card decoration-none rounded-8 position-relative"
            style={{
              background: "#444444",
              height: "147px",
              width: "240px",
            }}
          >
           
            <div
              className="position-absolute top-0 start-0 w-100 h-100 blur-overlay"
              style={{
                backdropFilter: "blur(4px)", // Add the blur effect here
                zIndex: 1, // Set it above other content
              }}
            ></div>

            <Link className="text-white text-decoration-none">
              <Row className="ratio ratio-37:25 rounded-8">
                <Col>
                  <img
                    className="absolute-full-center object-fit-cover pt-12"
                    src="img\about-1\about\images (11).jpg"
                    alt="image"
                    style={{
                      borderRadius: "0 0 80px 0",
                      width: "210px",
                      height: "110px",
                      left: "30px",
                    }}
                  />
                </Col>
                <p
                  className="text-white "
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    top: "56px",
                    paddingLeft: "27px",
                    zIndex: "1",
                  }}
                >
                  Coming Soon
                </p>

                <Col>
                  <span
                    className="icon"
                    style={{
                      position: "absolute",
                      bottom: "52px",
                      left: "218px",
                    }}
                  >
                    <svg
                      fill="white"
                      viewBox="0 0 16 16"
                      height="24"
                      width="22"
                    >
                     
                    </svg>
                  </span>
                </Col>

             
                <div
                  className="d-flex justify-center items-start absolute-full-center pt-80"
                  style={{
                    zIndex: 2, // Set it above the blur overlay
                  }}
                >
                  <div className="py-4 ">
                    <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                      Html To Image
                    </p>
                  </div>
                </div>
              </Row>
            </Link>
          </div>
        </div> */}
        {/* <div className="col-lg-3 col-md-6">
          <div
            className="d-block bg-dark shadow-card decoration-none rounded-8 position-relative"
            style={{
              background: "#444444",
              height: "147px",
              width: "240px",
            }}
          >

            <div
              className="position-absolute top-0 start-0 w-100 h-100 blur-overlay"
              style={{
                backdropFilter: "blur(4px)",
                zIndex: 1, 
              }}
            ></div>

            <Link className="text-white text-decoration-none">
              <Row className="ratio ratio-37:25 rounded-8">
                <Col>
                  <img
                    className="absolute-full-center object-fit-cover pt-12"
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
                <p
                  className="text-white "
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    top: "56px",
                    paddingLeft: "27px",
                    zIndex: "1",
                  }}
                >
                  Coming Soon
                </p>

                <Col>
                  <span
                    className="icon"
                    style={{
                      position: "absolute",
                      bottom: "52px",
                      left: "218px",
                    }}
                  >
                    <svg
                      fill="white"
                      viewBox="0 0 16 16"
                      height="24"
                      width="22"
                    >
                     
                    </svg>
                  </span>
                </Col>

              
                <div
                  className="d-flex justify-center items-start absolute-full-center pt-80"
                  style={{
                    zIndex: 2, 
                  }}
                >
                  <div className="py-4 ">
                    <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                       Crop
                    </p>
                  </div>
                </div>
              </Row>
            </Link>
          </div>
        </div> */}
        {/* <div className="col-lg-3 col-md-6">
          <div
            className="d-block bg-dark shadow-card decoration-none rounded-8 position-relative"
            style={{
              background: "#444444",
              height: "147px",
              width: "240px",
            }}
          >
          
            <div
              className="position-absolute top-0 start-0 w-100 h-100 blur-overlay"
              style={{
                backdropFilter: "blur(4px)", // Add the blur effect here
                zIndex: 1, // Set it above other content
              }}
            ></div>

            <Link className="text-white text-decoration-none">
              <Row className="ratio ratio-37:25 rounded-8">
                <Col>
                  <img
                    className="absolute-full-center object-fit-cover pt-12"
                    src="img\about-1\about\images (7).jpg"
                    alt="image"
                    style={{
                      borderRadius: "0 0 80px 0",
                      width: "210px",
                      height: "110px",
                      left: "30px",
                    }}
                  />
                </Col>
                <p
                  className="text-white "
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    top: "56px",
                    paddingLeft: "27px",
                    zIndex: "1",
                  }}
                >
                  Coming Soon
                </p>

                <Col>
                  <span
                    className="icon"
                    style={{
                      position: "absolute",
                      bottom: "52px",
                      left: "218px",
                    }}
                  >
                    <svg
                      fill="white"
                      viewBox="0 0 16 16"
                      height="24"
                      width="22"
                    >
                     
                    </svg>
                  </span>
                </Col>

              
                <div
                  className="d-flex justify-center items-start absolute-full-center pt-80"
                  style={{
                    zIndex: 2, // Set it above the blur overlay
                  }}
                >
                  <div className="py-4 ">
                    <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                      photo Editor
                    </p>
                  </div>
                </div>
              </Row>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Tools;
