import React, { useEffect} from 'react';
import {Row, Col, Card, Form, Button, Input, Divider, Select, message, Spin, Tag} from 'antd';
import {CheckOutlined, CloseOutlined,  FormOutlined, LoadingOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';

import styles from './edit.module.css';
import { getCouponById, editCoupons} from '../../../redux';

const {Option} = Select;

const EditCoupons = ({history, match}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCouponById(match.params.id));
        //eslint-disable-next-line
    },[]);

    const couponLoading = useSelector(state => state.coupon.loading);
    const coupon = useSelector(state => state.coupon.couponData)
    const loading = useSelector(state => state.upload.loading);

    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 7, span: 16},
    };

    const onFinish = (values) => {
        if(values.value === undefined) delete values.value;
        if(values.code === undefined) delete values.code;
        if(values.isPercentage === undefined) delete values.isPercentage;
        if(values.status === undefined) delete values.status;

        const editedValues = {...coupon, ...values};

        dispatch(editCoupons(editedValues)).then(() => {
            message.info('Coupon updated.');
            history.goBack();
        })
    }

    

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

    return (
        <Card title="Edit Coupon" className={styles.cardReset}>
            <Row justify="center" align="center">
                <Col lg={10} md={24} sm={24} xs={24}>
                    <Divider orientation="left">
                        <FormOutlined/> Edit an existing coupon
                    </Divider>

                    <Card>
                        <Spin indicator={antIcon} spinning={couponLoading}>
                            <Form 
                                {...layout} 
                                form={form} 
                                name="create-coupon" 
                                onFinish={onFinish} 
                                // initialValues={{
                                //     name: coupon.name,
                                //     description: coupon.description,
                                //     menutitle: coupon.menutitle,
                                //     status: coupon.status,
                                // }}
                            >
                                <Form.Item name="code" label="Code" rules={[{required: false}]} hasFeedback>
                                    <Input placeholder={coupon.code}/>
                                </Form.Item>

                                <Form.Item name="value" label="Value" rules={[{required: false}]} hasFeedback>
                                    <Input placeholder={coupon.value}/>
                                </Form.Item>

                                <Form.Item name="isPercentage" label="Percentage" rules={[{required: false}]} hasFeedback>
                                    <Input placeholder={coupon.isPercentage}/>
                                </Form.Item>

                                <Form.Item name="status" label="Status" rules={[{required: false}]}  hasFeedback>
                                    <Select placeholder={coupon.status}>
                                        <Option key="1" value="ACTIVE">
                                            <Tag color="#34bd7c">ACTIVE</Tag>
                                        </Option>
                                        <Option key="2" value="INACTIVE">
                                            <Tag color="#de2f40">INACTIVE</Tag>
                                        </Option>
                                    </Select>
                                </Form.Item>

                               

                                <Form.Item {...tailLayout}>
                                    <Button icon={<CheckOutlined />} type="primary" htmlType="submit" disabled={loading}>
                                        Submit
                                    </Button>
                                    <Button icon={<CloseOutlined />} type="danger" ghost style={{margin: '0 15px'}} onClick={() => history.goBack()}>
                                        Cancel
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Spin>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

export default EditCoupons