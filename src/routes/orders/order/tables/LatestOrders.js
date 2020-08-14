import React from 'react';
import {Table, Tag} from 'antd';
import {SyncOutlined, WarningOutlined, ExpandAltOutlined} from '@ant-design/icons';

function LatestOrders() {
  const datasource = [
    {
      key: '1',
      id: 1,
      customer: 'Moses',
      dispatcher: 'John Dumelo',
      amount: '₦ 11,000.00',
      quantity: 2,
      paymentStatus: <Tag color="#34bd7c">Paid</Tag>,
      deliveryStatus: <Tag color="orange">Processing</Tag>,
      createdAt: '2020-05-17 12:34:32',
      deliveryTime: <SyncOutlined spin/>
    },
    {
      key: '2',
      id: 2,
      customer: 'Moses',
      dispatcher: 'John Dumelo',
      amount: '₦ 12,000.00',
      quantity: 15,
      paymentStatus: <Tag color="#34bd7c">Paid</Tag>,
      deliveryStatus: <Tag color="orange">Processing</Tag>,
      createdAt: '2020-05-12 11:08:45',
      deliveryTime: <SyncOutlined spin/>
    },
    {
      key: '3',
      id: 3,
      customer: 'Iyke Perry',
      dispatcher: 'John Dumelo',
      amount: '₦ 39,350.00',
      quantity: 20,
      paymentStatus: <Tag color="#34bd7c">Paid</Tag>,
      deliveryStatus: <Tag color="#1C84C6">Intransit</Tag>,
      createdAt: '2020-02-19 14:57:41',
      deliveryTime: <SyncOutlined spin/>
    },
    {
      key: '4',
      id: 4,
      customer: 'Ikechukwu Onyekanna',
      dispatcher: 'John Dumelo',
      amount: '₦ 24,650.00',
      quantity: 1,
      paymentStatus: <Tag color="#34bd7c">Paid</Tag>,
      deliveryStatus: <Tag color="#34bd7c">Delivered</Tag>,
      createdAt: '2020-02-04 14:41:39',
      deliveryTime: '7(hrs) 25(mins) 4(sec)'
    },
    {
      key: '5',
      id: 5,
      customer: 'Ikechukwu Onyekanna',
      dispatcher: 'John Dumelo',
      amount: '₦ 32,000.00',
      quantity: 3,
      paymentStatus: <Tag color="#34bd7c">Paid</Tag>,
      deliveryStatus: <Tag color="#D9534F">Not Delivered</Tag>,
      createdAt: '2020-02-04 14:17:45',
      deliveryTime: <WarningOutlined style={{color: '#D9534F'}} />
    },
    {
      key: '6',
      id: 6,
      customer: 'Ikechukwu Onyekanna',
      dispatcher: 'John Dumelo',
      amount: '₦ 36,000.00',
      quantity: 2,
      paymentStatus: <Tag color="#34bd7c">Paid</Tag>,
      deliveryStatus: <Tag color="#D9534F">Not Delivered</Tag>,
      createdAt: '2020-01-29 08:36:37',
      deliveryTime: <WarningOutlined style={{color: '#D9534F'}} />
    },
    {
      key: '6',
      id: 6,
      customer: 'Ikechukwu Onyekanna',
      dispatcher: 'John Dumelo',
      amount: '₦ 33,050.00',
      quantity: 2,
      paymentStatus: <Tag color="#34bd7c">Paid</Tag>,
      deliveryStatus: <Tag color="orange">Processing</Tag>,
      createdAt: '2020-01-29 07:43:50',
      deliveryTime: <SyncOutlined spin/>
    },
    {
      key: '7',
      id: 7,
      customer: 'Ikechukwu Onyekanna',
      dispatcher: 'John Dumelo',
      amount: '₦ 23,650.00',
      quantity: 2,
      paymentStatus: <Tag color="#34bd7c">Paid</Tag>,
      deliveryStatus: <Tag color="orange">Processing</Tag>,
      createdAt: '2020-01-27 23:45:38',
      deliveryTime: <SyncOutlined spin/>
    },
  ]

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      align: 'center'
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
      align: 'center'
    },
    {
      title: 'Dispatcher',
      dataIndex: 'dispatcher',
      key: 'dispatcher',
      align: 'center'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      align: 'center'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center'
    },
    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
      align: 'center'
    },
    {
      title: 'Delivery Status',
      dataIndex: 'deliveryStatus',
      key: 'deliveryStatus',
      align: 'center'
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      align: 'center'
    },
    {
      title: 'Delivery Time',
      dataIndex: 'deliveryTime',
      key: 'deliveryTime',
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
    <Table
      dataSource={datasource}
      columns={columns}
      bordered
      scroll={{x: 1500}}
    />
  )
}

export default LatestOrders
