import React from 'react';
import {
    Card, CardHeader, CardContent, Grid, Table, TableHead, TableBody, TableRow, TableCell
} from 'material-ui';

const tdArray = [
    [ "Dakota Rice" , "$36,738" , "Niger" , "Oud-Turnhout" ] ,
    [ "Minerva Hooper" , "$23,789" , "Curaçao" , "Sinaai-Waas" ] ,
    [ "Sage Rodriguez" , "$56,142" , "Netherlands" , "Baileux" ] ,
    [ "Philip Chaney" , "$38,735" , "Korea, South" , "Overland Park" ] ,
    [ "Doris Greene" , "$63,542" , "Malawi" , "Feldkirchen in Kärnten" ] ,
    [ "Mason Porter" , "$78,615" , "Chile" , "Gloucester" ]
];

class TableList extends React.Component{
    render(){
        return (
            <Grid container>
                <Grid item md={12}>
                    <Card>
                        <CardHeader
                            title={"Simple Table"}
                            subheader={"Here is a subtitle for this table"}/>
                        <CardContent>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Country</TableCell>
                                        <TableCell>City</TableCell>
                                        <TableCell>Salary</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        tdArray.map((prop,key) => {
                                            return (
                                                <TableRow key={key}>
                                                    {
                                                        prop.map((prop,key) => {
                                                            return (
                                                                <TableCell key={key}>{prop}</TableCell>
                                                            )
                                                        })
                                                    }
                                                </TableRow>
                                            );
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={12}>
                    <Card>
                        <CardHeader
                            title={"Table on Plain Background"}
                            subheader={"Here is a subtitle for this table"}/>
                        <CardContent>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Salary</TableCell>
                                        <TableCell>Country</TableCell>
                                        <TableCell>City</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        tdArray.map((prop,key) => {
                                            return (
                                                <TableRow key={key}>
                                                    <TableCell >{key+1}</TableCell>
                                                    {
                                                        prop.map((prop,key) => {
                                                            return (
                                                                <TableCell key={key}>{prop}</TableCell>
                                                            )
                                                        })
                                                    }
                                                </TableRow>
                                            );
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default TableList;
