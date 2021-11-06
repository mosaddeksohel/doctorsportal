import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppoinmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: -110 }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant='h6' sx={{ mb: 5 }} style={{ color: '#40F2F6' }} >
                            Appoinment
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white', fontWeight: 20 }}>
                            Make an Appoinment Today
                        </Typography>
                        <Typography variant='h6' style={{ color: 'white', fontWeight: 20 }} sx={{ my: 5 }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente repudiandae delectus vero eos ut quam similique consequatur fugiat et?
                        </Typography>
                        <br />
                        <Button sx={{ backgroundColor: '#40F2F6' }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;