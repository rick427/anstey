import React, {useState} from 'react';
import {Card, Table, Tag} from 'antd';
import Lightbox from 'react-image-lightbox';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

import c1 from '../../../assets/h-3.jpg';
import c2 from '../../../assets/h-4.jpg';
import c3 from '../../../assets/h-5.jpg';
import c4 from '../../../assets/h-6.jpg';
import c5 from '../../../assets/h-7.jpg';
import c6 from '../../../assets/h-8.jpg';
import c7 from '../../../assets/h-9.jpg';
import styles from './frontSlide.module.css';

function FrontSlideList() {
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
            gender: 'Male',
            description: 'Beautiful silk english ball gown. For Deina only. Extra large pls.',
            image: <img onClick={() => handleLightBox(c1)} className={styles.img} src={c1} alt="user"/>,
            status: <Tag color="#34bd7c">Active</Tag>,
        },
        {
            key: '2',
            name: 'English ball gown',
            gender: 'Male',
            description: 'Red satin collared sweater for fresh guys only.',
            image: <img onClick={() => handleLightBox(c2)} className={styles.img} src={c2} alt="user"/>,
            status: <Tag color="#34bd7c">Active</Tag>,
        },
        {
            key: '3',
            name: 'English ball gown',
            gender: 'Male',
            description: 'Elven white petaled glory. Bathed in sunlight embroidry',
            image: <img onClick={() => handleLightBox(c3)} className={styles.img} src={c3} alt="user"/>,
            status: <Tag color="#34bd7c">Active</Tag>,
        },
        {
            key: '4',
            name: 'English ball gown',
            gender: 'Male',
            description: 'Beautiful silk english brown shirt. For I.K only. Extra large pls.',
            image: <img onClick={() => handleLightBox(c4)} className={styles.img} src={c4} alt="user"/>,
            status: <Tag color="#34bd7c">Active</Tag>,
        },
        {
            key: '5',
            name: 'English ball gown',
            gender: 'Female',
            description: 'Beautiful blue english ball gown. For Deina only. Extra large pls.',
            image: <img onClick={() => handleLightBox(c5)} className={styles.img} src={c5} alt="user"/>,
            status: <Tag color="#34bd7c">Active</Tag>,
        },
        {
            key: '6',
            name: 'English ball gown',
            gender: 'Female',
            description: 'Beautiful red english ball gown. For Deina only. Extra large pls.',
            image: <img onClick={() => handleLightBox(c6)} className={styles.img} src={c6} alt="user"/>,
            status: <Tag color="#D9534F">Inactive</Tag>,
        },
        {
            key: '7',
            name: 'English ball gown',
            gender: 'Female',
            description: 'Beautiful purple english ball gown. For Deina only. Extra large pls.',
            image: <img onClick={() => handleLightBox(c7)} className={styles.img} src={c7} alt="user"/>,
            status: <Tag color="#34bd7c">Active</Tag>,
        },
    ];

    const columns = [
        {
          title: 'S/N',
          dataIndex: 'key',
          key: 'key',
          align: 'center'
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          align: 'center'
        },
        // {
        //   title: 'Gender',
        //   dataIndex: 'gender',
        //   key: 'gender',
        //   align: 'center'
        // },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          align: 'center'
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          align: 'center'
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
          render: () => <DeleteOutlined style={{cursor: 'pointer'}}/>
        },
    ]
    return (
        <>
            {/* <Header title="front Slide" breadcrumb="front-slide" breadCrumbActive="list"/> */}

            <Card className={styles.cardReset}>
                <Table
                  columns={columns}
                  dataSource={datasource}
                  bordered
                  scroll={{x: 1200}}
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

export default FrontSlideList
