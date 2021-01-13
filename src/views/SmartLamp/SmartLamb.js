import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

// @material-ui/core
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
// core components

import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Typography from "@material-ui/core/Typography";
import { LinearProgress, Button } from "@material-ui/core";
import { SmartLamps } from "../../layouts/Admin";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import { HubConnectionBuilder } from "@microsoft/signalr";
import  DeviceNotConnected from "../../components/Warning/DeviceNotConnected.js"

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const SignalRConnection = new HubConnectionBuilder()
.withAutomaticReconnect()
.withUrl("https://thinkerthingsapi.azurewebsites.net/smartlamp")
.build();
const useStyles = makeStyles(styles);

export default function SmartLamp() {
  const [ConnectingState, setStates] = React.useState("CONNECTING");
  React.useEffect(() => {
    
  }, []);
  
  const start = () => {
    var i;
    for(i = 0;i<SmartLamps.length;i++){
      if(SmartLamps[0].isAlive == true){
        if(SignalRConnection.connectionState != "Connected"){
        SignalRConnection.start().then(() => {
          setStates("CONNECTED")
        }).catch((err) => {
          setStates("DISCONNECTED")
          console.log(err);
          setTimeout(() => start(), 2000)
        });
        break;
      }
      }
    }
  }
  start();
  SignalRConnection.on("Toggelled",(message)=> {/**/})
  
  const onOff = () => {
    var command = {
      signalrConnectionId: SignalRConnection.connectionId,
      DeviceId: 1,
    };
    SignalRConnection.invoke("ToggleLamp", JSON.stringify(command));

  };


    const getTabs = () => {
    var lambs = [];
      SmartLamps.map((prop, key) => {
        let state;
        let text;
        if (ConnectingState == "CONNECTED") {
          state = <></>;
          text = (
            <Typography color="primary" align="center">
              {" "}
              Buluta bağlanıldı.{" "}
            </Typography>
          );
        } else if(ConnectingState == "CONNECTING") {
          state = <LinearProgress></LinearProgress>;
          text = (
            <Typography align="center">
              {" "}
              Buluta bağlanılıyor...{" "}
            </Typography>
          );
        }
        else{
          text = (
            <Typography align="center">
              {" "}
              Buluta bağlanılamadı.{" "}
            </Typography>);
        }
        var content;
        if(prop.isAlive == true){
          content = (<GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              {state}
              {text}
              <br></br>
              <br></br>
            </GridItem>
            <GridItem align="center" xs={12} sm={12} md={12}>
              <EmojiObjectsOutlinedIcon
                style={{ fontSize: 190 }}
              ></EmojiObjectsOutlinedIcon>
              <br></br>
              <br></br>
            </GridItem>
            <GridItem align="center" xs={12} sm={12} md={12}>
              <Button
                onClick={onOff}
                variant="contained"
                align="center"
                color="primary"
              >
                Aç/Kapat
              </Button>
            </GridItem>
          </GridContainer>)
        }
        else{
          content = (<DeviceNotConnected Device="Smart Lamp"/>)
        }

        lambs.push({
          tabName: "Lamba " + (key + 1),
          tabIcon: EmojiObjectsIcon,
          //event:() => alert("seaa"),
          tabContent: content,
        });
      

      });
    return lambs;
  };

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
          <CustomTabs headerColor="danger" tabs={getTabs()} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
