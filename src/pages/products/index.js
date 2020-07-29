import React from 'react';
// import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
// import {MdFilterList} from 'react-icons/md';

import {StyledSection} from './products-styles';
import Navbar from '../../components/navbar';
import Card from '../../components/cards';

import bg from '../../assets/h-1.jpg';
import bg2 from '../../assets/h-2.jpg';
import bg3 from '../../assets/h-3.jpg';
import bg4 from '../../assets/h-4.jpg';
import bg5 from '../../assets/h-5.jpg';
import bg7 from '../../assets/h-6.jpg';
import bg8 from '../../assets/h-7.jpg';
import bg9 from '../../assets/h-8.jpg';
import bg10 from '../../assets/h-9.jpg';
import bg11 from '../../assets/h-10.jpg';
import bg12 from '../../assets/g-11.png';
import bg13 from '../../assets/g-12.png';
import bg14 from '../../assets/g-13.png';
import bg15 from '../../assets/g-14.png';
import bg16 from '../../assets/g-15.jpg';
import bg17 from '../../assets/g-16.jpg';
import bg18 from '../../assets/g-17.jpg';
import bg19 from '../../assets/g-18.jpg';
import bg20 from '../../assets/g-19.jpg';
import bg21 from '../../assets/g-20.jpg';
import category from '../../assets/cat-banner.jpg';
import Header from '../../components/header';

const ProductsPage = ({history}) => {
    return (


        <StyledSection bg={category}>
            <Navbar/>

            <div className="main">
                <Header current="products"/>

                <div className="category">
                    <div className="category-card">
                        <p className="header">categories</p>
                        <ul className="category-list">
                            <li className="category-item"><span>Pharmacy</span></li>
                            <li className="category-item"><span>Bathroom</span></li>
                            <li className="category-item"><span>Bedrooms</span></li>
                            <li className="category-item"><span>Compression garments</span></li>
                            <li className="category-item"><span>Continence</span></li>
                            <li className="category-item"><span>Daily assisted living</span></li>
                            <li className="category-item"><span>Hire</span></li>
                            <li className="category-item"><span>Injury recovery & rehabilitation</span></li>
                            <li className="category-item"><span>Maternity</span></li>
                            <li className="category-item"><span>Mobility</span></li>
                            <li className="category-item"><span>Sleep</span></li>
                        </ul>
                    </div>
                    <div className="category-card wide banner">
                       <div className="inner-text">
                            <p className="title-tag">premium quality</p>
                            <h3 className="name">synaptic boosters</h3>
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
                <div className="listings">
                    <Card image={bg7} title="hekal enterprise bedroom" price="50,000" stars/>
                    <Card image={bg8} title="queens premium bedroom" price="20,500"/>
                    <Card image={bg9} title="NXFT opal bathroom" price="60,200"/>
                    <Card image={bg10} title="plain white bathroom" price="10,250" stars/>
                    <Card image={bg11} title="oxford english enterprise bathroom" price="80,250" stars/>
                    <Card image={bg12} title="temperature monitoring" price="5,250"/>
                    <Card image={bg13} title="maternity checkups" price="3,650" stars/>
                    <Card image={bg14} title="smart android mask" price="2,550"/>
                    <Card image={bg15} title="swiss dental and medicals" price="3,250" stars/>
                    <Card image={bg16} title="12-ply gauze sponges" price="6,250"/>
                    <Card image={bg17} title="oxygen masks" price="2,250" stars/>
                    <Card image={bg18} title="surgical gloves" price="1,250"/>
                    <Card image={bg19} title="injury recovery & rehabilitation" price="4,300"/>
                    <Card image={bg21} title="comfy sleeping pills" price="250"/>
                    <Card image={bg20} title="maternity support" price="2,250" stars/>
                </div>


                <div className="btn">
                    <button>load more</button>
                </div>
            </div>
        </StyledSection>

    )
}

export default ProductsPage
