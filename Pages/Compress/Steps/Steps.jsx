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
                  How to Compress the Image
                </h2>
              </div>
            </div>
          </div>
          <div className="row y-gap-32 pt-30 sm:pt-40">
            <div className="col-lg-4 col-sm-6">
              <div
                className="py-48 px-40  shadow-card br-rounded-32"
                style={{ backgroundColor: "#e5e7eb" , height:"340px" }}
              >
                <div className="sectionHeading__subtitle" style={{fill:"white"}}>
                  <span>Step 1</span>
                </div>
                
                <h4 className="text-xl fw-600 lh-15 mt-20">
                Select Multiple Images
                </h4>
                <p className="mt-10">
                Head to the 'Bulk Image Compressor' section. Click "Upload" and choose the images you'd like to compress, or drag and drop your batch of images directly into the highlighted area.

                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="py-48 px-40  shadow-card br-rounded-32"
                style={{ backgroundColor: "#e5e7eb" , height:"340px" }}
              >
                <div className="sectionHeading__subtitle" style={{fill:"white"}}>
                  <span>Step 2</span>
                </div>
                
                <h4 className="text-xl fw-600 lh-15 mt-20">
                Adjust Compression Settings
                </h4>
                <p className="mt-10">
                Define your preferred compression ratio or quality setting, ensuring the right balance between file size reduction and image quality retention.


                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="py-48 px-40  shadow-card br-rounded-32"
                style={{ backgroundColor: "#e5e7eb" , height:"340px" }}
              >
                <div className="sectionHeading__subtitle" style={{fill:"white"}}>
                  <span>Step 3</span>
                </div>
                
                <h4 className="text-xl fw-600 lh-15 mt-20">
                Compress & Download
                </h4>
                <p className="mt-10">
                Hit the "Compress" button to begin batch processing. After compression, review the reduced file sizes and then select "Download All" to retrieve your optimized images.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
