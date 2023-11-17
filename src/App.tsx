// import React from "react";
import { Route, Routes } from "react-router-dom";
import Author from "./Components/Author";
import Playlist from "./Components/Playlist";
import Subs from "./Components/Subscription";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Author />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/subs" element={<Subs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;