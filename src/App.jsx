import './App.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfigurations } from './app/homeSlice';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import PageNotFound from './pages/404/PageNotFound';
import Explore from './pages/explore/Explore';

const App = () => {
  const { url } = useSelector(state => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      const url = {
        backdrop : res?.images?.secure_base_url + 'original',
        poster : res?.images?.secure_base_url + 'original',
        profile : res?.images?.secure_base_url + 'original',
      }
      dispatch(getApiConfigurations(url));
    }).catch((err) => {
      console.log(err);
    })
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

