import React from 'react'
import './dashboard.css'
import p1 from '../../assets/images/product.jfif'
import p2 from '../../assets/images/product1.jfif'
import p3 from '../../assets/images/product2.jfif'
import p4 from '../../assets/images/product3.jfif'
const ConsumerDashboard = () => {


    return (
        <div>

            <div className="row" style={{ margin: 0 }}>
                <div className="col-12" >
                    <div className="strip mx-auto mt-5">
                        <span className="category">New</span>
                    </div>

                </div>
                <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
                    <div className="col-md-4 "><img src={p1} alt="product 1" className="pImg" /></div>
                    <div className="col-md-4"><img src={p2} alt="product 1" className="pImg" /></div>
                    <div className="col-md-4"><img src={p3} alt="product 1" className="pImg" /></div>
                </div>
            </div>

            <div className="row" style={{ margin: 0 }}>
                <div className="col-12" >
                    <div className="strip mx-auto mt-5">
                        <span className="category">Men's Collection</span>

                    </div>

                </div>
                <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
                    <div className="col-md-4 "><img src={p1} alt="product 1" className="pImg" /></div>
                    <div className="col-md-4"><img src={p4} alt="product 1" className="pImg" /></div>
                    <div className="col-md-4"><img src={p3} alt="product 1" className="pImg" /></div>
                </div>
            </div>

            <div className="row" style={{ margin: 0 }}>
                <div className="col-12" >
                    <div className="strip mx-auto mt-5">
                        <span className="category">Electronics</span>
                    </div>

                </div>
                <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
                    <div className="col-md-4 "><img src={p1} alt="product 1" className="pImg" /></div>
                    <div className="col-md-4"><img src={p3} alt="product 1" className="pImg" /></div>
                    <div className="col-md-4"><img src={p4} alt="product 1" className="pImg" /></div>
                </div>
            </div>

            <div className="row" style={{ margin: 0 }}>
                <div className="col-12" >
                    <div className="strip mx-auto mt-5">
                        <span className="category">Phones</span>
                    </div>

                </div>
                <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
                    <div className="col-md-4 "><img src={p4} alt="product 1" className="pImg" /></div>
                    <div className="col-md-4"><img src={p2} alt="product 1" className="pImg" /></div>
                    <div className="col-md-4"><img src={p3} alt="product 1" className="pImg" /></div>
                </div>
            </div>
        </div>
    )
}

export default ConsumerDashboard;