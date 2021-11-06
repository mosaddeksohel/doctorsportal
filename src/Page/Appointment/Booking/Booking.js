import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';



const Booking = (props) => {
    const { name, time, space } = props.booking
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} xm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main' }} style={{ fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} Space Available
                    </Typography>
                    <Button onClick={handleBookingOpen} sx={{ bgcolor: 'primary.main' }} variant="contained">Book Appiontent</Button>
                </Paper>
            </Grid >
            <BookingModal
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>

    );
};

export default Booking;