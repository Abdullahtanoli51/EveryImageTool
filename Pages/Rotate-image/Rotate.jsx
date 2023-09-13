// Compress.js
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Rotate.scss"; // Import the stylesheet
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

const RotateImage = () => {
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
  const [percentageValue, setPercentageValue] = useState(0);
  const [newPixelWidth, setNewPixelWidth] = useState(imageWidth);
  const [newPixelHeight, setNewPixelHeight] = useState(imageHeight);
  const [uploadingIndex, setUploadingIndex] = useState(null); // Track the uploading image index
  const [aspectRatioMaintained, setAspectRatioMaintained] = useState(true); // Default: Aspect ratio is maintained
  const [loadingStates, setLoadingStates] = useState([]);
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
                      Rotate Image
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
                      <div className="">
                        <div></div>

                        <div>
                          <h4 className="testimonials__title text-xl fw-700 text-dark-1 mt-20">
                            Rotate
                          </h4>

                          <div
                            className="nav -slider justify-center md:justify-center mt-80 md:mt-32"
                            style={{ color: "#5A13B5", cursor: "pointer" }}
                          >
                            
                            <div className="nav__item -right js-next">
                              <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="35px"
                                width="35px"
                              >
                                <path d="M16.242 17.242a6.04 6.04 0 01-1.37 1.027l.961 1.754a8.068 8.068 0 002.569-2.225l-1.6-1.201a5.938 5.938 0 01-.56.645zm1.743-4.671a5.975 5.975 0 01-.362 2.528l1.873.701a7.977 7.977 0 00.483-3.371l-1.994.142zm1.512-2.368a8.048 8.048 0 00-1.841-2.859l-1.414 1.414a6.071 6.071 0 011.382 2.146l1.873-.701zm-8.128 8.763c-.047-.005-.094-.015-.141-.021a6.701 6.701 0 01-.468-.075 5.923 5.923 0 01-2.421-1.122 5.954 5.954 0 01-.583-.506 6.138 6.138 0 01-.516-.597 5.91 5.91 0 01-.891-1.634 6.086 6.086 0 01-.247-.902c-.008-.043-.012-.088-.019-.131A6.332 6.332 0 016 13.002V13c0-1.603.624-3.109 1.758-4.242A5.944 5.944 0 0111 7.089V10l5-4-5-4v3.069a7.917 7.917 0 00-4.656 2.275A7.936 7.936 0 004 12.999v.009c0 .253.014.504.037.753.007.076.021.15.03.227.021.172.044.345.076.516.019.1.044.196.066.295.032.142.065.283.105.423.032.112.07.223.107.333.026.079.047.159.076.237l.008-.003A7.948 7.948 0 005.6 17.785l-.007.005c.021.028.049.053.07.081.211.272.433.538.681.785a8.236 8.236 0 00.966.816c.265.192.537.372.821.529l.028.019.001-.001a7.877 7.877 0 002.136.795l-.001.005.053.009c.201.042.405.071.61.098.069.009.138.023.207.03a8.038 8.038 0 002.532-.137l-.424-1.955a6.11 6.11 0 01-1.904.102z" />
                              </svg>
                            </div>
                            <div className="nav__item -left js-prev ml-20 ">
                              <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="35px"
                                width="35px"
                              >
                                <path d="M6.758 8.758L5.344 7.344a8.048 8.048 0 00-1.841 2.859l1.873.701a6.048 6.048 0 011.382-2.146zM19 12.999a7.935 7.935 0 00-2.344-5.655A7.917 7.917 0 0012 5.069V2L7 6l5 4V7.089a5.944 5.944 0 013.242 1.669A5.956 5.956 0 0117 13v.002c0 .33-.033.655-.086.977-.007.043-.011.088-.019.131a6.053 6.053 0 01-1.138 2.536c-.16.209-.331.412-.516.597a5.954 5.954 0 01-.728.613 5.906 5.906 0 01-2.277 1.015c-.142.03-.285.05-.43.069-.062.009-.122.021-.184.027a6.104 6.104 0 01-1.898-.103L9.3 20.819a8.087 8.087 0 002.534.136c.069-.007.138-.021.207-.03.205-.026.409-.056.61-.098l.053-.009-.001-.005a7.877 7.877 0 002.136-.795l.001.001.028-.019a7.906 7.906 0 001.01-.67c.27-.209.532-.43.777-.675.248-.247.47-.513.681-.785.021-.028.049-.053.07-.081l-.006-.004a7.899 7.899 0 001.093-1.997l.008.003c.029-.078.05-.158.076-.237.037-.11.075-.221.107-.333.04-.14.073-.281.105-.423.022-.099.048-.195.066-.295.032-.171.056-.344.076-.516.01-.076.023-.15.03-.227.023-.249.037-.5.037-.753.002-.002.002-.004.002-.008zM6.197 16.597l-1.6 1.201a8.045 8.045 0 002.569 2.225l.961-1.754a6.018 6.018 0 01-1.93-1.672zM5 13c0-.145.005-.287.015-.429l-1.994-.143a7.977 7.977 0 00.483 3.372l1.873-.701A5.975 5.975 0 015 13z" />
                              </svg>
                            </div>
                          </div>

                          <button className="submit-buttonn mt-80">
                            Lets Rotate
                          </button>
                        </div>
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

export default RotateImage;
