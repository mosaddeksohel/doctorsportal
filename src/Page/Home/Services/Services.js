import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import Typography from '@mui/material/Typography';
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'


const services = [
    {
        name: 'Fluoride Treatement',
        description: 'Loremipsum dolor sit amet consectetur adipisicing elit. Sit reiciendis iusto cum perspiciatis quasi aliquam consectetur reprehenderit dicta eum aspernatur dolor qui facilis obcaecati incidunt sint ipsum unde at earum',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Loremipsum dolor sit amet consectetur adipisicing elit. Sit reiciendis iusto cum perspiciatis quasi aliquam consectetur reprehenderit dicta eum aspernatur dolor qui facilis obcaecati incidunt sint ipsum unde at earum',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Loremipsum dolor sit amet consectetur adipisicing elit. Sit reiciendis iusto cum perspiciatis quasi aliquam consectetur reprehenderit dicta eum aspernatur dolor qui facilis obcaecati incidunt sint ipsum unde at earum',
        img: whitening
    }


]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>

                <Typography sx={{ fontWeight: 400, m: 2, color: 'success.main' }} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2, color: 'info.main' }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}

                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;