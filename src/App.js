import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

document.getElementById('myForm').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  uploadFile(formData);
}

async function uploadFile(formData){
  
  try {
    const response = await axios.post('http://127.0.0.1:8000/splitfiles/image', formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      responseType: 'arraybuffer'
    });
    const imageBlob = new Blob([response.data], { type: 'image/jpeg' });
    const imageSrc = URL.createObjectURL(imageBlob);

    const imgElement = document.getElementById('myImage');
    imgElement.src = imageSrc;
    imgElement.style = "display: inline"
  } catch(error){
    console.error(error);
  }
  
  try {
    const response = await axios.post('http://127.0.0.1:8000/splitfiles/video', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      responseType: 'arraybuffer'
    });
    const videoUrl = response.data.url;
    const videoElement = document.createElement('video');
    videoElement.src = videoUrl;
    videoElement.type = 'video/mp4';
    videoElement.controls = true;
    document.body.appendChild(videoElement);

  }
  catch (error) {
    console.error(error);
  }
  
}
//const MyComponent = () => {
//  const [imageURL, setImageURL] = useState('');
//
//  // function to handle form submit
//  const handleFormSubmit = event => {
//    event.preventDefault();
//
//    const formData = new FormData(event.target);
//    const imageFile = formData.get('image');
//
//    axios
//      .post('http://127.0.0.1:8000/splitfiles/image', formData)
//      .then(response => {
//        setImageURL(response.data.url);
//      })
//      .catch(error => {
//        console.error('Error getting the image', error);
//      });
//  };
//
//  useEffect(() => {
//    // Add any dependencies if required
//  }, []);
//
//  return (
//    <div>
//      <form onSubmit={handleFormSubmit} id="myForm">
//        <input type="file" name="image" />
//        <button type="submit">Upload</button>
//      </form>
//      {imageURL && <img src={imageURL} alt="received img" />}
//    </div>
//  );
//};

function App() {
  return(
    <div>
      
    </div>
    
  )
}

export default App;
