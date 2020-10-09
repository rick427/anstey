import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col, Collapse, Tag, Button, Modal, Form, Input,InputNumber, Upload, message } from 'antd';
import {CheckOutlined, UploadOutlined} from '@ant-design/icons';
import Lightbox from 'react-image-lightbox';
import styles from '../order.module.css';
import UtilService from '../../../../services/util_service';
import { getOrder,uploadImage,capturePayment } from '../../../../redux';
import ConstantUtil from "../../../../utils/constantUtil";

import digitFormat from "../../../../utils/digitFormat";

const OrderDetails = ({ match }) => {
    const loading = useSelector(state => state.orders.loading);
    const [fileList, setFileList] = useState([]);
    const uploaded = useSelector(state => state.upload.uploaded);
    const uploadedImages = useSelector(state => state.upload.image);
    const [data, setData] = useState(null);
    const [orderDetailId, setOrderDetailId] = useState(null);
    const [maximumAmount, setMaximumAmount] = useState(0);
    const [visible, seVisible] = useState(false);
    const [lightbox, setLightbox] = useState(false);
    const order = useSelector(state => state.orders.order);
    const dispatch = useDispatch();

    const { Panel } = Collapse;

    useEffect(() => {
        dispatch(getOrder(match.params.id));
        //eslint-disable-next-line
    }, [])

    const checkPath = (image) => {
        if (image && image.indexOf('https') === -1) {
            return `${UtilService.getAttachmentPath()}${image}`;
        }
        return image;
    }
    const handleLightBox = (data) => {
        setLightbox(true);
        setData(data);
    }

    const handleOk = () => {
        seVisible(!visible);
    }
    const capture = (id,maximumAmount) => {
        setOrderDetailId(id);
        setMaximumAmount(maximumAmount);
        seVisible(!visible);
    }
    

    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 7, span: 16},
    };

    const onFinish = (values) => {
        values.proof = uploadedImages[uploadedImages.length - 1];
        values.order_detail_id = orderDetailId;
        dispatch(capturePayment(values)).then(() => {
            form.resetFields();
            seVisible(!visible);
            dispatch(getOrder(match.params.id));
            message.success('Payment captured.')
        })
    }

    const handleUpload = ({fileList}) => {
        setFileList(fileList);
    }

    const handleBefore = file => {
        dispatch(uploadImage(file));
        return false;
    }

    return (
        <Card className={styles.cardReset} loading={loading}>
            <Row justify="center">
                <Col lg={16} md={12} sm={24} xs={24}>
                    <Card loading={loading}>
                        {order && <>
                            {/* <div className={styles.image}>
                            <img src={`${UtilService.getAttachmentPath()}${product.imageone}`}/>
                        </div> */}
                            {/* <Divider/> */}
                            <h3>Order information</h3>
                            <Row justify="center" className={styles.margin}>
                                <Col lg={12}>Customer Name:</Col>
                                <Col lg={12}><p>{order.customer ? order.customer.name : '-'}</p></Col>
                            </Row>
                            <Row justify="center" className={styles.margin}>
                                <Col lg={12}>Customer Phone:</Col>
                                <Col lg={12}><p>{order.customer ? order.customer.phone_number : '-'}</p></Col>
                            </Row>
                            {/* <Row className={styles.margin}>
                            <Col lg={12}>Delivery Fee:</Col>
                            <Col lg={12}><p>{order.deliveryfee ? order.deliveryfee : '-' }</p></Col>
                        </Row> */}
                            {/* <Row className={styles.margin}>
                            <Col lg={12}>Delivery Status:</Col>
                            <Col lg={12}><p>{order.deliverystatus ? order.deliverystatus : '-'}</p></Col>
                        </Row>
                        <Row className={styles.margin}>
                            <Col lg={12}>Delivery Time:</Col>
                            <Col lg={12}><p>{order.longdescription ? order.longdescription : '-'}</p></Col>
                        </Row> */}
                            <Row className={styles.margin}>
                                <Col lg={12}>Items : </Col>
                                <Col lg={12}><p>{order.totalquantity ? order.totalquantity : '-'}</p></Col>
                            </Row>
                            <Row className={styles.margin}>
                                <Col lg={12}>Total Amount:</Col>
                                <Col lg={12}><p>{ConstantUtil.CURRENCY} {order.totalamount ? digitFormat(order.totalamount) : '-'}</p></Col>
                            </Row>
                            {/* <Row className={styles.margin}>
                            <Col lg={12}>Sum Total:</Col>
                            <Col lg={12}><p>{order.sumtotal ? order.sumtotal : '-'}</p></Col>
                        </Row> */}

                            <Row className={styles.margin}>
                                <Col lg={12}>Created At:</Col>
                                <Col lg={12}><p>{order.created_at ? order.created_at : '-'}</p></Col>
                            </Row>



                            <h3>Shipping information</h3>
                            <Row className={styles.margin}>
                                <Col lg={12}>Name :</Col>
                                <Col lg={12}><p>{order.shippingInfo ? order.shippingInfo.name : '-'}</p></Col>
                            </Row>
                            <Row className={styles.margin}>
                                <Col lg={12}>Address:</Col>
                                <Col lg={12}><p>{order.shippingInfo ? order.shippingInfo.address : '-'}</p></Col>
                            </Row>
                            <Row className={styles.margin}>
                                <Col lg={12}>Phone number:</Col>
                                <Col lg={12}><p>{order.shippingInfo ? order.shippingInfo.phone : '-'}</p></Col>
                            </Row>
                            <Row className={styles.margin}>
                                <Col lg={12}>Email:</Col>
                                <Col lg={12}><p>{order.shippingInfo ? order.shippingInfo.email : '-'}</p></Col>
                            </Row>

                            <h3>Products information</h3>
                            <Row>
                                <Col lg={24}>
                                    <Collapse accordion>
                                        {order && order.items && order.items.map(item => (
                                            <Panel header={item.productname + ' (' + item.categoryName + ')'} key={item.id}>

                                                {/* <Row className={styles.margin}>
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
                                            </Row> */}



                                                <Row className={styles.margin}>
                                                    <Col lg={24}>
                                                        <img onClick={() => handleLightBox(item.imageone)} className={styles.img} src={checkPath(item.imageone)} style={{ marginLeft: '20%', maxHeight: '200px' }} alt="product" />
                                                    </Col>
                                                </Row>

                                                <Row className={styles.margin}>
                                                    <Col lg={12}>Unit Price:</Col>
                                                    <Col lg={12}><p>{ConstantUtil.CURRENCY} {item.unitprice ? digitFormat(item.unitprice) : '-'}</p></Col>
                                                </Row>
                                                <Row className={styles.margin}>
                                                    <Col lg={12}>{item.categoryName === 'Hire' ? 'Duration' : 'Quantity'}:</Col>
                                                    <Col lg={12}><p>{item.quantity ? item.quantity : '-'}{item.categoryName === 'Hire' ? ' Months' : ''}</p></Col>
                                                </Row>
                                                <Row className={styles.margin}>
                                                    <Col lg={12}>Amount Paid:</Col>
                                                    <Col lg={12}><p>{ConstantUtil.CURRENCY} {item.amount_paid ? digitFormat(item.amount_paid) : '-'}</p></Col>
                                                </Row>
                                                <Row className={styles.margin}>
                                                    <Col lg={12}>Total Amount:</Col>
                                                    <Col lg={12}><p>{ConstantUtil.CURRENCY} {item.unitprice ? digitFormat(parseInt(item.unitprice) * parseInt(item.quantity)) : '-'}</p></Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={24}>
                                                        <Button type="primary" onClick={() => capture(item.id, (parseInt(item.unitprice) * parseInt(item.quantity)) - item.amount_paid )} >Capture Payment</Button>
                                                    </Col>
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

            <Modal
                title="Payment Capture"
                visible={visible}
                onOk={() => handleOk()}
                onCancel={() => handleOk()}
            >
                <div>
                    <h4>Balance amount = {ConstantUtil.CURRENCY} {digitFormat(maximumAmount)}</h4>
                    <Form 
                       {...layout} 
                       form={form} 
                       name="create-category" 
                       onFinish={onFinish} 
                       initialValues={{status: 'ACTIVE'}}
                    >
                        <Form.Item name="amount" label="Amount" rules={[{required: true}]} hasFeedback>
                            <InputNumber type="number" placeholder="Enter amount" max={maximumAmount} size='large' />
                        </Form.Item>

                        <Form.Item name="narration" label="Narration" rules={[{required: true}]} hasFeedback>
                            <Input placeholder="Enter narration"/>
                        </Form.Item>

                        <Form.Item name="email_address" label="Nofiy email" rules={[{required: true}]} hasFeedback>
                            <Input type="email" placeholder="Enter email"/>
                        </Form.Item>


                        <Form.Item name="coverimage" label="Proof of Payment" rules={[{required: true}]} hasFeedback>
                            <Upload
                              listType="picture"
                              fileList={fileList}
                              valuePropName="fileList"
                              onChange={handleUpload}
                              beforeUpload={handleBefore}
                            >
                                <Button disabled={fileList.length > 0 && true} loading={loading}>
                                    <UploadOutlined /> Click to Upload
                                </Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button icon={<CheckOutlined />} type="primary" htmlType="submit" disabled={!uploaded}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>


            {lightbox &&
                <Lightbox
                    mainSrc={checkPath(data)}
                    onCloseRequest={() => setLightbox(false)}
                    animationOnKeyInput={true}
                />}
        </Card>
    )
}

export default OrderDetails;
