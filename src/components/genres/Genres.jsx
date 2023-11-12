import React from 'react';
import './genres.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
const Genres = ({data}) => {
  const {genres} = useSelector(state => state.home);
  return (
    <div className='genres'>
        {data?.map((g) => {
            if(!genres[g]?.name) return;
            return (
                <React.Fragment key={g}>
                    <div key={g} className='genre'>
                        {genres[g]?.name}
                    </div>
                </React.Fragment>
            )
        })}
    </div>
  )
}

Genres.propTypes = {
    data : PropTypes.array
}
export default Genres;
