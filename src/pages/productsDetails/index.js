import React, {useState} from 'react';
import {AiOutlineStar, AiOutlineMinus} from 'react-icons/ai';
import {FiPlus} from 'react-icons/fi';

import product from '../../assets/g-8.jpg';

import {StyledSection} from './productDetails-styles';
import Navbar from '../../components/navbar';

const ProductDetails = ({history}) => {
    const [amount, setAmount] = useState(0);

    const handleIncrement = () => {
        setAmount(prevState => prevState + 1);
    }

    const handleDecrement = () => {
        if(amount === 0) return;
        setAmount(prevState => prevState - 1);
    }

    return (
        <StyledSection>
            <Navbar/>

            <div className="main">
                <div className="breadcrumb">
                    <p className="breadcrumb-link">home | products |<span> product detail</span></p>
                    <div className="flex">   
                        <p className="breadcrumb-text">
                            oxford enterprise bedroom
                        </p>
                    </div>
                </div>

                <div className="product">
                    <div className="product-card">
                        <img src={product} alt="product"  className="product-img"/>
                    </div>

                    <div className="product-card wide details">
                        <h3 className="title">oxford enterprise xamarin bedroom</h3>

                        <div className="reviews">
                            <span className="stars">
                                <AiOutlineStar/>
                                <AiOutlineStar/>
                                <AiOutlineStar/>
                            </span>
                            <p>(0 customer reviews) <span>sold: 39</span></p>
                        </div>

                        <h3 className="price">&#8358;150,000.00 - &#8358;200,000.00</h3>
                        <p className="description">
                            Promote healthy living. Enjoy the best of the
                            double treaded enterprise bedroom. Helps maintain
                            capilary health with it's air been a very strong antioxidant.
                            Sleep with swag, sleep with flex, sleep enterprise.
                            Our enterprise level bathrooms have the power to change your lives
                            forever just ask sponge bob. Our sole founder, slayer of dragons, king of
                            the north Jon Snow. Amapiano is the new norm !!..
                        </p>

                        <div className="picker">
                            <button onClick={handleDecrement}>
                                <AiOutlineMinus/>
                            </button>
                            <p>{amount}</p>
                            <button onClick={handleIncrement}>
                                <FiPlus/>
                            </button>
                        </div>

                        <div className="actions">
                            <button onClick={() => history.push('/cart')}>add to cart</button>
                            <button className="alt">buy now</button>
                        </div>
                    </div>
                </div>

                <div className="product-description">
                    <h3>description</h3>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
                        atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique 
                        sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum 
                        facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
                        impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae 
                        sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus 
                        maiores alias consequatur aut perferendis doloribus asperiores repellat <br/><br/>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
                        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                        reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
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
        </StyledSection>
    )
}

export default ProductDetails
