import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import './searchResult.scss';

import { fetchDataFromApi } from '../../utils/api';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import MovieCard from '../../components/movieCard/MovieCard';
import Spinner from '../../components/spinner/Spinner';
import noResult from '../../images/no-results.png';
const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      setData(res);
      setPageNum(prev => prev + 1);
      setLoading(false);
    }).catch(err => console.log(`searchReslut page error: ${err}`));
  };
  const fetchNextPageData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      if(data?.results){
        setData({
          ...data,
          results : [...data?.results,res?.results],
        });
        setLoading(false);
      }else{
        setData(res);
      }
      setPageNum(prev => prev + 1);
    }).catch(err => console.log(`searchReslut Next page error: ${err}`));
  };
  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query])
  return (
    <div className='searchResultsPage'>
      {loading && <Spinner initial={true}/>}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (<>
            <div className="pageTitle">
              {`Search ${data?.total_results > 1 ? "results" : "result"} of '${query}'`}
            </div>
            <InfiniteScroll
              className='content'
              dataLength={data?.results?.length}
              next={fetchNextPageData}
              hasMore={pageNum <= data?.total_pages}
              loader={<Spinner/>}
            >
              {data?.results?.map((item,index) => {
                if(item?.media_type === 'person') return;
                return (
                  <React.Fragment key={index}>
                    <MovieCard key={index} data={item} fromSearch={true}/>
                  </React.Fragment>
                )
              })}
            </InfiniteScroll>
          </>) : (<span className='resultNotFound'> 
              Results Not Found
          </span>)}
        </ContentWrapper>
      )}
    </div>
  )
}

export default SearchResult
