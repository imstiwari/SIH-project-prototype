import * as React from 'react';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function IconAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar  sx={{ width: 80, height: 80 }}>
        <AccountCircleIcon/>
      </Avatar>

    </Stack>
  );
}