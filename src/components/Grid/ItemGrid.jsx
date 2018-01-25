import React from 'react';
import { withStyles, Grid } from 'material-ui'

const style = {
    grid: {
        padding: "0 15px !important"
    }
}

class ItemGrid extends React.Component{
    render(){
        const { classes, children, ...rest } = this.props;
        return(
            <Grid item {...rest} className={classes.grid}>{children}</Grid>
        );
    }
}


export default withStyles(style)(ItemGrid);
