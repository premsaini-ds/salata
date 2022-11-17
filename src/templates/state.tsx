import * as React from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import BreadCrumbs from "../components/BreadCrumbs";
import bannerImage from "../images/app-bg.png";
import { JsonLd } from "react-schemaorg";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import { stagingBaseUrl, liveFavIcon } from "../constants";

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
      "c_addressRegionDisplayName",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildrenCount",
      "dm_directoryChildren.dm_directoryChildren.name",
      "dm_directoryChildren.dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildren.id",
    ],
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
  document,
}): HeadConfig => {
  let metaDescription = document.c_metaDescription
    ? document.c_metaDescription
    : `Salata restaurant ` + document.name.toLowerCase();
  let metaTitle = document.c_metaTitle
    ? document.c_metaTitle
    : `Salata restaurant ` + document.name.toLowerCase();

  return {
    title: metaTitle,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: liveFavIcon,
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
          href: ` ${
            document.c_canonical
              ? document.c_canonical
              : `${stagingBaseUrl}${document.slug.toString()}.html`
          }`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: `${stagingBaseUrl}${document.slug.toString()}.html`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "og:image",
          content: liveFavIcon,
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
          content: `${stagingBaseUrl}${document.slug.toString()}.html`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content: liveFavIcon,
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
    dm_directoryParents,
    dm_directoryChildren,
    c_addressRegionDisplayName,
  } = document;

  console.log(dm_directoryChildren, "dm_directoryChildren");
  const childrenDivs =
    dm_directoryChildren &&
    dm_directoryChildren.map((entity: any) => {
      let url: any = "";

      url = document.slug.toString();
      let url1: any = "";
      url1 = url.replace(/(\b\S.+\b)(?=.*\1)/g, "").trim();
      if (entity.dm_directoryChildrenCount == 1) {
        if (
          entity.dm_directoryChildren &&
          entity.dm_directoryChildren[0].slug
        ) {
          console.log(
            entity.dm_directoryChildren[0].slug,
            "entity.dm_directoryChildren[0].slug"
          );
          return (
            <div className="w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4">
              <a
                key={entity.slug}
                href={"/" + entity.dm_directoryChildren[0].slug + ".html"}
                className="hover:text-red"
              >
                {entity.name} ({entity.dm_directoryChildrenCount})
              </a>
            </div>
          );
        } else {
          let name: any = entity.dm_directoryChildren[0].name.toLowerCase();
          let string: any = name.toString();
          let removeSpecialCharacters = string.replace(
            /[&\/\\#^+()$~%.'":*?<>{}!@]/g,
            ""
          );
          let result: any = removeSpecialCharacters.replaceAll("  ", "-");
          let finalString: any = result.replaceAll(" ", "-");
          url = `${entity.dm_directoryChildren[0].id}-${finalString}.html`;
          return (
            <div className="w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4">
              <a key={entity.slug} href={"/" + url} className="hover:text-red">
                {entity.name} ({entity.dm_directoryChildrenCount})
              </a>
            </div>
          );
        }
      } else {
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
      }
    });

  let breadcrumbScheme: any = [];
  let currentIndex: any = 0;
  dm_directoryParents &&
    dm_directoryParents.map((i: any, index: any) => {
      currentIndex = index;
      if (index != 0) {
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id": `${stagingBaseUrl}${i.slug}.html`,
            name: i.name,
          },
        });
      }
    });
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: currentIndex + 1,
    item: {
      "@id": `${stagingBaseUrl}${document.slug.toString()}.html`,
      name: document.name,
    },
  });
  return (
    <>
      <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Salata Limited",
          url: "https://www.salata.com/",
          logo: liveFavIcon,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Salata Corporate HQ 16720 Park Row Dr Houston,",
            // addressLocality: "Clacton-on-Sea",
            addressRegion: "Texas",
            postalCode: "77084",
            addressCountry: "United states ",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "contact",
            telephone: "(844) 725-2821",
          },
          sameAs: [
            "https://www.facebook.com/SalataSalads",
            "https://www.instagram.com/salatasalads/",
            "https://twitter.com/salatasalads",
          ],
        }}
      />

      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
        }}
      />
      <Header />
      <BreadCrumbs
        name={name}
        parents={dm_directoryParents}
        baseUrl={relativePrefixToRoot}
        address={{}}
      ></BreadCrumbs>
      <Banner
        Name={c_addressRegionDisplayName ? c_addressRegionDisplayName : ""}
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
