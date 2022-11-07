import * as React from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import BreadCrumbs from "../components/BreadCrumbs";
import GetDirection from "../components/GetDirection";
import { stagingBaseUrl } from "../constants";
import bannerImage from "../images/app-bg.png";
import "../index.css";
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
import Logo from "../images/logo.svg";
var currentUrl = "";

export const config: TemplateConfig = {
  stream: {
    $id: "states",
    filter: {
      savedFilterIds: ["dm_restaurants-directory_address_region"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "description",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildrenCount",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  currentUrl = document.slug.toString() + ".html";
  return document.slug.toString() + ".html";
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
          href: favicon,
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
              : `${stagingBaseUrl}/${currentUrl}`
          }`,
        },
      },
      ///og tags

      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: `${stagingBaseUrl}/${currentUrl}`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "og:image",
          content: `${Logo}`,
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
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:url",
          content: `${stagingBaseUrl}/${currentUrl}`,
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

const State: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    description,

    dm_directoryParents,
    dm_directoryChildren,
    c_addressRegionDisplayName,
  } = document;

  var sortedChildren = dm_directoryChildren.sort(function (a: any, b: any) {
    var a = a.name;
    var b = b.name;
    return a < b ? -1 : a > b ? 1 : 0;
  });

  let slugString = "/";
  document.dm_directoryParents.forEach((e: any) => {
    slugString = e.slug + "/";
  });

  const childrenDivs = dm_directoryChildren.map((entity: any) => {
    let url: any = "";
    url = document.slug.toString();
    let url1: any = "";
    url1 = url.replace(/(\b\S.+\b)(?=.*\1)/g, "").trim();

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
  console.log(dm_directoryChildren, "dm_directoryChildren");
  return (
    <>
      <Header />
      <BreadCrumbs
        name={name}
        parents={dm_directoryParents}
        baseUrl={relativePrefixToRoot}
        address={{}}
      ></BreadCrumbs>
      <Banner
        Name={name}
        TagLine={""}
        BackgroundImage={bannerImage}
        CtaButton={""}
        text={name}
        template={"state"}
      />

      <h3 className="sec_heading mt-12" style={{ textAlign: "center" }}>
        Cities in {name}, {document.dm_directoryParents[1].name}{" "}
      </h3>
      <div className="directory-country nearby-sec">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-[15px]">
            <div className="w-full text-center"></div>
            {childrenDivs}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default State;
