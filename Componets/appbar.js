import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {ReactComponent as Logo}from '../images/22.svg'
import { Container } from '@mui/material';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theam) => ({
  logo: {
    display: 'flex',
    height:20,
    width: 20,
  },
}));
export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Aadhaar Sathe
          </Typography>
          <Button color="inherit" href="./signin">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}