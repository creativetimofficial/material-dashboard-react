import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';
import { Favorite } from 'material-ui-icons';

import {
    Button, IconButton, P
} from 'components';

const importExamples = `import { Button } from 'components';`;

const examples = `<Button type="button" color="primary">Primary</Button>
<Button type="button" color="info">Info</Button>
<Button type="button" color="success">Success</Button>
<Button type="button" color="danger">Danger</Button>
<Button type="button" color="warning">Warning</Button>
<Button type="button" color="rose">Rose</Button>`

const importStyle = `import { Favorite } from 'material-ui-icons';
import { Button, IconButton } from 'components';`;

const style = `<Button color="primary">Default</Button>
<Button color="primary" round>Round</Button>
<Button color="primary" round><Favorite /> With Icon</Button>
<IconButton color="primary"><Favorite style={{color: "#FFFFFF"}}/></IconButton>
<Button color="transparent">Simple</Button>`;

class Buttons extends React.Component{
    render(){
        return (
            <div>
                <h1>Buttons</h1>
                <P>Use Material Dashboard's React custom button styles for actions in forms, dialogs, and more with support for multiple states, and more.</P>
                <h2>Examples</h2>
                <P>Material Dashboard React has changed the predefined button styles from Material UI, each serving its own semantic purpose, with a few extras thrown in for more control.</P>
                <Button type="button" color="primary">Primary</Button>
                <Button type="button" color="info">Info</Button>
                <Button type="button" color="success">Success</Button>
                <Button type="button" color="danger">Danger</Button>
                <Button type="button" color="warning">Warning</Button>
                <Button type="button" color="rose">Rose</Button>
                <SyntaxHighlighter language="jsx" style={prism}>{importExamples}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{examples}</SyntaxHighlighter>
                <h2>Style Buttons</h2>
                <Button color="primary">Default</Button>
                <Button color="primary" round>Round</Button>
                <Button color="primary" round><Favorite /> With Icon</Button>
                <IconButton color="primary"><Favorite style={{color: "#FFFFFF"}}/></IconButton>
                <Button color="transparent">Simple</Button>
                <SyntaxHighlighter language="jsx" style={prism}>{importStyle}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{style}</SyntaxHighlighter>
            </div>
        );
    }
}

export default Buttons;
