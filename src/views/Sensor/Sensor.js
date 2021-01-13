import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import SettingsRemoteIcon from "@material-ui/icons/SettingsRemote";

// core components

import CustomTabs from "components/CustomTabs/CustomTabs.js";
import { MotionSensors } from "../../layouts/Admin";
import Typography from "@material-ui/core/Typography";
import { LinearProgress } from "@material-ui/core";
import Table from "components/Table/Table.js";
import MotionDateService from "../../APIs/MotionDateService.js"

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

export default function SmartLamp() {
  const [Dates, setDates] = React.useState([]);
  React.useEffect(() => {
    getMotionDates();
  }, []);
  const classes = useStyles();
  const getMotionDates = () => {
    var Temp = [];
    MotionDateService.getMotionDatesByDeviceId(1)
    .then((dates) => { 
      dates.data.map((prop, key) => {
        var YearDates =  prop.date.split("-");
        var DayDates = YearDates[2].split(":");
        Temp.push([(key+1).toString(),DayDates[1],parseInt(DayDates[2]).toString(),DayDates[0].split("T")[0].toString(),YearDates[1].toString(),YearDates[0].toString()]);
      })
      setDates(Temp);
    });
    
  };
  const getTabs = () => {
    var sensors = [];
   
      MotionSensors.map((prop, key) => {
        sensors.push({
          tabName: "Hareket Sensörü " + (key + 1),
          tabIcon: SettingsRemoteIcon,
          tabContent: (
            <GridContainer>       
              <GridItem  xs={12} sm={12} md={12}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}></GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <Typography variant="h4">Son hareketler :</Typography>
                    <Table
                      tableHeaderColor="danger"
                      tableHead={["Sıra", "Saat", "Dakika", "Gün", "Ay", "Yıl"]}
                      tableData={Dates}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}></GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          ),
        });
      });
    
    return sensors;
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
