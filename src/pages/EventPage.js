import { Layout, Image, Table } from 'antd';
// import './table.css'
import React from 'react';
import {
    MenuUnfoldOutlined, MenuFoldOutlined
} from '@ant-design/icons';

const { Sider, Content } = Layout

class EventPage extends React.Component {
    state = { collapsed: true }
    
    columns = [
        {
            title:"Event Type",
            dataIndex:"eventtype",
            key:"eventtype",
        },
        {
            title:"Image",
            dataIndex:"image",
            key:"image",
            render: image => (
                <Image height={100} src={image} preview={false}/>
            )
        },
        {
            title:"Image result",
            dataIndex:"image_res",
            key:"image_res",
            render: image_res => (
                <div>
                <Image  height={100} src={image_res} preview={false}/>
                </div>
            )
        },
        {
            title:"Time",
            dataIndex:"time",
            key:"time",
        }
    
    ]
    data = [
        {key: "Fight1", eventtype: "Fight1",   image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight2", eventtype: "Fight2",   image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight3", eventtype: "Fight3",   image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight4", eventtype: "Fight4",   image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight5", eventtype: "Fight5",   image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight6", eventtype: "Fight6",   image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight7", eventtype: "Fight7",   image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight8", eventtype: "Fight8",   image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight9", eventtype: "Fight9",   image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight10", eventtype: "Fight10", image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight11", eventtype: "Fight11", image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight12", eventtype: "Fight12", image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight13", eventtype: "Fight13", image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight14", eventtype: "Fight14", image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
        {key: "Fight15", eventtype: "Fight15", image:"https://wallpaperaccess.com/full/138733.jpg", image_res:"https://wallpaperaccess.com/full/138733.jpg", time:"time"},
    ]
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const {collapsed} = this.state
        let content_search = <div></div>
        if (!collapsed){
            content_search = <div>Hello ello </div>
        }
        return (
            <Layout>
                <Content style={{
                    overflow: 'auto',
                    height: '90vh',
                    left: 0,
                }}>
                    <Table columns={this.columns} dataSource={this.data} scroll={true}></Table>
                </Content>
                <Sider
                    theme="light"
                    trigger={null}
                    collapsible collapsed={collapsed}
                    style={{
                        overflow: 'auto',
                        height: '90vh',
                        right: 0,
                    }}
                >
                 {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle.bind(this),
                })}
                Option
                {content_search}
            </Sider>
            </Layout>
        );
    }
}

export default EventPage;
