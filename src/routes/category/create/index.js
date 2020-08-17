import React, {useState} from 'react';
import {Row, Col, Card, Form, Button, Input, Divider, Upload, Select, message, Tag} from 'antd';
import {CheckOutlined, CloseOutlined, UploadOutlined, FormOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';

import {uploadImage, createCategory} from '../../../redux';

const {Option} = Select;

const CreateCategory = ({setIsCreating}) => {
    const [fileList, setFileList] = useState([]);

    const loading = useSelector(state => state.upload.loading);
    const uploaded = useSelector(state => state.upload.uploaded);
    const uploadedImages = useSelector(state => state.upload.image);
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 7, span: 16},
    };

    const onFinish = (values) => {
        values.coverimage = uploadedImages[uploadedImages.length - 1];

        dispatch(createCategory(values)).then(() => {
            form.resetFields();
            setIsCreating(false);
            message.success('New category added.')
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
        <Row justify="center" align="center">
            <Col lg={10} md={24} sm={24} xs={24}>
                <Divider orientation="left">
                    <FormOutlined/> Add a New Category
                </Divider>

                <Card>
                    <Form 
                       {...layout} 
                       form={form} 
                       name="create-category" 
                       onFinish={onFinish} 
                       initialValues={{status: 'ACTIVE'}}
                    >
                        <Form.Item name="name" label="Name" rules={[{required: true}]} hasFeedback>
                            <Input placeholder="Enter name"/>
                        </Form.Item>

                        <Form.Item name="description" label="Description" rules={[{required: true}]} hasFeedback>
                            <Input placeholder="Enter description"/>
                        </Form.Item>

                        <Form.Item name="menutitle" label="Menu Title" rules={[{required: true}]} hasFeedback>
                            <Input placeholder="Enter menu title"/>
                        </Form.Item>

                        <Form.Item name="status" label="Status" rules={[{required: true}]}  hasFeedback>
                            <Select>
                                <Option key="1" value="ACTIVE">
                                    <Tag color="#34bd7c">ACTIVE</Tag>
                                </Option>
                                <Option key="2" value="INACTIVE">
                                    <Tag color="#de2f40">INACTIVE</Tag>
                                </Option>
                            </Select>
                        </Form.Item>

                        <Form.Item name="coverimage" label="Cover Image" rules={[{required: true}]} hasFeedback>
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
                            <Button icon={<CloseOutlined />} type="danger" ghost style={{margin: '0 15px'}} onClick={() => setIsCreating(false)}>
                                Cancel
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default CreateCategory;
