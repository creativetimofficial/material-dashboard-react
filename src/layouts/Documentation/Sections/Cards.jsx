import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';
import { Grid } from 'material-ui';
import ChartistGraph from 'react-chartist';
import { AccessTime, ContentCopy, Warning } from '@material-ui/icons';
import { emailsSubscriptionChart } from 'variables/charts';
import avatar from 'assets/img/faces/marc.jpg';

import {
    P, ChartCard, ProfileCard, RegularCard, StatsCard, TasksCard, Button
} from 'components';

const imports = `import {
    ChartCard, ProfileCard, RegularCard, StatsCard, TasksCard
} from 'components';`;

const chartCardDep = `import { Grid } from 'material-ui';
import ChartistGraph from 'react-chartist';
import { AccessTime } from '@material-ui/icons';
import { emailsSubscriptionChart } from 'variables/charts';
import { ChartCard } from 'components';`;
const chartCard = `<Grid item xs={12} sm={12} md={6}>
    <ChartCard
        chart={
            <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={
                    emailsSubscriptionChart.animation
                }
            />
        }
        chartColor="orange"
        title="Email Subscriptions"
        text="Last Campaign Performance"
        statIcon={AccessTime}
        statText="campaign sent 2 days ago"
    />
</Grid>`;
const chartCardProp = `ChartCard.propTypes = {
    // react-chartist card
    chart: PropTypes.object.isRequired,
    // title of the card (under the chart)
    title: PropTypes.node,
    // text description of the card (under the title)
    text: PropTypes.node,
    // icon in the footer
    statIcon: PropTypes.func.isRequired,
    // color the icon in the footer
    statIconColor: PropTypes.oneOf(['warning','primary','danger','success','info','rose','gray']),
    // chart background color
    chartColor: PropTypes.oneOf(['orange','green','red','blue','purple']),
    // if you want a link alongside the icon in the footer
    // (you have to pass a object that contains a text and a href)
    statLink: PropTypes.object,
    // text you want alongside the icon in the footer
    // if statLink is defined, than the statText will not appear
    statText: PropTypes.node
};

ChartCard.defaultProps = {
    // set the default color of the  stat icon to gray
    statIconColor: 'gray',
    // set the deafult chart background color to purple
    chartColor: 'purple'
};`;

const profileCardDep = `import avatar from 'assets/img/faces/marc.jpg';
import { Button, ProfileCard } from 'components';
import { Grid } from 'material-ui';`;
const profileCard = `<Grid item xs={12} sm={12} md={4}>
    <ProfileCard
        avatar={avatar}
        subtitle="CEO / CO-FOUNDER"
        title="Alec Thompson"
        description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
        footer={
            <Button color="primary" round>Follow</Button>
        }
    />
</Grid>`;
const profileCardProp = `ProfileCard.propTypes = {
    // title of the card (under the subtitle)
    title: PropTypes.node,
    // subtitle of the card (under the avatar)
    subtitle: PropTypes.node,
    // text description of the card (under the title)
    description: PropTypes.node,
    // footer of the card (under the description)
    footer: PropTypes.node,
    // avatar - image of the card
    avatar: PropTypes.string
};`;

const regularCardDep = `import { Grid } from 'material-ui';
import { RegularCard, P } from 'components';`;
const regularCard = `<Grid item xs={12} sm={12} md={8}>
    <RegularCard
        cardTitle="Title"
        cardSubtitle="Subtitle"
        content="This here is the content - can be whatever you want"
        footer={<P>This here is the footer - can be whatever you want</P>}
    />
</Grid>`;
const regularCardProp = `RegularCard.propTypes = {
    // use this prop if you want the card to have no background color
    plainCard: PropTypes.bool,
    headerColor: PropTypes.oneOf(['orange','green','red','blue','purple']),
    cardTitle: PropTypes.node,
    cardSubtitle: PropTypes.node,
    content: PropTypes.node,
    footer: PropTypes.node
};

RegularCard.defaultProps = {
    // deafult color of the header background color will be purple
    headerColor: 'purple',
};`;

const statsCardDep = `import { Grid } from 'material-ui';
import { ContentCopy, Warning } from '@material-ui/icons';
import { StatsCard } from 'components';`;
const statsCard = `<Grid item xs={12} sm={6} md={5}>
    <StatsCard
        icon={ContentCopy}
        iconColor="orange"
        title="Used Space"
        description="49/50"
        small="GB"
        statIcon={Warning}
        statIconColor="danger"
        statLink={{text: "Get More Space...", href:"#pablo"}}
    />
</Grid>`;
const statsCardProp = `StatsCard.propTypes = {
    icon: PropTypes.func.isRequired,
    iconColor: PropTypes.oneOf(['orange','green','red','blue','purple']),
    title: PropTypes.node,
    description: PropTypes.node,
    small: PropTypes.node,
    statIcon: PropTypes.func.isRequired,
    statIconColor: PropTypes.oneOf(['warning','primary','danger','success','info','rose','gray']),
    statLink: PropTypes.object,
    statText: PropTypes.node
};

StatsCard.defaultProps = {
    iconColor: 'purple',
    statIconColor: 'gray'
};`;

const tasksCardDep = `import { Grid } from 'material-ui';
import { TasksCard } from 'components';`;
const tasksCard = `<Grid item xs={12} sm={12} md={6}>
    <TasksCard />
</Grid>`;
class Cards extends React.Component{
    render(){
        return (
            <div>
                <h1>Card</h1>
                <P>You will find all of our restyled cards from material-ui in <code>src/components/cards</code>. Bellow will take a look at each one of them.</P>
                <h2>Imports</h2>
                <SyntaxHighlighter language="jsx" style={prism}>{imports}</SyntaxHighlighter>
                <h2>Examples</h2>
                <h3>ChartCard</h3>
                <Grid item xs={12} sm={12} md={6}>
                    <ChartCard
                        chart={
                            <ChartistGraph
                                className="ct-chart"
                                data={emailsSubscriptionChart.data}
                                type="Bar"
                                options={emailsSubscriptionChart.options}
                                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                                listener={
                                    emailsSubscriptionChart.animation
                                }
                            />
                        }
                        chartColor="orange"
                        title="Email Subscriptions"
                        text="Last Campaign Performance"
                        statIcon={AccessTime}
                        statLink={{text: "Get More Space...", href:"#pablo"}}
                    />
                </Grid>
                <SyntaxHighlighter language="jsx" style={prism}>{chartCardDep}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{chartCard}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{chartCardProp}</SyntaxHighlighter>
                <h3>ProfileCard</h3>
                <Grid item xs={12} sm={12} md={4}>
                    <ProfileCard
                        avatar={avatar}
                        subtitle="CEO / CO-FOUNDER"
                        title="Alec Thompson"
                        description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                        footer={
                            <Button color="primary" round>Follow</Button>
                        }
                    />
                </Grid>
                <SyntaxHighlighter language="jsx" style={prism}>{profileCardDep}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{profileCard}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{profileCardProp}</SyntaxHighlighter>
                <h3>RegularCard</h3>
                <Grid item xs={12} sm={12} md={8}>
                    <RegularCard
                        cardTitle="Title"
                        cardSubtitle="Subtitle"
                        content="This here is the content - can be whatever you want"
                        footer={<P>This here is the footer - can be whatever you want</P>}
                    />
                </Grid>
                <SyntaxHighlighter language="jsx" style={prism}>{regularCardDep}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{regularCard}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{regularCardProp}</SyntaxHighlighter>
                <h3>StatsCard</h3>
                <Grid item xs={12} sm={6} md={5}>
                    <StatsCard
                        icon={ContentCopy}
                        iconColor="orange"
                        title="Used Space"
                        description="49/50"
                        small="GB"
                        statIcon={Warning}
                        statIconColor="danger"
                        statLink={{text: "Get More Space...", href:"#pablo"}}
                    />
                </Grid>
                <SyntaxHighlighter language="jsx" style={prism}>{statsCardDep}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{statsCard}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{statsCardProp}</SyntaxHighlighter>
                <h3>TasksCard</h3>
                `<Grid item xs={12} sm={12} md={6}>
                    <TasksCard />
                </Grid>
                <SyntaxHighlighter language="jsx" style={prism}>{tasksCardDep}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{tasksCard}</SyntaxHighlighter>
                <h2>Material UI</h2>
                <P>For more props and cards please refer to <a href="https://material-ui-next.com/demos/cards/" target="_blank" rel="noopener noreferrer">material ui cards</a>.</P>
            </div>
        );
    }
}

export default Cards;
