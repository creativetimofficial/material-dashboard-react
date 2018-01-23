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

const disabled = `<Button color="primary" disabled>Default</Button>
<Button color="primary" round disabled>Round</Button>`;

const buttonProp = `Button.propTypes = {
    // sets the color style of the button
    color: PropTypes.oneOf(['primary','info','success','warning','danger','rose','white','simple','transparent']),
    // specifies if the button is rounded or not
    round: PropTypes.bool,
    // specifies if the button will take the full width of the container it is in
    fullWidth: PropTypes.bool,
    // disabled state
    disabled: PropTypes.bool,
};`;

const iconButtonPorps = `IconButton.propTypes = {
    // sets the color style of the button
    color: PropTypes.oneOf(['primary','info','success','warning','danger','rose','white','simple']),
    // custom class to be passed in the icon button
    customClass: PropTypes.string,
    // disabled state
    disabled: PropTypes.bool,
};`

class Buttons extends React.Component{
    render(){
        return (
            <div>
                <h1>Buttons</h1>
                <P>Use Material Dashboard's React custom button styles for actions in forms, dialogs, and more with support for multiple states, and more.</P>
                <P>You will find all of our restyled cards from material-ui in <code>src/components/CustomButtons</code>.</P>
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
                <h2>Disabled state</h2>
                <P>Make buttons look inactive by adding the disabled boolean attribute to any <code>Button</code> element.</P>
                <Button color="primary" disabled>Default</Button>
                <Button color="primary" round disabled>Round</Button>
                <SyntaxHighlighter language="jsx" style={prism}>{disabled}</SyntaxHighlighter>
                <h2>Properties</h2>
                <h3><code>Button</code></h3>
                <SyntaxHighlighter language="jsx" style={prism}>{buttonProp}</SyntaxHighlighter>
                <h3><code>IconButton</code></h3>
                <SyntaxHighlighter language="jsx" style={prism}>{iconButtonPorps}</SyntaxHighlighter>
                <h2>Material UI Buttons</h2>
                <P>For more props and buttons please check out the <a href="https://material-ui-next.com/demos/buttons/" target="_blank" rel="noopener noreferrer">material-ui buttons section</a>.</P>
            </div>
        );
    }
}

export default Buttons;
