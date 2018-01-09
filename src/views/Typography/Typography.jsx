import React from 'react';
import {
    Card, CardHeader, CardContent, Typography
} from 'material-ui';

class TypographyPage extends React.Component{
    render(){
        return (
            <Card>
                <CardHeader
                    title={"Material Dashboard Heading"}
                    subheader={"Created using Roboto Font Family"}/>
                <CardContent>
                    <Typography type="display4" gutterBottom>
                        Display 4
                    </Typography>
                    <Typography type="display3" gutterBottom>
                        Display 3
                    </Typography>
                    <Typography type="display2" gutterBottom>
                        Display 2
                    </Typography>
                    <Typography type="display1" gutterBottom>
                        Display 1
                    </Typography>
                    <Typography type="headline" gutterBottom>
                        Headline
                    </Typography>
                    <Typography type="title" gutterBottom>
                        Title
                    </Typography>
                    <Typography type="subheading" gutterBottom>
                        Subheading
                    </Typography>
                    <Typography type="body2" gutterBottom>
                        Body 2
                    </Typography>
                    <Typography type="body1" gutterBottom align="right">
                        Body 1
                    </Typography>
                    <Typography type="caption" gutterBottom align="center">
                        Caption
                    </Typography>
                    <Typography gutterBottom noWrap>
                        {`
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            `}
                        </Typography>
                        <Typography type="button" gutterBottom>
                            Button
                        </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default TypographyPage;
