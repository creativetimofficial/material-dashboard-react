import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

// @material-ui/core
import Typography from "@material-ui/core/Typography";

// core components
import { LinearProgress, Button, Slider } from "@material-ui/core";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { AirConditioners } from "../../layouts/Admin";
import { HubConnectionBuilder } from "@microsoft/signalr";
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

const useStyles = makeStyles(styles);
const SignalRConnection = new HubConnectionBuilder()
  .withAutomaticReconnect()
  .withUrl("https://thinkerthingsapi.azurewebsites.net/airconditioner")
  .build();
export default function SmartLamp() {
  const [ConnectingState, setStates] = React.useState("CONNECTING");
  const [Speed, setSliderSpeed] = React.useState(10);
  const [Tempature, setTempature] = React.useState("0");
  React.useEffect(() => {
    
  }, []);
  const onChangeSlider = (value) => {
    setSpeed(value); 
    setSliderSpeed(value);
  }
  SignalRConnection.on("tempature",(tempature)=> {setTempature(tempature)})
  SignalRConnection.on("speed",(speed)=> {
    setSliderSpeed(parseInt(speed));})
  const toggleAirConditioner = () => {
    var command = {
      signalrConnectionId: SignalRConnection.connectionId,
      DeviceId: 1,
    };
    SignalRConnection.invoke("ToggleAirConditioner", JSON.stringify(command));

  };
  const setSpeed = (value) => {
    var command = {
      signalrConnectionId: SignalRConnection.connectionId,
      DeviceId: 1,
      Command:{
        speed:value
      }
    };
    SignalRConnection.invoke("SetSpeed", JSON.stringify(command));
  };
  const getTempature = () => {
    var command = {
      signalrConnectionId: SignalRConnection.connectionId,
      DeviceId: 1,
    };
    SignalRConnection.invoke("GetTempature", JSON.stringify(command));
  };
  const getSpeed = () => {
    var command = {
      signalrConnectionId: SignalRConnection.connectionId,
      DeviceId: 1,
    };
    SignalRConnection.invoke("GetSpeed", JSON.stringify(command));
  };
  
  const start = () => {
    if (SignalRConnection.connectionState != "Connected")
      SignalRConnection.start().then(() => {
        setStates("CONNECTED")
        getSpeed();
        getTempature();
        setInterval(function(){ if(SignalRConnection.state == "Connected"){getTempature()} }, 10000);
      }).catch((err) => {
        setStates("DISCONNECTED")
        console.log(err);
        setTimeout(() => start(), 2000)
      });
  };
  start();
  const classes = useStyles();
  const getTabs = () => {
    var conditioners = [];
    AirConditioners.map((prop, key) => {
      let state;
        let text;
        if (ConnectingState == "CONNECTED") {
          state = <></>;
          text = (
            <Typography color="primary" align="center">
              {" "}
              Geçit {prop.gatewayId}'e bağlanıldı.{" "}
            </Typography>
          );
        } else if(ConnectingState == "CONNECTING") {
          state = <LinearProgress></LinearProgress>;
          text = (
            <Typography align="center">
              {" "}
              Geçit {prop.gatewayId}'e bağlanılıyor...{" "}
            </Typography>
          );
        }
        else{
          text = (
            <Typography align="center">
              {" "}
              Geçit {prop.gatewayId}'e bağlanılamadı.{" "}
            </Typography>);
        }
      conditioners.push({
        tabName: "Klima " + (key + 1),
        tabIcon: AcUnitIcon,
        tabContent: (
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              {state}
              {text}
              <br></br>
              <br></br>
            </GridItem>
            <GridItem align="center" xs={12} sm={12} md={4}>
              <Button onClick={toggleAirConditioner} variant="contained" align="center" color="primary">
                Aç/Kapat
                      </Button>
            </GridItem >
            <GridItem align="center" xs={12} sm={12} md={4}>
              <Typography>Sıcaklık : {Tempature}</Typography>
            </GridItem>
            <GridItem align="center" xs={12} sm={12} md={4}>
              <Typography>Şuanki Çalışma Hızı : {Speed}</Typography>
              <Slider
                defaultValue={10}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
                onChangeCommitted={(event,value) => {onChangeSlider(value)}}
              />
            </GridItem>
          </GridContainer>
        ),
      });
    });

    return conditioners;
  };
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
