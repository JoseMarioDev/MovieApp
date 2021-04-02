/* eslint-disable react/react-in-jsx-scope */
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import store from './redux/store';
import MovieDetails from './components/content/movie-details/MovieDetails';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="app">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/:id/:name/details" component={MovieDetails} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
