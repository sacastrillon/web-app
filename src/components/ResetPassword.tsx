/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Divider } from 'antd';
import { warningAlert, errorAlert, successAlert } from '../utilities/Alerts';
import './Login.css';
import * as Constants from '../utilities/Constants';
import PropTypes from 'prop-types';


export class ResetPassword extends React.Component {

    params = "";

    state = {
        redirect: false
    }

    static get propTypes() { 
        return { 
            match: PropTypes.any,
        }; 
    }

    constructor(props: any) {
        super(props);
        this.params = props.match.params[0];
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(): void {
        document.title = "Reset Password"
    }

    handleSubmit(event: any): void { 
        Axios.post(Constants.RESET_PASSWORD_URL + this.params, {
                password: event.password
            }).then(response => {
                successAlert(response.data.status.message);
                this.setState({ redirect: true });
            }).catch(error => {
                errorAlert(error.response.data.status.message);
            })  
    }

    onFinishFailed(): void {
        warningAlert("Password are required");
    }

    render(): JSX.Element {
        const { redirect } = this.state;
        if (redirect) {
        return <Redirect to='/signin'/>;
        }
        return(            
            <div>                
                <Divider orientation="center">Reset Password</Divider>
                <Row>
                    <Col flex={5}>
                    </Col>
                    <Col flex={1}>
                        <Form 
                            onFinish={this.handleSubmit}
                            onFinishFailed={this.onFinishFailed}>
                            <Form.Item
                                label="New password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your new password.' }]}>
                                <Input.Password placeholder="New password"/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">Login</Button>
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

export default ResetPassword;