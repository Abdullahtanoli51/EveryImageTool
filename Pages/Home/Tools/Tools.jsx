import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./tools.scss";

const Tools = () => {
  return (
    <div className="tools-section  relative sm:pb-20"  style={{padding:"4rem"}} >
      <div className="row sm:px-30 sm:py-10 y-gap-16   px-120 " >
        <div className="col-lg-3 col-md-6 col-sm-10  ">
          <Link
            to ="/compress"
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
      <div className="row y-gap-16 sm:py-10  sm:px-30 px-120 ">
        <div className="col-lg-3 col-md-6">
          <Link
            to="/Photo-Edior"
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
                    viewBox="0 0 24 24"
                    fill="white"
                    height="25"
                    width="24"
                    strokeWidth={2}
                  >
                    <path d="M22.7 14.3l-1 1-2-2 1-1c.1-.1.2-.2.4-.2.1 0 .3.1.4.2l1.3 1.3c.1.2.1.5-.1.7M13 19.9V22h2.1l6.1-6.1-2-2-6.2 6m-1.79-4.07l-1.96-2.36L6.5 17h6.62l2.54-2.45-1.7-2.26-2.75 3.54M11 19.9v-.85l.05-.05H5V5h14v6.31l2-1.93V5a2 2 0 00-2-2H5c-1.1 0-2 .9-2 2v14a2 2 0 002 2h6v-1.1z" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                    Photo Editor
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link
            to="/Upscale"
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
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                    Upscale Image
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link
            to="/Convert-from-jpg"
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
        <div className="col-lg-3 col-md-6">
          <Link
            to="/Remove-Background"
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
      </div>
      <div className="row y-gap-16  sm:py-10 sm:px-30 px-120">
        <div className="col-lg-3 col-md-6">
          <Link
            to="/WaterMark"
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
          <Link
            to="/Meme-Generator"
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
              <Col>
                <span
                  class="icon "
                  style={{
                    position: "absolute",
                    bottom: "52px",
                    left: "218px",
                  }}
                >
                  <svg fill="white" viewBox="0 0 16 16" height="24" width="22">
                    <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
                    <path d="M12.331 9.5a1 1 0 010 1A4.998 4.998 0 018 13a4.998 4.998 0 01-4.33-2.5A1 1 0 014.535 9h6.93a1 1 0 01.866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                    Meme Generator
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link
            to="/RotateImage"
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
                  src="img\about-1\about\images (10).jpg"
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
                  <svg
                    viewBox="0 0 512 512"
                    fill="white"
                    height="23"
                    width="23"
                  >
                    <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8 62.5-62.5 163.8-62.5 226.3 0l17.1 17.2H336c-17.7 0-32 14.3-32 32s14.3 32 32 32h127.9c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2l-17.5-17.6c-87.5-87.5-229.3-87.5-316.8 0-24.4 24.4-42 53.1-52.8 83.8-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2-4 4-6.7 8.8-8.1 14-.3 1.2-.6 2.5-.8 3.8-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32v-51.1l17.6 17.5c87.5 87.4 229.3 87.4 316.7 0 24.4-24.4 42.1-53.1 52.9-83.7 5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8-62.5 62.5-163.8 62.5-226.3 0l-.1-.1-17.1-17.1H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2.1-4.8.3s-3.1.5-4.6 1z" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                    Rotate Image
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link
            to="/Html-to-Image"
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
              <Col>
                <span
                  class="icon "
                  style={{
                    position: "absolute",
                    bottom: "51px",
                    left: "218px",
                  }}
                >
                  <svg
                    viewBox="0 0 512 512"
                    fill="white"
                    height="23"
                    width="23"
                  >
                    <path d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.5-48-48-48zm295.1-88h-384C28.65 32-.01 60.65-.01 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96c.01-35.35-27.79-64-63.99-64zm16 377.3L326.3 223.4c-2.5-4.6-8.2-7.4-14.3-7.4-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.03 0 .03 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16v313.3z" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                    HTML to Image
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
            to="/Blur-Faces"
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
                    height="24"
                    width="25"
                   
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M12 21a9.01 9.01 0 002.32-.302 9.004 9.004 0 001.74-16.733A9 9 0 1012 21zM12 3v17M12 12h9M12 9h8M12 6h6M12 18h6M12 15h8" />
                  </svg>
                </span>
              </Col>

              <div className="d-flex justify-center items-start absolute-full-center pt-80 ">
                <div className=" py-4 text-white">
                  <p style={{ fontSize: "18px", lineHeight: "40px" }}>
                    Blur Face
                  </p>
                </div>
              </div>
            </Row>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <Link
            to="/Profile-Image-Maker"
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
      </div>
    </div>
  );
};

export default Tools;
