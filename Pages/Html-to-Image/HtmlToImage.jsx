import React, { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import "./Style.scss"; // Import the stylesheet
import HtmlModal from "../../Components/ModalComponent/Modal"; // Import the modal component

import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import CreativeProcessOne from "../Home/creativeProcess/CreativeProcess";
import Steps from "./Steps/Steps";
import Compresscontents from "./content/contents.jsx";
import ExploreTools from "./ExploreTools/ExploreTools";
import FaqTwo from "./FAQ/Faq";
import Cta from "./Cat/Cat";
import Footer from "../../Components/Footer/Footer";
import ToolsHeader from "../../Components/toolsheader/ToolsHeader";
import { useEffect } from "react";
import { FaArrowAltCircleRight, FaCaretDown } from "react-icons/fa";
import html2canvas from "html2canvas";
const HtmlToImage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOptionsCard, setShowOptionsCard] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const card2Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when it loads
  }, []);
  const handleDownload = () => {
    if (uploadedUrl.length > 0) {
      const link = document.createElement("a");
      link.href = uploadedUrl;
      link.download = "downloaded-image.png"; // You can customize the filename here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleIframeLoad = () => {
    // Wait for all resources to load
    const iframe = document.querySelector("iframe");
    iframe.addEventListener("load", () => {
      captureScreenshot();
    });
  };
  const handleSave = () => {
    if (isValidUrl) {
      onSave(url);
      setWebsiteUrl(url); // Update the parent component's state
      setUrl(""); // Clear the URL input
      onRequestClose(); // Close the modal
    }
  };

  const handleSaveUrl = (url) => {
    setUploadedUrl(url);
    setShowOptionsCard(true);
    captureScreenshot();
  };

  const handleEdit = () => {
    // Logic for editing the uploaded image
  };

  const handleClear = () => {
    setUploadedFiles([]);
    setIsImageUploaded(false);
  };

  const onDrop = (acceptedFiles) => {
    setLoading(true);
    setTimeout(() => {
      setUploadedFiles(acceptedFiles);
      setLoading(false);
      setIsImageUploaded(true);
    }, 1000);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Only accept image files
  });

  const captureScreenshot = async () => {
    if (card2Ref.current) {
      setLoading(true);
  
      try {
        const canvas = await html2canvas(card2Ref.current);
        const screenshotUrl = canvas.toDataURL("image/png");
  
        setUploadedUrl(screenshotUrl);
        setShowOptionsCard(true);
        setLoading(false);
      } catch (error) {
        console.error("Error capturing screenshot:", error);
        setLoading(false);
      }
    }
  };  

  return (
    <>
      <ToolsHeader></ToolsHeader>
      <div className="H" style={{ overflow: "hidden" }}>
        <section className="mt-20 -text -">
          <div className="mt-40  sm:pt-30">
            <div className="page-header__content">
              <div className="row justify-center text-center">
                <div className="col-12 text-center">
                  <div className="sectionHeading ">
                    <h2
                      className="sectionHeading__title"
                      style={{ fontSize: "42px" }}
                    >
                      Html To Image
                    </h2>
                  </div>
                </div>
                <div className="w-1/1" />
                <div className="col-xl-5 col-lg-9 col-md-10 ">
                  <div className="px-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="Compress">
          <div className="atropos  js-atropos">
            <div className="atropos-scale">
              <div className="md:d-none absolute-full-center z-2 ml-60 ">
                <img
                  className="float-animation w-1/1 h-1/3 object-fit-cover "
                  src="/img/home-2/tabs/shapes.png"
                  alt="image"
                />
              </div>
            </div>
          </div>

          <div className="wrapper">
            {uploadedUrl === "" ? (
              <div
                className="card  bg-transparent mb-30 mt-20"
                style={{
                  height: "427px",
                  width: "640px",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  alignSelf: "center",
                  overflow: "hidden",
                }}
              >
                <div>
                  <img
                    src="img\about-2\bg2.jpg"
                    className="drop-img "
                    style={{ height: "450px", left: "0", top: "0" }}
                  ></img>

                  <div className="dropzone-card ">
                    <div className="drops-c ">
                      <button
                        onClick={handleOpenModal}
                        className="button -md -accent text-white -uppercase mb-10"
                      >
                        Add HTML
                      </button>
                    </div>
                    <HtmlModal
                      isOpen={isModalOpen}
                      onRequestClose={handleCloseModal}
                      onSave={handleSaveUrl}
                      setWebsiteUrl={setWebsiteUrl}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="page-container  ">
                {showOptionsCard && (
                  <div className="options-card1">
                    <div className="tabs-container">
                      <div className="">
                        <div>
                          <h1
                            className="sectionHeading__heading mt-1 "
                            style={{ fontSize: "24px" }}
                          >
                            Html Conversion
                          </h1>
                        </div>

                        <div className="contents">
                          <h4 className="testimonials__title text-xl fw-700 text-dark-1 mt-0">
                            Screen Size
                          </h4>
                          <div className="custom-dropdown1-container">
                            <select className="custom-dropdown1" id="mySelect">
                              <option value="option1">
                                Your Screen (1366px)
                              </option>
                              <option value="option2">
                                Desktop HD (1920px)
                              </option>
                              <option value="option3">Desktop (1440px)</option>
                              <option value="option4">Tablets (768px)</option>
                              <option value="option4">Mobiles(320px)</option>
                            </select>
                            <div className="custom-dropdown1-icon">
                              <FaCaretDown></FaCaretDown>
                            </div>
                          </div>
                          <h4 className="testimonials__title text-xl fw-700 text-dark-1 mt-3">
                            Convert to
                          </h4>
                          <div className="custom-dropdown1-container">
                            <select className="custom-dropdown1" id="mySelect">
                              <option value="option1">Choose ...</option>
                              <option value="option2">Convert To PNG</option>
                              <option value="option3">Convert To WEBP</option>
                            </select>
                            <div className="custom-dropdown1-icon">
                              <FaCaretDown></FaCaretDown>
                            </div>
                          </div>
                          <h4 className="testimonials__title text-xl fw-700 text-dark-1 mt-3">
                            Html Settings
                          </h4>
                          <div className="options-column aspect-ratio  mt-2 ">
                            <input type="checkbox" id="aspectRatioCheckbox" />
                            <label
                              htmlFor="aspectRatioCheckbox"
                              className="px-1  "
                            >
                              Try To Block Ads
                            </label>
                          </div>
                          <div className="options-column aspect-ratio  mt-1 ">
                            <input type="checkbox" id="aspectRatioCheckbox" />
                            <label
                              htmlFor="aspectRatioCheckbox"
                              className="px-1  "
                            >
                              Remove OverLay PopUps
                            </label>
                          </div>
                        </div>

                        <button
                          className="submit-buttonn mt-40"
                          onClick={handleDownload}
                        >
                          Download Image
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className=" card-2 mb-30 mt-30" ref={card2Ref}>
                  {websiteUrl && (
                    <iframe
                      src={websiteUrl}
                      title="Rendered Website"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                      onLoad={handleIframeLoad} // Call captureScreenshot when iframe is loaded
                    ></iframe>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <Steps></Steps>
        <Compresscontents></Compresscontents>
        <ExploreTools></ExploreTools>
        <FaqTwo></FaqTwo>
        <Cta></Cta>
        <Footer></Footer>
      </div>
    </>
  );
};

export default HtmlToImage;
