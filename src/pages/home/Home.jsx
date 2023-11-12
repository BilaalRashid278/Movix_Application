import './home.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import UpComing from './upComing/UpComing';
const Home = () => {
  return (
    <div className='homepage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      <UpComing/>
    </div>
  )
}

export default Home
