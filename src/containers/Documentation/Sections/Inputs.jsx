import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';

import { CustomInput } from 'components';

class Inputs extends React.Component{
    render(){
        return (
            <div>
                <h1>Inputs</h1>
                <CustomInput
                    labelText="Username"
                    id="username"
                    // inputProps={{
                    //     error: true
                    // }}
                />
                <SyntaxHighlighter language="jsx" style={prism}>{`<NameOfTheIcon />`}</SyntaxHighlighter>
            </div>
        );
    }
}

export default Inputs;
