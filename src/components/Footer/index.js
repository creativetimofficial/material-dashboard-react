/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle";
import footerLinks from './footer_links'
import { APP_DISPLAY_NAME } from "constants/app";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            {footerLinks.map((link, key)=>(
              <ListItem key={key} className={classes.inlineBlock}>
                {link.external ? (
                <a href={link.to} target="_blank" className={classes.block}>
                  {link.name}
                </a>
                ) : (
                  <Link to={link.to} className={classes.block}>
                    {link.name}
                  </Link>
                )}

              </ListItem>
            ))}
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <Link to="/">
              {APP_DISPLAY_NAME}
            </Link>
            , made with love for a better web
          </span>
        </p>
      </div>
    </footer>
  );
}
