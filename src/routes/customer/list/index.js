import React from 'react';
import {Card, Table, Tag} from 'antd';
import {ExpandAltOutlined} from '@ant-design/icons';

// import Header from '../../../components/Header';
import styles from './list.module.css';

function CustomerList() {
    const datasource = [
        {
            id: 1,
            name: 'Moses',
            state: 'Abuja',
            address: 'Northern Boundary, Kado Estate.',
            email: 'moses@test.app',
            phone: '08169100452',
            lastLogin: '2020-02-11 18:57:19',
            status: <Tag color="#D9534F">Inactive</Tag>,
        },
        {
            id: 2,
            name: 'James',
            state: 'Kano',
            address: 'Northern Boundary, Kado Estate.',
            email: 'james@test.app',
            phone: '08169100452',
            lastLogin: '2020-02-11 18:57:19',
            status: <Tag color="#D9534F">Inactive</Tag>,
        },
        {
            id: 3,
            name: 'Deina',
            state: 'Gombe',
            address: 'Northern Boundary, Kado Estate.',
            email: 'deina@test.app',
            phone: '08169100452',
            lastLogin: '2020-02-11 18:57:19',
            status: <Tag color="#34bd7c">Active</Tag>,
        },
        {
            id: 4,
            name: 'Segun',
            state: 'Gombe',
            address: 'Northern Boundary, Kado Estate.',
            email: 'deina@test.app',
            phone: '08169100452',
            lastLogin: '2020-02-11 18:57:19',
            status: <Tag color="#34bd7c">Active</Tag>,
        },
        {
            id: 5,
            name: 'Chisom',
            state: 'Abia',
            address: 'Northern Boundary, Kado Estate.',
            email: 'chisom@test.app',
            phone: '08169100452',
            lastLogin: '2020-02-11 18:57:19',
            status: <Tag color="#34bd7c">Active</Tag>,
        },
    ];

    const columns = [
        {
          title: 'S/N',
          dataIndex: 'id',
          key: 'id',
          align: 'center'
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          align: 'center'
        },
        {
          title: 'State',
          dataIndex: 'state',
          key: 'state',
          align: 'center'
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          align: 'center'
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          align: 'center'
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
          align: 'center'
        },
        {
          title: 'Last Login',
          dataIndex: 'lastLogin',
          key: 'lastLogin',
          align: 'center'
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          align: 'center'
        },
        {
          title: 'Action',
          key: 'action',
          align: 'center',
          render: () => <ExpandAltOutlined style={{cursor: 'pointer'}}/>
        },
    ]
    return (
        <>
            {/* <Header title="customers" breadcrumb="customers" breadCrumbActive="list"/> */}

            <Card className={styles.cardReset}>
                <Table
                  columns={columns}
                  dataSource={datasource}
                  bordered
                  scroll={{x: 1200}}
                />
            </Card>
        </>
    )
}

export default CustomerList
