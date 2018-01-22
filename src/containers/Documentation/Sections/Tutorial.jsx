import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';

import {
    H1, H2, P, A
} from 'components';

class Tutorial extends React.Component{
    render(){
        return (
            <div>
                <H1>Tutorial</H1>
                <H2>License</H2>
                <P><b>MIT LICENSE</b></P>
                <P>Copyright (c) 2017 <A href="http://creative-tim.com/" target="_blank" style={{color: "#9c27b0"}}>Creative Tim</A></P>
                <P>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</P>
                <P>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</P>
                <P>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</P>
                <H2>Getting started</H2>
                <P><b>Material Dashboard React</b> is built on top of <A href="https://material-ui-next.com/" target="_blank" style={{color: "#9c27b0"}}>Material UI</A>.</P>
                <ul>
                    <li>Install NodeJs from <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">NodeJs Official Page</a></li>
                    <li>Go to <a href="https://www.creative-tim.com/" target="_blank">creative tim website</a> and login into your account</li>
                    <li>Go to <a href="https://www.creative-tim.com/downloads" target="_blank">downloads</a> section on creative tim website (be sure to be logged into your account)</li>
                    <li>Press the download button near <b>Now UI Dashboard Pro React</b> product (this will download onto your computer a zip file)</li>
                    <li>Unzip the downloaded file to a folder in your computer</li>
                    <li>Open Terminal</li>
                    <li>Go to your file project (where you've unzipped the product)</li>
                    <li>Run in terminal <SyntaxHighlighter language="jsx" style={prism}>{`npm install`}</SyntaxHighlighter></li>
                    <li>Then run <SyntaxHighlighter language="jsx" style={prism}>{`npm start`}</SyntaxHighlighter></li>
                    <li>
                        (Optional) You can create a new react application like this
                        <ul>
                            <li>Run in terminal <SyntaxHighlighter language="jsx" style={prism}>{`npm install -g create-react-app`}</SyntaxHighlighter></li>
                            <li>Go to the folder where you want to create your app</li>
                            <li>Run in terminal <SyntaxHighlighter language="jsx" style={prism}>{`create-react-app your-app-name`}</SyntaxHighlighter></li>
                            <li>Navigate to <code>your-app-name</code></li>
                            <li>Run in terminal <SyntaxHighlighter language="jsx" style={prism}>{`npm start`}</SyntaxHighlighter></li>
                            <li>More information → <a href="https://github.com/facebookincubator/create-react-app" target="_blank" rel="noopener noreferrer">create-react-app</a></li>
                        </ul>
                    </li>
                    <li>Navigate to <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a></li>
                    <li>More information → <a href="https://reactjs.org/docs/installation.html" target="_blank" rel="noopener noreferrer">react</a></li>
                </ul>
            </div>
        );
    }
}

export default Tutorial;
