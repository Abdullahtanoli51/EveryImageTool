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
                    Why is watermarking my images crucial for online sharing?

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
                    Watermarking protects your digital assets. By adding a watermark, you deter unauthorized use or redistribution, ensuring your images remain distinctively yours even when shared widely on the web.

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
                    className="text-lg md:text-base fw-600 text-black text-start"
                    style={{ height: "46px" }}
                    >
                   Does the Watermark Images tool support both text and logo watermarks?

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
                    Yes, our tool is versatile, allowing users to add either text-based watermarks or use their logos, catering to personal and brand-oriented watermarking needs.

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
                    className="text-lg md:text-base fw-600 text-black  text-start "
                    style={{ height: "46px" }}
                    >
                   How can I ensure that my watermark doesn't overpower the main image?

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
                    The Watermark Images tool offers adjustable opacity, positioning, and size controls, ensuring your watermark complements rather than overwhelms the primary content.

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
                    Can I watermark multiple images at once with this tool?

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
                    Absolutely! Our tool is built for batch processing, letting users efficiently watermark a series of images in a single step, making it ideal for large galleries or collections.

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
                   Are there recommended sizes or formats for the images I want to watermark?

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
                    The Watermark Images tool supports a wide range of popular formats, including JPG, PNG, and WEBP. While it's versatile in handling diverse sizes, always check platform-specific guidelines for optimal outcomes.

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
                    If I need to remove or adjust a watermark, is that possible post-processing?

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
                    While the primary function is to add watermarks, edits post-watermarking would require image editing tools. It's always recommended to save an original, unmarked copy of your image for future adjustments.

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
