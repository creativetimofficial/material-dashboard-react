import React from 'react';
import {
    withStyles, Card, CardContent, CardHeader, CardActions,
} from 'material-ui';
import PropTypes from 'prop-types';

import { regularCardStyle } from 'variables/styles';

class RegularCard extends React.Component{
    constructor(props){
        super(props);
        switch (this.props.headerColor) {
            case 'orange':
                this.state = {
                    headerColor: " " + this.props.classes.cardHeaderOrange
                }
                break;
            case 'green':
                this.state = {
                    headerColor: " " + this.props.classes.cardHeaderGreen
                }
                break;
            case 'red':
                this.state = {
                    headerColor: " " + this.props.classes.cardHeaderRed
                }
                break;
            case 'blue':
                this.state = {
                    headerColor: " " + this.props.classes.cardHeaderBlue
                }
                break;
            default:
                this.state = {
                    headerColor: " " + this.props.classes.cardHeaderPurple
                }
            break;
        };
    }
    render(){
        return (
            <Card className={this.props.classes.card + (this.props.plainCard ? " " + this.props.classes.cardPlain:"")}>
                <CardHeader
                    classes={{
                        root: this.props.classes.cardHeader + this.state.headerColor,
                        title: this.props.classes.cardTitle,
                        subheader: this.props.classes.cardSubtitle,
                    }}
                    title={this.props.cardTitle}
                    subheader={this.props.cardSubtitle}
                />
                <CardContent>
                    {this.props.content}
                </CardContent>
                <CardActions className={this.props.classes.cardActions}>
                    {this.props.footer}
                </CardActions>
            </Card>
        );
    }
}

RegularCard.propTypes = {
    plainCard: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    headerColor: PropTypes.oneOf(['orange','green','red','blue','purple']),
    cardTitle: PropTypes.node,
    cardSubtitle: PropTypes.node,
    content: PropTypes.node,
    footer: PropTypes.node
};

export default withStyles(regularCardStyle)(RegularCard);
