        import React, { useState } from "react";
        import * as Icon from "react-feather";

        export default function FaqTwo() {
        const [active, setActive] = useState({
            status: false,
            key: "",
        });

        const handleToggle = (key) => {
            if (active.key === key) {
            setActive({
                status: false,
            });
            } else {
            setActive({
                status: true,
                key,
            });
            }
        };
        return (
            <>
            <section className="layout-pt-sm layout-pb-lg bg-white">
                <div className="container">
                <div className="row justify-center text-center">
                    <div className="col-xl-6 col-lg-7">
                    <div className="sectionHeading ">
                        <h2 className="sectionHeading__title">Have a question?</h2>
                    </div>
                    </div>
                </div>
                <div className="row justify-center pt-60 sm:pt-40">
                    <div className="col-lg-6 col-md-10">
                    <div className="accordion -bordered md:mt-24 js-accordion">
                        <div
                        className={
                            active.key == 1
                            ? "accordion__item is-active"
                            : "accordion__item"
                        }
                        onClick={() => handleToggle(1)}
                        >
                        <div className="accordion__button text-black">
                            <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                            </div>
                            <button
                            className="text-lg md:text-base fw-600 text-black text-start "
                            style={{ height: "46px" }}
                            >
                            {" "}
                            Why is the Convert to WEBP tool important for web
                            developers and designers?
                            </button>
                        </div>
                        <div
                            className="accordion__content"
                            style={
                            active.key == 1 ? { maxHeight: 202 } : { maxHeight: 0 }
                            }
                        >
                            <div
                            className="accordion__content__inner 
                            "
                            >
                            <p>
                                The Convert to WEBP tool allows users to transition
                                their images to the WEBP format, known for its
                                exceptional compression rates and quality retention,
                                making web pages load faster and rank higher in search
                                engine results.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div
                        className={
                            active.key == 2
                            ? "accordion__item is-active"
                            : "accordion__item"
                        }
                        onClick={() => handleToggle(2)}
                        >
                        <div className="accordion__button text-black">
                            <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                            </div>
                            <button
                            className="text-lg md:text-base fw-600 text-black"
                            style={{ height: "46px" }}
                            >
                            How does WEBP compare to traditional formats like JPG or
                            PNG?
                            </button>
                        </div>
                        <div
                            className="accordion__content"
                            style={
                            active.key == 2 ? { maxHeight: 202 } : { maxHeight: 0 }
                            }
                        >
                            <div className="accordion__content__inner">
                            <p>
                                WEBP combines the best of both worlds: it offers
                                lossless compression like PNG, ensuring high quality,
                                and also boasts superior lossy compression techniques
                                like JPG, resulting in smaller file sizes optimal for
                                the web.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div
                        className={
                            active.key == 3
                            ? "accordion__item is-active"
                            : "accordion__item"
                        }
                        onClick={() => handleToggle(3)}
                        >
                        <div className="accordion__button text-black">
                            <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                            </div>
                            <button
                            className="text-lg md:text-base fw-600 text-black  "
                            style={{ height: "46px" }}
                            >
                            When converting to WEBP, do I compromise on image quality?
                            </button>
                        </div>
                        <div
                            className="accordion__content"
                            style={
                            active.key == 3 ? { maxHeight: 202 } : { maxHeight: 0 }
                            }
                        >
                            <div className="accordion__content__inner">
                            <p>
                                While WEBP is designed for high compression, our Convert
                                to WEBP tool ensures a balance between file size and
                                quality. You'll often find that WEBP maintains excellent
                                image clarity even with significant size reductions.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                    <div className="accordion -bordered md:mt-24 js-accordion">
                        <div
                        className={
                            active.key == 8
                            ? "accordion__item is-active"
                            : "accordion__item"
                        }
                        onClick={() => handleToggle(8)}
                        >
                        <div className="accordion__button text-black">
                            <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                            </div>
                            <button
                            className="text-lg md:text-base fw-600 text-black text-start "
                            style={{ height: "46px" }}
                            >
                            Can I process multiple images simultaneously with the
                            Convert to WEBP tool?
                            </button>
                        </div>
                        <div
                            className="accordion__content"
                            style={
                            active.key == 8 ? { maxHeight: 202 } : { maxHeight: 0 }
                            }
                        >
                            <div className="accordion__content__inner">
                            <p>
                                Absolutely! Our tool supports batch conversions,
                                allowing users to efficiently transition multiple images
                                to the WEBP format in one go.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div
                        className={
                            active.key == 9
                            ? "accordion__item is-active"
                            : "accordion__item"
                        }
                        onClick={() => handleToggle(9)}
                        >
                        <div className="accordion__button text-black">
                            <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                            </div>
                            <button
                            className="text-lg md:text-base fw-600 text-black text-start"
                            style={{ height: "46px" }}
                            >
                            Why should I consider WEBP over other image formats for my
                            website?
                            </button>
                        </div>
                        <div
                            className="accordion__content"
                            style={
                            active.key == 9 ? { maxHeight: 202 } : { maxHeight: 0 }
                            }
                        >
                            <div className="accordion__content__inner">
                            <p>
                                Adopting WEBP can lead to faster website loading times,
                                improved user experience, and better SEO rankings. Its
                                advanced compression algorithms make it a go-to choice
                                for modern web design.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div
                        className={
                            active.key == 10
                            ? "accordion__item is-active"
                            : "accordion__item"
                        }
                        onClick={() => handleToggle(10)}
                        >
                        <div className="accordion__button text-black">
                            <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                            </div>
                            <button
                            className="text-lg md:text-base fw-600 text-black text-start"
                            style={{ height: "46px" }}
                            >
                            What are the file size and format guidelines for the
                            Convert to WEBP tool?
                            </button>
                        </div>
                        <div
                            className="accordion__content"
                            style={
                            active.key == 10 ? { maxHeight: 202 } : { maxHeight: 0 }
                            }
                        >
                            <div className="accordion__content__inner">
                            <p>
                                While our tool is versatile in handling various sizes
                                and input formats, it's always recommended to check the
                                platform's specific guidelines for the best conversion
                                results and optimal performance.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </>
        );
        }
