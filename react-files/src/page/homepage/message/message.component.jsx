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

import React from 'react';

import ProfileImg from '../../../assets/profile.jpg';
import { EmailAction } from '../email-action/email-action.component';

import { MessageSC } from "./message.styles"


export const MessageComponent = () => {
    return <MessageSC>
        <div className='content-holder'>
            <div className="title-holder">
                <div className="title">
                I Believe world is filled with opportunities
                </div>
                <div className="description">
                    I am ready for it. I love software design &
                        development. Thank you for visiting me virtually !!!
                </div>

            </div>
            <div className="image-holder">
                <img src={ProfileImg} alt='vinayaka' className='profile-photo'/>
            </div>
        </div>
        <div className='action-holder'>
            <EmailAction/>
        </div>
    </MessageSC>
}