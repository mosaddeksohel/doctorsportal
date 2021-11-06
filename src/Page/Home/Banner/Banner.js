import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Typography, Container, Button } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} >
                <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant='h4'>
                            Your new smile <br />
                            Starts here
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3, fontSize: 14, fontWeight: 300, color: 'black', width: '75%' }}>
                            Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints.
                        </Typography>
                        <Button sx={{ backgroundColor: '#40F2F6' }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container >
    );
};

export default Banner;