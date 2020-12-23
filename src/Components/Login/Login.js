import React from 'react'
import { loginUrl } from '../../spotify';
import './Login.css';



const Login = () => {
    return (
        <div className="login__">
            <h1>I am the login page </h1>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotify logo"
                className="spotify__image"
                aria-label="spotify-image"
            />
            {/*Login with spotify button*/}
            <button className="login__button">
            <a href={loginUrl}>
            LOGIN WITH SPOTIFY
            </a>
            </button>
        </div>
    )
}

export default Login;
