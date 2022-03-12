import React, { useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import { MainHeader, SearchBar } from "pages/home/components";
import URL_DATA from "constants/urls-and-data";

const Home = () => {
  // Set up states for retrieving access token and top tracks
  const [token, setToken] = useState<string>();
  const [playlists, setPlaylists] = useState<Object>({});
  const [isLoading, setIsloading] = useState<Boolean>(false);
  const [searchQuery, setSearchQuery] = useState<String>();
  const { tokenURL, clientID, clientSecret } = URL_DATA;

  const handleSearch = async (input: string) => {
    setIsloading(true);
    setSearchQuery(input);
    console.log(input);

    try {
      const tokenResponse = await axios(tokenURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(clientID + ":" + clientSecret).toString("base64"),
        },
        data: "grant_type=client_credentials",
      });
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);
    } catch (err: any) {
      console.log(err.message || `token error`);
    }

    try {
      const playlistResponse = await axios(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=playlist&limit=50&offset=0`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      setPlaylists(playlistResponse.data.playlists.items);
    } catch (err: any) {
      console.log(err.message || `token error`);
    }

    setIsloading(false);
  };
  console.log(playlists);

  return (
    <div>
      <MainHeader />
      <SearchBar handleSearchQuery={handleSearch} />
    </div>
  );
};
export default Home;
