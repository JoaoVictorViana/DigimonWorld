import React from 'react';
import Loader from '../loader/index';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 2000,
            playLoader: false,
            renderLoader: true,
        };

        this.handleUnmountLoader = this.handleUnmountLoader.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.setState({playLoader: true}), this.state.time)
    }

    handleUnmountLoader() {
        this.setState({
            renderLoader: false,
        })
    }

    render() {
        const { playLoader, renderLoader, } = this.state;

        return (
            <div className="splash-screen">
                {playLoader
                    && renderLoader && (<Loader time={10000} handleUnmountLoader={this.handleUnmountLoader} />) 
                }
            </div>
        );
    }
}

export default SplashScreen;