
import * as Icon from 'react-feather';

export default function Cta() {
    return (
        <>
            <section className="pt-80 pb-80   mb-60 card rounded-30 border-0  w-auto   " style={{margin:"3rem" ,backgroundColor:"#b19fdf",zIndex:"-10"}}>
                <div className="absolute-full-center px-60 lg:px-24 sm:px-0 ">
                    <div className="bg-image rounded-30 js-lazy "  />
                </div>
                <div className="shape -bottom -right--40 z-5 float-animation-sm lg:d-none">
                    <img src="/img/home-10/cta/Saly-14.png" alt="image" />
                </div>
                <div className="container relative z-">
                    <div className="row y-gap-48 justify-between md:justify-center items-center">
                        <div className="col-xl-4 col-lg-3 col-md-6">
                            <div className="atropos -no-shadow js-atropos">
                                <div className="atropos-scale">
                                    <div className="atropos-rotate">
                                        <div className="atropos-inner overflow-visible d-flex justify-end">
                                            <img className="initial-img" src="/img/home-10/cta/cart.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div>
                                <div className="sectionHeading ">
                                    <h2 className="sectionHeading__title ">Open a Sassio account <br className="md:d-none" />in a few minutes</h2>
                                </div>
                                <p className="mt-4">Join the more than 400,000 users</p>
                                
                                <div className="row y-gap-10 px-120 sm:px-0 mt-32">
                                    <div className="col-auto  ">
                                        <a href="#" className="button -store bg-dark-2 text-white">
                                            <div className="button__icon">
                                                <img src="/img/home-1/icons/apple.svg" alt="icon" />
                                            </div>
                                            <div className="button__content text-white">
                                                <div>Download on the</div>
                                                <div>Apple Store</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-auto">
                                        <a href="#" className="button -store bg-dark-2 text-white">
                                            <div className="button__icon">
                                                <img src="/img/home-1/icons/google.svg" alt="icon" />
                                            </div>
                                            <div className="button__content text-white">
                                                <div>Get in on</div>
                                                <div>Google Play</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
