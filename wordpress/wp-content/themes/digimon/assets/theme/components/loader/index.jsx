import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animation: true,
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.handleUnmountLoader();
        }, this.props.time);
    }

    render() {
        const { animation } = this.state;
        
        return (
            <div className="loader">
                <div className="loader-spin"></div>
            </div>
        );
    }
}

Loader.propTypes = {
    time: PropTypes.number.isRequired,
    handleUnmountLoader: PropTypes.func.isRequired,
};

export default Loader;
