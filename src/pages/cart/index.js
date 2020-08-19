import React, {useEffect} from 'react';
import {Spin} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {BsTrash} from 'react-icons/bs';
import {FiAlertCircle} from 'react-icons/fi';
import {useSelector, useDispatch} from 'react-redux';

import {StyledSection} from './cart-styles';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import {getCart} from '../../redux';
import AuthService from '../../services/authentication_service';
import UtilService from '../../services/util_service';

// import prod1 from '../../assets/h-3.jpg';
// import prod2 from '../../assets/g-18.jpg';
// import prod3 from '../../assets/g-16.jpg';
// import prod4 from '../../assets/g-20.jpg';
import Picker from '../../components/picker';

const CartPage = ({history}) => {
    const loading = useSelector(state => state.cart.loading);
    const cartInfo = useSelector(state => state.cart.userCart);
    const dispatch = useDispatch();

    useEffect(() => {
        const payload = {identifier: AuthService.getCartId()}

        dispatch(getCart(payload));
        //eslint-disable-next-line
    }, []);

    const checkPath = (image) => {
        if(image && image.indexOf('https') === -1){
          return `${UtilService.getAttachmentPath()}${image}`;
        }
        return image;
    };

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

    const calculateTotal = () => {
        if(cartInfo.cartitems){
            let total;
            const val = cartInfo.cartitems.map(item => item.price * item.quantity);
            total = val.reduce((a, b) => a + b, 0);
            return total;
        }
    }

    return (
        <StyledSection>
            <Navbar/>

            <div className="main">

                <Header current="cart"/>
                <div className="cart">
                    <Spin indicator={antIcon} spinning={loading}>

                        {Object.entries(cartInfo).length > 0 && cartInfo.cartitems.length > 0 ? <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>product</th>
                                    <th>name</th>
                                    <th>description</th>
                                    <th>price</th>
                                    <th>quantity</th>
                                    <th>action</th>
                                    <th>subtotal</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Object.entries(cartInfo).length > 0 && cartInfo.cartitems.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <img src={checkPath(item.image)} alt="product"/>
                                        </td>
                                        <td className="w-25 name">{item.name}</td>
                                        <td className="w-30">{item.shortdescription ? item.shortdescription : 'N/A'}</td>
                                        <td>&#8358;{item.price}</td>
                                        <td>
                                            <Picker quantity={item.quantity}/>
                                        </td>
                                        <td><span className="action"><BsTrash className="icon"/></span></td>
                                        <td className="total">&#8358; {item.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> : Object.entries(cartInfo).length > 0 && cartInfo.cartitems.length === 0 ?<h2 className="alert">You have no products in your cart</h2> : null}
                    </Spin>

                    {AuthService.hasSession() &&
                    <div className="edit">
                        <div className="edit-inner">
                            <input type="text" placeholder="Coupon code"/>
                            <button className="btn">apply coupon</button>
                        </div>

                        <button className="btn">update cart</button>
                    </div>}
                </div>

                <div className="subtotal">
                   {Object.entries(cartInfo).length > 0 && cartInfo.cartitems.length > 0 &&
                   <>
                        <div className="subtotal-flex">
                            <h3>total: </h3>
                            <p className="amount">&#8358; {calculateTotal()}</p>
                        </div>
                        <div className="text">
                            <span><FiAlertCircle/></span>
                            <p>
                                Delivery charges not included.
                            </p>
                        </div>
                    </>}
                    {AuthService.hasSession() ? (
                        <div className="btns">
                            <button className="alt">continue shopping</button>
                            <button onClick={() => history.push('/checkout')}>proceed to checkout</button>
                        </div>
                    ) : (
                        <p className="bold">Please <span onClick={() => history.push('/login')}>sign in</span> to checkout</p>
                    )}
                </div>
            </div>
        </StyledSection>
    )
}

export default CartPage
