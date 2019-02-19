import React from 'react';
import {Menu} from 'antd';

const MainNavigationComponent = () => {
    return (
        <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['1']} style={{lineHeight: "64px"}}>
            <Menu.Item key="1">Search</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
        </Menu>
    );
}

export default MainNavigationComponent;