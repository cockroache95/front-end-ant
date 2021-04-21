import { Layout, Col } from 'antd';
import React from 'react';
import Sidebar from './Sidebar';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
const { Content, Header } = Layout;

class MainLayout extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

   
    render() {
        const { children } = this.props;
        return (
            <Layout>
                <Sidebar collapsed={this.state.collapsed} ></Sidebar>

                <Layout className="site-layout">
                    {/* <Header className="site-layout-background" style={{ padding: 0, height:"10vh" }} >
                        <Col>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle.bind(this),
                        })}
                        </Col>
                    </Header> */}
                    <Content>
                        {children}
                    </Content>
                   
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;
