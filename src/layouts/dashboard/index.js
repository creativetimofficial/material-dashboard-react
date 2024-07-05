/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import ClipLoader from "react-spinners/ClipLoader";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Toppers from "layouts/dashboard/components/Toppers";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import SignIn from "layouts/authentication/sign-in";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Col, Input, Row, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Edit, Edit2 } from "react-feather";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import XIIITSuper60 from "./xiIITSuper60";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxHeight: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 20,
  p: 2,
  overflowY: "auto", // Enable vertical scrolling
};

const tableContainerStyle = {
  maxHeight: "400px",
  overflowY: "auto",
  marginTop: "20px",
};

const tableHeaderStyle = {
  position: "sticky",
  top: 0,
  backgroundColor: "#fff",
  zIndex: 1,
};

const Dashboard = () => {
  const { sales, tasks } = reportsLineChartData;

  //Set Variables
  const [isHovered, setIsHovered] = useState(false);
  const [openStuModal, setOpenStuModal] = useState(false);
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [detailData, setDetailData] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editId, setEditId] = useState();
  const [editedIndex, setEditedIndex] = useState();
  const [editStudent, setEditStudent] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [apiData, setApiData] = useState([]);
  const [refresh, setRefresh] = useState([]);
  const finalData = apiData && apiData.filter((ff) => ff.Sno != "" && ff.Status === "Active");

  const groupedData = finalData.reduce((acc, student) => {
    const studentClass = student.Class;
    if (!acc[studentClass]) {
      acc[studentClass] = [];
    }
    acc[studentClass].push(student);
    return acc;
  }, {});

  // Convert the grouped data to an array format if needed
  // const classWiseData = Object.keys(groupedData).map((className) => {
  //   const students = groupedData[className];
  //   const boysCampus = students.filter((student) => student.Campus === "Boys Campus").length;
  //   const girlsCampus = students.filter((student) => student.Campus === "Girls Campus").length;
  //   const dayCampus = students.filter((student) => student.Campus === "Day Campus").length;

  //   return {
  //     className,
  //     students,
  //     totalCount: students.length,
  //     boysCampus,
  //     girlsCampus,
  //     dayCampus,
  //   };
  // });
  const classWiseData = Object.keys(groupedData).map((className) => {
    const students = groupedData[className];

    // Initialize counts for each campus and stream
    let boysCampus = {
      IIT: students.filter(
        (student) => student.Campus === "Boys Campus" && student.Stream === "IIT"
      ).length,
      NEET: students.filter(
        (student) => student.Campus === "Boys Campus" && student.Stream === "NEET"
      ).length,
      COMM: students.filter(
        (student) => student.Campus === "Boys Campus" && student.Stream === "COMMERCE"
      ).length,
      CBSE: students.filter(
        (student) => student.Campus === "Boys Campus" && student.Stream === "CBSE"
      ).length,
    };

    let girlsCampus = {
      IIT: students.filter(
        (student) => student.Campus === "Girls Campus" && student.Stream === "IIT"
      ).length,
      NEET: students.filter(
        (student) => student.Campus === "Girls Campus" && student.Stream === "NEET"
      ).length,
      COMM: students.filter(
        (student) => student.Campus === "Girls Campus" && student.Stream === "COMMERCE"
      ).length,
      CBSE: students.filter(
        (student) => student.Campus === "Girls Campus" && student.Stream === "CBSE"
      ).length,
    };

    let dayCampus = {
      IIT: students.filter((student) => student.Campus === "Day Campus" && student.Stream === "IIT")
        .length,
      NEET: students.filter(
        (student) => student.Campus === "Day Campus" && student.Stream === "NEET"
      ).length,
      COMM: students.filter(
        (student) => student.Campus === "Day Campus" && student.Stream === "COMMERCE"
      ).length,
      CBSE: students.filter(
        (student) => student.Campus === "Day Campus" && student.Stream === "CBSE"
      ).length,
    };

    // Calculate total counts for each campus
    const boysCampusTotal = Object.values(boysCampus).reduce((total, count) => total + count, 0);
    const girlsCampusTotal = Object.values(girlsCampus).reduce((total, count) => total + count, 0);
    const dayCampusTotal = Object.values(dayCampus).reduce((total, count) => total + count, 0);

    // Calculate total counts across all campuses
    const totalCount = boysCampusTotal + girlsCampusTotal + dayCampusTotal;

    return {
      className,
      boysCampus,
      girlsCampus,
      dayCampus,
      totalCount,
    };
  });

  useEffect(() => {
    axios
      .get(`https://sheet.best/api/sheets/c1c3f9ec-bcf4-4f9e-bc53-22554e4adb66`)
      .then((response) => {
        setApiData(response.data);
      });
  }, [refresh]);

  const handleOpen = () => setOpenStuModal(true);
  const handleClose = () => setOpenStuModal(false);

  const handleOpenDetail = (students, title) => {
    setDetailData(students);
    setSelectedTitle(title);
    setOpenDetailModal(true);
  };

  const handleCloseDetail = () => setOpenDetailModal(false);
  const handleCloseEditDtl = () => setOpenEditModal(false);

  const handleStuEdit = (index, student, serial) => {
    const studentIndex = apiData.findIndex((ff) => ff.Sno === serial);
    setEditId(index);
    setEditedIndex(studentIndex);
    setEditStudent(student);
    setOpenEditModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedFields({ ...editedFields, [name]: value });
  };

  const handleSave = () => {
    const updatedStudent = { ...editStudent, ...editedFields };

    const config = {
      headers: {
        "X-Api-Key": "1feE$vlFh9ZGlpNNg$Yd-1#nJ87OFTZo1IYQ0T8ldGQimrg8#kjs2GMIwJA#0vAF",
        "Content-Type": "application/json",
      },
    };

    axios
      .patch(
        `https://sheet.best/api/sheets/c1c3f9ec-bcf4-4f9e-bc53-22554e4adb66/${editedIndex}`,
        updatedStudent,
        config
      )
      .then((response) => {
        const indexToUpdate = detailData.findIndex(
          (student) => student.Sno === editStudent.Sno // Adjust this condition based on your unique identifier
        );

        if (indexToUpdate !== -1) {
          // If found, update detailData with the response data
          const updatedDetailData = [...detailData]; // Create a copy of detailData array
          updatedDetailData[indexToUpdate] = response.data[0]; // Replace the updated student data

          // Update the state with the updated detailData
          setDetailData(updatedDetailData);
        }
        handleCloseEditDtl();
        setEditedFields({});
      })
      .catch((error) => {
        console.error("Error updating student:", error);
        // Handle error scenarios
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter detailData based on the search query
  const filteredData = detailData.filter(
    (student) =>
      student.StudentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.RollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.Stream.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.Class.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.Section.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.Group.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "FilteredData");
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(new Blob([wbout], { type: "application/octet-stream" }), `${selectedTitle}.xlsx`);
  };

  return (
    <Fragment>
      <DashboardLayout>
        {/* <DashboardNavbar /> */}
        <MDBox py={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="dark"
                  icon="groups"
                  title="Students Count"
                  count={
                    finalData.length > 0 ? (
                      <div
                        style={{
                          textDecoration: isHovered ? "underline" : "none",
                          cursor: "pointer",
                          display: "inline-block",
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleOpen}
                      >
                        {finalData.length}
                      </div>
                    ) : (
                      <ClipLoader color="#36d7b7" />
                    )
                  }
                  percentage={{
                    color: "success",
                    amount: "+55%",
                    label: "than last year",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon="wc"
                  title="Staff Count"
                  count="200"
                  percentage={{
                    color: "success",
                    amount: "+3%",
                    label: "than last month",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="badge"
                  title="Students Attendance"
                  count="2300"
                  percentage={{
                    color: "success",
                    amount: "+1%",
                    label: "than yesterday",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="primary"
                  icon="badge"
                  title="Staff Attendance"
                  count="180"
                  percentage={{
                    color: "success",
                    amount: "+2%",
                    label: "than yesterday",
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
          <MDBox mt={4.5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <MDBox mb={3}>
                  <XIIITSuper60 stuData={finalData} />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="dark"
                    title="XI - NEET Weekend (2024-25)"
                    description={
                      <>
                        (<strong>+10%</strong>) increase than last month.
                      </>
                    }
                    chart={tasks}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="info"
                    title="LT-NEET Weekend (2024-25)"
                    description={
                      <>
                        (<strong>+32%</strong>) increase than last month.
                      </>
                    }
                    // date="campaign sent 2 days ago"
                    chart={reportsBarChartData}
                  />
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
          <MDBox>
            <Grid item xs={12} md={12} lg={12}>
              <Toppers />
            </Grid>
          </MDBox>
        </MDBox>
      </DashboardLayout>
      <Modal
        open={openStuModal}
        onClose={handleClose}
        aria-labelledby="custom-modal-title"
        aria-describedby="custom-modal-description"
      >
        <Box sx={modalStyle}>
          <div id="custom-modal-title" className="text-center h5">
            Student Strength Details (2024-25)
          </div>
          <div id="custom-modal-description">
            <div className="text-center h6">
              <Table bordered responsive hover striped>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Class</th>
                    <th colSpan={4}>Boys Campus</th>
                    <th colSpan={4}>Girls Campus</th>
                    <th colSpan={4}>Day Campus</th>
                    <th>Total</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>IIT</th>
                    <th>NEET</th>
                    <th>COMM</th>
                    <th>CBSE</th>
                    <th>IIT</th>
                    <th>NEET</th>
                    <th>COMM</th>
                    <th>CBSE</th>
                    <th>IIT</th>
                    <th>NEET</th>
                    <th>COMM</th>
                    <th>CBSE</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {classWiseData.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.className}</td>
                      <td
                        onClick={() =>
                          handleOpenDetail(
                            finalData.filter(
                              (s) =>
                                s.Campus === "Boys Campus" &&
                                s.Stream === "IIT" &&
                                s.Class === item.className
                            ),
                            `${item.className} - Boys Campus (IIT)`
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {item.boysCampus["IIT"]}
                      </td>
                      <td
                        onClick={() =>
                          handleOpenDetail(
                            finalData.filter(
                              (s) =>
                                s.Campus === "Boys Campus" &&
                                s.Stream === "NEET" &&
                                s.Class === item.className
                            ),
                            `${item.className} - Boys Campus (NEET)`
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {item.boysCampus["NEET"]}
                      </td>
                      <td
                        onClick={() =>
                          handleOpenDetail(
                            finalData.filter(
                              (s) =>
                                s.Campus === "Boys Campus" &&
                                s.Stream === "COMMERCE" &&
                                s.Class === item.className
                            ),
                            `${item.className} - Boys Campus (COMM)`
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {item.boysCampus["COMM"]}
                      </td>
                      <td
                        onClick={() =>
                          handleOpenDetail(
                            finalData.filter(
                              (s) =>
                                s.Campus === "Boys Campus" &&
                                s.Stream === "CBSE" &&
                                s.Class === item.className
                            ),
                            `${item.className} - Boys Campus (CBSE)`
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {item.boysCampus["CBSE"]}
                      </td>
                      {/* Girls Campus */}
                      <td
                        onClick={() =>
                          handleOpenDetail(
                            finalData.filter(
                              (s) =>
                                s.Campus === "Girls Campus" &&
                                s.Stream === "IIT" &&
                                s.Class === item.className
                            ),
                            `${item.className} - Girls Campus (IIT)`
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {item.girlsCampus["IIT"]}
                      </td>
                      <td
                        onClick={() =>
                          handleOpenDetail(
                            finalData.filter(
                              (s) =>
                                s.Campus === "Girls Campus" &&
                                s.Stream === "NEET" &&
                                s.Class === item.className
                            ),
                            `${item.className} - Girls Campus (NEET)`
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {item.girlsCampus["NEET"]}
                      </td>
                      <td
                        onClick={() =>
                          handleOpenDetail(
                            finalData.filter(
                              (s) =>
                                s.Campus === "Girls Campus" &&
                                s.Stream === "COMMERCE" &&
                                s.Class === item.className
                            ),
                            `${item.className} - Girls Campus (COMM)`
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {item.girlsCampus["COMM"]}
                      </td>
                      <td
                        onClick={() =>
                          handleOpenDetail(
                            finalData.filter(
                              (s) =>
                                s.Campus === "Girls Campus" &&
                                s.Stream === "CBSE" &&
                                s.Class === item.className
                            ),
                            `${item.className} - Girls Campus (CBSE)`
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {item.girlsCampus["CBSE"]}
                      </td>
                      {/* Day Campus */}
                      <td
                        onClick={() =>
                          handleOpenDetail(
                            finalData.filter(
                              (s) =>
                                s.Campus === "Day Campus" &&
                                s.Stream === "IIT" &&
                                s.Class === item.className
                            ),
                            `${item.className} - Day Campus (IIT)`
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {item.dayCampus["IIT"]}
                      </td>
                      <td
                        onClick={() =>
                          handleOpenDetail(
                            finalData.filter(
                              (s) =>
                                s.Campus === "Day Campus" &&
                                s.Stream === "NEET" &&
                                s.Class === item.className
                            ),
                            `${item.className} - Day Campus (NEET)`
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {item.dayCampus["NEET"]}
                      </td>
                      <td
                        onClick={() =>
                          handleOpenDetail(
                            finalData.filter(
                              (s) =>
                                s.Campus === "Day Campus" &&
                                s.Stream === "COMMERCE" &&
                                s.Class === item.className
                            ),
                            `${item.className} - Day Campus (COMM)`
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {item.dayCampus["COMM"]}
                      </td>
                      <td
                        onClick={() =>
                          handleOpenDetail(
                            finalData.filter(
                              (s) =>
                                s.Campus === "Day Campus" &&
                                s.Stream === "CBSE" &&
                                s.Class === item.className
                            ),
                            `${item.className} - Day Campus (CBSE)`
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        {item.dayCampus["CBSE"]}
                      </td>
                      {/* Total */}
                      <td
                        onClick={() =>
                          handleOpenDetail(
                            finalData.filter((s) => s.Class === item.className),
                            `${item.className} - Total List`
                          )
                        }
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        <b>{item.totalCount}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={openDetailModal}
        onClose={handleCloseDetail}
        aria-labelledby="detail-modal-title"
        aria-describedby="detail-modal-description"
      >
        <Box sx={modalStyle}>
          <div id="detail-modal-title" className="text-center h4">
            <b style={{ color: "green" }}> {selectedTitle} Student Details </b>
          </div>
          <div id="detail-modal-description">
            <div className="d-flex justify-content-between mb-2">
              <Button variant="contained" color="primary" onClick={exportToExcel}>
                <span className="text-white">Export to Excel</span>
              </Button>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                  marginBottom: "5px",
                  padding: "2px",
                  width: "30%",
                }}
              />
            </div>
            <div className="text-center align-items-center h6" style={tableContainerStyle}>
              <Table bordered responsive hover striped className="align-items-center">
                <thead style={tableHeaderStyle}>
                  <tr>
                    <th>S.No</th>
                    <th style={{ width: "250px" }}>Student Name</th>
                    <th>Roll No</th>
                    <th>Stream</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Group</th>
                    {/* <th>Mobile No</th>
                    <th>Email ID</th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((student, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{student.StudentName}</td>
                      <td>{student.RollNo}</td>
                      <td>{student.Stream}</td>
                      <td>{student.Class}</td>
                      <td>{student.Section}</td>
                      <td>{student.Group}</td>
                      {/* <td>
                        {student.Mobile1} <br /> {student.Mobile2}
                      </td>
                      <td style={{}}>
                        {student.Email_ID1} <br /> {student.Email_ID2}
                      </td> */}
                      <td>{student.Group}</td>
                      <td
                        onClick={() => handleStuEdit(index + 1, student, student.Sno)}
                        style={{
                          textDecoration: isHovered ? "underline" : "none",
                          cursor: "pointer",
                        }}
                      >
                        <Edit size={16} />{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Box>
      </Modal>
      {editId && (
        <Modal
          open={openEditModal}
          onClose={handleCloseEditDtl}
          aria-labelledby="detail-modal-title"
          aria-describedby="detail-modal-description"
        >
          <Box sx={modalStyle}>
            <div className="modal-header">
              <h5 className="modal-title">Edit Student Details</h5>
            </div>
            <hr />
            <div className="modal-body">
              <form>
                <Row>
                  <Col md={3}>
                    <div className="mb-3">
                      <label htmlFor="studentName" className="form-label">
                        Student Name
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="studentName"
                        name="StudentName"
                        value={editedFields.StudentName || editStudent.StudentName || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <label htmlFor="rollNo" className="form-label">
                        Roll No
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="rollNo"
                        name="RollNo"
                        value={editedFields.RollNo || editStudent.RollNo || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <label htmlFor="stream" className="form-label">
                        Stream
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="stream"
                        name="Stream"
                        value={editedFields.Stream || editStudent.Stream || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <label htmlFor="class" className="form-label">
                        Class
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="class"
                        name="Class"
                        value={editedFields.Class || editStudent.Class || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <label htmlFor="section" className="form-label">
                        Section
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="section"
                        name="Section"
                        value={editedFields.Section || editStudent.Section || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <label htmlFor="group" className="form-label">
                        Group
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="group"
                        name="Group"
                        value={editedFields.Group || editStudent.Group || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <label htmlFor="status" className="form-label">
                        Status
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="status"
                        name="Status"
                        value={editedFields.Status || editStudent.Status || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <label htmlFor="mobile1" className="form-label">
                        Mobile-1
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="mobile1"
                        name="Mobile1"
                        value={editedFields.Mobile1 || editStudent.Mobile1 || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <label htmlFor="mobile2" className="form-label">
                        Mobile-2
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="mobile2"
                        name="Mobile2"
                        value={editedFields.Mobile2 || editStudent.Mobile2 || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <label htmlFor="email_ID1" className="form-label">
                        Email ID-1
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="email_ID1"
                        name="Email_ID1"
                        value={editedFields.Email_ID1 || editStudent.Email_ID1 || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mb-3">
                      <label htmlFor="email_ID2" className="form-label">
                        Email ID-2
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="email_ID2"
                        name="Email_ID2"
                        value={editedFields.Email_ID2 || editStudent.Email_ID2 || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-danger mr-0" onClick={handleCloseEditDtl}>
                Cancel
              </button>
              <button className="btn btn-success" onClick={handleSave}>
                Save Changes
              </button>
            </div>
          </Box>
        </Modal>
      )}
    </Fragment>
  );
};

export default Dashboard;
