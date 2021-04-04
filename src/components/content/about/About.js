import React from 'react';
import movieWallpaper from '../../../img/movie-wallpaper.jpg';
import './About.scss';

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="text-container">
          <h1>MovieBase</h1>
          <p className="catchphrase">Rediscover your favorites</p>
          <br />
          <p className="about-copy">
            MovieBase allows you to browse movies from top rated to upcoming,
            from old favorites to the newest releases
          </p>
        </div>

        <div
          className="about-img"
          style={{
            backgroundImage: `url(${movieWallpaper})`
          }}
        />
      </div>
    </div>
  );
};

export default About;
