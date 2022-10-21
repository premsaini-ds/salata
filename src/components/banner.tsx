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
  console.log(Data.CtaButton.label, "data");
  return (
    <>
      <div className="hero">
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
          <h1>{Data.Name}</h1>
          <p>{Data.TagLine ? Data.TagLine : ""}</p>
          {Data.CtaButton.label && Data.CtaButton.link ? (
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
      </div>
    </>
  );
};

export default Banner;
