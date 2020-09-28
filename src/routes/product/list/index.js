import React, {useState, useEffect} from 'react';
import {Card, Table, Tag, Spin, Button, Popconfirm, message} from 'antd';
import Pagination from 'antd/es/pagination';
import Lightbox from 'react-image-lightbox';
import {EditOutlined, DeleteOutlined, LoadingOutlined, FormOutlined, ExpandOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';

import {getAllProducts, deleteProduct} from '../../../redux';
import styles from './list.module.css';
import CreateProduct from '../create';
import UtilService from '../../../services/util_service';

const pagesize = 20;
function ProductList({history}) {
  const [data, setData] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [next, setNext] = useState(1);

  const loading = useSelector(state => state.products.loading);
  const products = useSelector(state => state.products.data);
  
  const dispatch = useDispatch();

  useEffect(() => {
    getAllNextProducts(next,pagesize, '');
    //eslint-disable-next-line
  }, []);

  const getAllNextProducts = (next,pagesize,categoryName) => {
    dispatch(getAllProducts(next, pagesize,categoryName));
  }

  const checkPath = (image) => {
    if(image && image.indexOf('https') === -1){
      return `${UtilService.getAttachmentPath()}${image}`;
    }
    return image;
  }

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  const handleLightBox = (data) => {
    setLightbox(true);
    setData(data);
  }

  function confirm(id) {
    dispatch(deleteProduct(id)).then(() => {
      message.success('Product Deleted.');
    });
  }

  const onChangePageNumber = (pagenumber) => {
    setNext(pagenumber);
    dispatch(getAllProducts(pagenumber, pagesize,''));
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
      render: val => <img onClick={() => handleLightBox(val)} className={styles.img} src={checkPath(val)} alt="product"/>
    },
    // {
    //   title: 'Description',
    //   dataIndex: 'longdescription',
    //   key: 'longdescription',
    //   align: 'center',
    //   width: 350
    // },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center'
    },
    // {
    //   title: 'Quantity',
    //   dataIndex: 'quantity',
    //   key: 'quantity',
    //   align: 'center'
    // },
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
      render: data => <ExpandOutlined style={{cursor: 'pointer'}} onClick={() => history.push(`/main/products/list/${data.id}`)}/>
    },
    {
      title: 'Edit',
      key: 'edit',
      align: 'center',
      render: data => <EditOutlined style={{cursor: 'pointer'}} onClick={() => history.push(`/main/products/list/edit/${data.id}`)}/>
    },
    {
      title: 'Delete',
      key: 'delete',
      align: 'center',
      render: (items) => (
        <Popconfirm
          title="Are you sure you want to delete this category?"
          onConfirm={() => confirm(items.id)}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined style={{cursor: 'pointer', color: '#de2f40'}}/>
        </Popconfirm>
      )
    },
  ];

  const handleCreate = () => setIsCreating(true);

  return (
    <Spin indicator={antIcon} spinning={loading}>
      <Card className={styles.cardReset} title="All Products">
        {!isCreating && <Button icon={<FormOutlined />} type="primary" onClick={handleCreate}>
            Add Product
          </Button>}

        {isCreating ? (
          <CreateProduct setIsCreating={() => setIsCreating()}/>
        ) : (
          <Table
            columns={columns}
            dataSource={products.list}
            bordered
            scroll={{x: 1600}}
            rowKey="id"
            pagination={false} 
            style={{marginTop: '2rem'}}
          />
        )}
        {products && (
          <Pagination 
            showQuickJumper 
            pageSize={pagesize}  
            current={next} 
            defaultCurrent={next} 
            total={products.numberOfRecord} 
            onChange={(data) => onChangePageNumber(data)} 
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

export default ProductList
