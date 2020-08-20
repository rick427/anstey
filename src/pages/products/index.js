import React, {useEffect} from 'react';
import {Spin, Carousel, Button} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';

// import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
// import {MdFilterList} from 'react-icons/md';

import {getAllProducts, getAllCategories} from '../../redux';
import {StyledSection} from './products-styles';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
// import UtilService from '../../services/util_service';

import bg from '../../assets/h-1.jpg';
import bg2 from '../../assets/h-2.jpg';
import bg3 from '../../assets/h-3.jpg';
import bg4 from '../../assets/h-4.jpg';
import bg5 from '../../assets/h-5.jpg';
import cat from '../../assets/cat-banner.jpg';
import Header from '../../components/header';

const ProductsPage = () => {
    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getAllCategories());
        //eslint-disable-next-line
    },[]);

    const dispatch = useDispatch();

    const loading = useSelector(state => state.products.loading);
    const catLoading = useSelector(state => state.category.loading);
    const category = useSelector(state => state.category.data);
    const products = useSelector(state => state.products.data);

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

    return (
        <StyledSection bg={cat}>
            <Navbar/>

            <div className="main">
                <Header current="products"/>

                <Spin tip="Loading categories..." indicator={antIcon} spinning={catLoading}>
                    <div className="category">
                            <div className="category-card">
                                    <p className="header">categories</p>
                                    <ul className="category-list">
                                        {category.map(item => (
                                            <li key={item.id} className="category-item"><span>{item.name}</span></li>
                                        ))}
                                    </ul>
                            </div>
                        

                        <div className="category-card wide">
                            <Carousel effect="fade" dotPosition="bottom" autoplay>
                                {category.map(item => (
                                    <div key={item.id} className="cover">
                                        <img className="coverimage" src={item.coverimage} alt="coverimage"/>
                                        <div className="cover-info">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </Spin>
                
                <div className="section-title">
                    <h3>new arrivals</h3>
                    <input type="text" placeholder="search by product name"/>
                </div>

                <div className="collage">
                    <div className="collage-card wide tall">
                        <img src={bg} alt="collage"/>
                        <span>trending beddings !</span>
                    </div>
                    <div className="collage-card">
                        <img src={bg2} alt="collage"/>
                        <span>comfortable sheets !</span>
                    </div>
                    <div className="collage-card">
                        <img src={bg3} alt="collage"/>
                        <span>air conditioned x-ray !</span>
                    </div>
                    <div className="collage-card tall">
                        <img src={bg4} alt="collage"/>
                        <span>improvised triage unit !</span>
                    </div>
                    <div className="collage-card wide">
                        <img src={bg5} alt="collage"/>
                        <span>sanitized environments !</span>
                    </div>
                </div>

                <div className="section-title">
                    <h3>best selling products</h3>
                    <input type="text" placeholder="search by product name"/>
                </div>

                <Spin indicator={antIcon} tip="Loading Products..." spinning={loading}>
                    <div className="listings">
                        {products.map(product => (
                            <Card 
                                key={product.id}
                                id={product.id}
                                imageUrl={product.imageone} 
                                title={product.name} 
                                price={product.price} 
                                quantity={product.quantity}
                                total={parseInt(product.price) * 1}
                            />
                        ))}
                    </div>
                </Spin>

                <div className="btn">
                    <Button type="primary" disabled={loading ? true : false}>Load More</Button>
                </div>
            </div>
        </StyledSection>

    )
}

export default ProductsPage
