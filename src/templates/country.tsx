import * as React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Banner from "../components/banner";
import BreadCrumbs from "../components/BreadCrumbs";
import "../index.css";
import bannerImage from "../images/app-bg.png";
import favicon from "../images/favicon-live.png";

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
import { stagingBaseUrl } from "../constants";
import Logo from "../images/logo.svg";
var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "country",
    filter: {
      savedFilterIds: ["dm_restaurants-directory_address_countrycode"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "description",
      "slug",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildrenCount",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};
const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  currentUrl = document.slug.toString() + ".html";
  return document.slug.toString() + ".html";
  // return "index.html";
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
          href: 'https://www.salata.com/images/favicon.ico',
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
              : `${stagingBaseUrl}${currentUrl}`
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
          name: "twitter:image",
          content: `${Logo}`,
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

const Country: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { description, dm_directoryChildren, dm_directoryParents, c_tagline } =
    document;

  const { name } = document;

  const childrenDivs = dm_directoryChildren.map((entity: any) => {
    return (
      <div className="w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4">
        <a
          key={entity.slug}
          href={"/" + entity.slug + ".html"}
          className="hover:text-red"
        >
          {entity.name} ({entity.dm_directoryChildrenCount})
        </a>
      </div>
    );
  });
  console.log(dm_directoryParents, "dm_directoryChildren");
  return (
    <>
      <Header />
      <BreadCrumbs
        name={name}
        parents={dm_directoryParents}
        baseUrl={relativePrefixToRoot}
      ></BreadCrumbs>
      <Banner
        Name={name ? regionNames.of(name) : ""}
        TagLine={""}
        BackgroundImage={bannerImage}
        CtaButton={""}
        text={"Regions"}
        template={"country"}
      />

      <h3 className="sec_heading mt-12" style={{ textAlign: "center" }}>
        All Regions of {name}{" "}
      </h3>
      <div className="directory-country py-5 lg:py-[60px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            {childrenDivs}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Country;
