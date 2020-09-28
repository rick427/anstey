import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Card, Row, Col, Divider, Tag } from 'antd';
import styles from './details.module.css';
import {getProductsById} from '../../../redux';
import UtilService from "../../../services/util_service";

const ProductDetail = ({match}) => {
    const id = match.params.id;
    const product = useSelector(state => state.products.product);
    const loading = useSelector(state => state.products.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsById(id));
        //eslint-disable-next-line
    },[]);
    

    return (
        <Card className={styles.cardReset} title={product.name && product.name}>
           <Row justify="center">
               <Col lg={12} md={12} sm={24} xs={24}>
                   <Card loading={loading}>
                      {product && <>
                        <div className={styles.image}>
                            <img src={`${UtilService.getAttachmentPath()}${product.imageone}`} alt="product"/>
                        </div>
                        <Divider/>

                        <Row justify="center" className={styles.margin}>
                            <Col lg={12}>Name:</Col>
                            <Col lg={12}><p>{product.name ? product.name : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Nutrition:</Col>
                            <Col lg={12}><p>{product.nutrition ? product.nutrition : '-' }</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Benefit:</Col>
                            <Col lg={12}><p>{product.benefit ? product.benefit : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Description:</Col>
                            <Col lg={12}><p>{product.longdescription ? product.longdescription : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Weight:</Col>
                            <Col lg={12}><p>{product.weight ? product.weight : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Category:</Col>
                            <Col lg={12}><p>{product.categoryname ? product.categoryname : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Price:</Col>
                            <Col lg={12}><p>{product.price ? product.price : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Quantity:</Col>
                            <Col lg={12}><p>{product.quantity ? product.quantity : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Status:</Col>
                            <Col lg={12}><Tag color="#34bd7c">{product.status}</Tag></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Sold:</Col>
                            <Col lg={12}><p>{product.sold ? product.sold : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Total Quantity:</Col>
                            <Col lg={12}><p>{product.totalquantity ? product.totalquantity : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Created At:</Col>
                            <Col lg={12}><p>{product.created_at ? product.created_at : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Updated At:</Col>
                            <Col lg={12}><p>{product.updated_at ? product.updated_at : '-'}</p></Col>
                        </Row>
                       </>}
                   </Card>
               </Col>
           </Row>
        </Card>
    )
}

export default ProductDetail;
