export default function Steps() {
  return (
    <>
      <section className=" bg-white  my-60 py-80 pb-80 ">
        <div className="section " />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="sectionHeading ">
                <h2 className="sectionHeading__title" style={{ fontSize: "44px" }}>
                  How to Convert the Image To WEBP
                </h2>
              </div>
            </div>
          </div>
          <div className="row y-gap-32 pt-30 sm:pt-40">
            <div className="col-lg-4 col-sm-6">
              <div
                className="py-48 px-40  shadow-card br-rounded-32"
                style={{ backgroundColor: "#e5e7eb"  ,height:"340px" }}
              >
                <div
                  className="sectionHeading__subtitle"
                  style={{ fill: "white" }}
                >
                  <span>Step 1</span>
                </div>

                <h4 className="text-xl fw-600 lh-15 mt-20">
                Upload Your Desired Image
                </h4>
                <p className="mt-10">
                In the 'Convert to WEBP' section, click "Upload" or conveniently drag and drop your image into the allotted space.

                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="py-48 px-40  shadow-card br-rounded-32"
                style={{ backgroundColor: "#e5e7eb" ,height:"340px" }}
              >
                <div
                  className="sectionHeading__subtitle"
                  style={{ fill: "white" }}
                >
                  <span>Step 2</span>
                </div>

                <h4 className="text-xl fw-600 lh-15 mt-20">
                Fine-Tune Conversion Options (Optional)
                </h4>
                <p className="mt-10">
                Prior to conversion, adjust any specific parameters like quality, lossless compression, or animation settings if available.

                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="py-48 px-40  shadow-card br-rounded-32"
                style={{ backgroundColor: "#e5e7eb"  ,height:"340px" }}
              >
                <div
                  className="sectionHeading__subtitle"
                  style={{ fill: "white" }}
                >
                  <span>Step 3</span>
                </div>

                <h4 className="text-xl fw-600 lh-15 mt-20">
                Start Conversion & Grab
                </h4>
                <p className="mt-10">
                Hit the "Convert" button to initiate the process. Upon completion, preview the converted WEBP image, then simply click "Download" to save it onto your device.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
