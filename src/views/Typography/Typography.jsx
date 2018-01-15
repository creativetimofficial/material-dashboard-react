import React from 'react';
import {
    Typography
} from 'material-ui';

import RegularCard from 'components/Cards/RegularCard';

// import H1 from 'components/Typography/H1';
import {
    H1, H2, H3, H4, H5, H6, P, Quote,
} from 'components';

class TypographyPage extends React.Component{
    render(){
        return (
            <RegularCard
                cardTitle={"Material Dashboard Heading"}
                cardSubtitle={"Created using Roboto Font Family"}
                content={
                    <div>
                        <H1>(H1) The Life of Material Dashboard</H1>
                        <H2>(H2) The Life of Material Dashboard</H2>
                        <H3>(H3) The Life of Material Dashboard</H3>
                        <H4>(H4) The Life of Material Dashboard</H4>
                        <H5>(H5) The Life of Material Dashboard</H5>
                        <H6>(H6) The Life of Material Dashboard</H6>
                        <P>(P) I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</P>
                        <Quote
                            text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                            author=" Kanye West, Musician"
                        />
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
                    </div>
                }
            />
        );
    }
}

export default TypographyPage;
