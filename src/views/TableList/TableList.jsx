import React from 'react';
import {
    Grid
} from 'material-ui';

import {
    RegularCard, Table, ItemGrid
} from 'components';

class TableList extends React.Component{
    render(){
        return (
            <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        cardTitle="Simple Table"
                        cardSubtitle="Here is a subtitle for this table"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['Name','Country','City','Salary']}
                                tableData={[
                                    [ "Dakota Rice" , "Niger" , "Oud-Turnhout" , "$36,738" ] ,
                                    [ "Minerva Hooper" , "Curaçao" , "Sinaai-Waas" , "$23,789" ] ,
                                    [ "Sage Rodriguez" , "Netherlands" , "Baileux" , "$56,142" ] ,
                                    [ "Philip Chaney" , "Korea, South" , "Overland Park" , "$38,735" ] ,
                                    [ "Doris Greene" , "Malawi" , "Feldkirchen in Kärnten" , "$63,542" ] ,
                                    [ "Mason Porter" , "Chile" , "Gloucester" , "$78,615" ]
                                ]}
                            />
                        }
                    />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={12}>
                    <RegularCard
                        plainCard
                        cardTitle="Table on Plain Background"
                        cardSubtitle="Here is a subtitle for this table"
                        content={
                            <Table
                                tableHeaderColor="primary"
                                tableHead={['ID','Name','Country','City','Salary']}
                                tableData={[
                                    [ "1" , "Dakota Rice" , "$36,738" , "Niger" , "Oud-Turnhout" ] ,
                                    [ "2" , "Minerva Hooper" , "$23,789" , "Curaçao" , "Sinaai-Waas" ] ,
                                    [ "3" , "Sage Rodriguez" , "$56,142" , "Netherlands" , "Baileux" ] ,
                                    [ "4" , "Philip Chaney" , "$38,735" , "Korea, South" , "Overland Park" ] ,
                                    [ "5" , "Doris Greene" , "$63,542" , "Malawi" , "Feldkirchen in Kärnten" ] ,
                                    [ "6" , "Mason Porter" , "$78,615" , "Chile" , "Gloucester" ]
                                ]}
                            />
                        }
                    />
                </ItemGrid>
            </Grid>
        );
    }
}

export default TableList;
