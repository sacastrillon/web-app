/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Axios from 'axios';
import { Row, Col, Form, Input, Button, Divider } from 'antd';
import { warningAlert, errorAlert, successAlert } from '../utilities/Alerts';
import './Login.css';
import * as Constants from '../utilities/Constants';

export class Register extends React.Component {

    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(): void {
        document.title = "Sign Up";
    }

    handleSubmit(event: any): void { 
        Axios.post(Constants.REGISTER_URL, {
                first_name: event.firstName,
                last_name: event.lastName,
                email: event.email,
                password: event.password
            }).then(response => {
                successAlert(response.data.status.message);
            }).catch(error => {
                errorAlert(error.response.data.status.message);
            })  
    }

    onFinishFailed(): void {
        warningAlert("Register fields are required.");
    }

    render(): JSX.Element {
        return(
            <div>
                <Divider orientation="center">Sign Up</Divider>
                <Row>
                    <Col flex={5}>
                    </Col>
                    <Col flex={1}>
                        <Form 
                            onFinish={this.handleSubmit}
                            onFinishFailed={this.onFinishFailed}>
                            <Form.Item
                                label="First Name"
                                name="firstName"
                                rules={[{ required: true, message: 'Please input your first name.' }]}>
                                <Input placeholder="First Name" />
                            </Form.Item>
                            <Form.Item
                                label="Last Name"
                                name="lastName"
                                rules={[{ required: true, message: 'Please input your last name.' }]}>
                                <Input placeholder="Last Name" />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ type: 'email', required: true, message: 'Please input your email.' }]}>
                                <Input placeholder="Email" />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password.' }]}>
                                <Input.Password placeholder="Password"/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">Sign Up</Button>
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

export default Register;