import React from "react";
import "./Login.scss";
import login from "/img/back.png";
const Login = () => {
    return (
        <div className="login-container">
            <div className="login-wrapper">

             <nav className="login-nav">
                <div className="login-back">
                    <div className="login-back-img">
                        <img src="./" alt="" />
                    </div>
                </div>
             </nav>

             <div className="login-main">
                <div>
                <img src={login}></img>
                </div>
             </div>
            </div>
        </div>
    );
};

export default Login;
