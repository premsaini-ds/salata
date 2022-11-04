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

// The path must be exactly 404.html
export const getPath: GetPath<TemplateProps> = () => {
  return "404.html";
};

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "Page Not Found",
  };
};

// Template that will show as the page
const FourOhFour: Template<TemplateRenderProps> = () => {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center" }}>404 - Page Not Found</h1>
      <Footer />
    </>
  );
};

export default FourOhFour;
