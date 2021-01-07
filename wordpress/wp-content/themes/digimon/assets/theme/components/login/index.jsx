import React from 'react';
import FormLogin from './FormLogin';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="login__container">
                    <div className="login__content">
                        <div className="login__title">
                            <h2 className="login__title-text">Bem-vindo ao Mundo Digimon!</h2>
                        </div>
                        <FormLogin />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;