import React from 'react';
import Screen from '../screen/index';

class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { splashScreen, page } = this.props;

        return (
            <Screen splashScreen={splashScreen} page={page} />
        );
    }
}

Game.defaultProps = {
    splashScreen: false,
    page: null,
};

export default Game;