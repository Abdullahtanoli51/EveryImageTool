// Compress.js
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./compress.scss"; // Import the stylesheet
import RangeSlider from "react-bootstrap-range-slider";
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
import { BiSolidImageAdd } from "react-icons/bi";
import { FaArrowAltCircleRight, FaCaretDown } from "react-icons/fa";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import { useNavigate } from "react-router-dom";

const Compress = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showOptionsCard, setShowOptionsCard] = useState(false);
  const [value, setValue] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const [uploadingIndex, setUploadingIndex] = useState(null); // Track the uploading image index
  const [loadingStates, setLoadingStates] = useState([]);
  const colorOptions = ["#FF5733", "#FFC300", "#0088FF", "#AA33FF", "#FF33AA"];
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedOption, setSelectedOption] = useState(""); // Default value
  const MAX_IMAGES = 5;
  const [showMaxImagesMessage, setShowMaxImagesMessage] = useState(false);
  const [fileTypeError, setFileTypeError] = useState(null);
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [issLoading, setIsLoading] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when it loads
  }, []);
  const handleDownload = () => {
    if (uploadedFiles.length > 0) {
      const url = URL.createObjectURL(uploadedFiles[0]);
      const link = document.createElement("a");
      link.href = url;
      link.download = uploadedFiles[0].name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  const handleUploadImages = (images) => {
    if (uploadedFiles.length < MAX_IMAGES) {
      setLoading(true);
      setFileTypeError(null);

      const newImages = images.slice(0, MAX_IMAGES - uploadedFiles.length);
    } else {
      setShowMaxImagesMessage(true); // Show the "Maximum 5 images are allowed" message
    }
  };
  const onDrop = (acceptedFiles) => {
    if (uploadedFiles.length < MAX_IMAGES) {
      setLoading(true);
      setFileTypeError(null); // Clear any previous error messages

      const newImages = acceptedFiles.slice(
        0,
        MAX_IMAGES - uploadedFiles.length
      ); // Take only the first (5 - number of already uploaded images) images
      const newLoadingStates = newImages.map(() => true);

      // Check if each dropped file is an image
      const isImage = newImages.every((file) => file.type.startsWith("image/"));

      if (!isImage) {
        // If any of the dropped files is not an image, show an error message
        setFileTypeError("Please choose an image file.");
        setLoading(false);
        setTimeout(() => {
          setFileTypeError(null);
        }, 2000); // 5000 milliseconds (5 seconds)
        return;
      }

      // Add the new images to the existing uploaded files
      setUploadedFiles((prevUploadedFiles) => [
        ...prevUploadedFiles,
        ...newImages,
      ]);

      // Add the loading states for the new images
      setLoadingStates((prevLoadingStates) => [
        ...prevLoadingStates,
        ...newLoadingStates,
      ]);

      // Process each image in the newImages array
      Promise.all(
        newImages.map((file, index) => {
          return new Promise((resolve) => {
            const image = new Image();
            image.src = URL.createObjectURL(file);

            image.onload = () => {
              // Resolve the promise to signal that the image has finished loading
              resolve(index);
            };
          });
        })
      ).then((loadedIndexes) => {
        const nextIndex = loadedIndexes[0];
        setUploadingIndex(nextIndex);

        setTimeout(() => {
          setLoading(false);
          setIsImageUploaded(true);
          setShowOptionsCard(true);

          const updatedLoadingStates = [...loadingStates];
          loadedIndexes.forEach((index) => {
            updatedLoadingStates[index] = false;
          });
          setLoadingStates(updatedLoadingStates);

          // ... rest of your code ...
        }, 1000);
      });
    } else {
      // Handle the case where the user selects more images than allowed
      setShowMaxImagesMessage(true); // Show the "Maximum 5 images are allowed" message
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRemove = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Only accept image files
  });

  const handleCompressByPercentage = () => {
    const newPercentage = value;
    console.log("New value:", newPercentage);

    const apiurl =
      "https://phplaravel-1026751-3882835.cloudwaysapps.com/api/batch/compress-images";
    const requestdata = {
      percentage: newPercentage,
      images: uploadedFiles,
    };

    const data = new FormData();
    uploadedFiles.forEach((file, index) => {
      data.append("images[]", file, file.name);
    });
    if (value !== 0) {
      // If a percentage value is provided, include it in the request
      data.append("percentage", value);
      console.warn("compressd value" ,value)
    }

    const config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: apiurl,
      data: data,
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    setIsButtonDisabled(true);
    setShowSpinner(true);

    axios
      .request(config)
      .then((response) => {
        setTimeout(() => {
          setShowSpinner(false);
          setIsButtonDisabled(false);

          const responseData = response.data;
          const blob = new Blob([response.data], { type: "application/zip" });
          const blobUrl = window.URL.createObjectURL(blob);

          navigate(
            `/success?tool=Compressed&response=${encodeURIComponent(
              JSON.stringify(blobUrl)
            )}`
          );
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setShowSpinner(false);
        setIsButtonDisabled(false);
      });
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
                      Bulk Image Compressor
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
            {uploadedFiles.length === 0 ? (
              <div
                className="card card1 bg-transparent mb-30 mt-20"
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

                  <div {...getRootProps()} className="dropzone-card ">
                    <input {...getInputProps()} />
                    <div className="drops-c ">
                      <button className="button -md -accent text-white -uppercase mb-10">
                        Start From A photo
                      </button>

                      <h2 className="sectionHeading">Or Drop An Image Here</h2>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="page-container  ">
                {uploadedFiles.length > 0 && showOptionsCard && (
                  <div className="options-card1">
                    <div className="tabs-container">
                      <div className="tabs__controls js-tabs-controls">
                        <div className=" row justify-center">
                          <div className="col-xl-10 col-lg-9">
                            <div className="row tabs-group">
                              <div className="col-md">
                                <button
                                  className={`tabs__button text-lg px-20 py-8 rounded-200 text-purple-3 fw-600 js-tabs-button  ${
                                    activeTab == 1 ? "is-active" : ""
                                  }`}
                                  onClick={() => handleTabClick(1)}
                                  type="button"
                                >
                                  Auto
                                </button>
                              </div>
                              <div className="col-md">
                                <button
                                  className={`tabs__button text-lg px-20 py-8 rounded-200 text-purple-3 fw-600 js-tabs-button  ${
                                    activeTab == 2 ? "is-active" : ""
                                  }`}
                                  onClick={() => handleTabClick(2)}
                                  type="button"
                                >
                                  Quality
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content">
                        {activeTab === 1 && (
                          <div>
                            <h6
                              className="mt-80"
                              style={{ color: "red", fontSize: "14px" }}
                            >
                              You Can Compress The Image Aoutomatically
                            </h6>
                          </div>
                        )}

                        {activeTab === 2 && (
                          <div>
                            <h1
                              className="sectionHeading__heading  "
                              style={{ fontSize: "24px" }}
                            >
                              Quality
                            </h1>

                            <div className="slider-container mb-2">
                              <input
                                style={{ color: "white" }}
                                type="range"
                                min={0}
                                max={100}
                                value={value}
                                onChange={(e) =>
                                  setValue(parseInt(e.target.value))
                                }
                                className="custom-slider1"
                              />

                              <div className="value-indicator">{value}%</div>
                            </div>
                          </div>
                        )}
                      </div>
                      <button
                        className="submit-buttonn mt-40"
                        onClick={handleCompressByPercentage}
                        disabled={isButtonDisabled}
                      >
                        {showSpinner ? (
                          <div className="button-content">
                            <div className="button-text">Processing</div>
                            <div className="spinner"></div>
                          </div>
                        ) : (
                          "Compress Images"
                        )}
                      </button>
                    </div>
                  </div>
                )}
                <div className=" card-2 mb-30 mt-30">
                  <img src="" className="drop-img"></img>
                  <div className="uploaded-files">
                    <div className="image-grid">
                      {uploadedFiles.map((file, index) => (
                        <div className="uploaded-image-container" key={index}>
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="uploaded-image"
                          />
                          {index === uploadedFiles.length - 1 && isLoading ? (
                            // Show loading spinner only for the last uploaded image
                            <div className="loading-spinner-container">
                              <LoadingSpinner />
                            </div>
                          ) : null}
                          <div
                            className="cancel-icon"
                            onClick={() => handleRemove(index)}
                            title="Remove"
                          >
                            &#x2716;
                          </div>
                        </div>
                      ))}
                      {/* Add More Card */}

                      <div className="add-moree-image-container">
                        {/* Add More Card */}
                        {uploadedFiles.length < MAX_IMAGES && (
                          <div className="add-moree-image-container">
                            <div
                              {...getRootProps()}
                              className={`add-more-card ${
                                uploadedFiles.length >= MAX_IMAGES
                                  ? "disabled"
                                  : ""
                              }`}
                              style={{
                                pointerEvents:
                                  uploadedFiles.length >= MAX_IMAGES
                                    ? "none"
                                    : "auto",
                              }}
                            >
                              <input
                                {...getInputProps()}
                                id="dropzone-input"
                                style={{ display: "none" }}
                                accept="image/jpeg, image/png, image/gif, image/webp, image/svg+xml"
                              />
                              <div className="add-more-content">
                                <span className="add-more-text">Add More</span>
                                <div className="add-icon">
                                  <BiSolidImageAdd />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {uploadedFiles.length >= 5 && (
                    <div className="mt-5 error-message ">
                      Maximum 5 images are allowed.
                    </div>
                  )}
                  {fileTypeError && (
                    // Popup/modal to display the error message
                    <div className="error-message  mt-5">
                      <p>{fileTypeError}</p>
                    </div>
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

export default Compress;
