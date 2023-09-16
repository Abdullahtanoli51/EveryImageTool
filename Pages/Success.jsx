import React, { useEffect } from "react";
import Header from "../Components/header/Header";
import Footer from "../Components/Footer/Footer";
import gif from "../public/img/ToolImages/successGif.gif"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ToolsHeader from "../Components/toolsheader/ToolsHeader";

const SuccessPage = (props) => {
  const location = useLocation();
  const responseDataParam = new URLSearchParams(location.search).get(
    "response"
  );
  const tool = new URLSearchParams(location.search).get(
    "tool"
  );
  
  const responseData = responseDataParam
    ? JSON.parse(decodeURIComponent(responseDataParam))
    : null;
  console.warn(responseData, "compress sucess");
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(true);
  useEffect(() => {
    // Add a delay of 2 seconds before starting the download
    const downloadTimer = setTimeout(() => {
      setShowLoadingSpinner(false); // Hide the loading spinner

      // Start the download here
      if (!downloadStarted && responseData) {
        const downloadLink = document.createElement("a");
        downloadLink.href = responseData;
        downloadLink.download = tool+".zip";
        downloadLink.click();
      }
    }, 2000);

    return () => clearTimeout(downloadTimer); // Clear the timer if the component unmounts
  }, [responseData, downloadStarted]);

  const DownloadFiles=()=>{
   
    const downloadLink = document.createElement("a");
    downloadLink.href = responseData;
    downloadLink.download = "resized_images.zip";
    downloadLink.click();
  

}

  return (
   
    <>
     <ToolsHeader></ToolsHeader>
     <div className="H">
     

     <section className=" mb-120 layout-pb-lg section-bg-color mt-80">
       <div
         style={{
           height: "200px",
           width: "auto",
           alignItems: "center",
           justifyContent: "center",
         }}
       >
         <img
           style={{ objectFit: "fill", height: "250px", width: "" }}
           src={gif}
         ></img>
       </div>

       <div className="section-bg-color__item bg-blue-darker -wide">
         <div className="h-1/1 js-rellax">
           <div
             className="bg-image rounded-16 js-lazy"
             style={{ backgroundImage: 'url("../img/home-6/images/bg.png")' }}
           />
         </div>
       </div>

       <div className="container">
         <div className="row justify-center text-center">
           <div className="col-xl-8 col-lg-9 col-md-11">
             <div className="sectionHeading -light">
               <h2 className="sectionHeading__title">
                 Your IMAGES have been {tool}
               </h2>
             </div>
           </div>
         </div>
         <div className="row justify-center pt-60 sm:pt-40">
           <div className="col-xl-9 col-lg-10">
             <p className="text-white opac-80 px-80 lg:px-0 ">
               Your download will start automatically.
             </p>
             {showLoadingSpinner && (
               <div className="spinner-container">
                 <div className="spinner-border text-primary" role="status">
                   <span className="visually-hidden">Loading...</span>
                 </div>
               </div>
             )}
            <button
                 href="/about/about-1"
                 className="button -md rounded-8 -light-accent text-dark mt-20 sm:mb-60"
                 onClick={DownloadFiles}
               >
              Download Resized Images
               </button>
           </div>
         </div>
       </div>
     </section>
     <Footer></Footer>
   </div>
    
    </>
    
   
  );
};

export default SuccessPage;
