import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import Table from "components/Table/Table.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

import UserService from "../../APIs/UserService";

import { User,AirConditioners,SmartLamps,MotionSensors } from "../../layouts/Admin";

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

export default function MainPage(user) {
  React.useEffect(() => {

  }, []);
  /*
  const [user, setUser] = React.useState([]);
  const [gateways, setGateways] = React.useState([]);
  const [gatewaysWithOutDevices , setGatewayWithOutDevices] = React.useState([]);
  React.useEffect(() => {
    getUser();
    getGatewayByUserId();
  }, []);
  const getUser = () => {
    UserService.getUser(3)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  };
  const getGatewayByUserId = () =>{
    GatewayService.getGatewaysByUserId(3)
    .then((response)=>{
        var gateways2 = [];
        var devices = [];
        var temp;
        response.data.forEach(element => {
          temp = {};
          temp.isAlive = element.isAlive.toString();
          temp.gatewayId = element.smartLamps[0].gatewayId;        
          //gateways2.push(temp);
          gateways2.push([temp.gatewayId,temp.isAlive]);
        });
        setGatewayWithOutDevices(gateways2);
        setGateways(response.data);
    })
  }
*/
  const getDevicesTableData = () => {
    var devices = [];

    AirConditioners.forEach((device) => {
      devices.push([device.id.toString(),"Klima", "device.isAlive.toString()"]);
    });
    SmartLamps.forEach((device) => {
      devices.push([device.id.toString(),"Akıllı Lamba",  "device.isAlive.toString()"]);
    });
    MotionSensors.forEach((device) => {
      devices.push([device.id.toString(),"Hareket Sensörü", "device.isAlive.toString()"]);
    });

    return Array.from(devices);
  };
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitleWhite}>Cihazlar</h4>
              <p className={classes.cardCategoryWhite}>
                Sahip olduğun cihazlar aşağıda görünür.
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <Table
                  tableHeaderColor="danger"
                  tableHead={["Id", "Tür", "Bağlı mı?"]}
                  tableData={getDevicesTableData()}
                />
              </GridContainer>
            </CardBody>
            <CardFooter>

            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>
                {User.name} {User.surname}
              </h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
            </CardBody>
          </Card>
        </GridItem>



      </GridContainer>
    </div>
  );
}
