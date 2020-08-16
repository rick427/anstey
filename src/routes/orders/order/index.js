import React, {useState,useEffect} from 'react';
import {Row, Col, Card, Tabs} from 'antd';
// import {connect} from 'react-redux';

import cart from '../../../assets/dashboard/cart.png';

import styles from './order.module.css';
// import Header from '../../../components/Header';
import TopSellingOrders from './tables/TopSellingOrders';
import LatestOrders from './tables/LatestOrders';
import PendingApproval from './tables/PendingApproval';

// import {fetchOrders, login} from '../../../redux';

const { TabPane } = Tabs;

const Order = () => {
    const [loading, setLoading] = useState(true);
    // const orders = useSelector(state => state.order.orders);
    // const dispatch = useDispatch();

    useEffect(() => {
        const interval = setTimeout(() => setLoading(false), 4000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <>
            {/* <Header title="orders" breadcrumb="orders" breadCrumbActive="list"/>  */}

            <Card className={styles.cardReset} title="All Orders">
                <Row style={{marginBottom: 50}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col lg={6} md={8} sm={12} xs={24} className={styles.mb2}>
                        <Card className={styles.shadow} bodyStyle={{padding: 0}} loading={loading}>
                            <div className={styles.cardDetails}>
                                <img src={cart} alt="customers"/>
                                <div className={styles.cardText}>
                                    <h3>5</h3>
                                    <h2>orders pending approval</h2>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={6} md={8} sm={12} xs={24} className={styles.mb2}>
                        <Card className={styles.shadow} bodyStyle={{padding: 0}} loading={loading}>
                            <div className={styles.cardDetails}>
                                <img src={cart} alt="customers"/>
                                <div className={styles.cardText}>
                                    <h3>14</h3>
                                    <h2>orders pending</h2>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={6} md={8} sm={12} xs={24} className={styles.mb2}>
                        <Card className={styles.shadow} bodyStyle={{padding: 0}} loading={loading}>
                            <div className={styles.cardDetails}>
                                <img src={cart} alt="customers"/>
                                <div className={styles.cardText}>
                                    <h3>120</h3>
                                    <h2>orders enroute</h2>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={6} md={8} sm={12} xs={24} className={styles.mb2}>
                        <Card className={styles.shadow} bodyStyle={{padding: 0}} loading={loading}>
                            <div className={styles.cardDetails}>
                                <img src={cart} alt="customers"/>
                                <div className={styles.cardText}>
                                    <h3>9</h3>
                                    <h2>orders delivered</h2>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Top Selling" key="1">
                        <TopSellingOrders/>
                    </TabPane>
                    <TabPane tab="Latest Orders" key="2">
                        <LatestOrders/>
                    </TabPane>
                    <TabPane tab="Pending Approval" key="3">
                        <PendingApproval/>
                    </TabPane>
                </Tabs>
            </Card>
        </>
    )
}

// access the redux state
// const mapStateToProps = state => {
//     // map state.orders to a props called "orders" which
//     // is then rendered in the JSX
//     return {
//         userData: state.auth.userData,
//         loading: state.auth.loading
//     }
// }

// access the action creator "fetchOrders" 
// const mapDispatchToProps = dispatch => {
//     return {
//         fetchOrders: () => dispatch(fetchOrders()),
//         login: (data) => dispatch(login(data)),
//     }
// }

export default Order;
