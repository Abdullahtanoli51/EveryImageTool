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
                  How to Create Stunning Profile Image
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
                Begin with an Image
                </h4>
                <p className="mt-10">
                Navigate to the 'Profile Image Maker' tool. Click "Upload" to choose your preferred photo or drag and drop it into the designated area.

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
                Customize & Edit
                </h4>
                <p className="mt-10">
                Choose background color from preset color pallets and sizes tailored for specific platforms (e.g., Facebook, LinkedIn) or customize your dimensions.

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
                Save & Share
                </h4>
                <p className="mt-10">
                Once you've crafted your ideal profile image, click "Download" to save it to your device. Now, it's ready for upload to your favorite social media or professional platforms!

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
