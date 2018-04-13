import React from "react";
import {
  withStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography
} from "material-ui";
import PropTypes from "prop-types";

import profileCardStyle from "assets/jss/material-dashboard-react/profileCardStyle";

function ProfileCard({ ...props }) {
  const { classes, subtitle, title, description, footer, avatar } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
          root: classes.cardHeader,
          avatar: classes.cardAvatar
        }}
        avatar={<img src={avatar} alt="..." className={classes.img} />}
      />
      <CardContent className={classes.textAlign}>
        {subtitle !== undefined ? (
          <Typography component="h6" className={classes.cardSubtitle}>
            {subtitle}
          </Typography>
        ) : null}
        {title !== undefined ? (
          <Typography component="h4" className={classes.cardTitle}>
            {title}
          </Typography>
        ) : null}
        {description !== undefined ? (
          <Typography component="p" className={classes.cardDescription}>
            {description}
          </Typography>
        ) : null}
      </CardContent>
      <CardActions className={classes.textAlign + " " + classes.cardActions}>
        {footer}
      </CardActions>
    </Card>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  description: PropTypes.node,
  footer: PropTypes.node,
  avatar: PropTypes.string
};

export default withStyles(profileCardStyle)(ProfileCard);
