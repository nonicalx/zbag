import React, { useState } from 'react'

import './consumer.css'
import { SignUpApi } from '../../utils/apis'

const ConsumerSignUp = () => {
    const [userData, setUserData] = useState({});

    const [disable, setDisable] = useState(false);



    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.id]: e.target.value })
        console.log("userData", userData)
    }

    const handleSignUp = async (e) => {

        e.preventDefault();
        setDisable(true)
        let result = await SignUpApi(userData);

        console.log("result", result)
    }

    return (
        <div>
            <form onSubmit={handleSignUp}>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="text" placeholder="Name" id="name" required onChange={handleChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="email" placeholder="Email Address" id="email" required onChange={handleChange} />
                    </div>
                </div>

                <div className="row" style={{ margin: 0 }}>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="text" placeholder="Location" id="location" required onChange={handleChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="text" placeholder="Phone Number" id="phone" required onChange={handleChange} />
                    </div>
                </div>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="password" placeholder="Password" id="password" required onChange={handleChange} />
                    </div>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="password" placeholder="Confirm Password" required />
                    </div>
                </div>
                <div className="text-center mt-3">
                    {
                        disable ?
                            <button className="btn regBtn" disabled={true}>Registering...</button> :
                            <button className="btn regBtn">Register</button>
                    }

                </div>
            </form>
        </div>
    )
}

export default ConsumerSignUp