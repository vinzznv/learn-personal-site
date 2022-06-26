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


export const ExperienceSC = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f1f3f5;
    max-width: 100%;
    min-height: 50vh;
    align-items: center;
    padding: 10vh 4vw;
    justify-content: center;

    .experience-holder {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 24px;
    }

    .exp-title {
        width: 100%;
        font-weight: 400;
        font-size: 48px;
        color: #E91E63;
        text-align: left;
    }

    .description {
        width: 100%;
        font-weight: 500;
        font-size: 24px;
        color: #00000090;
        text-align: center;
        margin-top: 24px;
    }
`;

export const CompanyExpSC = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    margin-right: 24px;
    background: white;
    margin-top: 16px;
    box-shadow: 2px 3px 18px 0 rgba(0, 0, 0, 0.03), 2px 3px 4px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    cursor: pointer;

    :hover {
        background: #FAFAFA;
    }

    .company-action {
        border-top: 1px solid #00000022;
        padding: 8px 16px;
        font-size: 18px;
        color: #000000DD;
        font-weight: 600;
    }

    .exp-info {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-left: 16px;
        align-items: center;
        padding: 24px;

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        .designation {
            font-size: 18px;
            color: #000000DD;
            font-weight: 600;
            margin-top: 8px;
        }
        .company-name {
            margin-top: 4px;
            font-size: 16px;
            color: #000000AA;
            font-weight: 600;
        }
        .details {
            margin-top: 4px;
            font-size: 16px;
            color: #00000088;
            font-weight: 500;
        }
    }
`;