import React from 'react';
import SplashScreen from '../splash_screen/index';

class Screen extends React.Component {
    render() {
        return (
            <div className="screen">
                <div className="screen__container">
                    <SplashScreen />
                </div>
            </div>
        );
    }
}

export default Screen;