import React from 'react';
import { Route } from 'react-router-dom';

import Login from'./components/Login';
import Register from './components/Register';
import AccountVerify from './components/AccountVerify';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

function BaseRouter(): JSX.Element {
    return(
        <div>
            <Route exact path='/signin' component={Login}></Route>
            <Route exact path='/signup' component={Register}></Route>
            <Route exact path='/accountVerify' component={AccountVerify}></Route>
            <Route exact path='/forgotPassword' component={ForgotPassword}></Route>
            <Route exact path='/resetPassword/*' component={ResetPassword}></Route>
        </div>
    );    
}
export default BaseRouter;