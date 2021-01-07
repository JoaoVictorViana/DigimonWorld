import React from 'react';
import { getAuthenticated, logout } from '../../requests';

class Home extends React.Component {

    constructor(props) {
        super(props);

        getAuthenticated((auth) => {
            if (!auth) {
                window.location.href = '/login'
            }
        });
    }

    handleLogout() {
        logout(() => {
            window.location.href = '/login';
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}

export default Home;
