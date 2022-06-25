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

import company1Img from '../../../assets/companies/company-1.jpg';
import company2Img from '../../../assets/companies/company-2.jpg';
import { CompanyExpSC, ExperienceSC } from './experience.styles';


const DETAILS_COMPANY = [
    {
        designation: "",
        name: "",
        image: company1Img,
        altText: '',
        details: "",
        link: ''
    },
    {
        designation: "",
        name: "",
        image: company2Img,
        altText: '',
        details: "",
        link: ""
    }
]


function openInNewTab(link) {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}


const Company = ({companyInfo: {designation, name, image, altText, details, link}}) => {
    return <CompanyExpSC onClick={() => openInNewTab(link)}>
        <div className='exp-info'>
            <img src={image} alt={altText}/>
            <div className='designation'>{designation}</div>
            <div className='company-name'>{name}</div>
            <div className='details'>{details}</div>
        </div>
        <div className='company-action'>Click to Visit</div>
    </CompanyExpSC>
}


const ExperienceComponent = () => {
    return <ExperienceSC>
        <div className="exp-title">My Experience</div>
        
        <div className="experience-holder">  
            { DETAILS_COMPANY.map(company => <Company companyInfo={company}/>) }
        </div>
        <div className="description">
            Please write description
        </div>
    </ExperienceSC>
}

export default ExperienceComponent;