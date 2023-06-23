import axios from 'axios';

// this function takes in an uploaded file and 
async function get_image(formData){
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
  }
  
  async function get_video(formData){
    try {
      const response = await axios.post('http://127.0.0.1:8000/splitfiles/video', formData, {
        headers: {
          Accept: 'video/mp4;charset=UTF-8'
        },
        responseType: 'blob'
      });
      console.log(response);
      const URL = window.URL || window.webkitURL;
      const url = URL.createObjectURL(new Blob([response.data], {type: "video/mp4"}));
      const videoElement = document.createElement('video');
      videoElement.src = url;
      videoElement.type = 'video/mp4';
      videoElement.controls = true;
      document.body.appendChild(videoElement);
  
    }
    catch (error) {
      console.error(error);
    }
  }
  
  async function uploadFile(formData){
    // Get the image from the image
    get_image(formData);
  
    // Get the video from the image
    get_video(formData);
  
}

export default uploadFile;