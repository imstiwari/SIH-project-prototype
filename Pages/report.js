import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '../Componets/NavBar'
import { Container } from '@mui/material';
import Button from '@mui/material/Button';

export default function Grid() {
  return (
    <><Navbar />
    <Container style={{ height: 500, width: '100%' }}>
          <DataGrid
              columns={[{ field: 'username' }, { field: 'age' },{field:'AadhaecardNuber'},
            {field:'Booking_Slot'},{field:' Booking_ID'},{field:' Oerator_id'},{field:'Alloted_task'}]}
              rows={[
                  {
                      id: 1,
                      username: 'Aditi Gupta',
                      age: 20,
                      AadhaecardNuber: 'XXXXXXXXX123',
                      Booking_Slot:'5-6 pm',
                      Booking_ID:'2001539',
                      Oerator_id:'132',
                      Alloted_task:'D.O.B update'
                  },
              ]} />
         
      </Container>
      
       
   
    </>
  );
}