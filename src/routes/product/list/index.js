import React, {useState} from 'react';
import {Card, Table, Tag} from 'antd';
import Lightbox from 'react-image-lightbox';
import {EditOutlined, DeleteOutlined, ExpandAltOutlined} from '@ant-design/icons';

import c1 from '../../../assets/h-3.jpg';
import c2 from '../../../assets/h-4.jpg';
import c3 from '../../../assets/h-5.jpg';
import c4 from '../../../assets/h-6.jpg';
import c5 from '../../../assets/h-7.jpg';
import c6 from '../../../assets/h-8.jpg';
import c7 from '../../../assets/h-9.jpg';
// import Header from '../../../components/Header';
import styles from './list.module.css';

function ProductList() {
    const [data, setData] = useState(null);
    const [lightbox, setLightbox] = useState(false);

    const handleLightBox = (data) => {
        setLightbox(true);
        setData(data);
    }

    const datasource = [
        {
            key: '1',
            name: 'English ball gown',
            fabricType: 'Silk',
            category: 'Coporate',
            sewingPeriod: '10 days',
            price: '₦ 10,000.00',
            express: '₦ 15,000.00',
            gender: 'Female',
            image: <img onClick={() => handleLightBox(c1)} className={styles.img} src={c1} alt="user"/>,
            status: <Tag color="#34bd7c">Active</Tag>,
        },
        {
            key: '2',
            name: 'English ball gown',
            fabricType: 'Silk',
            category: 'Casual',
            sewingPeriod: '10 days',
            price: '₦ 10,000.00',
            express: '₦ 15,000.00',
            gender: 'Female',
            image: <img onClick={() => handleLightBox(c2)} className={styles.img} src={c2} alt="user"/>,
            status: <Tag color="#D9534F">Inactive</Tag>,
        },
        {
            key: '3',
            name: 'English ball gown',
            fabricType: 'Silk',
            category: 'Ball gown',
            sewingPeriod: '10 days',
            price: '₦ 10,000.00',
            express: '₦ 15,000.00',
            gender: 'Female',
            image: <img onClick={() => handleLightBox(c3)} className={styles.img} src={c3} alt="user"/>,
            status: <Tag color="#34bd7c">Active</Tag>,
        },
        {
            key: '4',
            name: 'English ball gown',
            fabricType: 'Silk',
            category: 'Coporate',
            sewingPeriod: '10 days',
            price: '₦ 10,000.00',
            express: '₦ 15,000.00',
            gender: 'Female',
            image: <img onClick={() => handleLightBox(c4)} className={styles.img} src={c4} alt="user"/>,
            status: <Tag color="#34bd7c">Active</Tag>,
        },
        {
            key: '5',
            name: 'English ball gown',
            fabricType: 'Silk',
            category: 'Trads',
            sewingPeriod: '10 days',
            price: '₦ 10,000.00',
            express: '₦ 15,000.00',
            gender: 'Female',
            image: <img onClick={() => handleLightBox(c5)} className={styles.img} src={c5} alt="user"/>,
            status: <Tag color="#34bd7c">Active</Tag>,
        },
        {
            key: '6',
            name: 'English ball gown',
            fabricType: 'Silk',
            category: 'Casual',
            sewingPeriod: '10 days',
            price: '₦ 10,000.00',
            express: '₦ 15,000.00',
            gender: 'Female',
            image: <img onClick={() => handleLightBox(c6)} className={styles.img} src={c6} alt="user"/>,
            status: <Tag color="#34bd7c">Active</Tag>,
        },
        {
            key: '7',
            name: 'English ball gown',
            fabricType: 'Silk',
            category: 'Coporate',
            sewingPeriod: '10 days',
            price: '₦ 10,000.00',
            express: '₦ 15,000.00',
            gender: 'Female',
            image: <img onClick={() => handleLightBox(c7)} className={styles.img} src={c7} alt="user"/>,
            status: <Tag color="#34bd7c">Active</Tag>,
        },
    ];

    const columns = [
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          align: 'center',
          fixed: 'left',
          width: 150,
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
          align: 'center'
        },
        {
          title: 'Fabric Type',
          dataIndex: 'fabricType',
          key: 'fabricType',
          align: 'center'
        },
        {
          title: 'Sewing Period',
          dataIndex: 'sewingPeriod',
          key: 'sewingPeriod',
          align: 'center'
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          align: 'center'
        },
        {
          title: 'Express Price',
          dataIndex: 'express',
          key: 'express',
          align: 'center'
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
          align: 'center'
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          align: 'center'
        },
        {
          title: 'View',
          key: 'view',
          align: 'center',
          render: () => <ExpandAltOutlined style={{cursor: 'pointer'}}/>
        },
        {
          title: 'Edit',
          key: 'edit',
          align: 'center',
          render: () => <EditOutlined style={{cursor: 'pointer'}}/>
        },
        {
          title: 'Delete',
          key: 'delete',
          align: 'center',
          render: () => <DeleteOutlined style={{cursor: 'pointer', color: '#de2f40'}}/>
        },
    ]
    return (
        <>
            {/* <Header title="products" breadcrumb="products" breadCrumbActive="list"/> */}

            <Card className={styles.cardReset}>
                <Table
                  columns={columns}
                  dataSource={datasource}
                  bordered
                  scroll={{x: 1500}}
                />
            </Card> 
            {lightbox && 
            <Lightbox
                mainSrc={data}
                onCloseRequest={() => setLightbox(false)}
                animationOnKeyInput={true}
            />}
        </>
    )
}

export default ProductList
