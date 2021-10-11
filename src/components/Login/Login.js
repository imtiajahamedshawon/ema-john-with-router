import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFriebase from '../../hooks/useFriebase';
import './Login.css'

const Login = () => {
    // const {user, singInUsingGoogle} =useFriebase();
    const { singInUsingGoogle} =useAuth();
    const location = useLocation();
    const history = useHistory();
    const Redirect_uri = location.state?.from ||'/shop'; 
    console.log('came from',  location.state?.form);


    const handleGoogleLogin = ()=>{
        singInUsingGoogle()
        .then(result =>{
            history.push(Redirect_uri)
        })
    }

    return (
        <div className ="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name = "" id = "" placeholder = "Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-jonh website ? <Link to = "/register">Creacte Account</Link></p>

                <div>---------or------------</div>
                <button className = " btn-regular" onClick = {handleGoogleLogin}>Google Sing In</button>
            </div>
        </div>
    );
};

export default Login;