import React from 'react';
import MyInput from "../components/UI/input/MyInput";

const Login = () => {
    return (
        <div>
            <h1>Login page</h1>
            <MyInput type="text" placeholder={"Enter login"}/>
            <MyInput type="password" placeholder={"Enter password"}/>
        </div>
    );
};

export default Login;