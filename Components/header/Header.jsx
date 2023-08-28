import { useLocation, useNavigate } from "react-router-dom";
import "./header.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/img/logo.svg";
import { useEffect } from "react";
import HomePage from "../../Pages/Home/Home";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState("top");
  const [scrolling, setScrolling] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  
  const navigae = useNavigate();
  const Location = useLocation();
 
  
  const mobileMenuSHow = () => {
    setMobileMenu(true);
   
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolling) {
        setScrolling(true);
      } else if (window.scrollY === 0 && scrolling) {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <div
      className={`header ${scrolling ? "show" : "top"}`&& `header ${mobileMenu ? "mobileView" : ""} ${show}`}
      style={{ color: "white" }}
    >
      <div className="logo">
        <Link>
          {" "}
          <img src={Logo}></img>
        </Link>
      </div>
      <ul className="menuItems "  >
          <Link  to='/' style={{justifyContent:"start",alignSelf:"self-start" ,textDecoration:"none" }}> <li className="menuItem" >Home</li>
          </Link>
        
          <Link  to={"/Blog"} style={{justifyContent:"start",alignSelf:"self-start" ,textDecoration:"none" }}> <li className="menuItem" >Blogs</li>
          </Link>
          <Link  to={"/terms"} style={{justifyContent:"start",alignSelf:"self-start" ,textDecoration:"none" }}> <li className="menuItem" >Services</li>
          </Link>
          <Link  to={"/contacts"} style={{justifyContent:"start",alignSelf:"self-start" ,textDecoration:"none" }}> <li className="menuItem" >Conatct</li>
          </Link>
       
        </ul>
      <div>
        <ul className="menuItems">
          <li className="menuItem">Get The App </li>
          <li className="menuItem">Login</li>
        </ul>
      </div>
      <div className="mobileMenuItems">
          {mobileMenu ? (
            <VscChromeClose
              onClick={() => setMobileMenu(false)}
            ></VscChromeClose>
          ) : (
            <SlMenu onClick={mobileMenuSHow}></SlMenu>
          )}
        </div>
    </div>
  );
};

export default Header;
