import Header from "../../Components/header/Header";
import CreativeVisionOne from "./CreativeVision/CreativeVision";
import Reliability from "./CustomDesign/design";
import Tools from "./Tools/Tools";
import CreativeProcessOne from "./creativeProcess/CreativeProcess";
import Hero from "./hero/Hero";
import ImageComparison from "./templates/ImageComparison";
import "./Home.scss";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import Cta from "../Compress/Cat/Cat";
import ToolsHeader from "../../Components/toolsheader/ToolsHeader";
import Hero1 from "./hero1/Hero";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when it loads
  }, []);
  return (
    <div className="" >
    <ToolsHeader></ToolsHeader>
      <div className="Home">
      <Hero1></Hero1>
      <Tools></Tools>
      <CreativeVisionOne></CreativeVisionOne>
      <CreativeProcessOne></CreativeProcessOne>
      <Reliability></Reliability>
      <ImageComparison></ImageComparison>
      <Cta></Cta>
      <Footer></Footer>

      </div>

      
    </div>
  );
}
