import React from 'react';
import Loader from '../loader/index';
import { getAuthenticated } from '../../requests';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 2000,
            playLoader: false,
            redirect: false,
        };

        this.handleUnmountLoader = this.handleUnmountLoader.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.setState({playLoader: true}), this.state.time)
    }

    handleUnmountLoader() {
        this.setState({
            playLoader: false,
            redirect: true,
        })
    }

    handleAuth(auth) {
        document.location.href = auth ? '/home-2' : '/login';
    }

    render() {
        const { playLoader, redirect, } = this.state;

        if (redirect) {
            getAuthenticated(this.handleAuth);
        }

        return (
            <div className="splash-screen">
                {playLoader 
                    && (<Loader
                            time={5000}
                            handleUnmountLoader={this.handleUnmountLoader}
                        />) 
                }
            </div>
        );
    }
}

export default SplashScreen;
