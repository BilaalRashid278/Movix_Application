import React from 'react'
import './home.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
const Home = () => {
  return (
    <div className='homepage'>
      <HeroBanner/>
      <Trending/>
    </div>
  )
}

export default Home
