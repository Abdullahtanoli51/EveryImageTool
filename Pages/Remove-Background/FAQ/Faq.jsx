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
                    <button className="text-lg md:text-base fw-600 text-black " style={{height:"46px"}}>
                      {" "}
                      What is the Image Background Remover tool used for?
                    </button>
                  </div>
                  <div
                    className="accordion__content"
                    style={
                      active.key == 1 ? { maxHeight: 202 } : { maxHeight: 0 }
                    }
                  >
                    <div className="accordion__content__inner 
                    ">
                      <p>
                        The Image Background Remover tool is specially designed
                        to automatically and efficiently remove backgrounds from
                        photos, making it easier to highlight the primary
                        subject or object.
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
                    <button className="text-lg md:text-base fw-600 text-black" style={{height:"46px"}}>
                    How does the Image Background Remover utilize AI technology?
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
                      Our Image Background Remover harnesses advanced AI algorithms to detect the main subject in a picture and separate it from the background with precision and speed.

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
                    <button className="text-lg md:text-base fw-600 text-black " style={{height:"46px"}}>
                    Is the Image Background Remover suitable for product photos and e-commerce?

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
                      Absolutely! The tool is perfect for e-commerce vendors looking to showcase products with a clear or customized background, enhancing the product's visual appeal and professionalism.

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
                    How do I ensure the best results when using the Image Background Remover?

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
                      For optimal outcomes, upload high-resolution images with a clear distinction between the subject and its background. This ensures the AI can differentiate and remove the background efficiently.

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
                    Can I choose a new background after removing the original with Image Background Remover?

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
                      Yes, after utilizing the Image Background Remover, you can opt to add a different background from our curated gallery or upload one of your choosing to tailor the image to your needs.

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
                    Are there file size or format restrictions when using the Image Background Remover?

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
                      Our tool supports a variety of popular formats, including JPG, PNG, and WEBP. There might be a maximum file size limit for optimal performance, so always refer to the tool's guidelines before uploading.

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
