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
                      How does the Replace Image Background tool differ from a
                      simple background remover?
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
                        While both tools efficiently remove backgrounds, the
                        Replace Image Background tool goes a step further by
                        allowing users to immediately insert a new backdrop, be
                        it a solid color, gradient, or a different photo,
                        enhancing the image's overall appeal.
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
                      Can I use the Replace Image Background tool for professional projects?

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
                      Certainly! The tool is ideal for photographers, graphic designers, and advertisers who wish to swap backgrounds for specific themes, campaigns, or client preferences, ensuring a high-quality, professional finish.

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
                     How accurate is the AI in detecting intricate details during background replacement?

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
                      Our Replace Image Background tool leverages state-of-the-art AI algorithms to meticulously differentiate and preserve intricate details, such as hair strands, ensuring a natural and seamless transition between the subject and the new background.

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
                    Are there predefined backgrounds available in the tool, or do I need to upload my own?

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
                      While users have the flexibility to upload their preferred backgrounds, the tool also offers a curated collection of backgrounds to select from, catering to various themes and preferences.

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
                    <button className="text-lg md:text-base fw-600 text-black">
                    Does the Replace Image Background tool support batch processing?

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
                      Currently, the tool is optimized for individual image precision. However, always check the latest features and updates on our platform for enhancements in batch processing capabilities.

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
                    <button className="text-lg md:text-base fw-600 text-black">
                    What file formats are compatible with the Replace Image Background tool?

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
                      Our tool accommodates a wide range of popular image formats, including JPG, PNG, and WEBP. For best results and compatibility, always ensure your images align with the recommended format and size guidelines.

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
