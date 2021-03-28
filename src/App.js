/* eslint-disable react/react-in-jsx-scope */
import { Provider } from 'react-redux';
import './App.scss';
import Header from './components/header/Header';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

export default App;
