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
                  How To Convert The Image To PNG
                </h2>
              </div>
            </div>
          </div>
          <div className="row y-gap-32 pt-30 sm:pt-40">
            <div className="col-lg-4 col-sm-6">
              <div
                className="py-48 px-40  shadow-card br-rounded-32"
                style={{ backgroundColor: "#e5e7eb", height: "340px" }}
              >
                <div
                  className="sectionHeading__subtitle"
                  style={{ fill: "white" }}
                >
                  <span>Step 1</span>
                </div>

                <h4 className="text-xl fw-600 lh-15 mt-20">
                  Choose Your Image
                </h4>
                <p className="mt-10">
                  Go to the 'Convert to PNG' section. Click "Upload" to select
                  your desired image, or drag and drop it directly into the
                  highlighted area.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="py-48 px-40  shadow-card br-rounded-32"
                style={{ backgroundColor: "#e5e7eb", height: "340px" }}
              >
                <div
                  className="sectionHeading__subtitle"
                  style={{ fill: "white" }}
                >
                  <span>Step 2</span>
                </div>

                <h4 className="text-xl fw-600 lh-15 mt-20">
                  Adjust Settings (Optional)
                </h4>
                <p className="mt-10">
                  Fine-tune any image settings like resolution or compression
                  rate if provided and needed.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="py-48 px-40  shadow-card br-rounded-32"
                style={{ backgroundColor: "#e5e7eb", height: "340px" }}
              >
                <div
                  className="sectionHeading__subtitle"
                  style={{ fill: "white" }}
                >
                  <span>Step 3</span>
                </div>

                <h4 className="text-xl fw-600 lh-15 mt-20">
                  Initiate & Retrieve
                </h4>
                <p className="mt-10">
                  Press the "Convert" button and let the tool process your
                  image. Once converted, take a quick look in the preview window
                  and then hit "Download" to get your image in PNG format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
