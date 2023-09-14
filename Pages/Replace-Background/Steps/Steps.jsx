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
                  How to Replace Background of Image
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
                Head to the 'Replace Image Background' tool and click "Upload" to choose your image. Alternatively, drag and drop your photo into the specified area.

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
                Select New Background
                </h4>
                <p className="mt-10">
                Once your primary image is uploaded, choose or upload a new background image. Alternatively, pick a from our curated pallets of backgrounds.

                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="py-48 px-40  shadow-card br-rounded-32"
                style={{ backgroundColor: "#e5e7eb", height:"340px" }}
              >
                <div className="sectionHeading__subtitle" style={{fill:"white"}}>
                  <span>Step 3</span>
                </div>
                
                <h4 className="text-xl fw-600 lh-15 mt-20">
                Merge & Adjust
                </h4>
                <p className="mt-10">
                Click the "Replace" button and let the AI work its magic. Review the merged result in the preview. Fine-tune placement or blending as needed, then hit "Download" to save your newly crafted image.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
