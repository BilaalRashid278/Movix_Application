import {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTab from '../../../components/switchTabs/SwitchTab';
import useFetch from '../../../hooks/UseFetch';
import Carousel from '../../../components/carousel/Carousel';

const TopRated = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const {data,loading} = useFetch(`/${endPoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndPoint(tab === 'Movies' ? 'movie' : 'tv');
  };
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitile'>{`Top Rated`}</span>
        <SwitchTab onTabChange={onTabChange} data={['Movies','TV Shows']}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
    </div>
  )
}

export default TopRated;
