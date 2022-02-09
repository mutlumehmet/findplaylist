import { PlaylistResults } from "./components";
import { Buffer } from "buffer";
import { useState, useEffect } from "react";
import axios from "axios";
const Playlists = () => {
  // Set up states for retrieving access token and top tracks
  const [token, setToken] = useState("");

  // Artist ID from Spotify
  const id = "06HL4z0CvFAxyc27GXpf02";
  const market = "US";

  useEffect(() => {
    // Api call for retrieving token
    axios("https://accounts.spotify.com/api/token", {
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
    })
      .then((tokenresponse) => {
        console.log(tokenresponse.data.access_token);
        setToken(tokenresponse.data.access_token);

        // Api call for retrieving tracks data
        axios(
          `https://api.spotify.com/v1/artists/${id}/top-tracks?market=${market}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + tokenresponse.data.access_token,
            },
          }
        )
          .then((trackresponse) => {
            console.log(trackresponse.data.tracks);
            setTracks(trackresponse.data.tracks);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <PlaylistResults />
    </div>
  );
};

export default Playlists;
