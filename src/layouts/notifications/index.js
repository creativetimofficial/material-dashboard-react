import { useState } from "react";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { Badge, Button, ButtonGroup, Card, CardBody, Col, Row } from "reactstrap";

const Notifications = () => {
  return (
    <DashboardLayout>
      <Card className="small">
        <CardBody className="">
          <div className="h5 mb-3">
            <Badge color="primary">XI IIT (Regular - Hostel) Academic Calendars (2024-25)</Badge>
          </div>
          <Row>
            <Col md={6}>
              <ButtonGroup className="d-flex justify-content-between">
                <Button color="warning" className="my-0" outline>
                  <a
                    href="https://drive.google.com/file/d/1b8lboh27vIK7rD4HA7JaGGN--N-EXj4u/view?usp=drive_link"
                    className="h6"
                    style={{ textDecoration: "none" }}
                    onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
                    target="blank"
                  >
                    <b>Physics</b>
                  </a>
                </Button>
                <Button color="info" outline>
                  <a
                    href="https://drive.google.com/file/d/1r2W5bw0_xASgKqLgw7YHtuarckheD8K-/view?usp=drive_link"
                    className="h6"
                    style={{ textDecoration: "none" }}
                    onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
                    target="blank"
                  >
                    <b>Chemistry</b>
                  </a>
                </Button>
                <Button color="success" outline>
                  <a
                    href="https://drive.google.com/file/d/1zXF4TapuoqgTefGcem-h8ImGI1XEqaU6/view?usp=drive_link"
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
              <hr className="mb-0 mt-2 text-danger" />
              <small>
                Last Updated on @ <b className="text-success">02.07.2024</b>
              </small>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="small mt-2">
        <CardBody className="align-items-center">
          <div className="h5 mb-3">
            <Badge color="danger">XI NEET (Regular - Hostel) Academic Calendars (2024-25)</Badge>
          </div>
          <Row>
            <Col md={8}>
              <ButtonGroup className="d-flex justify-content-between">
                <Button color="primary" className="my-0" outline>
                  <a
                    href="https://drive.google.com/file/d/1cY37v0kDT2KjqmRwUIbL9n1MagGnMLhL/view?usp=drive_link"
                    className="h6"
                    style={{ textDecoration: "none" }}
                    onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
                    target="blank"
                  >
                    <b>Physics</b>
                  </a>
                </Button>
                <Button color="success" outline>
                  <a
                    href="https://drive.google.com/file/d/1ocZ5U72u05B5Dcy2AYcbXqCk4Dabr-3a/view?usp=drive_link"
                    className="h6"
                    style={{ textDecoration: "none" }}
                    onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
                    target="blank"
                  >
                    <b>Chemistry</b>
                  </a>
                </Button>
                <Button color="info" outline>
                  <a
                    href="https://drive.google.com/file/d/1UbGISdzwRqI8W3A5fu485A_ICTs4dIta/view?usp=drive_link"
                    className="h6"
                    style={{ textDecoration: "none" }}
                    onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
                    target="blank"
                  >
                    <b>Botany</b>
                  </a>
                </Button>
                <Button color="warning" outline>
                  <a
                    href="https://drive.google.com/file/d/1NJHg_SrMVLUjE4LBVol3KE4sMqIU-A_h/view?usp=drive_link"
                    className="h6"
                    style={{ textDecoration: "none" }}
                    onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
                    target="blank"
                  >
                    <b>Zoology</b>
                  </a>
                </Button>
              </ButtonGroup>
              <hr className="mb-0 mt-2 text-danger" />
              <small>
                Last Updated on @ <b className="text-success">02.07.2024</b>
              </small>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </DashboardLayout>
  );
};

export default Notifications;
