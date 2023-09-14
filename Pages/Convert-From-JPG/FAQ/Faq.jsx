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
                      className="text-lg md:text-base fw-600 text-black "
                      style={{ height: "46px" }}
                    >
                      {" "}
                      What's the primary function of the Convert From JPG tool?
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
                        The Convert From JPG tool lets you effortlessly
                        transform JPG images into various other image formats,
                        catering to diverse project requirements or platform
                        compatibilities.
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
                      Why might I need to convert images away from the JPG
                      format?
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
                        While JPG is widely used, some platforms or tasks
                        require lossless formats like PNG for transparency, or
                        formats like WEBP for more efficient web performance.
                        Our tool facilitates such specific needs.
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
                      className="text-lg md:text-base fw-600 text-black "
                      style={{ height: "46px" }}
                    >
                      In converting from JPG, will my image quality be
                      compromised?
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
                        Transitioning from a lossy format like JPG might
                        introduce minimal quality shifts. However, our tool
                        prioritizes the preservation of as much original detail
                        as possible, especially when converting to lossless
                        formats.
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
                    <button className="text-lg md:text-base fw-600 text-black">
                      How many images can I convert simultaneously using the
                      Convert From JPG tool?
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
                        The tool is designed for batch processing, allowing you
                        to efficiently convert multiple JPG images to your
                        desired format in a single go.
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
                    <button className="text-lg md:text-base fw-600 text-black"  style={{ height: "46px" }}>
                      To which formats can I convert my JPG images?
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
                        Our Convert From JPG tool supports a myriad of output
                        formats including PNG, WEBP, TIFF, BMP, and others.
                        Whether for web use, graphic design, or archival
                        purposes, you can choose the format that best fits your
                        needs.
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
                    <button className="text-lg md:text-base fw-600 text-black"  style={{ height: "46px" }}>
                      Are there restrictions on the input JPG file's size or
                      dimensions?
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
                        While the tool can handle a wide range of JPG sizes,
                        there may be an optimal file size range recommended for
                        best performance and speed. Always check the platform's
                        guidelines before initiating the conversion.
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
