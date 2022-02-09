import { Home, Playlists } from "pages";

const RoutesData = {
  HOME: { title: "Home", path: "/", element: <Home /> },

  PLAYLISTS: {
    title: "Playlists",
    path: "/playlists",
    element: <Playlists />,
  },
};

export default RoutesData;
