import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Menu} from 'antd';
import {
    AppstoreOutlined, 
    UserOutlined, 
    FolderOutlined, 
    FolderOpenOutlined, 
    LaptopOutlined, 
    OrderedListOutlined, 
    UnorderedListOutlined, 
} from '@ant-design/icons';
const {SubMenu} = Menu;

function Sider() {
    const location = useLocation();
    const [openKey, setOpenKey] = useState(['sub1']);
    const [current, setCurrent] = useState(location.pathname);

    const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8'];

    const handleClick = e => {
        setCurrent(e.key);
    }

    const onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => openKey.indexOf(key) === -1);
        if(rootSubmenuKeys.indexOf(latestOpenKey) === -1){
            setOpenKey(openKeys);
        }
        else{
            setOpenKey(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    return (
        <Menu 
            theme="light" 
            onClick={handleClick}
            mode="inline" 
            openKeys={openKey} 
            onOpenChange={onOpenChange} 
            selectedKeys={[current]}
            style={{overflowY: 'scroll', height: '50vh'}}
        >
            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Dashboard">
                <Menu.Item key="/main/dashboard/admin" icon={<UserOutlined />}>
                    <Link to="/main/dashboard/admin">Admin</Link>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<UserOutlined />} title="Orders">
                <Menu.Item key="/main/orders/list" icon={<LaptopOutlined />}>
                    <Link to="/main/orders/list">List</Link>
                </Menu.Item>
            </SubMenu>

            {/* <SubMenu key="sub3" icon={<UserOutlined />} title="Tailor">
                <Menu.Item key="/main/tailors/list" icon={<LaptopOutlined />}>
                    <Link to="/main/tailors/list">List</Link>
                </Menu.Item>
            </SubMenu> */}

            <SubMenu key="sub4" icon={<UnorderedListOutlined />} title="Category">
                <Menu.Item key="/main/category/list" icon={<OrderedListOutlined />}>
                    <Link to="/main/category/list">List</Link>
                </Menu.Item>
            </SubMenu>

            

            <SubMenu key="sub5" icon={<FolderOutlined />} title="Front-Slide">
                <Menu.Item key="/main/front/slide/list" icon={<FolderOpenOutlined />}>
                    <Link to="/main/front/slide/list">List</Link>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="sub6" icon={<UserOutlined />} title="Dispatcher">
                <Menu.Item key="/main/dispatcher/list" icon={<LaptopOutlined />}>
                    <Link to="/main/dispatcher/list">List</Link>
                </Menu.Item>
                {/* <Menu.Item key="h" icon={<UserOutlined />}>Manager</Menu.Item> */}
            </SubMenu>

            <SubMenu key="sub7" icon={<FolderOutlined />} title="Product">
                <Menu.Item key="/main/products/list" icon={<FolderOpenOutlined />}>
                    <Link to="/main/products/list">List</Link>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="sub8" icon={<FolderOutlined />} title="Customer">
                <Menu.Item key="/main/customers/list" icon={<FolderOpenOutlined />}>
                    <Link to="/main/customers/list">List</Link>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="sub9" icon={<UnorderedListOutlined />} title="Coupon">
                <Menu.Item key="/main/coupon/list" icon={<OrderedListOutlined />}>
                    <Link to="/main/coupon/list">List</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default Sider
