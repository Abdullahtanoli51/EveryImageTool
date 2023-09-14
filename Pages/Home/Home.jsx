import Header from "../../Components/header/Header";

import Tools from "./Tools/Tools";
import Hero from "./hero/Hero";
import "./Home.scss";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import Cta from "../Compress/Cat/Cat";
import ToolsHeader from "../../Components/toolsheader/ToolsHeader";
import Hero1 from "./hero1/Hero";
import HtmlToImageApp from "../Html-to-Image/HtmlToImage";
import CompressSection from "./sections/CompressSection";
import ReplaceBackground from "./sections/ReplaceBackground";
import ImageResizer from "./sections/ImageResizer";
import RemoveBackgroundSection from "./sections/RemoveBackgroundSection";
import CtaHome from "../Compress/Cat/Cat";
import ReplaceBackgroundSection from "./sections/ReplaceBackground";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when it loads
  }, []);
  return (
    <div className="">
      <ToolsHeader></ToolsHeader>
      <div className="Home">
        <Hero1></Hero1>
        <Tools></Tools>

       <ReplaceBackgroundSection></ReplaceBackgroundSection>
        <RemoveBackgroundSection></RemoveBackgroundSection>
        <ImageResizer></ImageResizer>
        <CompressSection></CompressSection>
        <CtaHome></CtaHome>
        <Footer></Footer>
      </div>
    </div>
  );
}
