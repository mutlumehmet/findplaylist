import { useState, useEffect } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import { MainHeader, SearchBar } from "pages/home/components";

const Home = () => {
  // Set up states for retrieving access token and top tracks
  const [token, setToken] = useState<string>();
  const [playlists, setPlaylists] = useState<Object>({});
  const [isLoading, setIsloading] = useState<Boolean>(false);
  const [error, setError] = useState<null | undefined | string>(null);

  useEffect(() => {
    handlePlaylistSearchRequest();
  }, []);

  const handlePlaylistSearchRequest = async () => {
    const query = "tool";
    setIsloading(true);
    setError(null);

    try {
      const tokenResponse = await axios(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              Buffer.from(
                "dd07e8e298384b80be9007985a74b48b" +
                  ":" +
                  "defd48afdbe04960a677573475e2e21a"
              ).toString("base64"),
          },
          data: "grant_type=client_credentials",
        }
      );
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);
    } catch (err: any) {
      setError(err.message || `token error`);
    }

    try {
      console.log("second try");
      const playlistResponse = await axios(
        `https://api.spotify.com/v1/search?q=${query}&type=playlist&offset=0&limit=50`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(playlistResponse.data.playlists.items);
      setPlaylists(playlistResponse.data.playlists.items);
    } catch (err: any) {
      setError(err.message || `no playlistdata`);
    }

    setIsloading(false);
  };

  return (
    <div>
      <MainHeader />
      <SearchBar />
    </div>
  );
};
export default Home;

// const query = "tool";

// useEffect(() => {
//   // Api call for retrieving token
//   axios("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization:
//         "Basic " +
//         Buffer.from(
//           "dd07e8e298384b80be9007985a74b48b" +
//             ":" +
//             "defd48afdbe04960a677573475e2e21a"
//         ).toString("base64"),
//     },
//     data: "grant_type=client_credentials",
//   })
//     .then((tokenresponse) => {
//       console.log(tokenresponse.data.access_token);
//       setToken(tokenresponse.data.access_token);

//       // Api call for retrieving tracks data
//       axios(`https://api.spotify.com/v1/search?q=${query}&type=playlist`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: "Bearer " + tokenresponse.data.access_token,
//         },
//       })
//         .then((playlistresponse) => {
//           console.log(playlistresponse.data);
//           setPlaylists(playlistresponse.data);
//         })
//         .catch((error) => console.log(error));
//     })
//     .catch((error) => console.log(error));
// }, []);
