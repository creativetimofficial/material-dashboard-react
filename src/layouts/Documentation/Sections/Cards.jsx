import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import ChartistGraph from "react-chartist";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
import ContentCopy from "@material-ui/icons/ContentCopy";
import Warning from "@material-ui/icons/Warning";
// core components
import { emailsSubscriptionChart } from "variables/charts";
import avatar from "assets/img/faces/marc.jpg";

const codeExample = ``;

class Cards extends React.Component {
  render() {
    return (
      <div>
        <h1>Card</h1>

        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Cards;
