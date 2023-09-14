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
                Batch Upload Images
                </h4>
                <p className="mt-10">
                Navigate to the 'Bulk Image Resizer' tool. Click "Upload" to select multiple images or drag and drop your image batch directly into the designated area.

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
                Set Resize Parameters
                </h4>
                <p className="mt-10 ">
                Specify the desired dimensions, either by percentage or exact pixel values. Choose whether you want to maintain the aspect ratio to ensure consistent resizing across all images.

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
                Resize & Retrieve
                </h4>
                <p className="mt-10">
                Click the "Resize" button to process all selected images. Once resized, you can preview the results and then click "Download All" to save the batch of resized images onto your device.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
