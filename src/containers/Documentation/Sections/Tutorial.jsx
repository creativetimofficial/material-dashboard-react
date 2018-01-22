import React from 'react';

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
                <P>Copyright (c) 2017 <A href="http://creative-tim.com/" target="_blank">Creative Tim</A></P>
            </div>
        );
    }
}

export default Tutorial;
