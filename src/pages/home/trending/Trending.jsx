import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTab from '../../../components/switchTabs/SwitchTab';
import useFetch from '../../../hooks/UseFetch';

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");
  const {data,loading} = useFetch(`/trending/all/${endPoint}`);
  const onTabChange = (tab) => {
    setEndPoint(tab.toLowerCase());
  };
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitile'>Trending</span>
        <SwitchTab onTabChange={onTabChange} data={['Day','Week']}/>
      </ContentWrapper>
    </div>
  )
}

export default Trending;
