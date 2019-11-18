import React from 'react';
import './login.css'
import { Link } from 'react-router-dom'

const Login = (props) => {

    return (
        <div>
            <Link to="/">
                <span className="fa fa-arrow-left mx-4 my-4" style={{ color: "yellow", fontSize: 26 }}></span>
            </Link>
            <div className="login mx-auto">
                <form>

                    <span className="fa fa-shopping-bag bag mr-3"></span><span style={{ color: "yellow" }} className="loginTxt">Login</span>
                    <div className="form-group text-center mt-4">
                        <input type="email" placeholder="Email" className="form-control" />
                    </div>
                    <div className="form-group text-center">
                        <input type="password" placeholder="Password" className="form-control" />
                    </div>
                    <div className="text-center mt-3 mb-4">
                        <button className="btn regBtn" style={{ width: "70%" }}>Log in</button>
                    </div>

                </form>

            </div>
        </div>
    )
}


export default Login