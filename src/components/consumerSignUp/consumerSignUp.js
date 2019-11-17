import React from 'react'

import './consumer.css'

const ConsumerSignUp = () => {


    return (
        <div>
            <form>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="text" placeholder="Name" required />
                    </div>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="email" placeholder="Email Address" required />
                    </div>
                </div>

                <div className="row" style={{ margin: 0 }}>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="text" placeholder="Location" required />
                    </div>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="text" placeholder="Phone Number" required />
                    </div>
                </div>
                <div className="row" style={{ margin: 0 }}>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="password" placeholder="Password" required />
                    </div>
                    <div className="col-md-6 form-group">
                        <input className="form-control" type="password" placeholder="Confirm Password" required />
                    </div>
                </div>
                <div className="text-center mt-3">
                    <button className="btn regBtn">Register</button>
                </div>
            </form>
        </div>
    )
}

export default ConsumerSignUp