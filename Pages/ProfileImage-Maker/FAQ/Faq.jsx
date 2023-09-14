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
                      What unique features does the Profile Image Maker offer?
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
                        The Profile Image Maker is tailor-made to craft standout
                        profile pictures, offering tools for cropping, filters,
                        overlays, and even adding personalized text, ensuring
                        your digital presence resonates.
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
                      How can the Profile Image Maker enhance my online
                      branding?
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
                        A striking profile image is pivotal for online branding.
                        Our tool empowers users to create memorable,
                        high-quality profile pictures that can bolster
                        recognition across social platforms and professional
                        networks.
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
                      Is there a preset size option for different social media
                      platforms?
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
                        Yes, our Profile Image Maker includes preset dimensions
                        optimized for major platforms like Facebook, LinkedIn,
                        Twitter, and Instagram, ensuring your image appears
                        flawless across the web.
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
                      Can I add custom text or logos to my profile image?
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
                        Absolutely! The tool provides functionalities to
                        incorporate text, logos, or other overlays, making it
                        easier to brand your profile picture uniquely.
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
                      Which image formats are supported by the Profile Image
                      Maker?
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
                        The tool caters to a variety of formats including JPG,
                        PNG, and WEBP, giving users flexibility in their
                        creation and sharing process.
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
                      Is there a guide or template to help design my profile
                      image?
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
                        Our Profile Image Maker is user-friendly and intuitive,
                        with guides and templates available to help even
                        beginners create stunning profile images with ease.
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
