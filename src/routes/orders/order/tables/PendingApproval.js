import React from 'react';
import {Table, Tag} from 'antd';
import {EditOutlined, ExpandAltOutlined} from '@ant-design/icons';

function PendingApproval() {
    const datasource = [
        {
            key: '1',
            id: 1,
            product: 'Oba eko set',
            category: 'Agbada',
            description: 'Make it extra large for Deina',
            price: '₦ 35,000.00',
            quantity: '32',
            status: <Tag color="#D9534F">Inactive</Tag>,
        },
        {
            key: '2',
            id: 2,
            product: 'Japanese Kimono',
            category: 'Kimono',
            description: 'Make it extra extra large for Deina',
            price: '₦ 40,000.00',
            quantity: '3,200',
            status: <Tag color="#D9534F">Inactive</Tag>,
        },
        {
            key: '3',
            id: 3,
            product: 'Rivers Up-down',
            category: 'Hijab',
            description: 'Make it extra extra extra large for Deina',
            price: '₦ 40,000.00',
            quantity: '3,200',
            status: <Tag color="#34bd7c">Active</Tag>,
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
          title: 'Product',
          dataIndex: 'product',
          key: 'product',
          align: 'center'
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
          align: 'center'
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          align: 'center'
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
    ];
    return (
        <Table
            dataSource={datasource}
            columns={columns}
            bordered
            scroll={{x: 1200}}
        />
    )
}

export default PendingApproval
