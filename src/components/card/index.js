import React, { useState } from "react";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  ShoppingCartOutlined,
  ExpandOutlined,
  SyncOutlined,
} from "@ant-design/icons";

import { StyledCard } from "./card-styles";
import { addToCart } from "../../redux";
import AuthService from "../../services/authentication_service";
import UtilService from "../../services/util_service";
import digitFormat from "../../utils/digitFormat";
import ConstantUtil from "../../utils/constantUtil";
const Card = ({ imageUrl, title, price, id, total }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const checkPath = (image) => {
    if (image && image.indexOf("https") === -1) {
      return `${UtilService.getAttachmentPath()}${image}`;
    }
    return image;
  };

  const handleAddToCart = () => {
    setLoading(true);
    const info = {
      id,
      price,
      totalall: total,
      qty: 1,
      identifier: AuthService.getCartId(),
    };

    dispatch(addToCart(info)).then(() => {
      setLoading(false);
      message.success("Added to cart.");
    });
  };


  
  return (
    <StyledCard
      // loading={loading}
      bodyStyle={{ padding: 0 }}
      actions={[
        loading ? (
          <SyncOutlined key="spin" spin={loading} />
        ) : (
          <ShoppingCartOutlined key="cart" onClick={handleAddToCart} />
        ),
        <ExpandOutlined
          key="expand"
          onClick={() => history.push(`/product/${id}`)}
        />,
      ]}
    >
      <div className="image">
        <img src={checkPath(imageUrl)} alt="product" />
      </div>
      <div className="flex">
        <h2 className="title">{title}</h2>
        <p className="price">{ConstantUtil.CURRENCY} {digitFormat(price)}</p>
      </div>
    </StyledCard>
  );
};

export default Card;
