import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";

const App = () => {
  const [likes, setLikes] = useState(() => {
    return JSON.parse(sessionStorage.getItem("likes")) || [];
  });

  const [watchLater, setWatchLater] = useState(() => {
    return JSON.parse(sessionStorage.getItem("watchLater")) || [];
  });

  useEffect(() => {
    sessionStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    sessionStorage.setItem("watchLater", JSON.stringify(watchLater));
  }, [watchLater]);

  return (
    <Router>
      <Navbar watchLaterCount={watchLater.length} />
      <div className="d-flex">
        <Sidebar watchLaterCount={watchLater.length} />
        <div className="flex-grow-1" style={{ marginLeft: window.innerWidth >= 992 ? "220px" : "0", marginTop: "60px" }}>
          <div className="container-fluid">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    likes={likes}
                    watchLater={watchLater}
                    setLikes={setLikes}
                    setWatchLater={setWatchLater}
                  />
                }
              />
              <Route
                path="/watch-later"
                element={
                  <WatchLater
                    likes={likes}
                    watchLater={watchLater}
                    setLikes={setLikes}
                    setWatchLater={setWatchLater}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
