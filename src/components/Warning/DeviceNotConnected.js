import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import GridItem from "components/Grid/GridItem.js";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import GridContainer from "components/Grid/GridContainer.js";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

export default class DeviceNotConnected extends Component {
    
    render() {
        if(this.props.Device == 'Smart Lamp'){
            return (
            <GridContainer >
                <GridItem align="center" xs={12} sm={12} md={12}>
                    <EmojiObjectsIcon color="error"  style={{ fontSize: 190 }}/>
                <Typography variant="h4" >Akıllı Lamba bulut sunucusuna bağlı değil</Typography>
            </GridItem>           
              </GridContainer>
         )
        }
        else if(this.props.Device == 'Air Conditioner'){
            return (
                <GridContainer >
                <GridItem align="center" xs={12} sm={12} md={12}>
                    <EmojiObjectsIcon color="error"  style={{ fontSize: 190 }}/>
                <Typography variant="h4" >Klima bulut sunucusuna bağlı değil</Typography>
            </GridItem>           
              </GridContainer>
         )
        }
        else {
            return (
                <GridContainer >
                <GridItem align="center" xs={12} sm={12} md={12}>
                    <EmojiObjectsIcon color="error"  style={{ fontSize: 190 }}/>
                <Typography variant="h4" >Aygıt bulut sunucusuna bağlı değil</Typography>
            </GridItem>           
              </GridContainer>
         )
        }
    }
}


DeviceNotConnected.propTypes = {
    Device: PropTypes.oneOf(['Smart Lamp', 'Air Conditioner']),
}