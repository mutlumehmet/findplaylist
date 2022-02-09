import { useState } from "react";
import axios from "axios";

import { apiConstants } from "./";

const useRequestPlaylistAPI = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | undefined | string>(null);

  const handleRepoSearchRequest = async (URL: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(URL);
      const repodata = response.data.items;

      if (typeof repodata === undefined || null) {
        setError(apiConstants.responseMessage.unknown);
      } else if (repodata.length <= 0) {
        setError(apiConstants.responseMessage.empty);
      } else {
        const transRepos = repodata.map(
          (repoData: { [key: string]: string }) => {
            return {
              repoId: repoData.id,
              repoTitle: repoData.full_name,
              repoText: repoData.description,
            };
          }
        );
        setData(transRepos);
      }
    } catch (err: any) {
      setError(err.message || apiConstants.responseMessage.unknown);
    }
    setIsLoading(false);
  };

  return { data, isLoading, error, handleRepoSearchRequest };
};

export default useRequestPlaylistAPI;
