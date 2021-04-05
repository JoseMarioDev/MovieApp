import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './MainContent.scss';
import Slideshow from '../slideshow/Slideshow';
import About from '../about/About';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid.js';
import { IMAGE_URL } from '../../../api/movies.api';
import {
  getMovies,
  setResponsePageNumber
} from '../../../redux/actions/movies';

const MainContent = (props) => {
  const {
    list,
    movieType,
    totalPages,
    page,
    getMovies,
    setResponsePageNumber
  } = props;
  const [currentPage, setCurrentPage] = useState(page);
  const [images, setImages] = useState([]);
  const randomMovies = list
    .sort(() => Math.random() - Math.random())
    .slice(0, 5);

  const headers = {
    now_playing: 'Now Playing',
    popular: 'Popular',
    top_rated: 'Top Rated',
    upcoming: 'Upcoming'
  };

  useEffect(() => {
    if (randomMovies.length) {
      const images = [
        {
          id: 1,
          url: `${IMAGE_URL}${randomMovies[0].backdrop_path}`,
          title: randomMovies[0].original_title,
          vote_average: randomMovies[0].vote_average
        },
        {
          id: 2,
          url: `${IMAGE_URL}${randomMovies[1].backdrop_path}`,
          title: randomMovies[1].original_title,
          vote_average: randomMovies[1].vote_average
        },
        {
          id: 3,
          url: `${IMAGE_URL}${randomMovies[2].backdrop_path}`,
          title: randomMovies[2].original_title,
          vote_average: randomMovies[2].vote_average
        },
        {
          id: 4,
          url: `${IMAGE_URL}${randomMovies[3].backdrop_path}`,
          title: randomMovies[3].original_title,
          vote_average: randomMovies[3].vote_average
        },
        {
          id: 5,
          url: `${IMAGE_URL}${randomMovies[4].backdrop_path}`,
          title: randomMovies[4].original_title,
          vote_average: randomMovies[4].vote_average
        }
      ];
      setImages(images);
    }
  }, []);
  useEffect(() => {
    setCurrentPage(page);
  }, [page, totalPages]);

  const paginate = (type) => {
    let pageNumber = currentPage;
    if (type === 'prev' && currentPage >= 1) {
      pageNumber -= 1;
    } else {
      pageNumber += 1;
    }
    setCurrentPage(pageNumber);
    setResponsePageNumber(pageNumber, totalPages);
    getMovies(movieType, pageNumber);
  };
  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <About />
      <div className="grid-movie-title">
        <div className="movieType">{headers[movieType]}</div>
        <div className="paginate">
          <Paginate
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        </div>
      </div>
      <Grid />
    </div>
  );
};

MainContent.propTypes = {
  list: PropTypes.array.isRequired,
  movieType: PropTypes.string.isRequired,
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  getMovies: PropTypes.func.isRequired,
  setResponsePageNumber: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  movieType: state.movies.movieType,
  totalPages: state.movies.totalPages,
  page: state.movies.page
});

export default connect(mapStateToProps, { getMovies, setResponsePageNumber })(
  MainContent
);
