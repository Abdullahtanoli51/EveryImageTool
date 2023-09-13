import { Link, useNavigate } from "react-router-dom";
import * as Icon from "react-feather";
import Logo from "../../public/img/logo.svg";
import "./Footer.scss";

export default function Footer() {
  const Navigate = useNavigate();
  return (
    <>
      <footer
        className="footer -type-3"
        style={{ backgroundColor: "black", color: "white", width: "100%" }}
      >
        <div className="footer__top">
          <div className="container">
            <div className="row y-gap-48 justify-content-between">
              <div className="col-lg-4 col-sm-6">
                <div className="footer__item">
                  <div className="footer__logo ">
                    <img src={Logo} alt="logo" />
                  </div>
                  <div className="y-gap-32 pt-30">
                    <div>
                      <div className="text-lg opac-50">
                        Toll Free Customer Care
                      </div>
                      <div className="text-xl fw-600">+(1) 123 456 7890</div>
                    </div>
                    <div>
                      <div className="text-lg opac-50">Need live support?</div>
                      <div className="text-xl fw-600">hi@sassio.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="footer__item">
                  <h3 className="text-xl lh-1 fw-600">Links</h3>
                  <div className="footer__content y-gap-10 mt-40">
                    <div className="footer__content__item">
                      <button
                        className="decoration-none text-primary"
                        onClick={() => Navigate("/")}
                      >
                        Home
                      </button>
                    </div>
                    <div className="footer__content__item">
                      <button
                        className="decoration-none text-primary"
                        onClick={() => Navigate("/blog")}
                      >
                        Blog
                      </button>
                    </div>
                    

                    <div className="footer__content__item">
                      <button
                        className="decoration-none text-primary"
                        onClick={() => Navigate("/contacts")}
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer__item">
                  <h3 className="footer__title text-xl lh-1 fw-600">Legal</h3>
                  <div className="footer__content y-gap-10 mt-40">
                  <div className="footer__content__item">
                      <button
                        className="decoration-none text-primary"
                        onClick={() => Navigate("/terms")}
                      >
                        Terms
                      </button>
                    </div>
                    <div className="footer__content__item">
                      <button
                        className="decoration-none text-primary"
                        onClick={() => Navigate("/terms")}
                      >
                        Use Of Terms
                      </button>
                    </div>
                    <div className="footer__content__item">
                      <button
                        className="decoration-none text-primary"
                        onClick={() => Navigate("/terms")}
                      >
                        Privacy Policy
                      </button>
                    </div>

                   
                   
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="y-gap-48">
                  <div className="footer__socials">
                    <h3 className="text-xl lh-1 fw-600">Follow Us</h3>
                    <div
                      className="socials mt-40 "
                      style={{ justifyContent: "center" }}
                    >
                      <div>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="footer__title text-xl lh-1 fw-600">
                      Subscribe
                    </h3>
                    <div className="footer__content mt-24">
                      <div className="footer__newsletter form-newsletter -simple">
                        <form action="POST">
                          <div className="form-group">
                            <input
                              className="rounded-200 bg-light-4"
                              placeholder="Your Email"
                              type="email"
                            />
                            <button
                              className="button -red-2 text-white ml-10"
                              type="submit"
                            >
                              <Icon.ArrowRight className="icon size-20" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-center py-30 mt-40">
              <div className="col-auto">
                <div className="footer__bottom_text">
                  
                  © Copyright 2023. Lorem Ipsum - with ❤️ by <Link to="https://devlints.com/" target="_blank" style={{textDecoration:"none"}}>Devlints</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
