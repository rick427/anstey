import React, {useState, useEffect} from 'react';
import {Card, Tag, Row, Col} from 'antd';
import {PushpinOutlined, SettingOutlined, EditOutlined} from '@ant-design/icons';

// import Header from '../../../components/Header';
import styles from './list.module.css';
import user from '../../../assets/user.jpg';

function DispatcherList() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <>
            {/* <Header title="dispatcher" breadcrumb="dispatcher" breadCrumbActive="list"/>  */}

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col lg={8} md={24} sm={24} xs={24} className={styles.mb2}>
                    <Card 
                      className={styles.cardReset} 
                      actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <PushpinOutlined key="pin"/> 
                      ]}
                      loading={loading}
                    >
                        <Row gutter={24}>
                            <Col lg={8} className={styles.center}>
                                <div className={styles.userWrapper}>
                                    <img className={styles.user} src={user} alt="user"/>
                                </div>
                                <div className={styles.tag}>
                                    <Tag color="#D9534F">Inactive</Tag>
                                </div>
                            </Col>
                            <Col lg={16}>
                                <div className={styles.info}>
                                    <h1>john dumelo</h1>
                                    <div className={styles.flex}>
                                        <p className={styles.title}>State:</p> 
                                        <p className={styles.value}>Abuja</p>
                                    </div>
                                    <div className={styles.flex}>
                                        <p className={styles.title}>Email:</p> 
                                        <p className={styles.value}>test@app.com</p>
                                    </div>
                                    <div className={styles.flex}>
                                        <p className={styles.title}>Address:</p> 
                                        <p className={styles.value}>Halsey Avenue</p>
                                    </div>
                                    <div className={styles.flex}>
                                        <p className={styles.title}>Phone:</p> 
                                        <p className={styles.value}>0808090861</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col lg={8} md={24} sm={24} xs={24} className={styles.mb2}>
                    <Card 
                      className={styles.cardReset} 
                      actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <PushpinOutlined key="pin"/> 
                      ]}
                      loading={loading}
                    >
                        <Row gutter={24}>
                            <Col lg={8}>
                                <div className={styles.userWrapper}>
                                    <img className={styles.user} src={user} alt="user"/>
                                </div>
                                <div className={styles.tag}>
                                    <Tag color="#34bd7c">Active</Tag>
                                </div>
                            </Col>
                            <Col lg={16}>
                                <div className={styles.info}>
                                    <h1>adam wayne</h1>
                                    <div className={styles.flex}>
                                        <p className={styles.title}>State:</p> 
                                        <p className={styles.value}>Kogi</p>
                                    </div>
                                    <div className={styles.flex}>
                                        <p className={styles.title}>Email:</p> 
                                        <p className={styles.value}>adam@app.com</p>
                                    </div>
                                    <div className={styles.flex}>
                                        <p className={styles.title}>Address:</p> 
                                        <p className={styles.value}>Halsey Avenue</p>
                                    </div>
                                    <div className={styles.flex}>
                                        <p className={styles.title}>Phone:</p> 
                                        <p className={styles.value}>0808090861</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col lg={8} md={24} sm={24} xs={24} className={styles.mb2}>
                    <Card 
                      className={styles.cardReset} 
                      actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <PushpinOutlined key="pin"/> 
                      ]}
                      loading={loading}
                    >
                        <Row gutter={24}>
                            <Col lg={8}>
                                <div className={styles.userWrapper}>
                                    <img className={styles.user} src={user} alt="user"/>
                                </div>
                                <div className={styles.tag}>
                                    <Tag color="#34bd7c">Active</Tag>
                                </div>
                            </Col>
                            <Col lg={16}>
                                <div className={styles.info}>
                                    <h1>segun moses</h1>
                                    <div className={styles.flex}>
                                        <p className={styles.title}>State:</p> 
                                        <p className={styles.value}>bauchi</p>
                                    </div>
                                    <div className={styles.flex}>
                                        <p className={styles.title}>Email:</p> 
                                        <p className={styles.value}>shegs@app.com</p>
                                    </div>
                                    <div className={styles.flex}>
                                        <p className={styles.title}>Address:</p> 
                                        <p className={styles.value}>Halsey Avenue</p>
                                    </div>
                                    <div className={styles.flex}>
                                        <p className={styles.title}>Phone:</p> 
                                        <p className={styles.value}>0808090861</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default DispatcherList;
