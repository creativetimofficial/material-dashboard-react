import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';
import { Grid } from 'material-ui';

import { CustomInput } from 'components';

class Inputs extends React.Component{
    render(){
        return (
            <div>
                <h1>Inputs</h1>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomInput
                            labelText="Disabled"
                            id="disabled"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                disabled: true
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomInput
                            id="regular"
                            inputProps={{
                                placeholder: "Regular"
                            }}
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomInput
                            labelText="With floating label"
                            id="float"
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomInput
                            labelText="Success input"
                            id="success"
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomInput
                            labelText="Error input"
                            id="error"
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomInput
                            labelText="Error input"
                            id="error"
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </Grid>
                </Grid>
                <SyntaxHighlighter language="jsx" style={prism}>{`<NameOfTheIcon />`}</SyntaxHighlighter>
            </div>
        );
    }
}

export default Inputs;
