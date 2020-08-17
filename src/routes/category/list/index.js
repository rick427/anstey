import React, {useState, useEffect} from 'react';
import {Card, Table, Tag, Spin, Button, Popconfirm, message} from 'antd';
import Lightbox from 'react-image-lightbox';
import {EditOutlined, DeleteOutlined, LoadingOutlined, FormOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';

import {getAllCategories, deleteCategory} from '../../../redux';
import styles from './category.module.css';
import CreateCategory from '../create';
import UtilService from '../../../services/util_service';

function CategoryList({history}) {
  const [data, setData] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
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

  const checkPath = (image) => {
    if(image && image.indexOf('https') === -1){
      return `${UtilService.getAttachmentPath()}${image}`;
    }
    return image;
  }

  function confirm(id) {
    dispatch(deleteCategory(id)).then(() => {
      message.success('Category Deleted.');
    });
  }

  const handleRoute = id => {
    history.push(`/main/category/edit/${id}`)
  }

  const columns = [
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
      render: val => <img onClick={() => handleLightBox(val)} className={styles.img} src={checkPath(val)} alt="coverimage"/>
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
      title: 'Created By',
      dataIndex: 'created_by',
      key: 'created_by',
      align: 'center',
      render: val => val ? <p>{val}</p> : <p style={{color: '#de2f40'}}>-</p>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: val => val === 'Active' || val === 'ACTIVE' ? <Tag color="#34bd7c">{val}</Tag> : <Tag color="#de2f40">{val}</Tag>
    },
    {
      title: 'Edit',
      key: 'edit',
      align: 'center',
      render: (items) => <EditOutlined style={{cursor: 'pointer'}} onClick={() => handleRoute(items.id)}/>
    },
    {
      title: 'Delete',
      key: 'delete',
      align: 'center',
      fixed: 'right',
      width: 100,
      render: (items) => (
        <Popconfirm
          title="Are you sure you want to delete this category?"
          onConfirm={() => confirm(items.id)}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined style={{cursor: 'pointer'}}/>
        </Popconfirm>
      )
    },
  ];

  const handleCreate = () => setIsCreating(true);

  return (
    <Spin indicator={antIcon} spinning={loading}>
      <Card className={styles.cardReset} title='All Category Listings'>

        {!isCreating && <Button icon={<FormOutlined />} type="primary" onClick={handleCreate}>
          Add Category
        </Button>}

        {isCreating ? (
          <CreateCategory setIsCreating={() => setIsCreating()}/>
        ) : (
          <Table
            columns={columns}
            dataSource={category}
            bordered
            scroll={{x: 1200}}
            rowKey="id"
            style={{marginTop: '2rem'}}
          />
        )}
      </Card> 

      {lightbox && 
      <Lightbox
        mainSrc={checkPath(data)}
        onCloseRequest={() => setLightbox(false)}
        animationOnKeyInput={true}
      />}
    </Spin>
  )
}

export default CategoryList;
