// src/template/404.tsx
import {
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  GetPath,
  Template,
} from "@yext/pages";
import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { liveFavIcon } from "../constants";
// The path must be exactly 404.html
export const getPath: GetPath<TemplateProps> = () => {
  return "404.html";
};

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  return {
    title: "Page Not Found",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: liveFavIcon,
        },
      },
    ],
  };
};

// Template that will show as the page
const FourOhFour: Template<TemplateRenderProps> = ({ document }) => {
  const { _site } = document;

  return (
    <>
      <Header nav={document._site.c_navigation} />

      <h1 style={{ textAlign: "center" }}>404 - Page Not Found</h1>
      <Footer
        address={document._site.address}
        c_privacyPolicy={document._site.c_privacyPolicy}
        c_salataHomeOffice={document._site.c_salataHomeOffice}
        c_termsOfService={document._site.c_termsOfService}
        c_sitemap={document._site.c_sitemap}
        mainPhone={document._site.mainPhone}
      />
    </>
  );
};

export default FourOhFour;
