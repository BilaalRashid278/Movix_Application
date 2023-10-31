import './App.scss';
import React,{useEffect,useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {fetchDataFromApi} from './utils/api';
import {useSelector,useDispatch} from 'react-redux';
import { getApiConfigurations} from './app/homeSlice';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import PageNotFound from './pages/404/PageNotFound';
import Explore from './pages/explore/Explore';

const App = () => {
  const {url} = useSelector(state => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    callingApi();
  },[]);
  const callingApi = () => {
    fetchDataFromApi('/discover/tv').then((res) => {
      dispatch(getApiConfigurations(res));
    }).catch((err) => {
      console.log(err);
    })
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

