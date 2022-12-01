import * as React from "react";
import "../index.css";
import "../main.css";
import { Link } from "@yext/pages/components";

type data = {
  nav: any;
  c_growWithUs: any;
};

const Header = (headerItem: data) => {
  const toggle = () => {
    document.getElementById("reactele").classList.toggle("menu-opened");
  };

  return (
    <>
      <div className="site-header">
        <div className="header-top">
          <div className="container flex flex-row justify-between items-center">
            <div className="logo">
              <Link
                href="#"
                rel="noopener noreferrer"
                eventName={`headerLogo`}
                data-ya-track="headerLogo"
              >
                <img
                  style={{ maxWidth: "50%" }}
                  src="https://order-salata-cms.azureedge.net/uploads/_/originals/salata_logo_nav@2x.svg"
                  alt="Favorite Fried Chicken"
                />
              </Link>
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
          </div>
        </div>
        <nav className="navigation">
          <div className="container flex flex-row justify-between">
            <ul id="main-nav" className="main-nav">
              {headerItem.nav &&
                headerItem.nav.map((i: any, index: any) => {
                  return (
                    <>
                      <li key={index}>
                        <Link
                          href={i.link ? i.link : "#"}
                          rel="noopener noreferrer"
                          eventName={`headerNavItem`}
                          data-ya-track="headerNavItem"
                        >
                          {i.label}
                        </Link>
                        {i.label.toUpperCase() ==
                        headerItem.c_growWithUs?.firstLevelCTA.label.toUpperCase() ? (
                          <>
                            <ul className="submenu">
                              {headerItem.c_growWithUs.secondLevelCTA.map(
                                (j: any, index: any) => {
                                  return (
                                    <>
                                      {" "}
                                      <li key={index}>
                                        <Link
                                          href={j.link ? j.link : "#"}
                                          rel="noopener noreferrer"
                                          eventName={`headerNavItem`}
                                          data-ya-track="headerNavItem"
                                        >
                                          {j.label}
                                        </Link>
                                      </li>
                                    </>
                                  );
                                }
                              )}
                            </ul>
                          </>
                        ) : (
                          <></>
                        )}
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
