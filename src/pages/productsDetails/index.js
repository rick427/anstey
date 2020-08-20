import React, {useState, useEffect} from 'react';
import {Spin, Tag, Carousel, message, InputNumber} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';

// import product from '../../assets/h-3.jpg';

import {StyledSection} from './productDetails-styles';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import {getProductsById, addToCart} from '../../redux';
import AuthService from '../../services/authentication_service';
import UtilService from '../../services/util_service';

// import banner from '../../assets/banner-3.jpg';
// import banner2 from '../../assets/g-8.jpg';
// import banner3 from '../../assets/h-5.jpg';

const ProductDetails = ({history, match}) => {
    const [quantity, setQuantity] = useState(1);
    const cartLoading = useSelector(state => state.cart.loading);
    const loading = useSelector(state => state.products.loading);
    const product = useSelector(state => state.products.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsById(match.params.id));
        //eslint-disable-next-line
    },[]);


    const checkPath = (image) => {
        if(image && image.indexOf('https') === -1){
          return `${UtilService.getAttachmentPath()}${image}`;
        }
        return image;
    }

    const handleAddToCart = () => {
        const info = {
            id: product.id,
            price: product.price,
            qty: quantity,
            totalall: parseInt(product.price) * quantity,
            identifier: AuthService.getCartId()
        };

        dispatch(addToCart(info)).then(() => {
            message.success('Product added to cart');
        })
    };

    const handleChange = val => {
        if(val === '' || val === 0 || val === undefined){
            return setQuantity(1);
        };

        setQuantity(val);
    }

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

    return (
        <StyledSection>
            <Navbar/>

            <div className="main">
                <Header current="products | details"/>

                <div className="product">
                    <Spin indicator={antIcon} spinning={loading}>
                        <div className="product-card">
                            <Carousel effect="fade" dotPosition="left">
                                <div className="cover">
                                    <img src={checkPath(product.imageone)} alt="product" className="product-img"/>
                                </div>

                                {product.imagetwo &&
                                <div className="cover">
                                    <img src={checkPath(product.imagetwo)} alt="product" className="product-img"/>
                                </div>}

                                {product.imagethree &&
                                <div className="cover">
                                    <img src={checkPath(product.imagethree)} alt="product" className="product-img"/>
                                </div>}
                            </Carousel>
                        </div>
                    </Spin>

                    <Spin indicator={antIcon} spinning={loading}>
                        <div className="product-card wide details">
                            <h3 className="title">{product.name}</h3>

                            <div className="reviews">
                                <span className="push">
                                    {product.categoryname ? (
                                        <Tag color="orange">{product.categoryname}</Tag>
                                    ) : (
                                        <Tag color="#de2f40">N/A</Tag>
                                    )}
                                </span>

                                <span>status: {' '} <span><Tag color="#34bd7c">{product.status}</Tag></span></span>
                            </div>

                            <h3 className="price">&#8358; {product.price}</h3>
                            <p className="description">
                                {product.longdescription}
                            </p>
                            
                            <InputNumber min={1} max={10} defaultValue={1} onChange={handleChange} style={{margin: '2rem 0'}}/>

                            <div className="actions">
                                <Spin indicator={antIcon} spinning={cartLoading}>
                                    <button onClick={handleAddToCart}>
                                        add to cart
                                    </button>
                                </Spin>
                                <button onClick={() => history.push('/cart')} className="alt">buy now</button>
                            </div>
                        </div>
                    </Spin>
                </div>

                <div className="product-description">
                    <div className="product-desc-card">
                        <h3>description</h3>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
                            atque corrupti quos dolores et quas molestias excepturi. sint occaecati cupiditate non provident, similique 
                            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum 
                            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
                            impedit quo minus id quod maxime placeat facere.
                        </p>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
                            atque corrupti quos dolores et quas molestias excepturi. sint occaecati cupiditate non provident, similique 
                            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum 
                            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
                            impedit quo minus id quod maxime placeat facere.
                        </p>
                        {/* <div className="images">
                            <img src={banner} alt="banner-img"/>
                            <img src={banner3} alt="banner-img"/>
                            <img src={banner2} alt="banner-img"/>
                        </div> */}
                    </div>
                    <div className="product-desc-card">
                        <h3>additional info</h3>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
                            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique 
                            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum 
                            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
                            maiores alias consequatur aut perferendis doloribus asperiores repellat <br/><br/>
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                        </p>
                    </div>
                </div>
            </div>
        </StyledSection>
    )
}

export default ProductDetails
