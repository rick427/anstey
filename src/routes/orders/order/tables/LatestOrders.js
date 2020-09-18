import React, {useEffect} from 'react';
import {Table, Tag, Spin} from 'antd';
import {ExpandAltOutlined, LoadingOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';

import {getAllOrders} from '../../../../redux';

function LatestOrders() {
  const loading = useSelector(state => state.orders.loading);
  const orders = useSelector(state => state.orders.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
    //eslint-disable-next-line
  }, []);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      align: 'center'
    },
    {
      title: 'Customer',
      dataIndex: 'customername',
      key: 'customername',
      align: 'center'
    },
    {
      title: 'Amount',
      dataIndex: 'totalamount',
      key: 'totalamount',
      align: 'center'
    },
    {
      title: 'Quantity',
      dataIndex: 'totalquantity',
      key: 'quantity',
      align: 'center'
    },
    {
      title: 'Payment Status',
      dataIndex: 'paymentstatus',
      key: 'paymentStatus',
      align: 'center'
    },
    {
      title: 'Delivery Status',
      dataIndex: 'deliverystatus',
      key: 'deliveryStatus',
      align: 'center',
      render: val => val === 'processing' ? <Tag color="orange">{val}</Tag> : val === 'intransit' ? <Tag color="#1C84C6">{val}</Tag> : <Tag color="#34bd7c">{val}</Tag>
    },
    {
      title: 'Delivery Time',
      dataIndex: 'deliverytime',
      key: 'deliveryTime',
      align: 'center'
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'createdAt',
      align: 'center'
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: () => <ExpandAltOutlined style={{cursor: 'pointer'}}/>
    },
  ];

  return (
    <Spin indicator={antIcon} spinning={loading}>
      <Table
        dataSource={orders}
        columns={columns}
        bordered
        scroll={{x: 1500}}
      />
    </Spin>
  )
}

export default LatestOrders
