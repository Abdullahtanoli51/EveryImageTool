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
                      What advantages does the Compress Images tool offer for my
                      digital content?
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
                        The Compress Images tool optimizes your photos for web
                        and mobile use by reducing file size without significant
                        quality loss. This ensures faster page loads, saving
                        bandwidth, and enhancing user experience.
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
                      How does the image compression work without losing
                      quality?
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
                        Our tool employs smart algorithms that selectively
                        reduce image data, ensuring that the perceived visual
                        quality remains nearly unchanged, while the file size is
                        substantially reduced.
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
                      Can I compress multiple images at once?
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
                        Yes, our tool is designed for batch processing, enabling
                        users to compress several images simultaneously,
                        streamlining the optimization process and saving
                        considerable time.
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
                      Which image formats can I compress using this tool?
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
                        The Compress Images tool supports a wide range of
                        popular formats, including JPG, PNG, WEBP, and others,
                        catering to diverse compression needs.
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
                      Why is it essential to compress images for my website or
                      online store?
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
                        Compressed images contribute to faster webpage loading
                        times, leading to improved user engagement, longer site
                        visits, and potentially better SEO rankings. Especially
                        for e-commerce, quick-loading images can translate to
                        better sales.
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
                      How much reduction in file size can I expect with the
                      Compress Images tool?
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
                        The compression rate varies based on the original image
                        and its format. However, users can often achieve
                        substantial size reductions, sometimes up to 70-90%,
                        without noticeable quality degradation.
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
  );1
}
