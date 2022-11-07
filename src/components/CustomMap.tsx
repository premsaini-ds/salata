// import * as React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import marker from "../images/marker.png";

// const containerStyle = {
//   width: "100%",
//   height: "100%",
// };

// var center = {
//   lat: 0.0,
//   lng: 0.0,
// };

// const divStyle = {
//   background: `white`,
//   border: `1px solid #ccc`,
// };

// type props = {
//   prop: any;
// };

// function CustomMap(coords: props) {
//   React.useEffect(() => {
//     center = {
//       lat: coords.prop.latitude,
//       lng: coords.prop.longitude,
//     };
//   });
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={{
//           lat: coords.prop && coords.prop.latitude,
//           lng: coords.prop && coords.prop.longitude,
//         }}
//         zoom={21}
//       >
//         <Marker
//           position={{
//             lat: coords.prop && coords.prop.latitude,
//             lng: coords.prop && coords.prop.longitude,
//           }}
//           // icon={marker}
//         />
//       </GoogleMap>
//     </LoadScript>
//   );
// }

// export default CustomMap;
import * as React from "react";

type Address = {
  address: any;
};

const IframeMap = (props: Address) => {
  const { address } = props;
  console.log(address, "dhgfgsdfjksh");
  return (
    <>
      <iframe
        style={{ width: "100%", height: "100%" }}
        className="h-[600px] w-full md:h-[500px] xl:h-full"
        src={`https://www.google.com/maps/embed/v1/place?q=${address.line1},${address.line2},${address.city},${address.region},${address.postalCode},${address.countryCode}&language=en&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18`}
      ></iframe>
    </>
  );
};

export default IframeMap;
