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

export const EmailActionSC = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    padding: 16px;
    margin-top: 16px;
    background-color: #F9A825;
    border-radius: 8px;

    input {
        width: 75%;
        font-size: 18px;
        padding: 0 4px;
    }
    .action {
        width: 25%;
        padding: 24px 48px;
        background-color: #898989;
        margin-left: 12px;
        color: white;
        cursor: pointer;
        font-size: 18px;
        font-weight: 400;
        &.valid {
            background-color: #E91E63;
        }
    }
`;