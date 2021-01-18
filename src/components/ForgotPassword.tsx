/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Axios from 'axios';
import { Row, Col, Form, Input, Button, Divider } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { warningAlert, errorAlert, successAlert } from '../utilities/Alerts';
import './Login.css';
import * as Constants from '../utilities/Constants';

export class ForgotPassword extends React.Component {

    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(): void {
        document.title = "Forgot Password";
    }

    handleSubmit(event: any): void { 
        Axios.post(Constants.FORGOT_PASSWORD_URL, {               
                email: event.email
            }).then(response => {
                successAlert(response.data.status.message);
            }).catch(error => {
                errorAlert(error.response.data.status.message);
            })  
    }

    onFinishFailed(): void {
        warningAlert("Email field are required.");
    }

    render(): JSX.Element {
        return(
            <div>
                <Divider orientation="center">Forgot Password</Divider>
                <Row>
                    <Col flex={5}>
                    </Col>
                    <Col flex={1}>
                        <Form 
                            onFinish={this.handleSubmit}
                            onFinishFailed={this.onFinishFailed}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ type: 'email', required: true, message: 'Please input your email.' }]}>
                                <Input prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                                placeholder="Email" />
                            </Form.Item> 
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">Forgot Password</Button>                                
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col flex={5}>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ForgotPassword;