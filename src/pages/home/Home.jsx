import React from 'react'
import './home.scss';
import HeroBanner from './heroBanner/HeroBanner';
const Home = () => {
  return (
    <div className='homepage'>
      <HeroBanner/>
      <div style={{height : 1000}}></div>
    </div>
  )
}

export default Home
