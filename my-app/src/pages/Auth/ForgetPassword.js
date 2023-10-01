import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Container, TextField, Typography } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
const Create = styled(Button)({
  '&:hover': {
    backgroundColor: '#077988',
   color:"white"
  }
})
const ForgetPassword = () => {
  return (
   <Box  style={{
    backgroundImage: "url(images/img_bg_6.jpg)",
    background:
     "url(https://preview.colorlib.com/theme/healthcare/images/img_bg_6.jpg.webp) center center no-repeat",
    backgroundSize: "cover",
    height:"100vh",
    width:"100%",
    padding:"0",
    margin:"0",
    display:"flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    position: "relative",

   }}>
    <div style={{
      position:"absolute",
      backgroundColor:"#00000045",
      top:"0",
      left:"0",
      right:"0",
      bottom:"0",
    }}></div>
     <Box 
     
     sx={{
      background:"white",
      padding:"20px",
      borderRadius:"10px",
      color:"#13C5DD",
      position:"relative",
      width:{xs:"85%",md:"50%"},
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      gap:"20px"
     }}>
        <Box sx={{
        
          display:"flex",
          alignItems:"center",
         gap:{xs:"4px",md:"15px"},
        

        }}>
          <LocalHospitalIcon sx={{
            fontSize:"50px"
          }}/>
          <Typography variant='h3' sx={{fontWeight:"bold"}}>Medical</Typography>
        </Box>
      
        <Box
        component="form"
        sx={{
          width:{xs:"100%",md:"70%"},
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          gap:"20px"
        }}>
         <Typography sx={{
            display:"flex",
            gap:"10px",
            color:"#d2d2d2"
          }}>Need help with your password?</Typography>
         <Typography sx={{
            display:"flex",
            gap:"10px",
            color:"#d2d2d2",
            textAlign:"center"
          }}>Enter the email you use for Medical, and we’ll help you create a new password</Typography>
          <TextField  
          sx={{
            '&:hover fieldset': {
             borderColor: '#13C5DD !important',
        
           }
         }}
          fullWidth type='email' required label="Email Address" id="fullWidth" />
       
          <Create
            type='submit'
          variant="contained" sx={{
            backgroundColor:"#13C5DD",
            color:"white",
            width:"100%",
          
          }}>Next</Create>
         
        </Box>
    </Box>
   </Box>
  )
}

export default ForgetPassword
