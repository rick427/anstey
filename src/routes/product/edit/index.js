import React, {useState, useEffect} from 'react';
import {Row, Col, Card, Form, Button, Input, Divider, Upload, Select, Spin, Tag} from 'antd';
import {CheckOutlined, CloseOutlined, UploadOutlined, FormOutlined, LoadingOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';

import styles from './edit.module.css';
import {uploadImage, getProducts} from '../../../redux';
import UtilService from '../../../services/util_service';

const {Option} = Select;

const EditProducts = ({history}) => {
    const productsLoading = useSelector(state => state.products.loading);
    const products = useSelector(state => state.products.data);
    const loading = useSelector(state => state.upload.loading);
    // const uploadedImages = useSelector(state => state.upload.image);

    useEffect(() => {
        dispatch(getProducts());
        //eslint-disable-next-line
    },[]);

    const [fileList, setFileList] = useState([]);
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 7, span: 16},
    };

    const handleUpload = ({fileList}) => {
        setFileList(fileList);
    }

    const handleBefore = file => {
        dispatch(uploadImage(file));
        return false;
    }

    const checkPath = (image) => {
        if(image && image.indexOf('https') === -1){
          return `${UtilService.getAttachmentPath()}${image}`;
        }
        return image;
    }

    const onFinish = () => {}

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

    return (
        <Card title="Edit Products" className={styles.cardReset}>
            <Row justify="center" align="center">
                <Col lg={10} md={24} sm={24} xs={24}>
                    <Divider orientation="left">
                        <FormOutlined/> Edit an existing product
                    </Divider>

                    <Card>
                        <Spin indicator={antIcon} spinning={productsLoading}>
                            {products && <Form 
                                {...layout} 
                                form={form} 
                                name="create-category" 
                                onFinish={onFinish} 
                                // initialValues={{
                                //     name: category.name,
                                //     description: category.description,
                                //     menutitle: category.menutitle,
                                //     status: category.status,
                                // }}
                            >
                                <Form.Item name="name" label="Name" rules={[{required: false}]} hasFeedback>
                                    <Input placeholder={products.name}/>
                                </Form.Item>

                                <Form.Item name="description" label="Description" rules={[{required: false}]} hasFeedback>
                                    <Input placeholder={products.description}/>
                                </Form.Item>

                                <Form.Item name="menutitle" label="Menu Title" rules={[{required: false}]} hasFeedback>
                                    <Input placeholder={products.menutitle}/>
                                </Form.Item>

                                <Form.Item name="status" label="Status" rules={[{required: false}]}  hasFeedback>
                                    <Select placeholder={products.status}>
                                        <Option key="1" value="ACTIVE">
                                            <Tag color="#34bd7c">ACTIVE</Tag>
                                        </Option>
                                        <Option key="2" value="INACTIVE">
                                            <Tag color="#de2f40">INACTIVE</Tag>
                                        </Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item name="coverimage" label="Cover Image" rules={[{required: false}]} hasFeedback>
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
                                        {products.coverimage && 
                                        <div className={styles.thumbnail}>
                                            <img src={checkPath(products.coverimage)} alt="coverimage" />
                                        </div>}
                                    </Upload>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button icon={<CheckOutlined />} type="primary" htmlType="submit" disabled={loading}>
                                        Submit
                                    </Button>
                                    <Button icon={<CloseOutlined />} type="danger" ghost style={{margin: '0 15px'}} onClick={() => history.goBack()}>
                                        Cancel
                                    </Button>
                                </Form.Item>
                            </Form>}
                        </Spin>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

export default EditProducts
