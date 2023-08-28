import Footer from "../../Components/Footer/Footer";
import ToolsHeader from "../../Components/toolsheader/ToolsHeader";
import { useEffect } from "react";

export default function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when it loads
      }, []);
    return (
        <>
        <ToolsHeader></ToolsHeader>
          
                <div className="H  " style={{overflow:"hidden"}}>
                    <section className="page-header -base - pt-120 sm:pt-0">
                       
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-lg-9 col-md-10">
                                    <div>
                                        <h1 className="sectionHeading__title">Terms and Conditions</h1>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    <section className="pt-20 layout-pb-lg">
                        <div className="container">
                            <div className="row y-gap-40 justify-center">
                                <div className="col-xl-10 col-lg-11">
                                    <h3 className="text-22 fw-600">1. Terms</h3>
                                    <p className="mt-24">
                                        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
                                        <br /><br />
                                        Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
                                    </p>
                                </div>
                                <div className="col-xl-10 col-lg-11">
                                    <h3 className="text-22 fw-600">2. Limitations</h3>
                                    <p className="mt-24">
                                        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
                                        <br /><br />
                                        Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
                                    </p>
                                </div>
                                <div className="col-xl-10 col-lg-11">
                                    <h3 className="text-22 fw-600">3. Revisions and Errata</h3>
                                    <p className="mt-24">
                                        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
                                        <br /><br />
                                        Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
                                    </p>
                                </div>
                                <div className="col-xl-10 col-lg-11">
                                    <h3 className="text-22 fw-600">4. Site Terms of Use Modifications</h3>
                                    <p className="mt-24">
                                        Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously. Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                <Footer></Footer>

                    
                </div>
        
        </>
    )
}