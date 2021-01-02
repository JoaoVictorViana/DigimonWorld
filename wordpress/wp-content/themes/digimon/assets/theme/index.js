import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game/index';
import './styles/index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Game />
    </React.StrictMode>,
    document.getElementById('game-root')
);