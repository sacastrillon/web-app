/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Layout, Menu, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './CustomLayout.css';
const { Header, Content, Footer } = Layout;

function CustomLayout(props: any): JSX.Element {
    return (
        <Layout className="layout">
            <Header>
                <Row>
                    <Col flex={5}>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        </Menu>
                    </Col>
                    <Col flex={2}>
                        <div style={{ display: "flex", justifyContent: 'flex-end'}}>
                            <Menu theme="dark" mode="horizontal">
                                <Menu.Item key="4"><Link to="/signin">Sign In</Link></Menu.Item>
                                <Menu.Item key="5"><Link to="/signup">Sign Up</Link></Menu.Item>
                            </Menu>
                        </div>                        
                    </Col>
                </Row>                
            </Header>
            <Content style={{ padding: '0 50px', height: '100%'}} >
                <div style={{ margin: '16px 0' }} className="site-layout-content">
                    {props.children}    
                </div>           
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>        
    );
}

export default CustomLayout;