import React, { useState } from "react";

import "./Style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";
import { PlayIcon } from "../Playbtn";
PlayIcon

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">
            <ContentWrapper>
                <div className="sectionHeading">Official Videos</div>
                {!loading ? (
                    <div className="videos">
                        {data?.results?.map((video) => {
                            return (
                                <>
                                    <div onClick={() => {
                                        setVideoId(video?.key);
                                        setShow(true);
                                    }} key={video?.id} className="videoItem"> 
                                        <div className="videoThumbnail">
                                            <Img source={`https://i.ytimg.com/vi/${video?.key}/maxresdefault.jpg`}/>
                                            <PlayIcon/>
                                        </div>
                                        <div className="videoTitle">
                                            {video?.name}
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;