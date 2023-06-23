import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import uploadFile from './api';

document.getElementById('myForm').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if ( document.getElementById("fileup").isDefaultNamespace.length == 0){
    console.log("empty")
    return
  }
  const formData = new FormData(event.target);
  uploadFile(formData);
}


function App() {
  return(
    <div>
      
    </div>
    
  )
}

export default App;
