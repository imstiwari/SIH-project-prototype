import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material'
import Navbar from '../Componets/NavBar'
import Footer from '../Componets/footer'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    justifyContent:'center',
    color: theme.palette.text.secondary,
  }));

const Service=()  => {
  return <>
     <Navbar />
    
     <Container>
     <Typography varitan="h3 " paddingBottom={5}>
       Choose Frrom Following Services...

     </Typography>
         <Grid container spacing={2}>
         <Grid item xs={2}>
             <Item>
             <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://into-windows.com/wp-content/uploads/2020/10/mAadhaar-For-PC-Windows-Free-Download.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            Number Update
          </Typography>
          <Typography variant="body2" color="text.secondary">
          You can get your details in Aadhaar card updated by visiting a nearby Aadhaar Enrolment Centre. You can follow the steps mentioned below to change the photo in Aadhaar card:
          </Typography>
        </CardContent>
        <Button size="Large " variant="contained" href='/user/appointment'>Book NOW</Button>
      </CardActionArea>
    </Card>
             </Item>
         </Grid>
         <Grid item xs={2}>
             <Item>
             <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://into-windows.com/wp-content/uploads/2020/10/mAadhaar-For-PC-Windows-Free-Download.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            D.O.B UPDATE
          </Typography>
          <Typography variant="body2" color="text.secondary">
          You can get your details in Aadhaar card updated by visiting a nearby Aadhaar Enrolment Centre. You can follow the steps mentioned below to change the photo in Aadhaar card:
          </Typography>
        </CardContent>
        <Button size="Large " variant="contained" href='/user/appointment'>Book NOW</Button>
      </CardActionArea>
    </Card>
             </Item>
         </Grid>
         <Grid item xs={2}>
         <Item>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://into-windows.com/wp-content/uploads/2020/10/mAadhaar-For-PC-Windows-Free-Download.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            IRIS UPDATE
          </Typography>
          <Typography variant="body2" color="text.secondary">
          You can get your details in Aadhaar card updated by visiting a nearby Aadhaar Enrolment Centre. You can follow the steps mentioned below to change the photo in Aadhaar card:
          </Typography>
        </CardContent>
        <Button size="Large " variant="contained" href='/user/appointment'>Book NOW</Button>
      </CardActionArea>
    </Card>
         </Item>
         </Grid>
         <Grid item xs={2}>
         <Item>    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://into-windows.com/wp-content/uploads/2020/10/mAadhaar-For-PC-Windows-Free-Download.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ADDRESS UPDATE
          </Typography>
          <Typography variant="body2" color="text.secondary">
          You can get your details in Aadhaar card updated by visiting a nearby Aadhaar Enrolment Centre. You can follow the steps mentioned below to change the photo in Aadhaar card:
          </Typography>
        </CardContent>
        <Button size="Large " variant="contained" href='/user/appointment'>Book NOW</Button>
      </CardActionArea>
    </Card></Item>
         </Grid>
         <Grid item xs={2}>
             <Item>
             <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          
          image="https://into-windows.com/wp-content/uploads/2020/10/mAadhaar-For-PC-Windows-Free-Download.png"
          
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DOCUMENT UPDATE
          </Typography>
          <Typography variant="body2" color="text.secondary">
          You can get your details in Aadhaar card updated by visiting a nearby Aadhaar Enrolment Centre. You can follow the steps mentioned below to change the photo in Aadhaar card:
          </Typography>
        </CardContent>
        <Button size="Large " variant="contained" href='/user/appointment'>Book NOW</Button>
      </CardActionArea>
    </Card>
             </Item>
         </Grid>
         <Grid item xs={2}>
             <Item>
             <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://into-windows.com/wp-content/uploads/2020/10/mAadhaar-For-PC-Windows-Free-Download.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PHOTO UPDATE
          </Typography>
          <Typography variant="body2" color="text.secondary">
          You can get your details in Aadhaar card updated by visiting a nearby Aadhaar Enrolment Centre. You can follow the steps mentioned below to change the photo in Aadhaar card:
          </Typography>
        </CardContent>
        <Button size="Large " variant="contained" href='/user/appointment'>Book NOW</Button>
      </CardActionArea>
    </Card>
             </Item>
         </Grid>
         </Grid>

      </Container>
      <Footer />
   </>
}
 export default Service
