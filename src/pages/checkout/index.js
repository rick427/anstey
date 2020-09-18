import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Spin, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { StyledSection } from "./checkout-styles";

import { getCart, checkout } from "../../redux";
import AuthService from "../../services/authentication_service";
import UtilService from "../../services/util_service";
import digitFormat from "../../utils/digitFormat";
import ConstantUtil from "../../utils/constantUtil";

//import g7 from '../../assets/g-16.jpg';

const CheckOutPage = ({ history }) => {
  const [shipping, setShipping] = useState({});
  const loading = useSelector((state) => state.cart.loading);
  const cartInfo = useSelector((state) => state.cart.userCart);
  const userCartInfo = useSelector((state) => state.cart.userCartInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = { identifier: AuthService.getCartId() };

    dispatch(getCart(payload));
    //eslint-disable-next-line
  }, []);

  const checkPath = (image) => {
    if (image && image.indexOf("https") === -1) {
      return `${UtilService.getAttachmentPath()}${image}`;
    }
    return image;
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipping({ ...shipping, [name]: value });
  };

  const handlecheckout = () => {
    let data = {};
    shipping.name = shipping.fistName + " " + shipping.lastName;
    data.shipping = shipping;
    data.order = {};
    data.order.totalamount =
      parseInt(userCartInfo.cart.totalprice) +
      parseInt(userCartInfo.deliveryfee);
    data.order.sumtotal = parseInt(userCartInfo.cart.totalprice);
    data.order.deliveryfee = parseInt(userCartInfo.deliveryfee);
    data.order.totalquantity = userCartInfo.cart.numberofitems;

    let orders = cartInfo.map((item) => {
      let cartItem = {};
      cartItem.id = item.id;
      cartItem.price = item.price;
      cartItem.count = item.quantity;
      cartItem.total = item.total;
      return cartItem;
    });

    data.orders = orders;
    data.paymentMethod = "paypal";
    data.newShipment = true;
    data.user_id = AuthService.getId();
    data.identifier = AuthService.getCartId();

    console.log(data);
    dispatch(checkout(data)).then(() => {
      message.success("Checkout successful.");
      AuthService.setCartId(null);
      history.go(0);
    });
  };

  return (
    <StyledSection>
      <Navbar />

      <div className="main">
        <Header current="checkout" />

        <div className="checkout-grid">
          <div className="checkout-card tall">
            <div className="inner-card">
              <h3 className="title">checkout</h3>

              <div className="top-card">
                <div className="top-heading">
                  <div className="top-left">
                    <span>
                      <AiFillCheckCircle />
                    </span>
                    <h3>address details</h3>
                  </div>
                  <h3 className="top-action">change</h3>
                </div>
                <h4>kirigaya kazuhito</h4>
                <p>
                  Anstey Australia Limited, World trade center, 20th floor,
                  Constituition Avenue, Central area, Abuja-Central, Federal
                  Capital Territory
                </p>
              </div>

              <div>
                <div className="form-flex">
                  <div className="form-group">
                    <label>first name</label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      name="firstName"
                      value={shipping.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>last name</label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      name="lastName"
                      value={shipping.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* <div className="form-group full">
                                    <label>company name</label>
                                    <input type="text" placeholder="Enter company name" required />
                                </div> */}
                {/* <div className="form-group full">
                                    <label>select a country</label>
                                    <input type="text" placeholder="select country" required />
                                </div> */}
                <div className="form-group full">
                  <label>address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={shipping.address}
                    onChange={handleChange}
                    required
                  />
                  {/* <input className="mt" type="text" placeholder="apartment, suite, unit etc." required /> */}
                </div>
                <div className="form-group full">
                  <label>State</label>
                  <input
                    type="text"
                    placeholder="Enter state"
                    name="state"
                    value={shipping.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group full">
                  <label>town / city</label>
                  <input
                    type="text"
                    placeholder="Enter town or city"
                    name="city"
                    value={shipping.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* <div className="form-flex">
                                    <div className="form-group">
                                        <label>state / country</label>
                                        <input type="text" placeholder="Enter country or state" required />
                                    </div>
                                    <div className="form-group">
                                        <label>postcode / ZIP</label>
                                        <input type="text" placeholder="Enter postcode or zip code" required />
                                    </div>
                                </div> */}
                <div className="form-flex">
                  <div className="form-group">
                    <label>phone</label>
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      name="phone"
                      value={shipping.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>email</label>
                    <input
                      type="text"
                      placeholder="Enter email address"
                      name="email"
                      value={shipping.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group full">
                  <label>addition information</label>
                  <input
                    className="info"
                    type="text"
                    placeholder="Enter additional information"
                    required
                  />
                </div>
                <button onClick={() => handlecheckout()}>
                  proceed to payment
                </button>
              </div>
            </div>
          </div>

          <div className="checkout-card tall-sm">
            <Spin indicator={antIcon} spinning={loading}>
              <div className="summary">
                <h3 className="summary-header">
                  order summary ({userCartInfo && userCartInfo.cartItemCount})
                </h3>

                {cartInfo &&
                  cartInfo.map((item, index) => (
                    <div className="order" key={index}>
                      <div className="order-img">
                        <img
                          src={checkPath(item.image)}
                          alt="product"
                          onClick={() => history.push(`/product/${item.id}`)}
                        />
                      </div>
                      <div className="order-info" style={{ height: "100%" }}>
                        <h3>{item.name}</h3>
                        <p>Quantity: x{item.quantity}</p>
                        <p>{item.description ? item.description : "N/A"}</p>
                      </div>
                      <div className="order-price">
                        <p>
                          {ConstantUtil.CURRENCY} {digitFormat(item.price)}
                        </p>
                      </div>
                    </div>
                  ))}

                <div className="order-summary">
                  <div className="inner-flex">
                    <p>subtotal:</p>
                    <p>
                      {ConstantUtil.CURRENCY}{" "}
                      {userCartInfo &&
                        userCartInfo.cart &&
                        digitFormat(userCartInfo.cart.totalprice)}
                    </p>
                  </div>
                  {/* <div className="inner-flex">
                                    <p>promo code applied:</p>
                                    <p>{ConstantUtil.CURRENCY} -20,000</p>
                                </div> */}
                  <div className="inner-flex">
                    <p>shipping anf handling tax:</p>
                    <p>
                      {ConstantUtil.CURRENCY}{" "}
                      {userCartInfo && userCartInfo.deliveryfee}
                    </p>
                  </div>
                  <div className="inner-flex">
                    <p>Total:</p>
                    <p>
                      {ConstantUtil.CURRENCY}{" "}
                      {userCartInfo &&
                        userCartInfo.cart &&
                        digitFormat(
                          parseInt(userCartInfo.cart.totalprice) +
                            parseInt(userCartInfo.deliveryfee)
                        )}
                    </p>
                  </div>
                </div>
              </div>
            </Spin>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default CheckOutPage;
