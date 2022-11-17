import * as React from "react";
import Hours from "../components/hours";
import CustomMap from "../components/CustomMap";

import { Link, useAnalytics } from "@yext/pages/components";
import OpenCloseTime from "../components/OpenCloseTime";

type props = {
  prop: any;
  coords: any;
  address: any;
  phone: any;
  deliveryHours: any;
  c_cTAButton2: any;
  c_deliveryServicesJustEat: any;
  c_deliveryServicesUberEats: any;
  c_deliveryServicesDeliveroo: any;
  facebookPageUrl: any;
  instagramHandle: any;
  twitterHandle: any;
  c_tikTok: any;
  what3WordsAddress: any;
  timezone: any;
};
var insta: Boolean = false;
var twitter: Boolean = false;
var tiktok: Boolean = false;
var facebook: Boolean = false;

var data2: any = [];
var url: any = "";
var currentLatitude: any = 0.0;
var currentLongitude: any = 0.0;
const LocationInformation = (data: props) => {
  const [time, setTime] = React.useState({});
  const [delHours, setDelHours] = React.useState({});
  const [coordinates, setCoordinate] = React.useState({});
  const [closingTime, setClosingTime] = React.useState("");
  const [timezone, setTimeZone] = React.useState("");
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const [phone, setPhone] = React.useState(null);
  const [address_str, serAddress_str] = React.useState("");
  React.useEffect(() => {
    getString();
    setTime(data.prop);
    setCoordinate(data.coords);
    setDelHours(data.deliveryHours);
    renderHours2(data.prop);
    setTimeZone(data.timezone);
    setPhone(data.phone);
    if (data2[0].isClosed) {
      setClosingTime("CLOSED");
    } else {
      setClosingTime(data2[0].openIntervals[0].end);
    }

    //social icon
    let checkInsta = data.instagramHandle.includes("https://www.instagram.com");

    insta = checkInsta;

    let checktwitter = data.twitterHandle.includes("https://twitter.com");

    twitter = checktwitter;

    let checktiktok = data.c_tikTok
      ? data.c_tikTok
      : "".includes("https://www.tiktok.com");

    tiktok = checktiktok;

    let checkfacebook = data.facebookPageUrl.includes(
      "https://www.facebook.com"
    );
    facebook = checkfacebook;
  }, []);

  function getString() {
    let address_string = "";
    address_string =
      data.address.line1 +
      "," +
      data.address.line2 +
      "," +
      data.address.city +
      "," +
      data.address.region +
      "," +
      data.address.postalCode +
      "," +
      regionNames.of(data.address.countryCode);

    address_string = address_string.replace("undefined,", "");
    serAddress_str(address_string);
  }

  const getDirectionUrl = () => {
    var origin: any = null;
    if (data.address.city) {
      origin = data.address.city;
    } else if (data.address.region) {
      origin = data.address.region;
    } else {
      origin = data.address.country;
    }
    if (navigator.geolocation) {
      const error = (error: any) => {
        var getDirectionUrl =
          "https://www.google.com/maps/dir/?api=1&destination=" +
          address_str +
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
            address_str +
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
  };
  const todayIndex = new Date().getDay();

  function getSorterForCurrentDay(): { [key: string]: number } {
    const dayIndexes = [0, 1, 2, 3, 4, 5, 6];

    const updatedDayIndexes = [];
    for (let i = 0; i < dayIndexes.length; i++) {
      let dayIndex = dayIndexes[i];
      if (dayIndex - todayIndex >= 0) {
        dayIndex = dayIndex - todayIndex;
      } else {
        dayIndex = dayIndex + 7 - todayIndex;
      }
      updatedDayIndexes[i] = dayIndex;
    }

    return {
      sunday: updatedDayIndexes[0],
      monday: updatedDayIndexes[1],
      tuesday: updatedDayIndexes[2],
      wednesday: updatedDayIndexes[3],
      thursday: updatedDayIndexes[4],
      friday: updatedDayIndexes[5],
      saturday: updatedDayIndexes[6],
    };
  }

  const defaultSorter: { [key: string]: number } = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  function sortByDay(week: any) {
    const tmp = [];
    for (const [k, v] of Object.entries(week)) {
      tmp[getSorterForCurrentDay()[k]] = { key: k, value: v };
    }

    const orderedWeek: any = {};
    tmp.forEach((obj) => {
      orderedWeek[obj.key] = obj.value;
    });

    return orderedWeek;
  }

  const renderHours2 = (deliveryHours: any) => {
    const dayDom: JSX.Element[] = [];
    const deliverDayDom: JSX.Element[] = [];
    for (const [k, v] of Object.entries(sortByDay(deliveryHours))) {
      data2.push(v);
    }
  };

  const conversionDetails = {
    cid: "e801ea67-1c6e-4815-baac-e61a111e9f77",
    cv: "1",
  };
  const conversionDetails_phone = {
    cid: "de598c07-b53c-407a-89f8-adc289ae9d62",
    cv: "2",
  };

  return (
    <>
      <div className="location-information">
        <div className="container">
          <div className="w-full text-center pb-4 lg:pb-5">
            <h2 className="store-time-status">
              {time ? (
                <OpenCloseTime
                  hours={time ? time : {}}
                  deliveryHours={delHours ? delHours : {}}
                  timezone={timezone ? timezone : {}}
                />
              ) : (
                <></>
              )}
            </h2>
          </div>

          <div className="boxes">
            <div className="location_details">
              <div className="box store-info">
                <div className="inner-box">
                  <h4>Store Info</h4>
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
                          fill="#008661"
                          fill-rule="evenodd"
                        />
                        <path
                          d="M10.61,6.247a4.116,4.116,0,1,1-4.116,4.116A4.117,4.117,0,0,1,10.61,6.247Z"
                          fill="#008661"
                          fill-rule="evenodd"
                        />
                      </g>
                    </svg>
                    <h2>
                      {data.address ? data.address.line1 : ""},
                      {data.address ? data.address.line2 : ""}
                      <br /> {data.address ? data.address.city : ""},{" "}
                      {data.address ? data.address.postalCode : ""}, <br />
                      {regionNames.of(data.address.countryCode)} <br />
                    </h2>
                  </div>
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
                        fill="#008661"
                        fill-rule="evenodd"
                      />
                    </svg>
                    <p>
                      <Link
                        href={`tel:${data.phone}`}
                        rel="noopener noreferrer"
                      >
                        {data.phone ? data.phone : ""}
                      </Link>
                    </p>
                  </div>

                  <div className="store-link">
                    <Link
                      data-ya-track="getdirections"
                      eventName={`cta Click:getdirections"`}
                      className="direction"
                      onClick={getDirectionUrl}
                      href="javascript:void(0);"
                      rel="noopener noreferrer"
                      conversionDetails={conversionDetails}
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
                    </Link>

                    <a
                      className="call-store"
                      href="https://order.salata.com/menu"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
              {time || delHours ? (
                <Hours
                  hours={time ? time : {}}
                  deliveryHours={delHours ? delHours : {}}
                  timezone={timezone ? timezone : {}}
                />
              ) : (
                <></>
              )}
            </div>

            <div className="box map-info">
              <div className="inner-box">
                <CustomMap prop={coordinates} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LocationInformation;
