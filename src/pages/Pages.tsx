import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Playlists } from "pages";

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlists" element={<Playlists />} />
      </Routes>
    </Router>
  );
};

export default Pages;
