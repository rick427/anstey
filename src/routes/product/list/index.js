import React, {useState, useEffect} from 'react';
import {Card, Table, Tag, Spin} from 'antd';
import Lightbox from 'react-image-lightbox';
import {EditOutlined, DeleteOutlined, ExpandAltOutlined, LoadingOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';

import {getAllProducts} from '../../../redux';
import styles from './list.module.css';

function ProductList() {
  const [data, setData] = useState(null);
  const [lightbox, setLightbox] = useState(false);

  const loading = useSelector(state => state.products.loading);
  const products = useSelector(state => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    //eslint-disable-next-line
  }, []);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  const handleLightBox = (data) => {
    setLightbox(true);
    setData(data);
  }

  const columns = [
    {
      title: 'Category',
      dataIndex: 'categoryname',
      key: 'categoryname',
      align: 'center',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      width: 300,
    },
    {
      title: 'Image',
      dataIndex: 'imageone',
      key: 'imageone',
      align: 'center',
      render: val => <img onClick={() => handleLightBox(val)} className={styles.img} src={val} alt="product"/>
    },
    {
      title: 'Description',
      dataIndex: 'longdescription',
      key: 'longdescription',
      align: 'center',
      width: 500
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center'
    },
    {
      title: 'Total Quantity',
      dataIndex: 'totalquantity',
      key: 'totalquantity',
      align: 'center'
    },
    {
      title: 'Sold',
      dataIndex: 'sold',
      key: 'sold',
      align: 'center'
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      align: 'center'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: val => <Tag color="#34bd7c">{val}</Tag>
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
  ];

  return (
    <Spin indicator={antIcon} spinning={loading}>
      <Card className={styles.cardReset}>
        <Table
          columns={columns}
          dataSource={products}
          bordered
          scroll={{x: 1800}}
          rowKey="id"
        />
      </Card> 

      {lightbox && 
      <Lightbox
          mainSrc={data}
          onCloseRequest={() => setLightbox(false)}
          animationOnKeyInput={true}
      />}
    </Spin>
  )
}

export default ProductList
