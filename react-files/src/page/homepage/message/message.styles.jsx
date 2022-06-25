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

import styled from "styled-components";

export const MessageSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 100%;
    padding: 10vh 4vw;
    min-height: 60vh;
    justify-content: center;

    .content-holder {
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .title-holder {
            text-align: left;
            color: #E91E63;
            .title {
                font-size: 48px;
                font-weight: 600;
                line-height: 110%;
            }
            .description {
                margin-top: 24px;
                font-size: 24px;
                font-weight: 400;
                line-height: 130%;
            }
        }
        .profile-photo {
            width: 200px;
            height: 200px;
        }
    }

    .action-holder {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin-top: 24px;
    }
`;