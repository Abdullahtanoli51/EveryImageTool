export default function Steps() {
  return (
    <>
      <section className=" bg-white  my-60 py-80 pb-80 ">
        <div className="section " />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="sectionHeading ">
              <h2 className="sectionHeading__title">
                 How To Add Watermark On Image
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
                Upload Your Image Set
                </h4>
                <p className="mt-10">
                Journey to the 'Bulk Watermark Images' tool. Click "Upload" to select the images you wish to watermark, or drag and drop your collection directly into the specified zone.

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
                Design & Position Your Watermark
                </h4>
                <p className="mt-10">
                Craft your watermark text or upload a logo. Adjust opacity, size, and position to fit seamlessly across all images. Decide whether you want a centered, cornered, or tiled watermark placement.

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
                Apply & Retrieve
                </h4>
                <p className="mt-10">
                Press the "Watermark" button to process your batch. After adding the watermark, you can preview each image for consistency and then click "Download All" to save your watermarked images.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
