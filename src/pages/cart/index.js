import React, { useEffect } from "react";
import { Spin,message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { BsTrash } from "react-icons/bs";
import { FiAlertCircle, FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import { StyledSection, StyledDiv } from "./cart-styles";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { getCart, incrementCart, decrementCart, editCart, deleteCart } from "../../redux";
import AuthService from "../../services/authentication_service";
import UtilService from "../../services/util_service";
import digitFormat from "../../utils/digitFormat";
import ConstantUtil from "../../utils/constantUtil";


const CartPage = ({ history }) => {
  const loading = useSelector((state) => state.cart.loading);
  const cartInfo = useSelector((state) => state.cart.userCart);
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = { identifier: AuthService.getCartId() };

    dispatch(getCart(payload));
    //eslint-disable-next-line
  }, []);

  const handleDeleteCart = (item) => {
    if(item){
      item.identifier = AuthService.getCartId();
    }
    console.log(item);
    dispatch(deleteCart(item)).then(() => {
      // setLoading(false);
      message.success(item.name+" deleted from your cart.");
    });

  };

  const handleIncrement = (id) => {
    dispatch(incrementCart(id));
    updateCart(id, "Add");
  };


  const handleDecrement = (id) => {
    dispatch(decrementCart(id));
    updateCart(id, "Subtract");
  };

  const updateCart = (id, symbol) => {
    let data = null;
    cartInfo.map(item => {
      if (item.id === id) {
        if(symbol === "Add")
          item.quantity = parseInt(item.quantity) + 1;
        if(symbol === "Subtract")
          item.quantity = parseInt(item.quantity) - 1;
        item.total = parseInt(item.price) * parseInt(item.quantity);
        data = item;
      }
      //return item;
    });
    if(data){
      data.identifier = AuthService.getCartId();
    }
    console.log(data);
    dispatch(editCart(data)).then(() => {
      // setLoading(false);
      message.success("Cart updated.");
    });
  }

  const checkPath = (image) => {
    if (image && image.indexOf("https") === -1) {
      return `${UtilService.getAttachmentPath()}${image}`;
    }
    return image;
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const calculateTotal = () => {
    if (cartInfo) {
      let total;
      const val = cartInfo.map((item) => item.price * item.quantity);
      total = val.reduce((a, b) => a + b, 0);

      return digitFormat(total);
    }
  };

  return (
    <StyledSection>
      <Navbar />

      <div className="main">
        <Header current="cart" />
        <div className="cart">
          <Spin indicator={antIcon} spinning={loading}>
            {cartInfo && cartInfo.length > 0 ? (
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>product</th>
                    <th>name</th>
                    {/* <th>description</th> */}
                    <th>price</th>
                    <th>quantity</th>
                    <th>action</th>
                    <th>subtotal</th>
                  </tr>
                </thead>

                <tbody>
                  {cartInfo &&
                    cartInfo.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={checkPath(item.image)}
                            alt="product"
                            onClick={() => history.push(`/product/${item.id}`)}
                          />
                        </td>
                        <td className="w-25 name">{item.name}</td>
                        {/* <td className="w-30">{item.description ? item.description : 'N/A'}</td> */}
                        <td>{ConstantUtil.CURRENCY} {digitFormat(item.price)}</td>
                        <td>
                          {item && item.categoryname === "Hire" && <h4>How many months?</h4>}

                          <StyledDiv>
                            <button onClick={() => handleDecrement(item.id)}>
                              <AiOutlineMinus className="icon" />
                            </button>

                            <p>{item.quantity}</p>

                            <button onClick={() => handleIncrement(item.id)}>
                              <FiPlus className="icon" />
                            </button>
                          </StyledDiv>
                        </td>
                        <td>
                          <span className="action">
                            <BsTrash className="icon" onClick={() => handleDeleteCart(item)} />
                          </span>
                        </td>
                        <td className="total">
                        {ConstantUtil.CURRENCY} {digitFormat(item.total)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            ) : cartInfo && cartInfo.length === 0 ? (
              <h2 className="alert">You have no products in your cart</h2>
            ) : null}
          </Spin>

          {AuthService.hasSession() && cartInfo && cartInfo.length > 0 && (
            <div className="edit">
              <div className="edit-inner">
                <input type="text" placeholder="Coupon code" />
                <button className="btn">apply coupon</button>
              </div>

              <button className="btn">update cart</button>
            </div>
          )}
        </div>

        <div className="subtotal">
          {cartInfo && cartInfo.length > 0 && (
            <>
              <div className="subtotal-flex" style={{width: '20rem'}}>
                <h3>total: </h3>
                <p className="amount">{ConstantUtil.CURRENCY} {calculateTotal()}</p>
              </div>
              {AuthService.hasSession() && (
                <div className="text">
                  <span>
                    <FiAlertCircle />
                  </span>
                  <p>Delivery charges not included.</p>
                </div>
              )}
            </>
          )}
          {AuthService.hasSession() ? (
            <div className="btns">
              <button className="alt">continue shopping</button>

              {cartInfo && cartInfo.length > 0 && (
                <button onClick={() => history.push("/checkout")}>
                  proceed to checkout
                </button>
              )}
            </div>
          ) : (
              <p className="bold">
                Please <span onClick={() => history.push("/login")}>sign in</span>{" "}
                to checkout
            </p>
            )}
        </div>
      </div>
    </StyledSection>
  );
};

export default CartPage;
