import React from "react";
import "./catalog.css";
import p1 from "../../assets/images/product.jfif";
import p2 from "../../assets/images/product1.jfif";
import p3 from "../../assets/images/product2.jfif";
import p4 from "../../assets/images/product3.jfif";
const ConsumerDashboard = () => {
  return (
    <div>
      <div className="row" style={{ margin: 0 }}>
        <div className="col-12">
          <div className="strip mx-auto mt-5">
            <span className="category">New</span>
          </div>
        </div>
        <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
              <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Jbl Speaker</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">technokrat</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Sodo headset</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">technokrat</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p3})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Black cross ear rings</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">Nicy icy</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p2})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Black cross ear rings</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">Nicy icy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ margin: 0 }}>
        <div className="col-12">
          <div className="strip mx-auto mt-5">
            <span className="category">Men's</span>
          </div>
        </div>
        <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Jbl Speaker</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">technokrat</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p4})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Sodo headset</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">technokrat</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Black cross ear rings</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">Nicy icy</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Black cross ear rings</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">Nicy icy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ margin: 0 }}>
        <div className="col-12">
          <div className="strip mx-auto mt-5">
            <span className="category">Electronics</span>
          </div>
        </div>
        <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Jbl Speaker</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">technokrat</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Sodo headset</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">technokrat</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p2})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Black cross ear rings</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">Nicy icy</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p3})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Black cross ear rings</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">Nicy icy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ margin: 0 }}>
        <div className="col-12">
          <div className="strip mx-auto mt-5">
            <span className="category">Phone</span>
          </div>
        </div>
        <div className="row mt-3 mx-auto" style={{ margin: 0, width: "95%" }}>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p3})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Jbl Speaker</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">technokrat</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p1})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Sodo headset</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">technokrat</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p2})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Black cross ear rings</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">Nicy icy</span>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{
                background: `url(${p4})`,
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: 4
              }}
            >
                <span
                className="fa fa-plus-circle ml-2 mt-2"
                style={{ fontSize: 28, cursor: "pointer" }}
                title="add to cart"
              ></span>
              <span style={{float: "right"}}>
                <button className="btn btn-warning btn-sm mt-2 mr-2">Buy Now</button>
              </span>
            </div>
            <div>
              <div className="itemName">Black cross ear rings</div>
              <span style={{ color: "white", fontWeight: 100, fontSize: 13 }}>
                sold by{" "}
              </span>
              <span className="productOwner">Nicy icy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
