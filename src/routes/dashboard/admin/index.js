import React, {useState, useEffect} from 'react';
import {Row, Col, Card, Table, Tag, Rate} from 'antd';

import styles from './admin.module.css';

import offer from '../../../assets/dashboard/offer.svg';
import price from '../../../assets/dashboard/price.svg';
import sales from '../../../assets/dashboard/sales.svg';
import touch from '../../../assets/dashboard/touch-screen.svg';
import customer from '../../../assets/dashboard/customer.png';
import truck from '../../../assets/dashboard/truck.png';
import cart from '../../../assets/dashboard/cart.png';
import order from '../../../assets/dashboard/order.png';
import check from '../../../assets/dashboard/check.png';
import checkBlue from '../../../assets/dashboard/check-blue.png';
import close from '../../../assets/dashboard/close.png';
import delivery from '../../../assets/dashboard/delivery.png';

import p3 from '../../../assets/g-11.png'; 
import p4 from '../../../assets/g-12.png'; 
import p8 from '../../../assets/g-13.png'; 
import p5 from '../../../assets/g-14.png'; 
import p6 from '../../../assets/g-15.jpg'; 
import p7 from '../../../assets/g-16.jpg'; 

export default function AdminDashboard() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setTimeout(() => setLoading(false), 4000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    const datasource = [
        {
            key: '1',
            product: <img src={p3} alt="product" className={styles.tableImg}/>,
            code: 'PRD001',
            customer: 'segun@email.com',
            status:  <Tag color="#FF5353">Out of stock</Tag>,
            rating: <Rate defaultValue={4.5} disabled style={{color: '#f0b33a'}}/>,
        },
        {
            key: '2',
            product: <img src={p4} alt="product" className={styles.tableImg}/>,
            code: 'PRD022',
            customer: 'ikechukwu@springboot.com',
            status:  <Tag color="#34bd7c">In stock</Tag>,
            rating: <Rate defaultValue={5} disabled style={{color: '#f0b33a'}}/>,
        },
        {
            key: '3',
            product: <img src={p6} alt="product" className={styles.tableImg}/>,
            code: 'PRD121',
            customer: 'harrison@google.com',
            status:  <Tag color="#34bd7c">In stock</Tag>,
            rating: <Rate defaultValue={4} disabled style={{color: '#f0b33a'}}/>,
        },
        {
            key: '4',
            product: <img src={p7} alt="product" className={styles.tableImg}/>,
            code: 'PRD121',
            customer: 'mozeez@yahoo.com',
            status:  <Tag color="#FF5353">Out of stock</Tag>,
            rating: <Rate defaultValue={3.5} disabled style={{color: '#f0b33a'}}/>,
        },
        {
            key: '5',
            product: <img src={p5} alt="product" className={styles.tableImg}/>,
            code: 'PRD005',
            customer: 'kirigaya@yahoo.com',
            status:  <Tag color="#34bd7c">In stock</Tag>,
            rating: <Rate defaultValue={4.5} disabled style={{color: '#f0b33a'}}/>,
        },
        {
            key: '6',
            product: <img src={p8} alt="product" className={styles.tableImg}/>,
            code: 'PRD009',
            customer: 'kirigaya@yahoo.com',
            status:  <Tag color="#34bd7c">In stock</Tag>,
            rating: <Rate defaultValue={4.5} disabled style={{color: '#f0b33a'}}/>,
        },
    ]

    const columns = [
        {
          title: 'Product',
          dataIndex: 'product',
          key: 'product',
          align: 'left'
        },
        {
          title: 'Product Code',
          dataIndex: 'code',
          key: 'code',
          align: 'left'
        },
        {
          title: 'Customer',
          dataIndex: 'customer',
          key: 'customer',
          align: 'left'
        },
        {
          title: 'Rating',
          dataIndex: 'rating',
          key: 'rating',
          align: 'left'
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          align: 'left',
        },
    ];

    return (
        <> 
            <Row style={{marginBottom: 18}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col lg={6} md={8} sm={24} xs={24} className={styles.mb2}>
                    <Card className={`${styles.cardReset} ${styles.stagger_1}`} loading={loading}>
                        <h1 className={styles.heading}>total orders</h1>
                        <div className={styles.cardInfo}>
                            <div className={`${styles.cardImg}`}>
                              <img src={offer} alt="card-svg"/>
                            </div>
                            <h2>₦ 53,146</h2>
                        </div>
                        <div className={styles.cardStats}>
                            <p className={styles.cardDay}>This Month</p>
                            <div className={styles.line}/>
                            <p className={styles.value}>240</p>
                        </div>
                        <div className={styles.cardStats}>
                            <p className={styles.cardDay}>Last Month</p>
                            <div className={styles.line}/>
                            <p className={styles.value}>30%</p>
                        </div>
                    </Card>
                </Col>
                <Col lg={6} md={8} sm={24} xs={24} className={styles.mb2}>
                    <Card className={`${styles.cardReset} ${styles.stagger_2}`} loading={loading}>
                        <h1 className={styles.heading}>total profit</h1>
                        <div className={styles.cardInfo}>
                            <div className={`${styles.cardImg} ${styles.profit}`}>
                              <img src={sales} alt="card-svg"/>
                            </div>
                            <h2>₦ 8,246</h2>
                        </div>
                        <div className={styles.cardStats}>
                            <p className={styles.cardDay}>This Month</p>
                            <div className={styles.line}/>
                            <p className={styles.value}>300</p>
                        </div>
                        <div className={styles.cardStats}>
                            <p className={styles.cardDay}>Last Month</p>
                            <div className={styles.line}/>
                            <p className={styles.value}>17%</p>
                        </div>
                    </Card>
                </Col>
                <Col lg={6} md={8} sm={24} xs={24} className={styles.mb2}>
                    <Card className={`${styles.cardReset} ${styles.stagger_3}`} loading={loading}>
                        <h1 className={styles.heading}>total sales</h1>
                        <div className={styles.cardInfo}>
                            <div className={`${styles.cardImg} ${styles.sales}`}>
                              <img src={touch} alt="card-svg"/>
                            </div>
                            <h2>₦ 15,146</h2>
                        </div>
                        <div className={styles.cardStats}>
                            <p className={styles.cardDay}>This Month</p>
                            <div className={styles.line}/>
                            <p className={styles.value}>200</p>
                        </div>
                        <div className={styles.cardStats}>
                            <p className={styles.cardDay}>Last Month</p>
                            <div className={styles.line}/>
                            <p className={styles.value}>15%</p>
                        </div>
                    </Card>
                </Col>
                <Col lg={6} md={8} sm={24} xs={24} className={styles.mb2}>
                    <Card className={`${styles.cardReset} ${styles.stagger_4}`} loading={loading}>
                        <h1 className={styles.heading}>total revenue</h1>
                        <div className={styles.cardInfo}>
                            <div className={`${styles.cardImg} ${styles.revenue}`}>
                              <img src={price} alt="card-svg"/>
                            </div>
                            <h2>₦ 7,246</h2>
                        </div>
                        <div className={styles.cardStats}>
                            <p className={styles.cardDay}>This Month</p>
                            <div className={styles.line}/>
                            <p className={styles.value}>310</p>
                        </div>
                        <div className={styles.cardStats}>
                            <p className={styles.cardDay}>Last Month</p>
                            <div className={styles.line}/>
                            <p className={styles.value}>24%</p>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row style={{marginBottom: 18}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col lg={6} md={8} sm={24} xs={24} className={styles.mb2}>
                    <Card bodyStyle={{padding: 0}} className={`${styles.cardReset} ${styles.stagger_5}`} loading={loading}>
                        <div className={styles.cardDetails}>
                            <img src={customer} alt="customers"/>
                            <div className={styles.cardText}>
                                <h2>all customers</h2>
                                <h3>12</h3>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col lg={6} md={8} sm={24} xs={24} className={styles.mb2}>
                    <Card bodyStyle={{padding: 0}} className={`${styles.cardReset} ${styles.stagger_6}`} loading={loading}>
                        <div className={styles.cardDetails}>
                            <img src={truck} alt="customers"/>
                            <div className={styles.cardText}>
                                <h2>all dispatchers</h2>
                                <h3>1</h3>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col lg={6} md={8} sm={24} xs={24} className={styles.mb2}>
                    <Card bodyStyle={{padding: 0}} className={`${styles.cardReset} ${styles.stagger_7}`} loading={loading}>
                        <div className={styles.cardDetails}>
                            <img src={cart} alt="customers"/>
                            <div className={styles.cardText}>
                                <h2>all orders</h2>
                                <h3>8</h3>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col lg={6} md={8} sm={24} xs={24} className={styles.mb2}>
                    <Card bodyStyle={{padding: 0}} className={`${styles.cardReset} ${styles.stagger_8}`} loading={loading}>
                        <div className={styles.cardDetails}>
                            <img src={order} alt="customers"/>
                            <div className={styles.cardText}>
                                <h2>all products</h2>
                                <h3>17</h3>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col lg={16} md={24} sm={24} xs={24} className={styles.mb2}>
                    <Card className={`${styles.cardReset} ${styles.stagger_9}`} loading={loading}>
                        <h1 className={styles.innerTitle}>top selling products</h1>
                        <Table
                          dataSource={datasource}
                          columns={columns}
                          bordered
                          scroll={{x: 1000}}
                        />
                    </Card>
                </Col>

                <Col lg={8} md={12} sm={24} xs={24} className={styles.mb2}>
                    <Card className={`${styles.cardReset} ${styles.stagger_10}`} loading={loading}>
                        <h1 className={styles.innerTitle}>activity stream</h1>
                        <p>
                            Activity streams are synthetic updates made by a user or users
                            within a given network. <span className={styles.current}>Learn more</span>
                        </p>

                        <div className={styles.activity}>
                            <div className={styles.inner}>
                                <div className={styles.shape}>
                                    <img src={check} alt="check"/>
                                </div>
                                <div className={styles.textWrapper}>
                                    <h2 className={styles.status}>successful purchase</h2>
                                    <p className={styles.product}>product ID: #0102</p>
                                </div>
                            </div>
                            <p className={styles.time}>2 hours</p>
                        </div>
                        <div className={styles.activity}>
                            <div className={styles.inner}>
                                <div className={`${styles.shape} ${styles.red}`}>
                                    <img src={close} alt="close"/>
                                </div>
                                <div className={styles.textWrapper}>
                                    <h2 className={styles.status}>purchase cancelled</h2>
                                    <p className={styles.product}>product ID: #0102</p>
                                </div>
                            </div>
                            <p className={styles.time}>5 hours</p>
                        </div>
                        <div className={styles.activity}>
                            <div className={styles.inner}>
                                <div className={`${styles.shape} ${styles.blue}`}>
                                    <img src={cart} alt="close"/>
                                </div>
                                <div className={styles.textWrapper}>
                                    <h2 className={styles.status}>order verifiation</h2>
                                    <p className={styles.product}>product ID: #0102</p>
                                </div>
                            </div>
                            <p className={styles.time}>1 hour</p>
                        </div>
                        <div className={styles.activity}>
                            <div className={styles.inner}>
                                <div className={`${styles.shape} ${styles.yellow}`}>
                                    <img src={delivery} alt="close"/>
                                </div>
                                <div className={styles.textWrapper}>
                                    <h2 className={styles.status}>orders for shipment</h2>
                                    <p className={styles.product}>product ID: #0102</p>
                                </div>
                            </div>
                            <p className={styles.time}>yesterday</p>
                        </div>
                        <div className={styles.activity}>
                            <div className={styles.inner}>
                                <div className={`${styles.shape} ${styles.blue}`}>
                                    <img src={checkBlue} alt="close"/>
                                </div>
                                <div className={styles.textWrapper}>
                                    <h2 className={styles.status}>added new product</h2>
                                    <p className={styles.product}>product ID: #0102</p>
                                </div>
                            </div>
                            <p className={styles.time}>4 hours</p>
                        </div>
                        <div className={styles.activity}>
                            <div className={styles.inner}>
                                <div className={`${styles.shape} ${styles.red}`}>
                                    <img src={close} alt="close"/>
                                </div>
                                <div className={styles.textWrapper}>
                                    <h2 className={styles.status}>purchase cancelled</h2>
                                    <p className={styles.product}>product ID: #0102</p>
                                </div>
                            </div>
                            <p className={styles.time}>2 hours</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
