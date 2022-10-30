'use client'

import {useState} from 'react';
import { TextField } from '@mui/material';

const GreetingClient = () => {
  const [state,setState] = useState('')
  return (
    <div>
      <TextField 
        sx={{
          bgcolor:'white',
          borderRadius:'6px',
          border:'1px solid #1976d2'
        }} 
        placeholder='Please add your name.' 
        margin="normal" 
        variant={'outlined'} 
        value={state} 
        onChange={e => setState(e.target.value)}
      />
    </div>
  );
};

export default GreetingClient;