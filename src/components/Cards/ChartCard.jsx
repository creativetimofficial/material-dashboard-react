import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
// core components
import chartCardStyle from "assets/jss/material-dashboard-react/chartCardStyle";

function ChartCard({ ...props }) {
  const {
    classes,
    chartColor,
    statIconColor,
    chart,
    title,
    text,
    statLink,
    statText
  } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        className={
          classes.cardHeader + " " + classes[chartColor + "CardHeader"]
        }
        subheader={chart}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="title" component="h4" className={classes.cardTitle}>
          {title}
        </Typography>
        <Typography component="p" className={classes.cardCategory}>
          {text}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.cardStats}>
          <props.statIcon
            className={
              classes.cardStatsIcon +
              " " +
              classes[statIconColor + "CardStatsIcon"]
            }
          />{" "}
          {statLink !== undefined ? (
            <a href={statLink.href} className={classes.cardStatsLink}>
              {statLink.text}
            </a>
          ) : statText !== undefined ? (
            statText
          ) : null}
        </div>
      </CardActions>
    </Card>
  );
}

ChartCard.defaultProps = {
  statIconColor: "gray",
  chartColor: "purple"
};

ChartCard.propTypes = {
  classes: PropTypes.object.isRequired,
  chart: PropTypes.object.isRequired,
  title: PropTypes.node,
  text: PropTypes.node,
  statIcon: PropTypes.func.isRequired,
  statIconColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  chartColor: PropTypes.oneOf(["orange", "green", "red", "blue", "purple"]),
  statLink: PropTypes.object,
  statText: PropTypes.node
};

export default withStyles(chartCardStyle)(ChartCard);
