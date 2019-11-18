import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'


const Home = () => {


    return (
        <div>


            <div className="text-center" style={{ color: "white" }}>
                <h2 className="slogan">Shopping just got Zuper Eazy</h2>
                <p className="subtext mx-auto">Shopping at the lowest price you can get</p>
            </div>
            <Link to='/signup'>
                <div className="text-center mt-4">
                    <button className="btn signUpBtn">
                        Join now
                </button>
                </div>
            </Link>
            <div className="socials">
                <span className="fa fa-facebook-square mx-3"></span>
                <span className="fa fa-twitter-square mx-3"></span>
                <span className="fa fa-instagram mx-3"></span>
            </div>
        </div>
    )
}

export default Home