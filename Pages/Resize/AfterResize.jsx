import React, { useEffect } from "react";
import Header from "../../Components/header/Header";
import gif from "../../public/img/ToolImages/successGif.gif";
import Footer from "../../Components/Footer/Footer";

const Resized = (props) => {
    console.warn("props",props.params.responseData)
  // Use useEffect to trigger the download after 2 seconds
  useEffect(() => {
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(new Blob([props.location.state.responseData], { type: "application/zip" }));
    downloadLink.download = "resized_images.zip";
    
    // Trigger the download after 2 seconds
    const downloadTimeout = setTimeout(() => {
      downloadLink.click();
      clearTimeout(downloadTimeout); // Clear the timeout
    }, 2000); // 2 seconds

    return () => {
      // Clean up resources
      URL.revokeObjectURL(downloadLink.href);
    };
  }, [props.location.state.responseData]);

  return (
    <div className="H">
      <Header></Header>

      <section className=" mb-120 layout-pb-lg section-bg-color mt-80">
        <div style={{ height: "200px", width: "auto" ,alignItems:"center" ,justifyContent:"center"}} >
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
                  Your IMAGES have been resized!
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-center pt-60 sm:pt-40">
            <div className="col-xl-9 col-lg-10">
              {/* Remove the form and add a message */}
              <p className="text-white opac-80 px-80 lg:px-0 mt-20">
                Your download will start automatically in 2 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Resized;
