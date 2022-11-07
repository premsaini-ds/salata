import * as React from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import BreadCrumbs from "../components/BreadCrumbs";
import GetDirection from "../components/GetDirection";
import { stagingBaseUrl } from "../constants";
import bannerImage from "../images/app-bg.png";
import favicon from "../images/favicon-live.png";
import { Link } from "@yext/pages/components";
import Logo from "../images/logo.svg";

import "../index.css";
var currentUrl = "";
import "../index.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";

var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "city",
    filter: {
      savedFilterIds: ["dm_restaurants-directory_address_city"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "c_addressRegionDisplayName",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildrenCount",
      "dm_directoryChildren.address",
      "dm_directoryChildren.hours",
      "dm_directoryChildren.mainPhone",

      "dm_directoryChildren.yextDisplayCoordinate",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  // let slugString = "";
  // document.dm_directoryParents.forEach((e: any) => {
  //   if (e.sulg != "restaurants" && e.slug != "gb") {
  //     slugString += e.slug + "/";
  //     slugString = slugString.replace("restaurants", "");
  //   }
  // });

  // currentUrl = slugString + document.slug + ".html";

  return document.slug + ".html";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  let metaDescription = document.c_metaDescription
    ? document.c_metaDescription
    : "Favorite Fried Chicken stores in " + document.name;
  let metaTitle = document.c_metaTitle
    ? document.c_metaTitle
    : "Favorite Fried Chicken stores in " + document.name;

  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: "https://www.salata.com/images/favicon.ico",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${metaDescription}`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "author",
          content: "FAVORITE CHICKEN & RIBS",
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: ` ${
            document.c_canonical
              ? document.c_canonical
              : stagingBaseUrl + currentUrl
          }`,
        },
      },
      ///og tags

      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: stagingBaseUrl + currentUrl,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${metaDescription}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "og:image",
          content: `${Logo}`,
        },
      },

      /// twitter tag

      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content: `${Logo}`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:url",
          content: stagingBaseUrl + currentUrl,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${metaDescription}`,
        },
      },
    ],
  };
};

const City: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    c_addressRegionDisplayName,
    dm_directoryParents,
    dm_directoryChildren,
  } = document;

  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  const childrenDivs = dm_directoryChildren.map((entity: any) => {
    var origin: any = null;
    if (entity.address.city) {
      origin = entity.address.city;
    } else if (entity.address.region) {
      origin = entity.address.region;
    } else {
      origin = entity.address.country;
    }
    let key: any = Object.keys(entity.hours)[0];

    const what3WordsAddressString = entity.what3WordsAddress ? (
      <div className="store-phone w3w">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21.23"
          height="30"
          viewBox="0 0 21.23 30"
        >
          <g id="map-pin-icon" transform="translate(0 0)">
            <path
              id="Path_8"
              data-name="Path 8"
              d="M6.789,23.576c1.079,1.719,2.246,3.8,3.4,5.825.427.747.813.859,1.326-.027,1.113-1.931,2.207-3.931,3.359-5.8,3.5-5.661,9.223-11.181,4.67-18.8C15.5-1.987,4.5-1.265,1.216,5.034c-3.769,7.219,2.117,13.039,5.574,18.542Z"
              fill="#d61a0c"
              fill-rule="evenodd"
            />
            <rect
              id="Rectangle_230"
              data-name="Rectangle 230"
              width="1"
              height="12"
              transform="matrix(0.966, 0.259, -0.259, 0.966, 8.186, 5.075)"
              fill="#fff"
            />
            <rect
              id="Rectangle_231"
              data-name="Rectangle 231"
              width="1"
              height="12"
              transform="matrix(0.966, 0.259, -0.259, 0.966, 12.186, 5.075)"
              fill="#fff"
            />
            <rect
              id="Rectangle_232"
              data-name="Rectangle 232"
              width="1"
              height="12"
              transform="matrix(0.966, 0.259, -0.259, 0.966, 16.186, 5.075)"
              fill="#fff"
            />
          </g>
        </svg>
        <a
          target="_blank"
          href={
            entity.what3WordsAddress
              ? `https://what3words.com/${entity.what3WordsAddress} `
              : ""
          }
        >
          What3Words
        </a>
      </div>
    ) : (
      ""
    );

    return (
      <div className="w-full sm:w-1/2 xl:w-1/3 px-[15px]">
        <div className="near-location">
          <h4>
            <a key={entity.slug} href={`/${entity.slug}.html`}>
              {entity.name}
            </a>
          </h4>
          <div className="store-address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.23"
              height="30"
              viewBox="0 0 21.23 30"
            >
              <g transform="translate(0 0)">
                <path
                  d="M6.789,23.576c1.079,1.719,2.246,3.8,3.4,5.825.427.747.813.859,1.326-.027,1.113-1.931,2.207-3.931,3.359-5.8,3.5-5.661,9.223-11.181,4.67-18.8C15.5-1.987,4.5-1.265,1.216,5.034c-3.769,7.219,2.117,13.039,5.574,18.542Z"
                  fill="#d61a0c"
                  fill-rule="evenodd"
                />
                <path
                  d="M10.61,6.247a4.116,4.116,0,1,1-4.116,4.116A4.117,4.117,0,0,1,10.61,6.247Z"
                  fill="#a60d0d"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
            <p>
              {entity.address.line1 ? entity.address.line1 : ""},{" "}
              {entity.address.line2 ? entity.address.line2 : ""}
              <br /> {entity.address.city ? entity.address.city : ""},{" "}
              {entity.address.postalCode ? entity.address.postalCode : ""},{" "}
              <br />
              {entity.address.countryCode
                ? regionNames.of(entity.address.countryCode)
                : ""}{" "}
              <br />
            </p>
          </div>
          {what3WordsAddressString}
          <div className="store-phone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.987"
              height="23.987"
              viewBox="0 0 23.987 23.987"
            >
              <path
                d="M19.64,17.328c-.617,1.876-3.036,2.812-4.764,2.656A15.194,15.194,0,0,1,8,17.14,22.652,22.652,0,0,1,.885,8.652C-.22,6.3-.468,3.411,1.176,1.268A2.827,2.827,0,0,1,3.429,0C4.8-.063,4.992.721,5.463,1.943c.351.913.819,1.845,1.08,2.792C7.032,6.5,5.321,6.575,5.105,8.019c-.133.911.969,2.132,1.468,2.781A13.473,13.473,0,0,0,10.051,14c.76.479,1.984,1.341,2.853.865,1.339-.733,1.213-2.991,3.084-2.227a30.12,30.12,0,0,1,2.833,1.463c1.431.769,1.364,1.567.819,3.223h0"
                transform="translate(4.5) rotate(13)"
                fill="#d61a0c"
                fill-rule="evenodd"
              />
            </svg>
            <p>
              <a href={`tel:${entity.mainPhone}`} rel="noopener noreferrer">
                {entity.mainPhone}
              </a>
            </p>
          </div>
          <div className="store-link">
            <a
              className="direction"
              href="javascript:void(0);"
              onClick={() => {
                getDirectionUrl(entity);
              }}
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0,0H24V24H0Z" fill="none" />
                <path
                  d="M22.43,10.59,13.42,1.58a2.051,2.051,0,0,0-2.83,0l-9,9a1.992,1.992,0,0,0,0,2.82l9,9a2,2,0,0,0,2.82,0l8.99-8.99A1.992,1.992,0,0,0,22.43,10.59ZM12.01,20.99l-9-9,9-9,9,9ZM8,11v4h2V12h4v2.5L17.5,11,14,7.5V10H9A1,1,0,0,0,8,11Z"
                  fill="#fff"
                />
              </svg>{" "}
              Get Directions
            </a>
            <a className="view-details" href={`/${entity.slug}.html`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.403"
                height="14"
                viewBox="0 0 22.403 14"
              >
                <g transform="translate(-15.975 -106)">
                  <path
                    d="M27.176,120a10.337,10.337,0,0,1-4.387-1.05,16.655,16.655,0,0,1-3.481-2.249,21.287,21.287,0,0,1-3.183-3.253.742.742,0,0,1,0-.9,21.288,21.288,0,0,1,3.183-3.253,16.655,16.655,0,0,1,3.481-2.249A10.337,10.337,0,0,1,27.176,106a10.337,10.337,0,0,1,4.387,1.05,16.655,16.655,0,0,1,3.481,2.249,21.023,21.023,0,0,1,3.183,3.253.742.742,0,0,1,0,.9,21.287,21.287,0,0,1-3.183,3.253,16.655,16.655,0,0,1-3.481,2.249A10.337,10.337,0,0,1,27.176,120Zm-9.492-7c1.171,1.386,5.04,5.507,9.492,5.507S35.5,114.386,36.669,113c-1.171-1.386-5.04-5.507-9.492-5.507S18.856,111.614,17.684,113Z"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                  <path
                    d="M187.36,190.72a3.36,3.36,0,1,1,3.36-3.36A3.364,3.364,0,0,1,187.36,190.72Zm0-5.227a1.867,1.867,0,1,0,1.867,1.867A1.866,1.866,0,0,0,187.36,185.493Z"
                    transform="translate(-160.184 -74.36)"
                    fill="#fff"
                  />
                </g>
              </svg>{" "}
              View Details
            </a>
          </div>
        </div>
      </div>
    );
  });

  function getDirectionUrl(entitiy: any) {
    var address_string = "";
    address_string =
      entitiy.address.line1 +
      "," +
      entitiy.address.line2 +
      "," +
      entitiy.address.city +
      "," +
      entitiy.address.region +
      "," +
      entitiy.address.postalCode +
      "," +
      regionNames.of(entitiy.address.countryCode);

    address_string = address_string.replace("undefined,", "");

    var origin: any = null;
    if (entitiy.address.city) {
      origin = entitiy.address.city;
    } else if (entitiy.address.region) {
      origin = entitiy.address.region;
    } else {
      origin = entitiy.address.country;
    }
    if (navigator.geolocation) {
      const error = (error: any) => {
        var getDirectionUrl =
          "https://www.google.com/maps/dir/?api=1&destination=" +
          address_string +
          "&origin=" +
          origin;

        window.open(getDirectionUrl, "_blank");
      };
      navigator.geolocation.getCurrentPosition(
        function (position) {
          let currentLatitude = position.coords.latitude;
          let currentLongitude = position.coords.longitude;
          let getDirectionUrl =
            "https://www.google.com/maps/dir/?api=1&destination=" +
            address_string +
            "&origin=" +
            currentLatitude +
            "," +
            currentLongitude;
          window.open(getDirectionUrl, "_blank");
        },
        error,
        {
          timeout: 10000,
        }
      );
    }
  }
  console.log(dm_directoryParents, "document");

  return (
    <>
      <Header />
      <BreadCrumbs
        name={name}
        parents={dm_directoryParents}
        baseUrl={relativePrefixToRoot}
      ></BreadCrumbs>
      <Banner
        Name={name ? name : ""}
        TagLine={""}
        BackgroundImage={bannerImage}
        CtaButton={""}
        text={name ? name : ""}
        template={"city"}
      />
      <h3 className="sec_heading mt-12" style={{ textAlign: "center" }}>
        Available Stores in {name}, {document.dm_directoryParents[2].name},{" "}
        {document.dm_directoryParents[1].name}{" "}
      </h3>
      <div className="directory-country nearby-sec">
        <div className="container">
          <div className="flex  flex-wrap justify-center -mx-[15px]">
            {childrenDivs}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default City;
