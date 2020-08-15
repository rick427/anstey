import React, {useState, useEffect} from 'react';
import {Card, Table, Tag, Spin} from 'antd';
import Lightbox from 'react-image-lightbox';
import {EditOutlined, DeleteOutlined, LoadingOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';

import {getAllCategories} from '../../../redux';
import styles from './category.module.css';

function CategoryList() {
  const [data, setData] = useState(null);
  const [lightbox, setLightbox] = useState(false);

  const loading = useSelector(state => state.category.loading);
  const category = useSelector(state => state.category.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    //eslint-disable-next-line
  }, []);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  const handleLightBox = (data) => {
    setLightbox(true);
    setData(data);
  }

  const columns = [
    {
      title: 'S/N',
      key: 'id',
      align: 'center',
      render: (item, items, index) => index+1
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center'
    },
    {
      title: 'Image',
      dataIndex: 'coverimage',
      key: 'coverimage',
      align: 'center',
      render: val => <img onClick={() => handleLightBox(val)} className={styles.img} src={val} alt="img-cover"/>
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
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
  ];

  return (
    <Spin indicator={antIcon} spinning={loading}>
      <Card className={styles.cardReset}>
        <Table
          columns={columns}
          dataSource={category}
          bordered
          scroll={{x: 1200}}
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

export default CategoryList
