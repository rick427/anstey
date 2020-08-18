import React, {useState} from 'react';
import {Layout, Divider, Dropdown, Drawer, Menu, Button} from 'antd';
import {ProfileOutlined, SettingOutlined, LogoutOutlined, HomeOutlined, MailOutlined, MenuOutlined, SearchOutlined} from '@ant-design/icons';
import {useDispatch} from 'react-redux';

import styles from './dashboard.module.css';
import AdminRoutes from '../../routes';
import SiderMenu from '../siderMenu';
import {logoutUser} from '../../redux';
import AuthService from '../../services/authentication_service';

import logo from '../../assets/logo.svg';
import user from '../../assets/user.jpg';

const {Header, Footer, Sider, Content} = Layout;

export default function AppDashboard({match, history}) {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    const onClose = () => setVisible(false);

    const handleLogout = () => {
        dispatch(logoutUser());
        history.push('/login');
    }

    const menu = (
        <Menu>
          <Menu.Item icon={<HomeOutlined />} onClick={() => history.push('/')}>
            <span>Home</span>
          </Menu.Item>

          <Menu.Item icon={<ProfileOutlined />}>
            <span>My Profile</span>
          </Menu.Item>
          
          <Menu.Item icon={<SettingOutlined />}>
            <span>Settings</span>
          </Menu.Item>

          <Menu.Item icon={<LogoutOutlined />} onClick={handleLogout}>
            <span>Logout</span>
          </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Layout style={{minHeight: '100vh', background: '#E0E4F3'}}>
                <Sider 
                   breakpoint="md"
                   collapsedWidth="0"
                   className={styles.sider} 
                >
                    <div className={styles.userContainer}>
                        <img src={user} alt="user"/>
                        <div className={styles.pulse}/>
                    </div>

                    <p className={styles.title}>{AuthService.getName()}</p>
                   
                    <h1 className={styles.role}>{AuthService.getRole()}</h1>

                    <Divider/>

                    <SiderMenu/>
                </Sider>

                <Layout className={styles.mainLayout}>
                    <Header className={styles.header} style={{ padding: 0 }}>
                        <div className={styles.logo}>
                            <img src={logo} alt="logo"/>
                        </div>

                        <div className={styles.nav}>
                            <div className={`${styles.profile} ${styles.mobile}`} onClick={() => history.push('/')}>
                                <HomeOutlined className={styles.icon}/>
                            </div>

                            <div className={`${styles.profile} ${styles.mobile}`} onClick={() => setVisible(true)}>
                                <MenuOutlined className={styles.icon}/>
                            </div>

                            <div className={`${styles.profile} ${styles.large}`}>
                                <SearchOutlined />
                            </div>

                            <div className={`${styles.profile} ${styles.large}`}>
                                <MailOutlined />
                            </div>

                            <div className={`${styles.profile} ${styles.large} ${styles.pulseBox}`}>
                                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                                    <img src={user} alt="user"/>
                                </Dropdown>
                            </div>
                        </div>
                    </Header>
                    
                    <Content className={styles.content}>
                        <AdminRoutes match={match}/>
                    </Content>

                    <Footer className={styles.footer}>
                        <span className={styles.text}>Anstey &copy; 2020. All rights reserved.</span>
                    </Footer>
                </Layout>
            </Layout> 

            <Drawer
                // title="Anstey"
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
                width={200}
                bodyStyle={{padding: 0}}
            >
                <div className={styles.userContainer}>
                    <img src={user} alt="user"/>
                    <div className={styles.pulseSm}/>
                </div>

                <p className={styles.role}>
                   SUPER ADMIN
                </p>
                
                <Divider/>

                <SiderMenu/>

                <Divider/>

                <div className={styles.actions}>
                    <Button type="danger" ghost onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </Drawer>
        </>
    )
}
