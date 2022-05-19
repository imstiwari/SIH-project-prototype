import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointment } from '../demodata/appointment';
import Navbar from '../Componets/NavBar'
import Footer from '../Componets/footer'
import { Box, Container, Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import CheckOut from '../Componets/apo-check/appointment-checkout'
import Button from "@material-ui/core/Button";

const currentDate = '2018-06-27';

const Appointment = ({
  children, style, ...restProps
}) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: '#FFC107',
      borderRadius: '8px',
    }}
  >
    {children}
  </Appointments.Appointment>
);

export default () => (
  <><Navbar />
  <Container maxWidth="md"><Box direction="coloumn">
      <Typography variant="h3" color="text.secondary" paddingBottom={5}>
           Time Slot  
           
          </Typography>
     <Typography variant='boday-2' paddingBottom={4}>Seletcl One and Continue Futher..</Typography>
      <Grid  direction="coloumn">
          <Grid item xs="auto">
          <Paper>
        <Scheduler
            data={appointment}
            height={800}
        >
            <ViewState
                currentDate={currentDate} />
            <WeekView
                startDayHour={9}
                endDayHour={19} />
            <Appointments
                appointmentComponent={Appointment} />
        </Scheduler>
       </Paper>
          </Grid>
         <Grid item xs="auto">
             <CheckOut/> 
         </Grid> 

    <Grid item>
         <Button variant="contained" color="#fafafa" type="submit" href="/user/report"
         onClick={() => {
          alert('Redirecting to reports?');
          }}
         >        
         Continue To Se Report And Oerator Details
          </Button>
       </Grid>
        
      
       </Grid>
       </Box>
       </Container>

<Footer />
    </>

);
