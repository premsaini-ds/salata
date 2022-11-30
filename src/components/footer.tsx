import * as React from "react";
import CookieConsent from "react-cookie-consent";
import appStore from "../images/play-store-icon.svg";
import googlePlay from "../images/app-store-icon.svg";
import {
  cookieStartText,
  cookieEndText,
  CookieprivacypolicyUrl,
} from "../../src/constants";
import "../../src/main.css";
import { svgIcons } from "../svgIcon";
type data = {
  address: any;
  c_privacyPolicy: any;
  c_termsOfService: any;
  c_sitemap: any;
  c_salataHomeOffice: any;
  mainPhone: any;
  c_menu: any;
  c_newsroom: any;
  c_growWithUs: any;
  c_downloadapp: any;
  c_giveYourInboxATasteLift: any;
  c_signUp: any;
  facebookPageUrl: any;
  instagramHandle: any;
  twitterHandle: any;
  c_android: any;
  c_apple: any;
  emails: any;
};
var insta: Boolean = false;
var twitter: Boolean = false;
var facebook: Boolean = false;
const Footer = (Data: data) => {
  React.useEffect(() => {
    /** footer social media urls */
    insta = Data.instagramHandle
      ? Data.instagramHandle.includes("https://www.instagram.com")
      : "";
    twitter = Data.twitterHandle
      ? Data.twitterHandle.includes("https://twitter.com")
      : "";

    facebook = Data.facebookPageUrl ? Data.facebookPageUrl : "";
  });

  return (
    <>
      <footer className="site-footer">
        <div className="container flex flex-col lg:flex-row justify-between">
          <div className="">
            <div className="logo">
              <a href="#">
                <img
                  style={{ maxWidth: "50%" }}
                  src="https://order-salata-cms.azureedge.net/uploads/_/originals/salata_logo_nav@2x.svg"
                  alt="Favorite Fried Chicken"
                />
              </a>
            </div>
          </div>
          {/* c_menu */}
          <div className="">
            <ul className="footer-links">
              <li>
                <a href={Data.c_menu?.firstLevelCTA.link}>
                  {Data.c_menu?.firstLevelCTA.label}
                </a>
                <ul className="footer-links">
                  {Data.c_menu?.secondLevelCTA.map((i: any) => {
                    return (
                      <>
                        <li>
                          <a href={i.link}>{i.label}</a>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
          {/* c_newsroom */}
          <div className="">
            <ul className="footer-links">
              <li>
                <a href={Data.c_newsroom?.firstLevelCTA.link}>
                  {Data.c_newsroom?.firstLevelCTA.label}
                </a>
                <ul className="footer-links">
                  {Data.c_newsroom?.secondLevelCTA.map((i: any) => {
                    return (
                      <>
                        <li>
                          <a href={i.link}>{i.label}</a>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
          {/* c_growWithUs */}
          <div className="">
            <ul className="footer-links">
              <li>
                <a href={Data.c_growWithUs?.firstLevelCTA.link}>
                  {Data.c_growWithUs?.firstLevelCTA.label}
                </a>
                <ul className="footer-links">
                  {Data.c_growWithUs?.secondLevelCTA.map((i: any) => {
                    return (
                      <>
                        <li>
                          <a href={i.link}>{i.label}</a>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer-address">
            <p>{Data?.c_salataHomeOffice}</p>
            <p>{Data.address?.line1},</p>
            <p>
              {Data.address?.city}, {Data.address?.region}{" "}
              {Data.address?.postalCode}
            </p>

            <a href={`tel:${Data.mainPhone}`}>
              <p>{Data.mainPhone}</p>
            </a>
            <a href={`mailto:${Data?.emails}`}>{Data?.emails}</a>
          </div>
        </div>
        <div
          className="container flex flex-col lg:flex-row justify-between"
          style={{ marginTop: "30px" }}
        >
          {/* c_downloadapp */}
          <div className="">
            <ul className="footer-links">
              <li>
                {Data?.c_downloadapp}
                <div className="app-link">
                  <a
                    target="_blank"
                    href={Data.c_android}
                    rel="noopener noreferrer"
                  >
                    <img src={appStore} alt="Google Play" />{" "}
                    <span>
                      GET IT ON <b>Google Play</b>
                    </span>
                  </a>

                  <a
                    target="_blank"
                    href={Data.c_apple}
                    rel="noopener noreferrer"
                  >
                    <img src={googlePlay} alt="App Store" />{" "}
                    <span>
                      Download on the <b>App Store</b>
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* sign UP */}
          <div className="text-center">
            <p> {Data.c_giveYourInboxATasteLift}</p>
            <ul className="social-links" style={{ marginTop: "10px" }}>
              <li>
                <a href={Data?.c_signUp?.link}>{Data?.c_signUp?.label}</a>
              </li>
            </ul>
          </div>
          {/* Social-links */}
          <div className="text-center">
            <p>Stay Connected with Us</p>
            <ul className="social-links">
              {Data.facebookPageUrl ? (
                <li>
                  <a
                    target="_blank"
                    href={
                      facebook
                        ? `${Data.facebookPageUrl}`
                        : ` ${Data.facebookPageUrl}`
                    }
                    rel="noopener noreferrer"
                  >
                    {svgIcons.facebook}
                  </a>
                </li>
              ) : (
                ""
              )}
              {Data.instagramHandle ? (
                <li>
                  <a
                    target="_blank"
                    href={
                      insta
                        ? `/${Data.instagramHandle}`
                        : `https://www.instagram.com/${Data.instagramHandle}`
                    }
                    rel="noopener noreferrer"
                  >
                    {svgIcons.instagram}
                  </a>
                </li>
              ) : (
                ""
              )}
              {Data.twitterHandle ? (
                <li>
                  <a
                    target="_blank"
                    href={
                      twitter
                        ? `/${Data.twitterHandle}`
                        : `https://twitter.com/${Data.twitterHandle}`
                    }
                    rel="noopener noreferrer"
                  >
                    {svgIcons.twitter}
                  </a>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </footer>

      <CookieConsent
        enableDeclineButton
        flipButtons
        location="bottom"
        buttonText={"I Accept"}
        cookieName="myAwesomeCookieName2"
        expires={150}
        contentStyle={{ color: "black" }}
        contentClasses="CoRhA"
        buttonStyle={{ color: "white" }}
      >
        {cookieStartText}{" "}
        <a href={CookieprivacypolicyUrl} style={{ color: "red" }}>
          privacy policy
        </a>{" "}
        {cookieEndText}
      </CookieConsent>
    </>
  );
};

export default Footer;
