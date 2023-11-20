import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/UseFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <React.Fragment>
        {data?.results?.length && <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />}
        </React.Fragment>
    );
};

export default Recommendation;