import React from "react";
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./components/Main/Footer";
import Header from "./components/Main/Header";
import Home from './components/Main/Home';
import MovieDetails from './components/Movie/MovieDetails';
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/movie/:imdbId' element={<MovieDetails/>} />
          <Route element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
