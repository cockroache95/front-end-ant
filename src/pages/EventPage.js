import { Layout } from 'antd';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import styled from "styled-components";
import { typography, colors } from "@atlaskit/theme";
import ImageFallback from './ImageFallback'
import moment from "moment";
import React from 'react';
import Flex from './Flex'
import defaultImg from '../images/no-image.png';
import Pagination from '@atlaskit/pagination';
// var randomstring = require("randomstring");

const { Sider, Content } = Layout

const keys = [
    { name: 'Create time', width: '10%' },
    { name: "Images", width: "60%" },
    { name: 'Event Type', width: '10%' },
    { name: 'Camera', width: '20%' }
]
const ImagesColumn = ({ images }) => (
    <Flex style={{ flexWrap: 'wrap' }}>
        {images.filter(src => !!src).map((src, i) => (
            <StyledImageFallback
                src={src}
                key={i}
                isRetry
                thumb
                fallbackImage={defaultImg}
                height={60}
                style={{
                    maxWidth: '100%',
                    marginBottom: 4
                }}
            />
        ))}
    </Flex>
)
const EVENT_TYPE_MESSAGES = {fight:"OANH NHAU"}
class EventPage extends React.Component {
    state = {
        collapsed: true, 
        data: []
    }

    
    componentWillUnmount() {
        this.client.close()
    }
    componentWillMount() {
        this.client = new W3CWebSocket('ws://127.0.0.1:8080/', 'echo-protocol');
        this.client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        this.client.onmessage = function (message) {
            console.log("XXXX", message.data);
            let dat = JSON.parse(message.data)
            var { data } = this.state;
            console.log(data)
            data.unshift(dat)
            this.setState({ data: data })
        }.bind(this)
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    
    render() {
        const { collapsed, data } = this.state

        let content_search = <div></div>
        if (!collapsed) {
            content_search = <div>Hello ello </div>
        }
        console.log("XXX", this.state.data)
        // console.log("DATA", data.length)
        return (
            <Layout>
                <Content style={{
                    overflow: 'auto',
                    height: '90vh',
                    left: 0,
                }}>
                    <Table>
                        <thead>
                            <tr>
                                {keys.map(key => (
                                    <Th width={key.width} key={key.name}>
                                        {key.name}
                                    </Th>
                                ))}
                            </tr>
                        </thead>
                        <Tbody>
                            {data.map(event => {
                                const { id, createdAt, eventType, camera, image, image_res } = event
                                return (
                                    <Tr key={id}>
                                        <td width={keys[0].width}>{createdAt ? moment(createdAt).format("HH:mm DD-MM-YYYY") : '-'}</td>
                                        <td width={keys[1].width}>
                                            <ImagesColumn images={[image, image_res]} />
                                        </td>
                                        <td width={keys[2].width}><h6 >{eventType ? EVENT_TYPE_MESSAGES[eventType] : "-"}</h6></td>
                                        <td width={keys[3].width}>
                                            <small>{camera}</small> </td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                    
                </Content>
                {/* <Sider
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
                </Sider> */}
            </Layout>
        );
    }
}

const Table = styled.table`
    display: block;
    margin: 0;
    padding: 0;
    margin-bottom: 16px;
    thead, tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed; 
    }
`

const StyledImageFallback = styled(ImageFallback)`
    object-fit: cover;
    object-position: 100% 0;
    width: auto;
    height: ${props => props.height}px;
    border-radius: 4px;
    margin-right: 4px;
    /* box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); */
`

const Tbody = styled.tbody`
    height: calc(100vh - 230px);
    overflow-y: auto;
    display: block;
    margin-right: -2px;
`

const Tr = styled.tr`
    cursor: pointer;
    :hover {
        background-color: ${colors.N10}
    }
`

const Th = styled.th`
    ${typography.h200}
`
export default EventPage;
