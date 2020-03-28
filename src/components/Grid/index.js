import React from 'react';
import MUGrid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  item: {
    padding: '0 15px !important',
  },
  container: {
    margin: '0 -15px !important', // NOT SURE WHY -15 PX
    width: 'unset',
  },
});

function Grid({
  container,
  item,
  ...gridProps
}) {
  const classes = useStyles();
  const className = classnames({
    [classes.container]: container,
    [classes.item]: item,
  });
  return (
    <MUGrid
      className={className}
      item={item}
      container={container}
      {...gridProps}
    />
  );
}

Grid.defaultProps = {
  item: false,
  container: false,
};

Grid.propTypes = {
  item: PropTypes.bool,
  container: PropTypes.bool,
};

export default Grid;
