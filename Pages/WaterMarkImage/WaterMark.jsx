// Compress.js
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./WaterMark.scss"; // Import the stylesheet
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
import WaterMarkcontents from "./content/contents.jsx";
import CtaHome from "../Compress/Cat/Cat";

const WaterMark = () => {
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
      setFileTypeError(null); // Clear any previous error messages

      const newImages = images.slice(0, MAX_IMAGES - uploadedFiles.length); // Take only the first (5 - number of already uploaded images) images

      // ... (rest of the code to process and display images)
    } else {
      // Handle the case where the user selects more images than allowed
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
                      Bulk Image Watermark
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
                  <div className="options-card2">
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
                                  Text
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
                                  Image
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content">
                        {activeTab === 1 && (
                          <div className="">
                            <div className="contentss">
                              <input
                                type="text"
                                className="custom-input mb-3"
                                placeholder="Enter text here"
                                style={{ border: "1px solid #5A13B5" }}
                              />

                              <h4 className="testimonials__title text-xl fw-700 text-dark-1 ">
                                Occurrence
                              </h4>
                              <div className="custom-dropdown1-container">
                                <select
                                  className="custom-dropdown1"
                                  id="mySelect"
                                  value={selectedOption}
                                  onChange={handleOptionChange}
                                >
                                  <option value="option1">Choose..</option>
                                  <option value="option2">Single</option>
                                  <option value="option3">Multiple</option>
                                </select>
                                <div className="custom-dropdown1-icon">
                                  <FaCaretDown></FaCaretDown>
                                </div>
                              </div>

                              {selectedOption === "option2" && (
                                <div>
                                  <h4 className="testimonials__title text-xl fw-700 text-dark-1 mt-3">
                                    Location
                                  </h4>

                                  <div>
                                    <div className="custom-dropdown1-container">
                                      <select
                                        className="custom-dropdown1"
                                        id="mySelect"
                                      >
                                        <option value="option1">
                                          Top left
                                        </option>
                                        <option value="option2">
                                          Top Right
                                        </option>
                                        <option value="option3">
                                          Bottom left
                                        </option>
                                        <option value="option4">
                                          Bottom Right
                                        </option>
                                      </select>
                                      <div className="custom-dropdown1-icon">
                                        <FaCaretDown></FaCaretDown>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              <h4 className="testimonials__title text-xl fw-700 text-dark-1 mt-3">
                                Colors
                              </h4>
                              <div
                                className="nav -slider justify-center md:justify-center mt-10 md:mt-32"
                                style={{ color: "#5A13B5", cursor: "pointer" }}
                              >
                                {colorOptions.map((color, index) => (
                                  <div
                                    key={index}
                                    className="nav__item -right ml-10 js-next"
                                    onClick={() => handleColorClick(color)}
                                    style={{
                                      backgroundColor: color,
                                      borderRadius: "50%",
                                      padding: "10px",
                                      marginBottom: "15px",
                                      height: "30px",
                                      width: "30px",

                                      cursor: "pointer",
                                      border:
                                        selectedColor === color
                                          ? "2px solid blue"
                                          : "none", // Add a border for the selected color
                                    }}
                                  ></div>
                                ))}
                              </div>
                              <div class="outline">
                                <input class="custum-colors" type="color" />
                              </div>

                              <h4 className="testimonials__title text-xl fw-700 text-dark-1 mt-3">
                                Opacity
                              </h4>
                              <div className="slider-containerrr mb-2 mt-3">
                                <input
                                  style={{ color: "white" }}
                                  type="range"
                                  min={0}
                                  max={100}
                                  value={value}
                                  onChange={(e) =>
                                    setValue(parseInt(e.target.value))
                                  }
                                  className="custom-sliderrr"
                                />

                                <div className="value-indicator">{value}%</div>
                              </div>
                            </div>
                            <button className="submit-buttonn mt-20 sm:mb-0   ">
                              Add Water mark
                            </button>
                          </div>
                        )}

                        {activeTab === 2 && (
                          <div>
                            <div className="contentss">
                              <div className="file-input-container mb-4">
                                <label
                                  htmlFor="file-upload"
                                  className="file-input-label"
                                >
                                  Upload Image
                                </label>
                                <input
                                  type="file"
                                  id="file-upload"
                                  className="file-input-element"
                                  accept="image/*"
                                />
                              </div>

                              <h4 className="testimonials__title text-xl fw-700 text-dark-1 ">
                                Occurrence
                              </h4>
                              <div className="custom-dropdown1-container">
                                <select
                                  className="custom-dropdown1"
                                  id="mySelect"
                                  value={selectedOption}
                                  onChange={handleOptionChange}
                                >
                                  <option value="option1">Choose..</option>
                                  <option value="option2">Single</option>
                                  <option value="option3">Multiple</option>
                                </select>
                                <div className="custom-dropdown1-icon">
                                  <FaCaretDown></FaCaretDown>
                                </div>
                              </div>

                              {selectedOption === "option2" && (
                                <div>
                                  <h4 className="testimonials__title text-xl fw-700 text-dark-1 mt-3">
                                    Location
                                  </h4>

                                  <div>
                                    <div className="custom-dropdown1-container">
                                      <select
                                        className="custom-dropdown1"
                                        id="mySelect"
                                      >
                                        <option value="option1">
                                          Top left
                                        </option>
                                        <option value="option2">
                                          Top Right
                                        </option>
                                        <option value="option3">
                                          Bottom left
                                        </option>
                                        <option value="option4">
                                          Bottom Right
                                        </option>
                                      </select>
                                      <div className="custom-dropdown1-icon">
                                        <FaCaretDown></FaCaretDown>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              <h4 className="testimonials__title text-xl fw-700 text-dark-1 mt-2">
                                Opacity
                              </h4>
                              <div className="slider-containerrr mb-2 mt-3">
                                <input
                                  style={{ color: "white" }}
                                  type="range"
                                  min={0}
                                  max={100}
                                  value={value}
                                  onChange={(e) =>
                                    setValue(parseInt(e.target.value))
                                  }
                                  className="custom-sliderrr"
                                />

                                <div className="value-indicator">{value}%</div>
                              </div>
                            </div>
                            <button className="submit-buttonn mt-20">
                              Add Water mark
                            </button>
                          </div>
                        )}
                      </div>
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
        <WaterMarkcontents></WaterMarkcontents>
        <ExploreTools></ExploreTools>
        <FaqTwo></FaqTwo>
        <CtaHome></CtaHome>
        <Footer></Footer>
      </div>
    </>
  );
};

export default WaterMark;
