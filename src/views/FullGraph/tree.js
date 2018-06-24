import React from "react";
import ReactEcharts from "echarts-for-react";
import { graphFlow } from "variables/graphs";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { treeDummyData } from "variables/graphs";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "orthogonal"
    };

    this.data = treeDummyData;
  }

  getOption = state => {
    const options = {
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove"
      },
      legend: {
        top: "2%",
        left: "3%",
        orient: "vertical",
        data: [
          {
            name: "Tree",
            icon: "rectangle"
          }
        ],
        borderColor: "#c23531"
      },
      series: {
        type: "tree",
        name: "Tree",
        data: [this.data],
        layout: state.type,

        top: "18%",
        bottom: "14%",
        left: "14%",
        roam: true,

        symbolSize: 7,
        expandAndCollapse: true,

        animationDuration: 550,
        animationDurationUpdate: 750
      }
    };
    if (state.type !== "radial") {
      options.series.label = {
        normal: {
          position: "left",
          verticalAlign: "middle",
          align: "right"
        }
      };

      options.series = Object.assign({}, options.series, {
        top: "5%",
        left: "7%",
        bottom: "2%",
        right: "10%"
      });

      options.series.leaves = {
        label: {
          normal: {
            position: "right",
            verticalAlign: "middle",
            align: "left"
          }
        }
      };
    }
    return options;
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChartClick = params => {
    console.log(params);
  };

  render() {
    let onEvents = {
      click: this.onChartClick
    };

    const { classes } = this.props;
    return (
      <div>
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type">Type</InputLabel>
            <Select
              name="type"
              value={this.state.type}
              onChange={this.handleChange}
            >
              <MenuItem value={"orthogonal"}>Orthogonal</MenuItem>
              <MenuItem value={"radial"}>Radial</MenuItem>
            </Select>
          </FormControl>
        </form>
        <ReactEcharts
          option={this.getOption(this.state)}
          style={{ height: 400 }}
          onEvents={onEvents}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Tree);
