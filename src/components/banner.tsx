import * as React from "react";
import bannerImage from "../images/app-bg.png";
import { Link } from "@yext/pages/components";
import { bannerText } from "../constants";
export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};
type props = {
  Name: any;
  TagLine: any;
  BackgroundImage: any;
  CtaButton: any;
  text: any;
  template: any;
};
type Banner = {
  name?: string;
  address?: Address;
  openTime?: string;
  children?: React.ReactNode;
};

const Banner = (Data: props) => {
  const conversionDetails_primaryCTA = {
    cid: "dc6937a6-345d-4c0f-b63f-79be3c29d7bc",
    cv: "3",
  };
  return (
    <>
      {/* <div className="hero">
        <img
          className="hero-img"
          src={
            Data.BackgroundImage.url
              ? Data.BackgroundImage.url
              : "https://webapi.salata.com/wp-content/uploads/2019/08/hero-menu@2x.png"
          }
          alt="banner"
          title="banner"
        />
        <div className="container text-center">
          <h1>
            {Data.template == "city" ? (
              <>{bannerText}</>
            ) : (
              <>
                {Data.template == "location" ? (
                  <>{Data.Name ? Data.Name : ""}</>
                ) : (
                  <>{bannerText}</>
                )}
              </>
            )}
          </h1>
          <p>{Data.TagLine ? Data.TagLine : ""}</p>
          {Data.CtaButton ? (
            <div className="cta_btn">
              <Link
                rel="noopener noreferrer"
                conversionDetails={conversionDetails_primaryCTA}
                href={Data.CtaButton ? Data.CtaButton.link : "#"}
                className="button"
              >
                {Data.CtaButton ? Data.CtaButton.label : ""}
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div> */}
      <section className="Section__Wrapper-sc-zndtdo-1 dzjBtK Hero__Wrapper-sc-1i21f9d-6 ehZgCO">
        <div className="Container__Wrapper-sc-8l3np8-0 fNyDxz Section__Inner-sc-zndtdo-0 hhYEgQ">
          <div className="Container__Wrapper-sc-8l3np8-0 hBaJiS Hero__ContentContainer-sc-1i21f9d-1 ivcRdx">
            <div className="Hero__Content-sc-1i21f9d-0 kQYhzH">
              <h1 className="type__H1-sc-yo4r88-0 Hero__ContentTitle-sc-1i21f9d-3 emzPNh">
                this salad kitchen always starts fresh
              </h1>
            </div>
            <div className="Hero__FeaturedImage-sc-1i21f9d-5 iugMuM">
              <img
                alt="beet slices and edamame"
                src="https://webapi.salata.com/wp-content/uploads/2019/08/hero-menu@2x.png"
                className="Image__Img-sc-12xl0f9-0 bfHgUz"
              />
            </div>
          </div>
        </div>
        <div className="Divider__Wrapper-sc-1jt7qbg-0 hIREEQ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path d="M0 50c240-66.7 480-66.7 720 0s480 66.7 720 0v50H0V50z"></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Banner;
