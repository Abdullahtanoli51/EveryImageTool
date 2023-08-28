
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ToolsHeader from '../../Components/toolsheader/ToolsHeader';
import Footer from '../../Components/Footer/Footer';
import { useEffect } from 'react';

export default function BlogDetails() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when it loads
      }, []);
    return (
        <>    
        <ToolsHeader></ToolsHeader>   
                <div className='H'>
                    <section className=" pb-120 lg:pt-80 lg:pb-100 lg:pt-60 md:pb-60">
                        <div className="container pt-100 sm:pt-60">
                            <div className="row justify-center text-center">
                                <div className="col-xl-7 col-lg-9">
                                    <div className="d-flex items-center direction-column">
                                        <div>
                                            <h1 className="sectionHeading__title ">The best remote UX and UI design</h1>
                                        </div>
                                        <div className="row items-center y-gap-10 x-gap-10 pt-20">
                                            <div className="col-auto">
                                                <a href="#" className="decoration-none">Ronald Tufan</a>
                                            </div>
                                            <div className="col-auto">
                                                <span className="d-block size-4 rounded-full bg-font-dark" />
                                            </div>
                                            <div className="col-auto">
                                                <a href="#" className="decoration-none">July 20, 2022</a>
                                            </div>
                                            <div className="col-auto">
                                                <span className="d-block size-4 rounded-full bg-font-dark" />
                                            </div>
                                            <div className="col-auto">
                                                <a href="#" className="d-flex items-center decoration-none">
                                                    <Icon.MessageCircle className="icon size-16 mr-4" />
                                                    22
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="ratio ratio-16:9 bg-image js-lazy loaded" style={{ backgroundImage: 'url("../img/blog/single-page/bg.jpg")' }} />
                    </section>
                    <section className="layout-pt-lg sm:pt-40 layout-pb-lg relative js-pin-container" data-pin="onCenter">
                        <div className="container">
                            <div className="blogSocials js-pin-content">
                                <div className="row y-gap-10 d-flex direction-column text-center">
                                    <div className="col-12">
                                        <a href="#" className="text-dark-1">
                                            <i className="fa fa-facebook" aria-hidden="true" />
                                        </a>
                                    </div>
                                    <div className="col-12">
                                        <a href="#" className="text-dark-1">
                                            <i className="fa fa-twitter" aria-hidden="true" />
                                        </a>
                                    </div>
                                    <div className="col-12">
                                        <a href="#" className="text-dark-1">
                                            <i className="fa fa-instagram" aria-hidden="true" />
                                        </a>
                                    </div>
                                    <div className="col-12">
                                        <a href="#" className="text-dark-1">
                                            <i className="fa fa-linkedin" aria-hidden="true" />
                                        </a>
                                    </div>
                                    <div className="col-12 mt-10">
                                        <p className="blogSocials__text fw-600 text-dark-1">Share</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blogSection">
                                <div className="blogCard">
                                    <div className="row justify-center">
                                        <div className="col-xl-8 col-lg-9 col-md-11">
                                            <div className="blogCard__content">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    <br /><br />
                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                                </p>
                                                <h4 className="text-xl fw-600 mt-60">This is a secondary heading</h4>
                                                <p className="mt-20">Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.</p>
                                                <div className="py-24 pl-100 md:pl-80 sm:px-32 border-left-2-accent text-center mt-60 md:mt-40">
                                                    <div>
                                                        <i className="icon icon-quote" />
                                                    </div>
                                                    <div className="text-dark-1 fw-600 italic text-2xl lh-17">
                                                        The template is really nice and offers quite a large set of options. It's beautiful and the coding is done quickly and seamlessly. Thank you!
                                                    </div>
                                                </div>
                                                <p className="mt-60 md:mt-40">
                                                    Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                                                    <br /><br />
                                                    Ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 pt-60 md:pt-40">
                                            <div className="row y-gap-32">
                                                <div className="col-sm-6">
                                                    <img src="/img/blog/single-page/1.jpg" alt="image" className="initial-img rounded-8" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <img src="/img/blog/single-page/2.jpg" alt="image" className="initial-img rounded-8" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-lg-9 col-md-11 pt-60 md:pt-40">
                                            <div className="blogCard__content">
                                                <h4 className="text-xl fw-600">This is a secondary heading</h4>
                                                <p className="mt-20">Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.</p>
                                                <h4 className="text-xl fw-600 mt-60">Do something that keeps you live</h4>
                                                <p className="mt-20">Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                
                               
                            </div>
                        </div>
                    </section>
                    <section className="layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-auto">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>Keep reading...</span>
                                        </div>
                                        <h2 className="sectionHeading__title">You may also like</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row y-gap-32 pt-60 sm:pt-40">
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                    <Link href="blog-details" className="ratio ratio-37:25">
                                            <img className="absolute-full-center object-fit-cover rounded-8" src="/img/blog/single/1.jpg" alt="image" />
                                           
                                        </Link>
                                        <div className="mt-20">
                                            <a href="#" className="d-block decoration-none mb-8">November 23, 2023</a>
                                            <h3 className="text-xl lh-16 fw-600">Problems everyone has when working remotely and how to solve them</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                    <Link href="blog-details" className="ratio ratio-37:25">
                                            <img className="absolute-full-center object-fit-cover rounded-8" src="/img/blog/single/2.jpg" alt="image" />
                                           
                                        </Link>
                                        <div className="mt-20">
                                            <a href="#" className="d-block decoration-none mb-8">November 23, 2023</a>
                                            <h3 className="text-xl lh-16 fw-600">The best remote UX and UI design conferences to attend in 2020</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                        <Link href="blog-details" className="ratio ratio-37:25">
                                            <img className="absolute-full-center object-fit-cover rounded-8" src="/img/blog/single/3.jpg" alt="image" />
                                            
                                        </Link>
                                        <div className="mt-20">
                                            <a href="#" className="d-block decoration-none mb-8">November 23, 2023</a>
                                            <h3 className="text-xl lh-16 fw-600">How can you help your team transition to remote with this</h3>
                                        </div>
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