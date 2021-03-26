/* eslint-disable react/react-in-jsx-scope */
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">Redux</div>
    </Provider>
  );
};

export default App;
