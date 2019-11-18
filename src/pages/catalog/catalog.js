import React from 'react'
import './catalog.css'
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
                    <div className="col-md-4 ">
                        <img src={p1} alt="product 1" className="pImg" />
                        <div>
                            <div className="itemName">Jbl Speaker</div>
                            <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>sold by </span><span className="productOwner">technokrat</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={p2} alt="product 1" className="pImg" />
                        <div>
                            <div className="itemName">Sodo headset</div>
                            <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>sold by </span><span className="productOwner">technokrat</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={p3} alt="product 1" className="pImg" />
                        <div>
                            <div className="itemName">Black cross ear rings</div>
                            <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>sold by </span><span className="productOwner">Nicy icy</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" style={{ margin: 0 }}>
                <div className="col-12" >
                    <div className="strip mx-auto mt-5">
                        <span className="category">Men's Collection</span>

                    </div>

                </div>
                <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
                    <div className="col-md-4 ">
                        <img src={p1} alt="product 1" className="pImg" />
                        <div>
                            <div className="itemName">Jbl Speaker</div>
                            <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>sold by </span><span className="productOwner">technokrat</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={p4} alt="product 1" className="pImg" />
                        <div>
                            <div className="itemName">Nike Snicker</div>
                            <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>sold by </span><span className="productOwner">Raw kicks</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={p3} alt="product 1" className="pImg" />
                        <div>
                            <div className="itemName">Black cross ear rings</div>
                            <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>sold by </span><span className="productOwner">Nicy icy</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" style={{ margin: 0 }}>
                <div className="col-12" >
                    <div className="strip mx-auto mt-5">
                        <span className="category">Electronics</span>
                    </div>

                </div>
                <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
                    <div className="col-md-4 ">
                        <img src={p1} alt="product 1" className="pImg" />
                        <div>
                            <div className="itemName">Sodo headset</div>
                            <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>sold by </span><span className="productOwner">technokrat</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={p3} alt="product 1" className="pImg" />
                        <div>
                            <div className="itemName">Black cross ear rings</div>
                            <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>sold by </span><span className="productOwner">Nicy icy</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={p4} alt="product 1" className="pImg" />
                        <div>
                            <div className="itemName">Nike Snicker</div>
                            <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>sold by </span><span className="productOwner">Raw kicks</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" style={{ margin: 0 }}>
                <div className="col-12" >
                    <div className="strip mx-auto mt-5">
                        <span className="category">Phones</span>
                    </div>

                </div>
                <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
                    <div className="col-md-4 ">
                        <img src={p4} alt="product 1" className="pImg" />
                        <div>
                            <div className="itemName">Nike Snicker</div>
                            <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>sold by </span><span className="productOwner">Raw kicks</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={p2} alt="product 1" className="pImg" />
                        <div>
                            <div className="itemName">Sodo headset</div>
                            <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>sold by </span><span className="productOwner">technokrat</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={p3} alt="product 1" className="pImg" />
                        <div>
                            <div className="itemName">Black cross ear rings</div>
                            <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>sold by </span><span className="productOwner">Nicy icy</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ConsumerDashboard;