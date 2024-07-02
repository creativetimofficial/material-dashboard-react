import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import PropTypes from "prop-types";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import { Badge, Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { Eye } from "react-feather";
import ResultsTable from "examples/Tables/DataTable";
import { useNavigate } from "react-router-dom";

const XIIITSuper60 = ({ stuData }) => {
  const history = useNavigate();
  const [weekendxi, setWeekendxi] = useState({
    labels: [],
    datasets: { label: "MAINS", data: [] },
  });

  const [organizedData, setOrganizedData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(1);
  const [selFilData, setSelFilData] = useState();
  const [resultOpenModal, setResultOpenModal] = useState(false);

  const selOptions = [
    { value: 1, label: "Overall" },
    { value: 2, label: "Latest 2 Weeks" },
    { value: 3, label: "Latest 3 Weeks" },
    { value: 4, label: "Latest 4 Weeks" },
    { value: 5, label: "Latest 5 Weeks" },
    { value: 6, label: "Latest 6 Weeks" },
    { value: 7, label: "Latest 7 Weeks" },
    { value: 8, label: "Latest 8 Weeks" },
    { value: 9, label: "Latest 9 Weeks" },
    { value: 10, label: "Latest 10 Weeks" },
    { value: 15, label: "Latest 15 Weeks" },
    { value: 20, label: "Latest 20 Weeks" },
  ];

  useEffect(() => {
    axios
      .get(`https://sheet.best/api/sheets/2330bbb1-4ed6-4303-811c-6240e278ce2c`)
      .then((response) => {
        super60OrganizeData(response.data);
      });
  }, []);

  const super60OrganizeData = (data) => {
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
        Campus: student.Campus,
        Mentor: student.Mentor,
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
      datasets: { label: "TOP MARK", data: datasetsData },
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
          <ModalHeader toggle={() => setResultOpenModal(false)}>
            <Badge color="success"> XII - Super 60 (IIT) JEE-MAINS Model Results </Badge>
          </ModalHeader>
          <ModalBody className="text-center h6">
            <ResultsTable
              marksData={selectedOption != 1 ? selFilData : finalData}
              stuData={stuData}
            />
          </ModalBody>
        </Modal>
      </>
    </Fragment>
  );
};

XIIITSuper60.propTypes = {
  stuData: PropTypes.array.isRequired,
};

export default XIIITSuper60;
