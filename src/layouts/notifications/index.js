import { useState } from "react";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { Badge, Button, ButtonGroup, Card, CardBody } from "reactstrap";

const Notifications = () => {
  return (
    <DashboardLayout>
      <Card className="small">
        <CardBody className="">
          <div className="h5 mb-3">
            <Badge>XII IIT (Super-60) Academic Calendars (2024-25)</Badge>
          </div>
          <ButtonGroup className="d-flex justify-content-between">
            <Button className="text-warning my-0" outline>
              <a
                href="https://drive.google.com/file/d/1oZt5CbHEsyTT1Yp5xdgAzeOu2WRavLDq/view?usp=sharing"
                className="h6"
                style={{ textDecoration: "none" }}
                onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
                target="blank"
              >
                <b>Physics</b>
              </a>
            </Button>
            <Button color="danger" outline>
              <a
                href="https://drive.google.com/file/d/1oZt5CbHEsyTT1Yp5xdgAzeOu2WRavLDq/view?usp=sharing"
                className="h6"
                style={{ textDecoration: "none" }}
                onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
                target="blank"
              >
                <b>Chemistry</b>
              </a>
            </Button>
            <Button color="danger" outline>
              <a
                href="https://drive.google.com/file/d/1oZt5CbHEsyTT1Yp5xdgAzeOu2WRavLDq/view?usp=sharing"
                className="h6"
                style={{ textDecoration: "none" }}
                onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
                target="blank"
              >
                <b>Mathematics</b>
              </a>
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </DashboardLayout>
  );
};

export default Notifications;
