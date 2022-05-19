import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';




const Hero=() =>{
  return (
     <><CssBaseline /><Box sx={{ bgcolor: '', color: '#212121', p: 2 }}><Grid container  direction="row">
       <Grid item xs={8}>
        <CardContent >
          <Typography gutterBottom variant="h2" component="h2">
             GET YOUR AADHAR UPDATE
               AT YOUR DOOR STEP!!  
          </Typography>
          <Typography variant="h4">
          Aadhar serves as a proof of Identity and Address, anywhere in India. UIDAI provides you the service of Update and Enrollment of AADHAR Card by Operators.
           
          You may please visit our new AADHAR SEVA portal to do online demographic update.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" href="/signin">Book A Appointment</Button>
          <Button size="small" variant="contained">Know More</Button>
        </CardActions>

      </Grid>
      <Grid item xs={4}>
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: '1%',
          }}
          image="/assets/modi.jpg"
          alt="random" />
      </Grid>
    


    </Grid></Box></>
     
     
    
  );
};

export default Hero;