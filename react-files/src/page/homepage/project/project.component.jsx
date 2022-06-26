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
import { ProjectInfoSC, ProjectSC } from './project.styles';


const DETAILS_PROJECTS = [
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
        link: ''
    }
]


function openInNewTab(link) {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}


const Project = ({projectInfo: {designation, name, image, altText, details, link}}) => {
    return <ProjectInfoSC onClick={() => openInNewTab(link)}>
        <div className='prj-aligner'>
            <img src={image} alt={altText}/>
            <div className='prj-info'>
                <div className='designation'>{designation}</div>
                <div className='prj-name'>{name}</div>
                <div className='details'>{details}</div>
            </div>
        </div>
        
        <div className='prj-action'>Click to Visit</div>
    </ProjectInfoSC>
}


const ProjectComponent = () => {
    return <ProjectSC>
        <div className="prj-title">My Projects</div>
        
        <div className="prj-holder">  
            { DETAILS_PROJECTS.map(project => <Project projectInfo={project}/>) }
        </div>
    </ProjectSC>
}

export default ProjectComponent;