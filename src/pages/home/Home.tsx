import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import { MainHeader, PlaylistResults, SearchBar } from "pages/home/components";
import URL_DATA from "constants/urls-and-data";
import { IPlaylistData } from "types/types";

const Home = () => {
  const [token, setToken] = useState<string>();
  const [playlists, setPlaylists] = useState<IPlaylistData | undefined>();
  const [isLoading, setIsloading] = useState<Boolean>(false);
  const [keyword, setKeyword] = useState<string>();
  const { tokenURL, clientID, clientSecret } = URL_DATA;

  const getToken = async () => {
    setIsloading(true);

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

    setIsloading(false);
  };

  const getPlaylistData = async (input: string) => {
    setIsloading(true);
    setKeyword(input);
    try {
      const playlistResponse = await axios(
        `https://api.spotify.com/v1/search?q=${input}&type=playlist&limit=50&offset=0`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      setPlaylists(playlistResponse.data);
    } catch (err: any) {
      console.log(err.message || `playlist error`);
    }
    setIsloading(false);
  };

  const cbGetToken = useCallback(getToken, [clientID, clientSecret, tokenURL]);

  useEffect(() => {
    cbGetToken();
  }, [cbGetToken]);

  console.log(playlists);

  return (
    <div>
      <MainHeader />
      <SearchBar handleSearchQuery={getPlaylistData} />
      <PlaylistResults total={playlists?.playlists.total} keyword={keyword} />
    </div>
  );
};
export default Home;
