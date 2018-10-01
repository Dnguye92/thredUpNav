import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import './index.scss';

const App = () => {
  return (
    <Navbar />
  );
};
// render App component to div#root
ReactDOM.render(<App />, document.querySelector('#root'));
