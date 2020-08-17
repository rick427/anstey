import React, {useEffect} from 'react';
import {Spin} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';

// import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
// import {MdFilterList} from 'react-icons/md';

import {getAllProducts, getAllCategories} from '../../redux';
import {StyledSection} from './products-styles';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import UtilService from '../../services/util_service';

import bg from '../../assets/h-1.jpg';
import bg2 from '../../assets/h-2.jpg';
import bg3 from '../../assets/h-3.jpg';
import bg4 from '../../assets/h-4.jpg';
import bg5 from '../../assets/h-5.jpg';
// import bg7 from '../../assets/h-6.jpg';
// import bg8 from '../../assets/h-7.jpg';
// import bg9 from '../../assets/h-8.jpg';
// import bg10 from '../../assets/h-9.jpg';
// import bg11 from '../../assets/h-10.jpg';
// import bg12 from '../../assets/g-11.png';
// import bg13 from '../../assets/g-12.png';
// import bg14 from '../../assets/g-13.png';
// import bg15 from '../../assets/g-14.png';
// import bg16 from '../../assets/g-15.jpg';
// import bg17 from '../../assets/g-16.jpg';
// import bg18 from '../../assets/g-17.jpg';
// import bg19 from '../../assets/g-18.jpg';
// import bg20 from '../../assets/g-19.jpg';
// import bg21 from '../../assets/g-20.jpg';
import cat from '../../assets/cat-banner.jpg';
import Header from '../../components/header';

const ProductsPage = ({history}) => {
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

                <div className="category">
                    <div className="category-card">
                        <Spin indicator={antIcon} spinning={catLoading}>
                        <p className="header">categories</p>
                            <ul className="category-list">
                                {category.map(item => (
                                    <li key={item.id} className="category-item"><span>{item.name}</span></li>
                                ))}
                            </ul>
                        </Spin>
                    </div>

                    <div className="category-card wide banner">
                       <div className="inner-text">
                            <p className="title-tag">premium quality</p>
                            <h1 className="name">synaptic boosters</h1>
                            <p className="sub">
                                Alpha GPC is a 300mg acoustic medical drug which 
                                is used for ageing patients. It also tracks heart beats,
                                and can restore facial hair.
                            </p>
                       </div>
                    </div>
                </div>
                
                <div className="section-title">
                    <h3>new arrivals</h3>
                    <input type="text" placeholder="search by product name"/>
                </div>

                <div className="collage">
                    <div className="collage-card wide tall">
                        <img src={bg} alt="collage" onClick={() => history.push('/product/214')}/>
                        <span>trending beddings !</span>
                    </div>
                    <div className="collage-card">
                        <img src={bg2} alt="collage" onClick={() => history.push('/product/218')}/>
                        <span>comfortable sheets !</span>
                    </div>
                    <div className="collage-card">
                        <img src={bg3} alt="collage" onClick={() => history.push('/product/112')}/>
                        <span>air conditioned x-ray !</span>
                    </div>
                    <div className="collage-card tall" onClick={() => history.push('/product/200')}>
                        <img src={bg4} alt="collage"/>
                        <span>improvised triage unit !</span>
                    </div>
                    <div className="collage-card wide">
                        <img src={bg5} alt="collage" onClick={() => history.push('/product/14')}/>
                        <span>sanitized environments !</span>
                    </div>
                </div>

                <div className="section-title">
                    <h3>best selling products</h3>
                    <input type="text" placeholder="search by product name"/>
                </div>

                <Spin indicator={antIcon} tip="Loading..." spinning={loading}>
                    <div className="listings">
                        {products.map(product => (
                            <Card 
                                key={product.id}
                                imageUrl={product.imageone} 
                                title={product.name} 
                                price={product.price} 
                                loading={loading}
                            />
                        ))}
                    </div>
                </Spin>
            </div>
        </StyledSection>

    )
}

export default ProductsPage
