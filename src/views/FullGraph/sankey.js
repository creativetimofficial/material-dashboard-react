import React from "react";
import ReactEcharts from "echarts-for-react";

export default class SankeyDiagram extends React.Component {
  constructor(props) {
    super(props);
  }
  getOption = props => {
    return {
      title: {
        text: "Sankey Diagram"
      },
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove"
      },
      series: {
        type: "sankey",
        layout: "none",

        data: props.data,
        links: props.links,
        itemStyle: {
          normal: {
            borderWidth: 1,
            borderColor: "#000"
          }
        },
        lineStyle: {
          normal: {
            curveness: 0.5
          }
        }
      }
    };
  };

  renderSankey = props => {
    let onEvents = {
      click: this.onChartClick
    };
    if (props.links.length) {
      return (
        <ReactEcharts
          option={this.getOption(props)}
          style={{ height: 300 }}
          onEvents={onEvents}
        />
      );
    }
    return <div>No Links Exist</div>;
  };

  onChartClick = params => {
    console.log(params);
  };

  render() {
    return this.renderSankey(this.props);
  }
}
