import React from 'react';
import { Row, Col, Card, Form, Button, Input, Divider, Select, message, Tag } from 'antd';
import { CheckOutlined, CloseOutlined,  FormOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import {  createCoupon } from '../../../redux';

const { Option } = Select;

const CreateCoupon = ({ setIsCreating }) => {

    const uploaded = useSelector(state => state.upload.uploaded);
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 7, span: 16 },
    };

    const onFinish = (values) => {

        dispatch(createCoupon(values)).then(() => {
            form.resetFields();
            setIsCreating(false);
            message.success('New coupon added.')
        })
    }



    return (
        <Row justify="center" align="center">
            <Col lg={10} md={24} sm={24} xs={24}>
                <Divider orientation="left">
                    <FormOutlined /> Add a New Coupon
                </Divider>

                <Card>
                    <Form
                        {...layout}
                        form={form}
                        name="create-coupon"
                        onFinish={onFinish}
                        initialValues={{ status: 'ACTIVE' }}
                    >
                        <Form.Item name="code" label="Code" rules={[{ required: false }]} hasFeedback>
                            <Input placeholder="Code" />
                        </Form.Item>

                        <Form.Item name="value" label="Value" rules={[{ required: false }]} hasFeedback>
                            <Input placeholder="Value" />
                        </Form.Item>

                        <Form.Item name="isPercentage" label="Percentage" rules={[{ required: false }]} hasFeedback>
                            <Input placeholder="Percentage" />
                        </Form.Item>

                        <Form.Item name="status" label="Status" rules={[{ required: false }]} hasFeedback>
                            <Select placeholder="Status">
                                <Option key="1" value="ACTIVE">
                                    <Tag color="#34bd7c">ACTIVE</Tag>
                                </Option>
                                <Option key="2" value="INACTIVE">
                                    <Tag color="#de2f40">INACTIVE</Tag>
                                </Option>
                            </Select>
                        </Form.Item>



                        <Form.Item {...tailLayout}>
                            <Button icon={<CheckOutlined />} type="primary" htmlType="submit" >
                                Submit
                            </Button>
                            <Button icon={<CloseOutlined />} type="danger" ghost style={{ margin: '0 15px' }} onClick={() => setIsCreating(false)}>
                                Cancel
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default CreateCoupon;