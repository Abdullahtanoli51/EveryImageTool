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
                  How to Resize the Image
                </h2>
              </div>
            </div>
          </div>
          <div className="row y-gap-32 pt-30 sm:pt-40">
            <div className="col-lg-4 col-sm-6">
              <div
                className="py-48 px-40  shadow-card br-rounded-32"
                style={{ backgroundColor: "#e5e7eb",height:"340px" }}
              >
                <div className="sectionHeading__subtitle" style={{fill:"white"}}>
                  <span>Step 1</span>
                </div>
                
                <h4 className="text-xl fw-600 lh-15 mt-20">
                Upload Your Image
                </h4>
                <p className="mt-10">
                Navigate to the 'Image Background Remover' section and click on the "Upload" button to select the desired image from your device or drag and drop it into the designated area.

                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="py-48 px-40  shadow-card br-rounded-32"
                style={{ backgroundColor: "#e5e7eb",height:"340px" }}
              >
                <div className="sectionHeading__subtitle" style={{fill:"white"}}>
                  <span>Step 2</span>
                </div>
                
                <h4 className="text-xl fw-600 lh-15 mt-20">
                Process with AI
                </h4>
                <p className="mt-10 ">
                Once uploaded, click the "Remove Background" button. Our AI will automatically detect and isolate the subject, removing the background seamlessly.

                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="py-48 px-40  shadow-card br-rounded-32"
                style={{ backgroundColor: "#e5e7eb" ,height:"340px"}}
              >
                <div className="sectionHeading__subtitle" style={{fill:"white"}}>
                  <span>Step 3</span>
                </div>
                
                <h4 className="text-xl fw-600 lh-15 mt-20">
                Download & Save
                </h4>
                <p className="mt-10">
                Review the processed image in the preview section. If satisfied, click the "Download" button to save the image with the background removed to your device. If needed, make any additional edits or adjustments using our other available tools.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
