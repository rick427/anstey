import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Card, Row, Col, Collapse, Tag } from 'antd';
import styles from '../order.module.css';
// import UtilService from '../../../../services/util_service';
import {getOrder} from '../../../../redux';

const OrderDetails = ({match}) => {
    const loading = useSelector(state => state.orders.loading);
    const order = useSelector(state => state.orders.order);
    const dispatch = useDispatch();

    const { Panel } = Collapse;

    useEffect(() => {
        dispatch(getOrder(match.params.id));
        //eslint-disable-next-line
    }, [])

    return (
        <Card className={styles.cardReset} loading={loading}>
           <Row justify="center">
               <Col lg={12} md={12} sm={24} xs={24}>
                   <Card loading={loading}>
                      {order && <>
                        {/* <div className={styles.image}>
                            <img src={`${UtilService.getAttachmentPath()}${product.imageone}`}/>
                        </div> */}
                        {/* <Divider/> */}

                        <Row justify="center" className={styles.margin}>
                            <Col lg={12}>Name:</Col>
                            <Col lg={12}><p>{order.customername ? order.customername : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Delivery Fee:</Col>
                            <Col lg={12}><p>{order.deliveryfee ? order.deliveryfee : '-' }</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Delivery Status:</Col>
                            <Col lg={12}><p>{order.deliverystatus ? order.deliverystatus : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Delivery Time:</Col>
                            <Col lg={12}><p>{order.longdescription ? order.longdescription : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Total Amount:</Col>
                            <Col lg={12}><p>{order.totalamount ? order.totalamount : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Sum Total:</Col>
                            <Col lg={12}><p>{order.sumtotal ? order.sumtotal : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Total Quantity:</Col>
                            <Col lg={12}><p>{order.totalquantity ? order.totalquantity : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Created At:</Col>
                            <Col lg={12}><p>{order.created_at ? order.created_at : '-'}</p></Col>
                        </Row>
                        <Row>
                            <Col lg={24}>
                                <Collapse accordion>
                                   {order && order.items && order.items.map(item => (
                                        <Panel header={item.productname} key={item.id}>
                                            <Row justify="center" className={styles.margin}>
                                                <Col lg={12}>Name:</Col>
                                                <Col lg={12}><p>{item.customername ? item.customername : '-'}</p></Col>
                                            </Row>
                                            <Row className={styles.margin}>
                                                <Col lg={12}>Delivery Fee:</Col>
                                                <Col lg={12}><p>{item.deliveryfee ? item.deliveryfee : '-' }</p></Col>
                                            </Row>
                                            <Row className={styles.margin}>
                                                <Col lg={12}>Delivery Status:</Col>
                                                <Col lg={12}><p>{item.deliverystatus ? item.deliverystatus : '-'}</p></Col>
                                            </Row>
                                            <Row className={styles.margin}>
                                                <Col lg={12}>Delivery Time:</Col>
                                                <Col lg={12}><p>{item.longdescription ? item.longdescription : '-'}</p></Col>
                                            </Row>
                                            <Row className={styles.margin}>
                                                <Col lg={12}>Total Amount:</Col>
                                                <Col lg={12}><p>{item.totalamount ? item.totalamount : '-'}</p></Col>
                                            </Row>
                                            <Row className={styles.margin}>
                                                <Col lg={12}>Payment Method:</Col>
                                                <Col lg={12}><p>{item.payment_method ? item.payment_method : '-'}</p></Col>
                                            </Row>
                                            <Row className={styles.margin}>
                                                <Col lg={12}>Created At:</Col>
                                                <Col lg={12}><p>{item.created_at ? item.created_at : '-'}</p></Col>
                                            </Row>
                                        </Panel>
                                   ))}
                                </Collapse>
                            </Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Payment Status:</Col>
                            <Col lg={12}><Tag color="#34bd7c">{order.paymentstatus}</Tag></Col>
                        </Row>
                       </>}
                   </Card>
               </Col>
           </Row>
        </Card>
    )
}

export default OrderDetails;
