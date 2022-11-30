import * as React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Banner from "../components/banner";
import BreadCrumbs from "../components/BreadCrumbs";
import bannerImage from "../images/app-bg.png";
import { JsonLd } from "react-schemaorg";
import { stagingBaseUrl, liveFavIcon } from "../constants";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";

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
              : stagingBaseUrl + document.slug.toString() + ".html"
          }`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: stagingBaseUrl + document.slug.toString() + ".html",
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: metaDescription,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: metaTitle,
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
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:url",
          content: stagingBaseUrl + document.slug.toString() + ".html",
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

const Country: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
}) => {
  const { dm_directoryChildren, dm_directoryParents, name, _site } = document;

  const childrenDivs =
    dm_directoryChildren &&
    dm_directoryChildren.map((entity: any) => {
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

  let breadcrumbScheme = [];
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 1,
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

      <Header nav={document._site.c_navigation} />
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
      <Footer
        address={document._site.address}
        c_privacyPolicy={document._site.c_privacyPolicy}
        c_salataHomeOffice={document._site.c_salataHomeOffice}
        c_termsOfService={document._site.c_termsOfService}
        c_sitemap={document._site.c_sitemap}
        mainPhone={document._site.mainPhone}
        c_menu={document._site.c_menu}
        c_newsroom={document._site.c_newsroom}
        c_growWithUs={document._site.c_growWithUs}
        c_downloadapp={document._site.c_downloadapp}
        c_giveYourInboxATasteLift={document._site.c_giveYourInboxATasteLift}
        c_signUp={document._site.c_signUp}
        facebookPageUrl={document._site.facebookPageUrl}
        twitterHandle={document._site.twitterHandle}
        instagramHandle={document._site.instagramHandle}
        c_android={document._site.c_android}
        c_apple={document._site.c_apple}
        emails={document._site.emails[0]}
      />
    </>
  );
};

export default Country;
