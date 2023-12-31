
import * as Icon from 'react-feather';
import ToolsHeader from '../../Components/toolsheader/ToolsHeader';
import Footer from '../../Components/Footer/Footer';
import { useEffect } from 'react';
export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when it loads
      }, []);
    return (
        <>
         <ToolsHeader></ToolsHeader>
                <div className='H' style={{overflow:"hidden"}}>
                    <section className="page-header -base - pt-100 sm:pt-0">
                       
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-lg-9 col-md-10">
                                    <div>
                                        <h1 className="sectionHeading__title " >Contact us</h1>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    <section className=" pt-40 layout-pb-sm">
                        <div className="container">
                            <div className="row g-0 y-gap-48 row-dividers-dark">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="d-flex direction-column text-center px-48">
                                        <h3 className="text-22 fw-600">London</h3>
                                        <p className="mt-16">328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                                        <a className="text-16 fw-600 mt-20" href="#">+(1) 123 456 7890</a>
                                        <a className="text-16 fw-600 mt-20" href="#">hi@sassio.com</a>
                                        <a className="buttom -simple text-accent fw-600 mt-20" href="#">Open Google Map</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="d-flex direction-column text-center px-48">
                                        <h3 className="text-22 fw-600">New York</h3>
                                        <p className="mt-16">328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                                        <a className="text-16 fw-600 mt-20" href="#">+(1) 123 456 7890</a>
                                        <a className="text-16 fw-600 mt-20" href="#">hi@sassio.com</a>
                                        <a className="buttom -simple text-accent fw-600 mt-20" href="#">Open Google Map</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="d-flex direction-column text-center px-48">
                                        <h3 className="text-22 fw-600">Istanbul</h3>
                                        <p className="mt-16">328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                                        <a className="text-16 fw-600 mt-20" href="#">+(1) 123 456 7890</a>
                                        <a className="text-16 fw-600 mt-20" href="#">hi@sassio.com</a>
                                        <a className="buttom -simple text-accent fw-600 mt-20" href="#">Open Google Map</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-auto">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>message</span>
                                        </div>
                                        <h2 className="sectionHeading__title">Tell us about yourself</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-center pt-60 sm:pt-40">
                                <div className="col-lg-10">
                                    <form action="post" className="contact-form row y-gap-40">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="Full Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Your Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="subject" placeholder="Your Subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="phone" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea name="message" rows={4} placeholder="Message" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <div className="form-checkbox">
                                                    <div className="checkbox">
                                                        <input type="checkbox" />
                                                        <div className="checkbox__mark">
                                                            <Icon.Check className="checkbox__icon" />
                                                        </div>
                                                    </div>
                                                    <label htmlFor="items">
                                                        I am bound by the terms of the Service I accept Privacy Policy.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <button className="button -md -accent -uppercase text-white">Send Your Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                   
                    <section className=" pt-40 layout-pb-lg">
                        <div className="container">
                            <div className="row g-0 y-gap-40 row-dividers-dark">
                                <div className="col-sm-6">
                                    <div className="d-flex direction-column text-center px-60 md:px-30">
                                        <div>
                                            <img src="/img/contact/1/laptop-2.svg" alt="Icon" />
                                        </div>
                                        <h3 className="text-xl fw-600 mt-16">Sales Support</h3>
                                        <p className="mt-16">Looking for a custom quote? need to tell us more about your project? or want a demonstration? drop us a line to <a className="text-accent underline" href="#">contact@sassio.com</a></p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex direction-column text-center px-60 md:px-30">
                                        <div>
                                            <img src="/img/contact/1/laptop-1.svg" alt="Icon" />
                                        </div>
                                        <h3 className="text-xl fw-600 mt-16">Technical Support</h3>
                                        <p className="mt-16">Looking for a custom quote? need to tell us more about your project? or want a demonstration? drop us a line to <a className="text-accent underline" href="#">contact@sassio.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer></Footer>
                </div>

       

        </>
    )
}