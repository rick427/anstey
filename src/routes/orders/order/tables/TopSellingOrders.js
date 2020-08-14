import React from 'react';
import {Table} from 'antd';

function TopSellingOrders() {
    const datasource = [
        {
            key: '1',
            id: 1,
            code: 'PRD001',
            product: 'White Tradtionals',
            price: '₦ 23,000.00',
            total: 1,
            quantity: 2
        },
        {
            key: '2',
            id: 2,
            code: 'PRD022',
            product: 'Mens Native',
            price: '₦ 8,000.00',
            total: 1,
            quantity: 2
        },
        {
            key: '3',
            id: 3,
            code: 'PRD121',
            product: 'Blue Women\'s Trad',
            price: '₦ 14,000.00',
            total: 1,
            quantity: 2
        },
        {
            key: '4',
            id: 4,
            code: 'PRD121',
            product: 'Indigo Flexy Dress',
            price: '₦ 10,000.00',
            total: 1,
            quantity: 2
        },
        {
            key: '5',
            id: 5,
            code: 'PRD005',
            product: 'Japanese Kimono',
            price: '₦ 13,000.00',
            total: 1,
            quantity: 2
        },
        {
            key: '6',
            id: 6,
            code: 'PRD009',
            product: 'Indiana Jones Hat',
            price: '₦ 3,000.00',
            total: 1,
            quantity: 2
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
          title: 'Product Code',
          dataIndex: 'code',
          key: 'code',
          align: 'center'
        },
        {
          title: 'Product',
          dataIndex: 'product',
          key: 'product',
          align: 'center'
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          align: 'center'
        },
        {
          title: 'Total',
          dataIndex: 'total',
          key: 'total',
          align: 'center'
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity',
          key: 'quantity',
          align: 'center'
        },
    ];
    return (
        <Table
            dataSource={datasource}
            columns={columns}
            bordered
            scroll={{x: 1000}}
        />
    )
}

export default TopSellingOrders
