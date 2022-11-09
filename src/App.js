import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MangaPage from "./pages/MangaPage";
import './styles/App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route path="manga/:mangaName" element={<MangaPage />}></Route>

    </Routes>
  </div>
  );
}

export default App;
