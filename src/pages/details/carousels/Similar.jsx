import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/UseFetch";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);
    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
    return (
        <React.Fragment>
        {data?.results?.length > 0 && <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endPoint={mediaType}
        />}
        </React.Fragment>
    );
};

export default Similar;