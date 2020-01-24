import React from 'react';
import NPSY from './components/NPSY.js';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import BIOL from './components/BIOL.js';
import COSI from './components/COSI.js';
import ECON from './components/ECON.js';
import './styles/App.css';
import { AppDiv } from './styles/index.js';
import {Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <AppDiv>
            <Nav />
            <Switch>
                <Route exact path="/"           component={ Home } />
                <Route       path="/biol"       component={ BIOL } />
                <Route       path="/cosi"       component={ COSI } />
                <Route       path="/econ"       component={ ECON } />
                <Route       path="/npsy"       component={ NPSY } />
            </Switch>
        </AppDiv>
    );
};

export default App;