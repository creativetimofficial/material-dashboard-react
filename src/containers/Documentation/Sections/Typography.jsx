import React from 'react';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';

import {
    A,P, Quote, Muted, Primary, Info, Success, Warning, Danger, Small
} from 'components';

const typoDep = `import {
    A,P, Quote, Muted, Primary, Info, Success, Warning, Danger, Small
} from 'components';`;
const typo = `<A href="https://creative-tim.com" target="_blank">anchor(<code>A</code> component)</A>
<P>Paragraph (<code>P</code> component)</P>
<Small>small text (<code>Small</code> component)</Small>
<Muted>muted text (<code>Muted</code> component)</Muted>
<Quote
    text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
    author=" Kanye West, Musician"
/>
<Danger>danger text (<code>Danger</code> component)</Danger>
<Info>info text (<code>Info</code> component)</Info>
<Primary>primary text (<code>Primary</code> component)</Primary>
<Success>success text (<code>Success</code> component)</Success>
<Warning>warning text (<code>Warning</code> component)</Warning>`;

class Typography extends React.Component{
    render(){
        return (
            <div>
                <h1>Typography</h1>
                <P>Beacause of the jss styling (see <Link to={'/documentation/styles'}>styles section</Link>) we had to create some special components so that they have our fonts.</P>
                <P>These components are as follows:</P>
                <A href="https://creative-tim.com" target="_blank">anchor(<code>A</code> component)</A>
                <P>Paragraph (<code>P</code> component)</P>
                <Small>small text (<code>Small</code> component)</Small>
                <Muted>muted text (<code>Muted</code> component)</Muted>
                <Quote
                    text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                    author=" Kanye West, Musician"
                />
                <Danger>danger text (<code>Danger</code> component)</Danger>
                <Info>info text (<code>Info</code> component)</Info>
                <Primary>primary text (<code>Primary</code> component)</Primary>
                <Success>success text (<code>Success</code> component)</Success>
                <Warning>warning text (<code>Warning</code> component)</Warning>
                <SyntaxHighlighter language="jsx" style={prism}>{typoDep}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{typo}</SyntaxHighlighter>
            </div>
        );
    }
}

export default Typography;
