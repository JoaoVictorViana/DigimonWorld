import React from 'react';
import SplashScreen from '../splash_screen/index';

class Screen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { splashScreen, page } = this.props;
        const Page = page;

        return (
            <div className="screen">
                <div className="screen__container">
                    {splashScreen ? (<SplashScreen />) : (<Page />)}
                </div>
            </div>
        );
    }
}

Screen.defaultProps = {
    splashScreen: false,
    page: null,
}

export default Screen;