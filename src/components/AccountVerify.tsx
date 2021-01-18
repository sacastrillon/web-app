/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import * as Constants from '../utilities/Constants';
import { errorAlert, successAlert } from '../utilities/Alerts';

export class AccountVerify extends React.Component {

    userToken = "";
    state = {
        textValue: 'Validating your account...'
    }    

    static get propTypes() { 
        return { 
            location: PropTypes.any,
        }; 
    }

    constructor(props: any) {
        super(props);
        try {
            this.userToken = props.location.search;
        } catch (error) {
            errorAlert("Token error.");
        }        
    }

    componentDidMount(): void {
        document.title = "Account Verify";
        if(this.userToken != '') {            
            this.verifyAccount();
        } else {
            errorAlert("Token error.");
        }
    }

    verifyAccount(): void {
        Axios.get(Constants.EMAIL_VERIFICATION_URL + this.userToken).then(response => {
            successAlert(response.data.status.message);
            this.setState({
                textValue: 'Account validated succesfully.'
            })
        }).catch(error => {
            errorAlert(error.response.data.status.message);
            this.setState({
                textValue: error.response.data.status.message
            })
        })
    }

    render() {
        return(
            <div>
                <Divider orientation="center">Account Verification</Divider>
                <h2>{this.state.textValue}</h2>
            </div>
        );
    }
}

export default AccountVerify;