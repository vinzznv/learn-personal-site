/*
    MIT License

    Copyright (c) 2022 vinzznv

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

import axios from 'axios';
import React, { useState } from "react";

import { EmailActionSC } from "./email-action.styles"


const PATTERN = /^[A-Za-z0-9#+._-]+@[A-Za-z0-9._-]+.+[A-Za-z0-9_-]+$/;
const BE_INIT_MAIL_URL = 'WRITE_FUNCTION_URL';


export const EmailAction = () => {
    const [email, setEmail] = useState();
    const [mailState, setMailState] = useState();

    function textChangeListener(event) {
        setEmail(event.target.value);
        setMailState(null);
    }

    function actionClick() {
        setMailState('INIT');
        axios.post(BE_INIT_MAIL_URL, {email}).then((response) => {
            setMailState(response.data && response.data.code === 'SUCCESS' ? 'SUCCESS' : 'FAILURE');
        }).catch((error) => {
            setMailState('FAILURE');
        });
    }
    
    let actionClassName, actionText, actionListener;
    switch(mailState) {
        case 'INIT':
            actionClassName = 'action';
            actionText = 'LOADING';
            break;
        case 'SUCCESS':
            actionClassName = 'action';
            actionText = 'SUCCESS';
            break;
        case 'FAILURE':
            actionClassName = 'action valid';
            actionText = 'Retry Email';
            actionListener = actionClick;
            break;
        default:
            if(email && PATTERN.test(email)) {
                actionClassName = 'action valid';
                actionText = 'Mail resume';
                actionListener = actionClick;
            } else{
                actionClassName = 'action';
                actionText = 'Mail resume';
            }
    }

    return <EmailActionSC>
        <input placeHolder='Enter email id' onChange={textChangeListener}/>
        <div className={actionClassName} onClick={actionListener}>{actionText}</div>
    </EmailActionSC>
}
