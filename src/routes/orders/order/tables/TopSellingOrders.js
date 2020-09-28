import React, { useEffect } from "react";
import { Table, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import { getAllTopOrders } from "../../../../redux";

function TopSellingOrders() {
  const loading = useSelector((state) => state.topOrders.loading);
  const orders = useSelector((state) => state.topOrders.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTopOrders());
    //eslint-disable-next-line
  }, []);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  // const datasource = [
  //   {
  //     key: '1',
  //     id: 1,
  //     code: 'PRD001',
  //     product: 'White Tradtionals',
  //     price: '₦ 23,000.00',
  //     total: 1,
  //     quantity: 2
  //   },
  //   {
  //     key: '2',
  //     id: 2,
  //     code: 'PRD022',
  //     product: 'Mens Native',
  //     price: '₦ 8,000.00',
  //     total: 1,
  //     quantity: 2
  //   },
  //   {
  //     key: '3',
  //     id: 3,
  //     code: 'PRD121',
  //     product: 'Blue Women\'s Trad',
  //     price: '₦ 14,000.00',
  //     total: 1,
  //     quantity: 2
  //   },
  //   {
  //     key: '4',
  //     id: 4,
  //     code: 'PRD121',
  //     product: 'Indigo Flexy Dress',
  //     price: '₦ 10,000.00',
  //     total: 1,
  //     quantity: 2
  //   },
  //   {
  //     key: '5',
  //     id: 5,
  //     code: 'PRD005',
  //     product: 'Japanese Kimono',
  //     price: '₦ 13,000.00',
  //     total: 1,
  //     quantity: 2
  //   },
  //   {
  //     key: '6',
  //     id: 6,
  //     code: 'PRD009',
  //     product: 'Indiana Jones Hat',
  //     price: '₦ 3,000.00',
  //     total: 1,
  //     quantity: 2
  //   },
  // ]

  const columns = [
    {
      title: "S/N",
      key: "id",
      align: "center",
      render: (item, items, index) => index+1
    },
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Category",
      dataIndex: "categoryname",
      key: "categoryname",
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
    },
    {
      title: "Total Sales",
      dataIndex: "totalSold",
      key: "totalSold",
      align: "center",
    },
    {
      title: "Total Quantity",
      dataIndex: "totalQty",
      key: "totalQty",
      align: "center",
    },
  ];

  return (
    <Spin indicator={antIcon} spinning={loading}>
      {orders && orders.items && (
        <Table
          dataSource={orders.items}
          columns={columns}
          bordered
          scroll={{ x: 1000 }}
        />
      )}
    </Spin>
  );
}

export default TopSellingOrders;
