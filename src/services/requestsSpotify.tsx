const Name = () => {
  return <div></div>;
};
export default Name;

// import { useState, useEffect } from "react";
// import axios from "axios";

// const RequestsSpotify = () => {
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     axios("https://accounts.spotify.com/api/token", {
//       method: "POST",
//       headers: {
//         Authorization:
//           "Basic " +
//           Buffer.from(
//             `dd07e8e298384b80be9007985a74b48b:defd48afdbe04960a677573475e2e21a`
//           ).toString("base64"),
//       },
//       data: "grant_type=client_credentials",
//     })
//       .then((tokenresponse) => {
//         console.log(tokenresponse.data.access_token);
//         setToken(tokenresponse.data.access_token);
//       })
//       .catch((error) => console.log());
//   }, []);

//   return <div></div>;
// };

// export default requestsSpotify;
