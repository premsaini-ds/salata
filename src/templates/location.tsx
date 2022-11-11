import * as React from "react";
import Banner from "../components/banner";
import List from "../components/list";
import BreadCrumbs from "../components/BreadCrumbs";
import LocationInformation from "../components/LocationInformation";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import AddPromotion from "../components/AddPromotion";
import NearByLocation from "../components/NearByLocation";
import Faq from "../components/Faq";
import FavoriteFood from "../components/FavoriteFood";
import { nearByLocation } from "../types/nearByLocation";
import { JsonLd } from "react-schemaorg";
import favicon from "../images/favicon-live.png";
import AboutSection from "../components/About";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";

import "../index.css";
import "../main.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "locations",

    fields: [
      "id",
      "name",
      "address",
      "mainPhone",
      "description",
      "slug",
      "hours",
      "photoGallery.description",
      "photoGallery.image",
      "c_relatedfaq.question",
      "c_relatedfaq.answer",
      "c_aboutData",
      "deliveryHours",
      "timezone",
      "yextDisplayCoordinate",
      "c_ctabutton",
      "c_gallery_food",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryParents.c_addressRegionDisplayName",
    ],

    filter: {
      entityTypes: ["restaurant"],
    },

    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug.toString() + ".html";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
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
          content: `${
            document.c_metaDescription ? document.c_metaDescription : ""
          }`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "title",
          content: `${document.c_metaTitle ? document.c_metaTitle : ""}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "author",
          content: "Salata Restaurant Online Ordering Home",
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
          href: "",
        },
      },
      ///og tags

      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: "",
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${
            document.c_metaDescription ? document.c_metaDescription : ""
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${document.c_metaTitle ? document.c_metaTitle : ""}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",

          content: "https://www.salata.com/images/favicon.ico",
        },
      },
      /// twitter tag

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
          content: "",
        },
      },

      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: document.description ? document.description : "",
        },
      },

      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content: "https://www.salata.com/images/favicon.ico",
        },
      },
    ],
  };
};

type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
export const transformProps: TransformProps<ExternalApiData> = async (
  data: any
) => {
  const url = `https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?radius=1500&location=${
    data.document.yextDisplayCoordinate &&
    data.document.yextDisplayCoordinate.latitude
  },${
    data.document.yextDisplayCoordinate &&
    data.document.yextDisplayCoordinate.longitude
  }&api_key=24a57cabafadf52431feb4c4462afea4&v=20181201&resolvePlaceholders=true&entityTypes=restaurant&savedFilterId=1074282222&limit=4&fields=googlePlaceId,slug,address,addressHidden,hours,name,geocodedCoordinate,isoRegionCode,localPhone,mainPhone,timezone,yextDisplayCoordinate,meta,timeZoneUtcOffset,what3WordsAddress,closed`;
  const externalApiData = (await fetch(url).then((res: any) =>
    res.json()
  )) as nearByLocation;
  return { ...data, externalApiData };
};

type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

const LocationTemplate: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  externalApiData,
  document,
  __meta,
}) => {
  const {
    id,
    name,
    address,
    mainPhone,
    description,
    slug,
    hours,
    photoGallery,
    c_relatedfaq,
    c_aboutData,
    deliveryHours,
    timezone,
    yextDisplayCoordinate,
    c_ctabutton,
    c_gallery_food,
    dm_directoryParents,
  } = document;
  let templateData = { document: document, __meta: __meta };
  let hoursSchema = [];

  for (var key in hours) {
    if (hours.hasOwnProperty(key)) {
      let openIntervalsSchema = "";
      if (key !== "holidayHours") {
        if (hours[key].isClosed) {
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: key,
          };
        } else {
          let end = "";
          let start = "";
          if (typeof hours[key].openIntervals != "undefined") {
            let openIntervals = hours[key].openIntervals;
            for (var o in openIntervals) {
              if (openIntervals.hasOwnProperty(o)) {
                end = openIntervals[o].end;
                start = openIntervals[o].start;
              }
            }
          }
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            closes: end,
            dayOfWeek: key,
            opens: start,
          };
        }
      } else {
      }

      hoursSchema.push(openIntervalsSchema);
    }
  }

  return (
    <>
      <Header />
      <BreadCrumbs
        name={name}
        parents={dm_directoryParents}
        baseUrl={relativePrefixToRoot}
        address={address}
      ></BreadCrumbs>
      <Banner
        Name={name}
        TagLine={""}
        BackgroundImage={""}
        CtaButton={c_ctabutton}
        template={"location"}
      />
      <LocationInformation
        prop={hours}
        deliveryHours={deliveryHours}
        coords={yextDisplayCoordinate}
        address={address}
        phone={mainPhone}
        c_cTAButton2={"c_cTAButton2"}
        c_deliveryServicesJustEat={""}
        c_deliveryServicesUberEats={""}
        c_deliveryServicesDeliveroo={""}
        facebookPageUrl={""}
        instagramHandle={""}
        twitterHandle={""}
        c_tikTok={"c_tikTok"}
        what3WordsAddress={"what3WordsAddress"}
        timezone={timezone}
      />
      <AboutSection
        prop={c_gallery_food}
        prop2={c_aboutData}
        CtaButton={c_ctabutton}
      />

      {c_gallery_food ? (
        <>
          {" "}
          <List prop={c_gallery_food} />
        </>
      ) : (
        <></>
      )}

      {/* <AddPromotion
        c_title={c_aboutData.title}
        c_description1={c_aboutData.description}
        c_backgroundImages={c_aboutData.photoGallery}
      /> */}
      <Faq prop={c_relatedfaq} />
      <NearByLocation
        prop={externalApiData}
        coords={yextDisplayCoordinate}
        slug={slug}
      />
      <Footer />
    </>
  );
};

export default LocationTemplate;
