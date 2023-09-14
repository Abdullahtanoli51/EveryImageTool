import React from "react";
import "./Toolsheader.scss";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../public/img/logo.svg";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ToolsHeader = () => {

  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavBar = () => {
    if (window.scrollY >10) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
      setScrollActive(true);
    } else {
      setShow("top");
      setScrollActive(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [lastScrollY]);

  const mobileMenuSHow = () => {
    setMobileMenu(true);
  };

  return (
    <header
      className={`Toolsheader ${mobileMenu ? "mobileView" : ""} ${show} ${
        scrollActive ? "scroll-active" : ""
      }`}
      style={{ color: scrollActive ? "white" : "black" }}
    >
     
        <div className="logo">
          <Link to="/"><img src={logo} alt=""></img></Link>
        </div>

        <ul className="menuItems "  >
          <Link  to='/remove-background' style={{justifyContent:"start",alignSelf:"self-start" ,textDecoration:"none" }}> <li className="menuItem" >Remove Bg</li>
          </Link>
          <Link  to='/replace-background' style={{justifyContent:"start",alignSelf:"self-start" ,textDecoration:"none" }}> <li className="menuItem" >Replace Bg</li>
          </Link>
          <Link  to='/image-compressor' style={{justifyContent:"start",alignSelf:"self-start" ,textDecoration:"none" }}> <li className="menuItem" >Compress</li>
          </Link>
          <Link  to='/image-resizer' style={{justifyContent:"start",alignSelf:"self-start" ,textDecoration:"none" }}> <li className="menuItem" >Resize</li>
          </Link>
          <Link  to='/convert-to-jpg' style={{justifyContent:"start",alignSelf:"self-start" ,textDecoration:"none" }}> <li className="menuItem" >Convert to JPG</li>
          </Link>
         
         
        </ul>
        <ul className="menuItems" style={{marginLeft:"13rem"}}>
         
        
         
          
          <Link  to={"/terms"} style={{justifyContent:"start",alignSelf:"self-start" ,textDecoration:"none" }}> <li className="menuItem" >Terms</li>
          </Link>
          <Link  to={"/contacts"} style={{justifyContent:"start",alignSelf:"self-start" ,textDecoration:"none" }}> <li className="menuItem" >Conatct</li>
          </Link>
          <Link  to={"/login"} style={{justifyContent:"start",alignSelf:"self-start" ,textDecoration:"none" }}> <li className="menuItem" >Sign In</li>
          </Link>
          <Link  to='/' style={{justifyContent:"start",alignSelf:"self-start" ,textDecoration:"none" }}> <li className="menuItem" >Get The App</li>
          </Link>
          
       
        </ul>
        

        <div className="mobileMenuItems">
          {mobileMenu ? (
            <VscChromeClose
              onClick={() => setMobileMenu(false)}
            ></VscChromeClose>
          ) : (
            <SlMenu onClick={mobileMenuSHow}></SlMenu>
          )}
        </div>
      
      
    </header>
  );
};
export default ToolsHeader;
