import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className ="login-form">
            <div>
                <h2>Register : Creacte Account</h2>
                <form onSubmit = "">
                    <input type="email" name = "" id = "" placeholder = "Your Email" />
                    <br />
                    <input type="password" name="" placeholder="Your Password" id="" />
                    <br />
                    <input type="password" name="" placeholder="Re-Enter Password " id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account <Link to = "/login">Login</Link></p>
                <div>--------or-----------</div>
                <button className="btn-reguler">Google Sing In</button>
            </div>
        </div>
    );
};

export default Register;