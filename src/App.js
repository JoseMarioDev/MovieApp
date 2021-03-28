/* eslint-disable react/react-in-jsx-scope */
import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Hello World! setting up Redux!</h1>
      </div>
    </Provider>
  );
};

export default App;
