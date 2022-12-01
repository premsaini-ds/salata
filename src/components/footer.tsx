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
import { Link } from "@yext/pages/components";
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
  c_copyright: any;
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
    console.log(facebook, insta, twitter, "twitter");
  });

  return (
    <>
      <footer className="site-footer">
        {/* first */}

        <div className="container flex flex-col lg:flex-row justify-between">
          <div className="">
            <div className="logo">
              <Link
                href="#"
                rel="noopener noreferrer"
                eventName={`footerLogo`}
                data-ya-track="footerLogo"
              >
                <img
                  style={{ maxWidth: "50%" }}
                  src="https://order-salata-cms.azureedge.net/uploads/_/originals/salata_logo_nav@2x.svg"
                  alt="Favorite Fried Chicken"
                />
              </Link>
            </div>
          </div>
          {/* c_menu */}
          <div className="">
            <ul className="footer-links">
              <li>
                <Link
                  rel="noopener noreferrer"
                  eventName={`footerMenuItem`}
                  data-ya-track="footerMenuItem"
                  href={
                    Data.c_menu?.firstLevelCTA.link
                      ? Data.c_menu.firstLevelCTA.link
                      : "#"
                  }
                >
                  {Data.c_menu?.firstLevelCTA.label}
                </Link>
                <ul className="footer-links">
                  {Data.c_menu?.secondLevelCTA.map((i: any) => {
                    return (
                      <>
                        <li>
                          <Link
                            href={i.link ? i.link : "#"}
                            rel="noopener noreferrer"
                            eventName={`footerMenuItem`}
                            data-ya-track="footerMenuItem"
                          >
                            {i.label}
                          </Link>
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
                <Link
                  href={
                    Data.c_newsroom?.firstLevelCTA.link
                      ? Data.c_newsroom.firstLevelCTA.link
                      : "#"
                  }
                  rel="noopener noreferrer"
                  eventName={`footerMenuItem`}
                  data-ya-track="footerMenuItem"
                >
                  {Data.c_newsroom?.firstLevelCTA.label}
                </Link>
                <ul className="footer-links">
                  {Data.c_newsroom?.secondLevelCTA.map((i: any) => {
                    return (
                      <>
                        <li>
                          <Link
                            rel="noopener noreferrer"
                            eventName={`footerMenuItem`}
                            data-ya-track="footerMenuItem"
                            href={i.link ? i.link : "#"}
                          >
                            {i.label}
                          </Link>
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
                <Link
                  href={
                    Data.c_growWithUs?.firstLevelCTA.link
                      ? Data.c_growWithUs.firstLevelCTA.link
                      : "#"
                  }
                  rel="noopener noreferrer"
                  eventName={`footerMenuItem`}
                  data-ya-track="footerMenuItem"
                >
                  {Data.c_growWithUs?.firstLevelCTA.label}
                </Link>
                <ul className="footer-links">
                  {Data.c_growWithUs?.secondLevelCTA.map((i: any) => {
                    return (
                      <>
                        <li>
                          <Link
                            rel="noopener noreferrer"
                            eventName={`footerMenuItem`}
                            data-ya-track="footerMenuItem"
                            href={i.link ? i.link : "#"}
                          >
                            {i.label}
                          </Link>
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
            {Data.mainPhone ? (
              <>
                <Link
                  href={`tel:${Data.mainPhone}`}
                  eventName={`phone`}
                  data-ya-track="phone"
                >
                  <p>{Data.mainPhone}</p>
                </Link>
              </>
            ) : (
              <></>
            )}
            {Data?.emails ? (
              <Link
                // rel="noopener noreferrer"
                // eventName={`email`}
                // data-ya-track="email"
                href={`mailto:${Data?.emails}`}
              >
                {Data?.emails}
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* second */}

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
                  <a target="_blank" href="#" rel="noopener noreferrer">
                    <img src={appStore} alt="Google Play" />{" "}
                    <span>
                      GET IT ON <b>Google Play</b>
                    </span>
                  </a>

                  <a target="_blank" href="#" rel="noopener noreferrer">
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
                <Link
                  rel="noopener noreferrer"
                  eventName={`SignUp`}
                  data-ya-track="SignUp"
                  href="#"
                >
                  {Data?.c_signUp?.label}
                </Link>
              </li>
            </ul>
          </div>
          {/* Social-links */}
          <div className="text-center">
            {Data.facebookPageUrl ||
            Data.instagramHandle ||
            Data.twitterHandle ? (
              <p>Stay Connected with Us</p>
            ) : (
              <></>
            )}

            <ul className="social-links">
              {Data.facebookPageUrl ? (
                <li>
                  <Link
                    rel="noopener noreferrer"
                    eventName={`footerSocialIcon`}
                    data-ya-track="footerSocialIcon"
                    target="_blank"
                    href="#"
                  >
                    {svgIcons.facebook}
                  </Link>
                </li>
              ) : (
                ""
              )}
              {Data.instagramHandle ? (
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    rel="noopener noreferrer"
                    eventName={`footerSocialIcon`}
                  >
                    {svgIcons.instagram}
                  </Link>
                </li>
              ) : (
                ""
              )}
              {Data.twitterHandle ? (
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    rel="noopener noreferrer"
                    eventName={`footerSocialIcon`}
                  >
                    {svgIcons.twitter}
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
        {/* third */}
        <div className="container flex flex-col lg:flex-row justify-center">
          <div className="footer-address">
            <span>
              <Link
                rel="noopener noreferrer"
                eventName={`footerMenuItem`}
                data-ya-track="footerMenuItem"
                href={Data?.c_sitemap?.link ? Data.c_sitemap.link : "#"}
              >
                {Data?.c_sitemap.label}
              </Link>
            </span>
            <span style={{ marginLeft: "5px", marginRight: "5px" }}>|</span>
            <span>
              <Link
                rel="noopener noreferrer"
                eventName={`footerMenuItem`}
                data-ya-track="footerMenuItem"
                href={
                  Data?.c_privacyPolicy?.link ? Data.c_privacyPolicy.link : "#"
                }
              >
                {Data.c_privacyPolicy.label}
              </Link>{" "}
              &{" "}
              <Link
                rel="noopener noreferrer"
                eventName={`footerMenuItem`}
                data-ya-track="footerMenuItem"
                href={
                  Data.c_termsOfService?.link ? Data.c_termsOfService.link : "#"
                }
              >
                {Data.c_termsOfService.label}
              </Link>
            </span>
            <span style={{ marginLeft: "5px", marginRight: "5px" }}>|</span>
            <span>{Data.c_copyright}</span>
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
