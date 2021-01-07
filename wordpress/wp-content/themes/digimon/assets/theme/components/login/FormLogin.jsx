import React from 'react';
import { loginAuth } from '../../requests';

class FormLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }

        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChangeUsername(event) {
        this.setState({
            username: event.target.value,
        });
    }

    handleChangePassword(event) {
        this.setState({
            password: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        const { username, password, } = this.state;
        loginAuth(this.handleLogin, username, password);
    }

    handleLogin(auth) {
        if (auth) {
            window.location.href = '/home-2';
        } else {
            alert('Login inválido');
        }
    }

    render() {
        return (
            <form className="form-login" onSubmit={this.handleSubmit}>
                <div className="form-login__container">
                    <label className="form-login__label">
                        Username:
                        <input className="form-login__username" type="text" value={this.state.username} onChange={this.handleChangeUsername}/>
                    </label>
                    <label className="form-login__label">
                        Password:
                        <input className="form-login__password" type="password" value={this.state.password} onChange={this.handleChangePassword}/>
                    </label>

                    <input className="form-login__submit" type="submit" value="Login"/>
                </div>
            </form>
        );
    }
}

export default FormLogin;
