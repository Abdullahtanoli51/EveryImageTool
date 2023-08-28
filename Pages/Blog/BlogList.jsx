import Footer from "../../Components/Footer/Footer";
import ToolsHeader from "../../Components/toolsheader/ToolsHeader";
import BlogStyleThree from "./BlogStyle";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Cta from "../Compress/Cat/Cat";

export default function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when it loads
      }, []);
  return (
    <>
      <ToolsHeader></ToolsHeader>

      <div className="H  " style={{overflow:"hidden"}}>
        <section className="page-header -base -dark pt-100 sm:pt-0">
          
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-xl-4 col-lg-9 col-md-10">
                <div>
                  <div>
                    <h1 className="sectionHeading__title">
                      Blog Styles
                    </h1>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" layout-pb-lg">
          <div className="container">
            <BlogStyleThree />
            <div className="row justify-center pt-60 sm:pt-40">
              <div className="col-auto">
                <button
                  className="button -md -accent -uppercase text-white"
                  data-loadmore-trigger=".js-loadmore-content"
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </section>
       <Cta></Cta>
        <Footer></Footer>
      </div>
      
    </>
  );
}
