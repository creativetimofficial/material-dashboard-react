import React from "react";
import PropTypes, { array } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { vertex, relations, graphFlow } from "variables/graphs";
import GridItem from "components/Grid/GridItem.jsx";
import Grid from "@material-ui/core/Grid";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Sankey from "./sankey";
import Tree from "./tree";

const styles = theme => ({
  appBar: {
    position: "relative",
    backgroundColor: "#ab47bc"
  },
  flex: {
    flex: 1
  },
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

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    selectedNode: graphFlow.nodes[0].name,
    relation: ""
  };
  graphData = null;

  componentWillReceiveProps(nextProps) {
    if (this.state.selectedNode !== nextProps.selectedNode) {
      this.setState({
        selectedNode: nextProps.selectedNode
      });
    }
  }

  getMenuOptionsFromObject = obj => {
    return Object.keys(obj).map(key => {
      return <MenuItem value={key}>{obj[key]}</MenuItem>;
    });
  };

  getMenuOptions = (array, valueKey, textKey) => {
    return array.map(obj => {
      return <MenuItem value={obj[valueKey]}>{obj[textKey]}</MenuItem>;
    });
  };

  calculateTargetNodesAndLinks = params => {
    console.log(params);
    let nodes = [];
    let links = [];
    if (params.selectedNode === "all") {
      nodes = graphFlow.nodes.map(node => ({
        name: node.name
      }));
    } else {
      nodes.push({
        name: params.selectedNode
      });
    }
    graphFlow.links.forEach(link => {
      if (params.relation === "all" && params.selectedNode === "all") {
        links.push({
          source: link.source,
          target: link.target,
          value: 1,
          type: link.value
        });
      } else if (
        link.source === params.selectedNode &&
        (link.value === relations[params.relation] || params.relation === "all")
      ) {
        nodes.push({ name: link.target });
        links.push({
          source: link.source,
          target: link.target,
          value: 1,
          type: link.value
        });
      } else if (
        link.target === params.selectedNode &&
        (link.value === relations[params.relation] || params.relation === "all")
      ) {
        nodes.push({ name: link.source });
        links.push({
          source: link.source,
          target: link.target,
          value: 1,
          type: link.value
        });
      }
    });
    return {
      nodes,
      links
    };
  };

  handleChange = event => {
    const params = Object.assign(
      {},
      {
        relation: this.state.relation,
        selectedNode: this.state.selectedNode
      },
      {
        [event.target.name]: event.target.value
      }
    );
    if (params.relation && params.selectedNode) {
      this.graphData = this.calculateTargetNodesAndLinks(params);
      console.log(this.graphData);
    } else {
      this.graphData = null;
    }
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.props.close();
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.open}
          style={{ left: 260, width: `${window.innerWidth - 260}px` }}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Sankey And Tree Based Demonstration
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader
                  color="primary"
                  style={{
                    paddingTop: 0,
                    paddingBottom: 0,
                    background: "#00acc1",
                    color: "black"
                  }}
                >
                  <h4 className={classes.cardTitleWhite}>Sankey Graph</h4>
                </CardHeader>
                <CardBody>
                  <Grid container>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      style={{ padding: "0px !important" }}
                    >
                      <div style={{ padding: 20 }}>
                        <form className={classes.root} autoComplete="off">
                          <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="node">Nodes</InputLabel>
                            <Select
                              name="selectedNode"
                              onChange={this.handleChange}
                              value={this.state.selectedNode}
                            >
                              <MenuItem value="all">All</MenuItem>
                              {this.getMenuOptions(
                                graphFlow.nodes,
                                "name",
                                "name"
                              )}
                            </Select>
                          </FormControl>
                          <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="relation">Relation</InputLabel>
                            <Select
                              name="relation"
                              onChange={this.handleChange}
                              value={this.state.relation}
                            >
                              <MenuItem value="">None</MenuItem>
                              <MenuItem value="all">All</MenuItem>
                              {this.getMenuOptionsFromObject(relations)}
                            </Select>
                          </FormControl>
                        </form>
                        {this.graphData ? (
                          <Sankey
                            data={this.graphData.nodes}
                            links={this.graphData.links}
                          />
                        ) : (
                          <p>Select Values To Visualize</p>
                        )}
                      </div>
                    </GridItem>
                  </Grid>
                </CardBody>
              </Card>
              <Card>
                <CardHeader
                  color="primary"
                  style={{
                    paddingTop: 0,
                    paddingBottom: 0,
                    background: "#00acc1",
                    color: "black"
                  }}
                >
                  <h4 className={classes.cardTitleWhite}>Tree Graph</h4>
                </CardHeader>
                <CardBody>
                  <Grid container>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      style={{ padding: "0px !important" }}
                    >
                      <Tree />
                    </GridItem>
                  </Grid>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
