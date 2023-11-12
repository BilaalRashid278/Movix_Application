import {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTab from '../../../components/switchTabs/SwitchTab';
import useFetch from '../../../hooks/UseFetch';
import Carousel from '../../../components/carousel/Carousel';

const UpComing = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const {data,loading} = useFetch(`/${endPoint}/upcoming`);
  const onTabChange = (tab) => {
    setEndPoint(tab === 'Movies' ? 'movie' : '');
  };
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitile'>{`Upcoming`}</span>
        <SwitchTab onTabChange={onTabChange} data={['Movies']}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
    </div>
  )
}

export default UpComing;
