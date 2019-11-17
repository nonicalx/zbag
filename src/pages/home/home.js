import React from 'react'
import './home.css'


const Home = () => {


    return (
        <div>


            <div className="text-center" style={{ color: "white" }}>
                <h2 className="slogan">Secure the Bag, at the Lowest Cost</h2>
                <p className="subtext mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            </div>
            <div className="text-center mt-4">
                <button className="btn signUpBtn">
                    Join now
                </button>
            </div>

            <div className="socials">
                <span className="fa fa-facebook-square mx-3"></span>
                <span className="fa fa-twitter-square mx-3"></span>
                <span className="fa fa-instagram mx-3"></span>
            </div>
        </div>
    )
}

export default Home