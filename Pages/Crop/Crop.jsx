// Compress.js
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Crop.scss"; // Import the stylesheet
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
const CropImage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showOptionsCard, setShowOptionsCard] = useState(false);
  const [value, setValue] = useState(0);

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
      setUploadedFiles((prevUploadedFiles) => [
        ...prevUploadedFiles,
        ...acceptedFiles,
      ]);
      setLoading(false);
      setIsImageUploaded(true);
      setShowOptionsCard(true); // Show the options card
    }, 1000);
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
      <div className="H">
        <div className="Compress mb-20 ">
          <section className="mt-60 -text -">
            <div className="mt-30">
              <div className="page-header__content">
                <div className="row justify-center text-center">
                  <div className="col-xl-6 col-lg-9 col-md-10 pb-20">
                    <div>
                      <h1 className="sectionHeading__title ">Crop Image</h1>
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

          <div className="wrapper">
            {uploadedFiles.length === 0 ? (
              <div
                className="card  bg-transparent mb-30 mt-30"
                style={{
                  height: "427px",
                  width: "640px",
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
              <div className="page-container">
                {uploadedFiles.length > 0 && showOptionsCard && (
                  <div className="options-card">
                    <h1
                      className="sectionHeading__heading "
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
                        onChange={(changeEvent) =>
                          setValue(changeEvent.target.value)
                        }
                        className="custom-slider"
                      />

                      <div className="value-indicator">{value}%</div>
                    </div>
                    <h1
                      className="sectionHeading__heading "
                      style={{ fontSize: "22px", paddingTop: "30px " }}
                    >
                      Dimensions Ratio
                    </h1>
                    <div className="options-row">
                      <div className="options-column">
                        <input
                          type="number"
                          className="custom-input"
                          placeholder="height"
                        />
                      </div>
                      <div className="options-column">
                        <input
                          type="number"
                          className="custom-input"
                          placeholder="width"
                        />
                      </div>
                    </div>
                    <button className="submit-button">Submit</button>
                  </div>
                )}
                <div
                  className="card bg-transparent mb-30 mt-30"
                  style={{
                    height: "427px",
                    width: "640px",

                    overflow: "auto",
                    justifyContent: "start",
                    alignItems: "start",
                  }}
                >
                  <img
                    src="img\about-2\bg2.jpg"
                    className="drop-img "
                    style={{ height: "auto", left: "0", top: "0" }}
                  ></img>
                  <div className="uploaded-files">
                    {isLoading && (
                      <div className="loading-spinner-container">
                        <LoadingSpinner />
                      </div>
                    )}
                    <div className="image-grid">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="uploaded-image-container">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="uploaded-image"
                            onClick={() => handleImageClick(index)}
                          />
                          <div
                            className="cancel-icon"
                            onClick={() => handleRemove(index)}
                            title="Remove"
                          >
                            &#x2716;
                          </div>
                        </div>
                      ))}

                      <input
                        {...getInputProps()}
                        id="dropzone-input"
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="add-more-button">
                      <button
                        onClick={() =>
                          document.getElementById("dropzone-input").click()
                        }
                        className="btn btn-primary"
                      >
                        Add More
                      </button>
                    </div>
                  </div>
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

export default CropImage;
