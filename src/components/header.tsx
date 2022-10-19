import * as React from "react";
import { useEffect, useState } from "react";
import Logo from "../images/logo.svg";
import appStore from "../images/play-store-icon.svg";
import googlePlay from "../images/app-store-icon.svg";
import { useTranslation } from "react-i18next";
import { pathToRegexp, compile } from "path-to-regexp";
import "../index.css";
import "../main.css";
type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "ORDER NOW",
    url: "/",
  },
  {
    label: "ORDER FOOD",
    url: "/",
  },
  {
    label: "ABOUT",
    url: "/about",
  },
  {
    label: "LOCATION",
    url: "/",
  },
];

const Header = (headerItem: c_headerItems) => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));
  const toggle = () => {
    document.getElementById("reactele").classList.toggle("menu-opened");
  };

  return (
    <>
      <div className="site-header">
        <div className="header-top">
          <div className="container flex flex-row justify-between items-center">
            <div className="logo">
              <a href="#">
                <img
                  src="https://order-salata-cms.azureedge.net/uploads/_/originals/salata_logo_nav@2x.svg"
                  alt="Favorite Fried Chicken"
                />
              </a>
            </div>
            <a href="#" className="store-locator-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.418"
                height="27.44"
                viewBox="0 0 19.418 27.44"
              >
                <path
                  d="M6.21,21.564c.987,1.572,2.054,3.477,3.108,5.328.391.683.744.786,1.213-.025,1.018-1.766,2.019-3.6,3.073-5.3,3.2-5.178,8.436-10.227,4.272-17.2C14.177-1.818,4.12-1.157,1.112,4.6c-3.448,6.6,1.936,11.927,5.1,16.96Z"
                  transform="translate(0 0)"
                  fill="#10106a"
                  fillRule="evenodd"
                />
                <path
                  d="M10.414,6.247a3.92,3.92,0,1,1-3.92,3.92,3.921,3.921,0,0,1,3.92-3.92Z"
                  transform="translate(-0.705 -0.111)"
                  fill="#fff"
                  fillRule="evenodd"
                />
              </svg>
            </a>
            <button
              type="button"
              className="menu-btn"
              id="menu-btn"
              onClick={toggle}
            >
              <span></span>
            </button>
            <div className="app-link">
              <span>
                <b>Sign In</b>
              </span>

              <a
                href="#"
                className="Link direction"
                style={{ backgroundColor: "rgb(176 217 92)", color: "white" }}
              >
                <span>
                  <b>ORDER NOW</b>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
