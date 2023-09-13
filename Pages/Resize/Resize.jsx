// Compress.js
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Resize.scss"; // Import the stylesheet
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
import { Tabs } from "react-bootstrap";
import { BiSolidImageAdd } from "react-icons/bi";

const Resize = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showOptionsCard, setShowOptionsCard] = useState(false);
  const [value, setValue] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const newWidth = Math.round(imageWidth * (value / 100));
  const newHeight = Math.round(imageHeight * (value / 100));
  const [newPixelWidth, setNewPixelWidth] = useState(imageWidth);
  const [newPixelHeight, setNewPixelHeight] = useState(imageHeight);
  const [uploadingIndex, setUploadingIndex] = useState(null); // Track the uploading image index
  const [aspectRatioMaintained, setAspectRatioMaintained] = useState(true);
  const [loadingStates, setLoadingStates] = useState([]);
  const [selectedOption, setSelectedOption] = useState(""); // Default value
  const MAX_IMAGES = 5;
  const [showMaxImagesMessage, setShowMaxImagesMessage] = useState(false);
  const [fileTypeError, setFileTypeError] = useState(null);

  

  const handleAspectRatioChange = () => {
    setAspectRatioMaintained(!aspectRatioMaintained);
  };

  const handleHeightChange = (e) => {
    const newHeightValue = parseFloat(e.target.value);
    if (isNaN(newHeightValue) || e.target.value === "") {
      setNewPixelHeight("");
      setNewPixelWidth("");
      setImageHeight("");
      setImageWidth("");
      return;
    }

    setNewPixelHeight(newHeightValue);
    if (aspectRatioMaintained) {
      const scale = newHeightValue / parseFloat(imageHeight);
      const newWidthValue = Math.round(scale * parseFloat(imageWidth));
      setNewPixelWidth(newWidthValue);
      setImageWidth(newWidthValue);
    } else {
      setImageHeight(newHeightValue);
    }
  };

  const handleWidthChange = (e) => {
    const newWidthValue = parseFloat(e.target.value);
    if (isNaN(newWidthValue) || e.target.value === "") {
      setNewPixelWidth("");
      setNewPixelHeight("");
      setImageWidth("");
      setImageHeight("");
      return;
    }

    setNewPixelWidth(newWidthValue);
    if (aspectRatioMaintained) {
      const scale = newWidthValue / parseFloat(imageWidth);
      const newHeightValue = Math.round(scale * parseFloat(imageHeight));
      setNewPixelHeight(newHeightValue);
      setImageHeight(newHeightValue);
    } else {
      setImageWidth(newWidthValue);
    }
  };

  const handlePixelWidthChange = (e) => {
    let newWidthValue = e.target.value;
    // Limit the input to four characters
    if (newWidthValue.length > 4) {
      newWidthValue = newWidthValue.slice(0, 4);
    }
    setNewPixelWidth(newWidthValue);
  
    if (!isNaN(newWidthValue) && newWidthValue >= 0 && newWidthValue <= 9999) {
      const newHeightValue = aspectRatioMaintained
        ? Math.round((newWidthValue / imageWidth) * imageHeight)
        : newPixelHeight;
  
      setNewPixelHeight(newHeightValue);
    }
  };
  const handlePixelHeightChange = (e) => {
    let newHeightValue = e.target.value;
    // Limit the input to four characters
    if (newHeightValue.length > 4) {
      newHeightValue = newHeightValue.slice(0, 4);
    }
    setNewPixelHeight(newHeightValue);
  
    if (!isNaN(newHeightValue) && newHeightValue >= 0 && newHeightValue <= 9999) {
      const newWidthValue = aspectRatioMaintained
        ? Math.round((newHeightValue / imageHeight) * imageWidth)
        : newPixelWidth;
  
      setNewPixelWidth(newWidthValue);
    }
  };
  const handleResizeByPercentage = () => {
    const newWidth = Math.round(imageWidth * (value / 100));
    const newHeight = Math.round(imageHeight * (value / 100));
    setImageWidth(newWidth);
    setImageHeight(newHeight);
  };

  const handleResizeByPixel = () => {
    setImageWidth(newWidth);
    setImageHeight(newHeight);
  };
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when it loads
  }, []);

  const onDrop = (acceptedFiles) => {
    setLoading(true);

    if (uploadedFiles.length < MAX_IMAGES) {
      setLoading(true);
      setFileTypeError(null);
      const newImages = acceptedFiles.slice(
        0,
        MAX_IMAGES - uploadedFiles.length
      );
     const newLoadingStates = newImages.map(() => true);
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

    // Process each image in the acceptedFiles array
    Promise.all(
      newImages.map((file, index) => {
        return new Promise((resolve) => {
          const image = new Image();
          image.src = URL.createObjectURL(file);

          image.onload = () => {
            setImageWidth(image.width);
            setImageHeight(image.height);

            // Resolve the promise to signal that the image has finished loading
            resolve(index);
          };
        });
      })
    ).then((loadedIndexes) => {
      // Set the uploading index when all images have finished loading
      const nextIndex = loadedIndexes[0];
      setUploadingIndex(nextIndex);

      // Simulate loading delay with setTimeout
      setTimeout(() => {
        setLoading(false);
        setIsImageUploaded(true);
        setShowOptionsCard(true);

        // Mark all images as loaded in the loading states
        const updatedLoadingStates = [...loadingStates];
        loadedIndexes.forEach((index) => {
          updatedLoadingStates[index] = false;
        });
        setLoadingStates(updatedLoadingStates);

    
      }, 1000);
    });
  } else {
    // Handle the case where the user selects more images than allowed
    setShowMaxImagesMessage(true); // Show the "Maximum 5 images are allowed" message
  }
  };


  const handleUploadImages = (images) => {
    if (uploadedFiles.length < MAX_IMAGES) {
      setLoading(true);
      setFileTypeError(null); 

      const newImages = images.slice(0, MAX_IMAGES - uploadedFiles.length); // Take only the first (5 - number of already uploaded images) images

     
    } else {
    
      setShowMaxImagesMessage(true); 
    }
  };

  const handleRemove = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
          <div className="mt-40 sm:pt-30">
            <div className="page-header__content">
              <div className="row justify-center text-center">
                <div className="col-12 text-center">
                  <div className="sectionHeading ">
                    <h2
                      className="sectionHeading__title"
                      style={{ fontSize: "42px" }}
                    >
                      Resize Image
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
        <div className="Resize">
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
                                  By Percentage
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
                                  By Pixels
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content">
                        {activeTab === 1 && (
                          <div>
                            <h1
                              className="sectionHeading__heading  "
                              style={{ fontSize: "22px" }}
                            >
                              Resize Image By
                            </h1>

                            <div className="slider-container">
                              <input
                                type="range"
                                min={0}
                                max={100}
                                value={value}
                                onChange={(e) =>
                                  setValue(parseInt(e.target.value))
                                }
                                className="custom-slider "
                              />

                              <div className="value-indicator">{value}%</div>
                            </div>
                            {value === 0 ? ( // Display original dimensions when value is 0
                              <div className="calculated-dimensions ">
                                {imageWidth}px x {imageHeight}px
                              </div>
                            ) : (
                              <div className="calculated-dimensions">
                                {newWidth}px x {newHeight}px
                              </div>
                            )}
                            <button
                              className="submit-buttonn mt-50"
                              onClick={handleResizeByPercentage}
                            >
                              Resize
                            </button>
                          </div>
                        )}

                        {activeTab === 2 && (
                          <div>
                            <h1
                              className="sectionHeading__heading "
                              style={{ fontSize: "22px" }}
                            >
                              Dimensions Ratio
                            </h1>
                            <div className="options-row">
                              <div className="options-column">
                                <input
                                  type="number"
                                  className="custom-input"
                                  placeholder="height"
                                  value={newPixelHeight}
                                  onChange={handlePixelHeightChange}
                                />
                              </div>
                              <div className="options-column">
                                <input
                                  type="number"
                                  className="custom-input"
                                  placeholder="width"
                                  value={newPixelWidth}
                                  onChange={handlePixelWidthChange}
                                />
                              </div>
                            </div>
                            <div className="options-column aspect-ratio  mt-2 ">
                              <input
                                type="checkbox"
                                id="aspectRatioCheckbox"
                                checked={aspectRatioMaintained}
                                onChange={handleAspectRatioChange}
                              />
                              <label
                                htmlFor="aspectRatioCheckbox"
                                className="px-1  "
                              >
                                Maintain Aspect Ratio
                              </label>
                            </div>
                            <button className="submit-buttonn">Submit</button>
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
        <Compresscontents></Compresscontents>
        <ExploreTools></ExploreTools>
        <FaqTwo></FaqTwo>
        <Cta></Cta>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Resize;
