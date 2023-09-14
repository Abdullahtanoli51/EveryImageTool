export default function Steps() {
  return (
    <>
      <section className=" bg-white  my-60 py-80 pb-80 ">
        <div className="section " />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="sectionHeading ">
                <h2
                  className="sectionHeading__title"
                  style={{ fontSize: "44px" }}
                >
                  How to Convert the Image To JPG
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
                  Select Your Image
                </h4>
                <p className="mt-10">
                  Navigate to the 'Convert to JPG' tool. Click on "Upload" or
                  simply drag and drop the image you want to convert into the
                  designated area.
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
                  Set Preferences (Optional)
                </h4>
                <p className="mt-10">
                  Before conversion, adjust any image quality or resolution
                  settings if available and desired.
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
                  Convert & Download
                </h4>
                <p className="mt-10">
                  Click the "Convert" button. Once the process is complete,
                  preview your new JPG image, and then click "Download" to save
                  it to your device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
