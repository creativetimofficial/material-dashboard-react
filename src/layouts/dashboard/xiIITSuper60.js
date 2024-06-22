import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import PropTypes from "prop-types";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import { Badge, Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { Eye } from "react-feather";

const XIIITSuper60 = ({ stuData }) => {
  const [weekendxi, setWeekendxi] = useState({
    labels: [],
    datasets: { label: "MAINS", data: [] },
  });

  const [organizedData, setOrganizedData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(1);
  const [selFilData, setSelFilData] = useState();
  const [resultOpenModal, setResultOpenModal] = useState(false);
  console.log(selFilData, "selected Filtered Data");

  const selOptions = [
    { value: 1, label: "Overall" },
    { value: 2, label: "Latest 2 Weeks" },
    { value: 3, label: "Latest 3 Weeks" },
    { value: 5, label: "Latest 5 Weeks" },
    { value: 10, label: "Latest 10 Weeks" },
  ];

  useEffect(() => {
    axios
      .get(`https://sheet.best/api/sheets/2330bbb1-4ed6-4303-811c-6240e278ce2c`)
      .then((response) => {
        organizeMarksData(response.data);
      });
  }, []);

  const organizeMarksData = (data) => {
    const result = data.map((student) => {
      const weekendMarks = [];

      for (let i = 1; i <= student.ConductExams; i++) {
        weekendMarks.push({
          Date: student[`W-${i}`],
          Mat: student[`Mat-${i}`],
          Phy: student[`Phy-${i}`],
          Che: student[`Che-${i}`],
          Tot: student[`Tot-${i}`],
        });
      }

      return {
        StudentName: student.StudentName,
        RollNo: student.RollNo,
        Caste: student.Caste,
        Gender: student.Gender,
        Section: student.Section,
        WeekendMarks: weekendMarks,
      };
    });

    setOrganizedData(result);
  };

  useEffect(() => {
    if (stuData.length > 0) {
      const filteredData = organizedData.filter((student) =>
        stuData.some((stu) => stu.RollNo === student.RollNo)
      );
      setFinalData(filteredData);
    }
  }, [stuData, organizedData]);

  useEffect(() => {
    if (finalData.length > 0) {
      generateChartData(finalData);
    }
  }, [finalData, selectedOption]);

  const generateChartData = (data) => {
    let labels = [];
    let datasetsData = [];

    if (selectedOption === 1) {
      // Overall means no need to filter
      data.forEach((student) => {
        student.WeekendMarks.forEach((weekendMark) => {
          const date = weekendMark.Date;
          const tot = parseInt(weekendMark.Tot);
          if (!labels.includes(date)) {
            labels.push(date);
            datasetsData.push(tot);
          }
        });
      });
    } else {
      // Filter based on selectedOption (latest 2, 3, 5, 10 weeks)
      const numberOfWeeks = parseInt(selectedOption);
      data.forEach((student) => {
        const weekendMarks = student.WeekendMarks.slice(-numberOfWeeks);
        weekendMarks.forEach((weekendMark) => {
          const date = weekendMark.Date;
          const tot = parseInt(weekendMark.Tot);
          if (!labels.includes(date)) {
            labels.push(date);
            datasetsData.push(tot);
          }
        });
      });
    }

    // Sort labels based on date
    labels.sort(
      (a, b) =>
        new Date(a.split(".").reverse().join("-")) - new Date(b.split(".").reverse().join("-"))
    );

    setWeekendxi({
      labels,
      datasets: { label: "JEE-MAINS", data: datasetsData },
    });
  };

  const handleOptionChange = (e) => {
    setSelectedOption(parseInt(e.target.value));
  };

  useEffect(() => {
    if (selectedOption === 1) {
      setSelFilData(finalData);
    } else {
      const numberOfWeeks = parseInt(selectedOption);
      const filteredData = finalData.map((student) => {
        const weekendMarks = student.WeekendMarks.slice(-numberOfWeeks);
        return {
          ...student,
          WeekendMarks: weekendMarks,
        };
      });
      setSelFilData(filteredData);
    }
  }, [selectedOption]);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(finalData); // Using finalData for export
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "FilteredData");
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(new Blob([wbout], { type: "application/octet-stream" }), `FilteredData.xlsx`);
  };

  const handleResultView = () => {
    setResultOpenModal(!resultOpenModal);
  };

  return (
    <Fragment>
      <ReportsLineChart
        color="success"
        title={
          <div className="d-flex justify-content-between align-items-center mb-0">
            <div className="h5" style={{ textDecoration: "underline" }}>
              XII - IIT Super60 (2024-25)
            </div>
            <div>
              <select
                id="selectOptions"
                className="form-control"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                {selOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Button size="sm rounded" color="danger" onClick={() => handleResultView()}>
                <Eye size={15} /> View Result
              </Button>
            </div>
          </div>
        }
        chart={weekendxi}
      />
      <>
        <Modal
          isOpen={resultOpenModal}
          className="modal-dialog modal-dialog-centered modal-xl"
          toggle={() => setResultOpenModal(false)}
        >
          <ModalHeader toggle={() => setResultOpenModal(false)}>Result View</ModalHeader>
          <ModalBody className="text-center h6">Work in Progress...</ModalBody>
        </Modal>
      </>
    </Fragment>
  );
};

XIIITSuper60.propTypes = {
  stuData: PropTypes.array.isRequired,
};

export default XIIITSuper60;
