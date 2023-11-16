import React,{useRef, useState} from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../images/no-poster.png";
import CircleRating from "../circleRating/CircleRation";
import Genres from "../genres/Genres";
import './carousel.scss';

const Carousel = ({ data, loading,endPoint }) => {
  // const [resize,setResize] = useState(0);
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;
    let scrollAmount1 = dir === 'left' ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20);
    // const scrollAmount2 = dir === 'left' ? container.scrollLeft - (400 + 20) : container.scrollLeft + (400 + 20);
    container.scrollTo({
      left : scrollAmount1,
      behavior : 'smooth'
    });
  }
  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    )
  }
  return (
    <React.Fragment>
      <div className="carousel">
        <ContentWrapper>
          <BsFillArrowLeftCircleFill
            className="carouselLeftNav arrow"
            onClick={() => navigation('left')}
          />
          <BsFillArrowRightCircleFill
            className="carouselRighttNav arrow"
            onClick={() => navigation('right')}
          />
          {!loading ? (
            <div onClick={(e)=>{
              console.log(e.screenX)
            }} className="carouselItems" ref={carouselContainer}>
              {data?.map((item) => {
                // console.log(item)
                const posterUrl = item?.poster_path ? url?.poster + item.poster_path : PosterFallback
                return (
                  <div key={item?.id} className="carouselItem" onClick={() => navigate(`/${item?.media_type || endPoint}/${item?.id}`)}>
                    <div className="posterBlock">
                      <Img source={posterUrl} />
                      <CircleRating rating={item.vote_average.toFixed(1)} />
                      <Genres data={item.genre_ids.slice(0,2)} />
                    </div>
                    <div className="textBlock">
                      <span className="title">
                        {item.title || item.name}
                      </span>
                      <span className="date">
                        {dayjs(item.release_Date).format("MMM D, YYYY")}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="loadingSkeleton">
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
            </div>
          )}
        </ContentWrapper>
      </div>
    </React.Fragment>
  )
}

export default Carousel
