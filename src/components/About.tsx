import * as React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

type c_foodItems = {
  prop: any;
};
var style = {
  width: "100%",
  height: "310px",
};
const AboutSection = (foodItem: c_foodItems) => {
  return (
    <>
      <div className="about-sec">
        <div className="container-custom mx-auto flex flex-wrap">
          <div className="w-full lg:w-2/5 xl:w-[47%] relative lg:absolute left-0 lg:h-full ">
            <div
              id="splide"
              className="splide lg:-mx-[15px] h-full splide--slide splide--ltr splide--draggable is-active is-initialized"
              role="region"
              aria-roledescription="carousel"
            >
              <div
                className="splide__track h-full splide__track--slide splide__track--ltr splide__track--draggable"
                id="splide-track"
                style={{ paddingLeft: "0px", paddingRight: "0px" }}
                aria-live="polite"
                aria-atomic="true"
              >
                <Splide
                  options={{
                    rewind: false,

                    type: "loop",

                    perPage: 1,
                    perMove: 1,
                    arrows: true,
                    drag: false,
                    pagination: false,
                    lazyLoad: "nearby",
                    breakpoints: {
                      1279: {
                        perPage: 2,
                        drag: true,
                        pagination: true,
                        type: "loop",
                      },
                      575: {
                        perPage: 1,
                        padding: "45px",
                      },
                    },
                  }}
                >
                  {foodItem.prop &&
                    foodItem.prop.map((i: any, index) => {
                      return (
                        <SplideSlide key={index}>
                          <div className="slide-img">
                            <img
                              style={style}
                              src={i.image ? i.image.url : ""}
                              className="block"
                              alt={i.description}
                              title={i.description}
                            />
                          </div>
                        </SplideSlide>
                      );
                    })}
                </Splide>

                {/* <ul
                        className="splide__list h-full"
                        id="splide-list"
                        role="presentation"
                        style={{ transform: "translateX(0px)" }}
                      >
                        <li
                          className="splide__slide h-full is-active is-visible"
                          id="splide-slide01"
                          role="group"
                          aria-roledescription="slide"
                          aria-label="1 of 2"
                          style={{ width: "calc(100%)" }}
                        >
                          <div className="slide-img h-full">
                            <img
                              src="https://a.mktgcdn.com/p/K8i0kSN-BaX2DjTJiXQGRmbWOgo8wMMDKQvSTktkAtY/754x531.jpg"
                              className="block w-full max-h-full  h-full object-cover"
                              alt="sliderimg1"
                              title="sliderimg"
                            />
                          </div>
                        </li>

                        <li
                          className="splide__slide h-full is-next"
                          id="splide-slide02"
                          role="group"
                          aria-roledescription="slide"
                          aria-label="2 of 2"
                          aria-hidden="true"
                          style={{ width: "calc(100%)" }}
                        >
                          <div className="slide-img h-full">
                            <img
                              src="https://a.mktgcdn.com/p/p2rSsJbZU6qbnS6HnzSqxQzkad4sf3-Vb7xW-QWvWZs/1024x683.jpg"
                              className="block  w-full max-h-full h-full object-cover"
                              alt="sliderimg2"
                              title="sliderimg2"
                            />
                          </div>
                        </li>
                      </ul> */}
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden overflow-visible lg:w-3/5 xl:w-[50.6%] about-content ml-auto">
            <h3>Beverley</h3>
            <b>Fish &amp; Chips is a fantastic celebration meal!</b>
            <p>
              Quality ingredients, sustainably sourced, cooked with care and
              served locally In 2003, our founding mission was to build a
              network of local restaurants and takeaways serving the very best
              quality Fish \&amp; Chips throughout Britain. Since then, we have
              surpassed our goals and are the nation's largest community of Fish
              \&amp; Chip restaurants and takeaways. We are proud to be cooking
              Britain's favourite meal in iconic British locations, loved by
              locals and visitors alike. We think everyone should get a chance
              to try our Fish \&amp; Chips, so we're working to spread the joy
              as widely as we can. As we move to new towns and cities, our
              hardworking teams will ensure we remember what makes us who we
              are; enthusiasts of quality, sustainable and deliciously
              traditional Fish \&amp; Chips. We're Britain's favourite because
              we stick to what we do best; Great British Fish \&amp; Chips,
              served with care.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;