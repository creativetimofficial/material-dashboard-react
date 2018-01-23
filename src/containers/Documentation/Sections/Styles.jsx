import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';

import {
    P
} from 'components';

const restyledComponents = `components
├── Cards
│   ├── ChartCard.jsx
│   ├── ProfileCard.jsx
│   ├── RegularCard.jsx
│   ├── StatsCard.jsx
│   └── TasksCard.jsx
├── CustomButtons
│   ├── Button.jsx
│   └── IconButton.jsx
├── CustomInput
│   └── CustomInput.jsx
├── FixedPlugin
│   └── FixedPlugin.jsx
├── Footer
│   └── Footer.jsx
├── Header
│   ├── Header.jsx
│   └── HeaderLinks.jsx
├── Sidebar
│   └── Sidebar.jsx
├── Snackbar
│   ├── Snackbar.jsx
│   └── SnackbarContent.jsx
├── Table
│   └── Table.jsx
├── Tasks
│   └── Tasks.jsx
└── Typography
    ├── A.jsx
    ├── Danger.jsx
    ├── Info.jsx
    ├── Muted.jsx
    ├── P.jsx
    ├── Primary.jsx
    ├── Quote.jsx
    ├── Small.jsx
    ├── Success.jsx
    └── Warning.jsx`;

const importExample = `import ComponentX from 'components/ComponentX/ComponentX.jsx';
import ComponentY from 'components/ComponentY/ComponentY.jsx';
...`

const betterImport = `import { ComponentX, ComponentY, ... } from 'components';`;

class Styles extends React.Component{
    render(){
        return (
            <div>
                <h1>Styles</h1>
                <P>Like our friends from <a href="https://material-ui-next.com/" target="_blank" rel="noopener noreferrer">Material UI</a>, we've used JSS syntax to style (restyle) the material ui components.</P>
                <P>A useful link about JSS is <a href="http://cssinjs.org/" target="_blank" rel="noopener noreferrer">this one here</a>.</P>
                <P>Material UI offers you 7 ways to override their styles, and as said above, we've decided to go with the third option (<a href="https://material-ui-next.com/guides/interoperability/#react-jss" target="_blank" rel="noopener noreferrer">this one here</a>).</P>
                <P>All of the restyled components can be found in <code>src/components</code>.</P>
                <SyntaxHighlighter language="jsx" style={prism}>{restyledComponents}</SyntaxHighlighter>
                <P>For a better way to call our components we've added a index file in the components folder (<code>src/components/index.js</code>) which imports all of our restyled components and exports them, so you can import any of them easier. Instead of doing something like this</P> <SyntaxHighlighter language="jsx" style={prism}>{importExample}</SyntaxHighlighter>
                <P>you would do this</P>
                <SyntaxHighlighter language="jsx" style={prism}>{betterImport}</SyntaxHighlighter>
                <P>If you go to any of our components you will see that somewhere at the beginning of the file we import <code>withStyles</code> from <code>material-ui</code>, then we import from <code>scr/variables/styles.jsx</code> the correspondig style for that component and at the end of the file, we export that component's class with the <code>withStyles</code> function so that the imported style overrides the <code>material-ui</code> style.</P>
                <P>For a better way of understanding this variables, please take a look inside the <code>src/variables/styles</code>. You will see that all of the styles have a unique name that corresponds with the component name and each of them have a comment above for you to know where the style will be imported. You will also see that we've used some of that styles for <code>src/views/*</code> as well. At the beginning of the file you will see some constants that are beeing used on different components.</P>
            </div>
        );
    }
}

export default Styles;
