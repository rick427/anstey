import React, {useState, useEffect} from 'react';
import {Card, Table, Tag, Spin, Button, Popconfirm, message} from 'antd';
import {EditOutlined, DeleteOutlined, LoadingOutlined, FormOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';

import {getAllCoupons, deleteCoupon} from '../../../redux';
import styles from './coupon.module.css';
import CreateCoupon from '../create';

function CouponList({history}) {
  const [isCreating, setIsCreating] = useState(false);

  const loading = useSelector(state => state.coupon.loading);
  const coupon = useSelector(state => state.coupon.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoupons());
    //eslint-disable-next-line
  }, []);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  

  function confirm(id) {
    dispatch(deleteCoupon(id)).then(() => {
      message.success('Coupon Deleted.');
    });
  }

  const handleRoute = id => {
    history.push(`/main/coupon/edit/${id}`)
  }

  const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      align: 'center'
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      align: 'center',
    },
    {
      title: 'Percentage',
      dataIndex: 'isPercentage',
      key: 'isPercentage',
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
          title="Are you sure you want to delete this coupon?"
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
      <Card className={styles.cardReset} title='All Coupon Listings'>

        {!isCreating && <Button icon={<FormOutlined />} type="primary" onClick={handleCreate}>
          Add Coupon
        </Button>}

        {isCreating ? (
          <CreateCoupon setIsCreating={() => setIsCreating()}/>
        ) : (
          <Table
            columns={columns}
            dataSource={coupon}
            bordered
            scroll={{x: 1200}}
            rowKey="id"
            style={{marginTop: '2rem'}}
          />
        )}
      </Card> 

   
    </Spin>
  )
}

export default CouponList;