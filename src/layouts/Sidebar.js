import { Layout, Menu } from 'antd';
import {
    BellOutlined, ContainerOutlined
} from '@ant-design/icons';
import React from 'react';
import { NavLink } from 'react-router-dom'
const { Sider } = Layout;


class Sidebar extends React.Component {

    
    render() {
        return (
            <Sider 
                trigger={null} 
                collapsible collapsed={this.props.collapsed}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    left: 0,
                }}
            >
                <div className="logo" align="center" style={{ color: 'white' }}>
                    <NavLink to="/web/events">HELLO</NavLink>

                </div >
               
                <Menu theme="dark" mode="inline" >
                    <Menu.Item key="events" icon={<BellOutlined />}>
                        <NavLink to="/web/events"></NavLink>
                        Events
                    </Menu.Item>
                    <Menu.Item key="processes" icon={<ContainerOutlined />}>
                        <NavLink to="/web/processes"></NavLink>
                        Processes
                    </Menu.Item>
                </Menu>
                
            </Sider>
        );
    }
}

export default Sidebar;
