import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';
import { Grid } from 'material-ui';
import { People } from 'material-ui-icons';

import { CustomInput } from 'components';

const inputsDep = `import { Grid } from 'material-ui';
import { People } from 'material-ui-icons';
import { CustomInput } from 'components';`;
const inputs = `<Grid container>
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
            success
            formControlProps={{
                fullWidth: true
            }}
        />
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
        <CustomInput
            labelText="Error input"
            id="error"
            error
            formControlProps={{
                fullWidth: true
            }}
        />
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
        <CustomInput
            icon={People}
            labelText="With material Icons"
            id="material"
            formControlProps={{
                fullWidth: true
            }}
        />
    </Grid>
</Grid>`;
const inputsProp = `CustomInput.propTypes = {
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    error: PropTypes.bool,
    success: PropTypes.bool
}`;

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
                            success
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomInput
                            labelText="Error input"
                            id="error"
                            error
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomInput
                            icon={People}
                            labelText="With material Icons"
                            id="material"
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </Grid>
                </Grid>
                <SyntaxHighlighter language="jsx" style={prism}>{inputsDep}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{inputs}</SyntaxHighlighter>
                <SyntaxHighlighter language="jsx" style={prism}>{inputsProp}</SyntaxHighlighter>
            </div>
        );
    }
}

export default Inputs;
