import React, { useState } from 'react';

import './MainContent.scss';
import Slideshow from '../slideshow/Slideshow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid.js';

const MainContent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
    <div className="main-content">
      <Slideshow auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate
            currentPage={currentPage}
            totalPages={10}
            paginate={paginate}
          />
        </div>
      </div>
      <Grid />
    </div>
  );
};

export default MainContent;
