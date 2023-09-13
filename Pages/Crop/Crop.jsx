import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./Crop.scss"; // Import the stylesheet
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import Steps from "./Steps/Steps";
import Compresscontents from "./content/contents.jsx";
import ExploreTools from "./ExploreTools/ExploreTools";
import FaqTwo from "./FAQ/Faq";
import Cta from "./Cat/Cat";
import Footer from "../../Components/Footer/Footer";
import ToolsHeader from "../../Components/toolsheader/ToolsHeader";
import { useEffect } from "react";
import "react-image-crop/src/ReactCrop.scss";

import Cropper from "react-easy-crop";
const CropImage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const [cropComplete, setCropComplete] = useState(false);
  const [croppedImagePreview, setCroppedImagePreview] = useState(null);
  const [isCropMode, setIsCropMode] = useState(false); // Track crop mode

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when it loads
  }, []);

  const onCropChange = useCallback((crop) => {
    setCrop(crop);
  }, []);

  const onZoomChange = useCallback((zoom) => {
    setZoom(zoom);
  }, []);

  const handleDownload = () => {
    if (croppedImage) {
      const url = URL.createObjectURL(croppedImage);
      const link = document.createElement("a");
      link.href = url;
      link.download = "cropped-image.jpg"; // You can provide a custom name here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleEdit = () => {
    setIsCropMode(true); // Enter crop mode
  };

  const handleClear = () => {
    setUploadedFiles([]);
    setIsImageUploaded(false);
    setCropComplete(false);
    setCroppedImage(null);
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

  const onCropComplete = useCallback(
    async (croppedArea, croppedAreaPixels) => {
      if (uploadedFiles.length > 0) {
        try {
          const image = uploadedFiles[0];
          const croppedImageBlob = await getCroppedImg(
            URL.createObjectURL(image),
            croppedAreaPixels,
            AREA_UNITS.PERCENT
          );

          setCroppedImage(croppedImageBlob);
          setCroppedImagePreview(URL.createObjectURL(croppedImageBlob));
          setCropComplete(true);
        } catch (e) {
          console.error("Error cropping image:", e);
        }
      }
    },
    [uploadedFiles]
  );

  return (
    <>
      <ToolsHeader></ToolsHeader>
      <div className="H">
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
                     Crop Image
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
                    alt="Placeholder"
                  />
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
              <div
                className="card bg-white mb-30 mt-30"
                style={{
                  height: "427px",
                  width: "640px",
                  alignSelf: "center",
                  overflow: "hidden",
                }}
              >
                <div className="uploaded-files">
                  {isLoading && (
                    <div className="loading-spinner-container">
                      <LoadingSpinner />
                    </div>
                  )}
                  {uploadedFiles.map((file) => (
                    <div key={file.name} className="">
                      {isImageUploaded && !isCropMode ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt="Uploaded"
                          style={{ width: "100%" }}
                        />
                      ) : null}
                      {isCropMode ? (
                        <div className="">
                        
                        <Cropper
                        image={URL.createObjectURL(file)} // Replace with your image source
                        crop={crop}
                        zoom={zoom}
                        aspect={4 / 3} // Replace with your desired aspect ratio
                        onCropChange={onCropChange}
                        onZoomChange={onZoomChange}
                        cropShape="rect" // You can set it to "round" for a circular crop
                        showGrid // Display grid lines
                      />
                      </div>
                      ) : null}
                      <div className="buttons-row mt-10 mb-10">
                        {isImageUploaded && !isCropMode ? (
                          <button onClick={handleEdit} className="btn btn-primary">
                            Edit
                          </button>
                        ) : null}
                        
                      </div>
                      
                    </div>
                  ))}
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
