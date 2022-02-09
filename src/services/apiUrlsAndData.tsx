type UrlAndData<T> = { [key: string]: T };

const apiConstants: UrlAndData<UrlAndData<string>> = {
  apiURLs: {
    repoSearchURL: `https://api.github.com/search/repositories?q=`, //${searchParameter}
    userSearchURL: `https://api.github.com/search/users?q=`, //${searchParameter}
    repoURL: `https://api.github.com/repos/`, //${repoTitle}
    userURL: `https://api.github.com/users/`, //${userName}
    userReposURL: `https://api.github.com/users/`, //`${userName} /repos`
  },
  responseMessage: {
    unknownError: `Something went wrong`,
    emptyError: `There are no repositories`,
  },
};

export default apiConstants;
