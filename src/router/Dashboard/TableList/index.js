import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Grid from 'components/Grid';
import Table from 'components/Table';
import Card, { CardHeader, CardBody } from 'components/Card';

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF'
    }
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1'
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color='primary'>
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>Here is a subtitle for this table</p>
          </CardHeader>
          <CardBody>
            <Table
              countRows
              tableHeaderColor='primary'
              options={{
                search: false,
                toolbar: false
              }}
              columns={[
                { title: 'Name', field: 'name' },
                { title: 'Country', field: 'country' },
                { title: 'City', field: 'city' },
                { title: 'Salary', field: 'salary' }
              ]}
              data={[
                {
                  name: 'Dakota Rice',
                  country: 'Niger',
                  city: 'Oud-Turnhout',
                  salary: '$36,738'
                },
                {
                  name: 'Minerva Hooper',
                  country: 'Curaçao',
                  city: 'Sinaai-Waas',
                  salary: '$23,789'
                },
                {
                  name: 'Sage Rodriguez',
                  country: 'Netherlands',
                  city: 'Baileux',
                  salary: '$56,142'
                },
                {
                  name: 'Philip Chaney',
                  country: 'Korea, South',
                  city: 'Overland Park',
                  salary: '$38,735'
                },
                {
                  name: 'Doris Greene',
                  country: 'Malawi',
                  city: 'Feldkirchen in Kärnten',
                  salary: '$63,542'
                },
                {
                  name: 'Mason Porter',
                  country: 'Chile',
                  city: 'Gloucester',
                  salary: '$78,615'
                }
              ]}
            />
          </CardBody>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color='primary'>
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>Here is a subtitle for this table</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor='primary'
              options={{
                search: false,
                toolbar: false
              }}
              columns={[
                { title: 'Name', field: 'name' },
                { title: 'Country', field: 'country' },
                { title: 'City', field: 'city' },
                { title: 'Salary', field: 'salary' }
              ]}
              data={[
                {
                  name: 'Dakota Rice',
                  country: 'Niger',
                  city: 'Oud-Turnhout',
                  salary: '$36,738'
                },
                {
                  name: 'Minerva Hooper',
                  country: 'Curaçao',
                  city: 'Sinaai-Waas',
                  salary: '$23,789'
                },
                {
                  name: 'Sage Rodriguez',
                  country: 'Netherlands',
                  city: 'Baileux',
                  salary: '$56,142'
                },
                {
                  name: 'Philip Chaney',
                  country: 'Korea, South',
                  city: 'Overland Park',
                  salary: '$38,735'
                },
                {
                  name: 'Doris Greene',
                  country: 'Malawi',
                  city: 'Feldkirchen in Kärnten',
                  salary: '$63,542'
                },
                {
                  name: 'Mason Porter',
                  country: 'Chile',
                  city: 'Gloucester',
                  salary: '$78,615'
                }
              ]}
            />
          </CardBody>
        </Card>
      </Grid>
    </Grid>
  );
}
