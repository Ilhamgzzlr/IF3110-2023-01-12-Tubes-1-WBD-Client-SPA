import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Author from "./Components/Author";
import Playlist from "./Components/Playlist";
import Subs from "./Components/Subscription";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<Author />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/subs" element={<Subs />} />
        <Route path="*" element={<Error />} />

      </Routes>    
    </>
  );
}

export default App;