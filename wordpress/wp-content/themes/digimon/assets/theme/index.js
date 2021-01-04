import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game/index';
import './styles/index.scss';
import Home from './components/home/index';
import Login from './components/login/index';

const splashScree = document.getElementById('splash_screen-root');
const home = document.getElementById('home-root');
const login = document.getElementById('login-root');

if (splashScree) {
    ReactDOM.render(
        <React.StrictMode>
            <Game splashScreen />
        </React.StrictMode>,
        splashScree
    );
}

if (home) {
    ReactDOM.render(
        <React.StrictMode>
            <Game splashScreen={false} page={Home}/>
        </React.StrictMode>,
        home
    );
}

if (login) {
    ReactDOM.render(
        <React.StrictMode>
            <Game splashScree={false} page={Login}/>
        </React.StrictMode>,
        login
    );
}
