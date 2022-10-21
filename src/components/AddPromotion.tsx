import * as React from "react";
// import phone from "../images/phone.png";
// import appStore from "../images/app-store.svg";
// import playStore from "../images/play-store.svg";

type Props = {
  c_title: any;
  c_description1: any;
  c_backgroundImages: any;
  // androidAppUrl: any;
  // iosAppUrl: any;
};

const AddPromotion = (Data: Props) => {
  React.useEffect(() => {
    // let test = data.replace(/[\\]/g, "");
    // let Array = test.split("\n");
    console.log(Data.c_backgroundImages[0].url, "Data.c_backgroundImages.url");
  }, []);

  return (
    <>
      <div className="app_promotion-sec">
        <img
          className="app-bg"
          src={
            Data.c_backgroundImages[0].url ? Data.c_backgroundImages[0].url : ""
          }
          alt="app-bg"
          title="app-bg"
        />
        <div className="container flex flex-wrap items-center">
          <div className="w-full app_promotion-content">
            <h3>{Data.c_title}</h3>
            <p>{Data.c_description1}</p>

            {/* <div className="get-app-link">
              <ul>
                <li>
                  <a
                    href={Data.androidAppUrl ? Data.androidAppUrl : ""}
                    className=""
                    target="_blank"
                  >
                    <img
                      src={playStore ? playStore : ""}
                      alt="play store"
                      title="play store"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={Data.iosAppUrl ? Data.iosAppUrl : ""}
                    className=""
                    target="_blank"
                  >
                    <img
                      src={appStore ? appStore : ""}
                      alt="play store"
                      title="play store"
                    />
                  </a>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="phone-img">
            <img src="" alt="phone-img" title="phone-img" />
          </div>
        </div>
      </div>
    </>
  );
};
export default AddPromotion;
