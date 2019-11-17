import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Consumer from '../../components/consumerSignUp/consumerSignUp'
import Seller from '../../components/sellerSignUp/sellerSignUp'
import './signUp.css'

const SignUp = () => {


    return (
        <div>
            <div className="text-center bigLogo mb-3">
                <span className="fa fa-shopping-bag"></span>
            </div>
            <Tabs defaultActiveKey="consumer" className="tabs mx-auto" style={{ color: "yellow" }}>
                <Tab eventKey="consumer" title="Consumer" className="tabs mx-auto mt-5">
                    <Consumer />
                </Tab>
                <Tab eventKey="seller" title="Seller" className="tabs mx-auto mt-5" >
                    <Seller />
                </Tab>
            </Tabs>
        </div>
    )
}

export default SignUp