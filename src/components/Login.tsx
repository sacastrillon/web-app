/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Axios from 'axios';
import { Row, Col, Form, Input, Button, Divider, Checkbox} from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { warningAlert, errorAlert, successAlert } from '../utilities/Alerts';
import './Login.css';
import * as Constants from '../utilities/Constants';

export class Login extends React.Component {

    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(): void {
        document.title = "Sign In"
    }

    handleSubmit(event: any): void { 
        Axios.post(Constants.LOGIN_URL, {
                email: event.email,
                password: event.password
            }).then(response => {
                successAlert(response.data.status.message);
            }).catch(error => {
                errorAlert(error.response.data.status.message);
            })  
    }

    onFinishFailed(): void {
        warningAlert("Email and password are required");
    }

    render(): JSX.Element {
        return(
            <div>
                <Divider orientation="center">Sign In</Divider>
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
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password.' }]}>
                                <Input.Password placeholder="Password"/>
                            </Form.Item>
                            <Form.Item name="remember" valuePropName="checked">
                                <Row>
                                    <Col flex={2}>
                                        <div className="login-form-remember">
                                            <Checkbox checked={true}>Remember me</Checkbox>
                                        </div>                                        
                                    </Col>
                                    <Col flex={2}>
                                        <a className="login-form-forgot" href="/forgotPassword">Forgot password</a>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">Login</Button>                                
                                Or <a href="/signup">Register now!</a>
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

export default Login;