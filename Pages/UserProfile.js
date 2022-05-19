import React from 'react'
import Navbar from '../Componets/NavBar'
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../Componets/footer'

import Container from '@mui/material/Container';
import {ReactComponent as Info} from '../images/015.svg';
import Stack from '@mui/material/Stack';
import Form from '../Componets/userprofileform'


const UserProfile = () => {
  return <>
   <CssBaseline />
      <Navbar />
      <Stack direction="row" spacing={2} >
        <Container component="main" maxWidth="sm">
 
         <Info /> 
        </Container>
        <Container maxWidth="sm">
          <Form/>
          </Container>
      </Stack>
      
     <Footer />
     
     
       
     


    
  </>

}

export default UserProfile