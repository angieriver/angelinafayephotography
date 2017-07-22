import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import HomeView from './views/home-view';

const App = (props) => {
    return (
        <div className="app">
            <HomeView />
        </div>
    );
};
export default App;
