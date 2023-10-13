import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Container, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import './sign.css'

import HomePage from '../website/HomePage';
import DoctorUpload from './DoctorUpload';
import axios from 'axios';
const Create = styled(Button)({
  '&:hover': {
    backgroundColor: '#077988',
   color:"white"
  }
})

const CreateNewAccount = () => {
  const [value, setValue] = React.useState("Patient");

  const handleChange = (event) => {
    setValue(event.target.value);
   
  };

  const [regester,setRegester]=React.useState({
    name:"",
    email:"",
    password:"",
    
  })

   const  handleSubmit=async (e)=>{
    e.preventDefault()
    try{
await axios.post('http://localhost:9090/moaaz/api/health/patients',regester)

console.log("sucss")
    }
    catch(err){
      console.log(err)
    }
  }
  const handlRegester=(e)=>{
    setRegester({...regester,[e.target.name]:e.target.value})
  }

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
        <Typography variant='h5'>Create Account</Typography>
        <Box 
        onSubmit={handleSubmit}
        component="form" sx={{
          width:{xs:"100%",md:"70%"},
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          gap:"20px",

        }}>
          <TextField 
        name='name'
          className='input'
          type='text'
          value={regester.name}
          onChange={handlRegester}
          sx={{
             '&:hover fieldset': {
              borderColor: '#13C5DD !important',
         
            }
          
          }}
        
          required
          fullWidth label="Full Name" id="name" />
          <TextField  
          type='email'
          name='email'
          required
          value={regester.email}
          onChange={handlRegester}
          sx={{
            '&:hover fieldset': {
             borderColor: '#13C5DD !important',
        
           }
         }}
          fullWidth label="Email Address" id="emial" />
          <TextField 
            value={regester.password}
            name='password'
            onChange={handlRegester}
          sx={{
            '&:hover fieldset': {
             borderColor: '#13C5DD !important',
        
           },
          
         }}
         required
         inputProps={{ maxLength: 6 }}
         type='password'
          fullWidth label="Password" id="password" />
            <FormControl
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
        
            }}
      >
      
        <RadioGroup
          sx={{ display: "flex", flexDirection: "row" }}
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="Doctor" control={<Radio/>} label="Doctor" />
          <FormControlLabel
            value="Patient"
            control={<Radio />}
            label="Patient"
          />
        </RadioGroup>
       
        {value === "Doctor"&&<DoctorUpload />}
            </FormControl>
          <Create
          type='submit'
          variant="contained" sx={{
            backgroundColor:"#13C5DD",
            color:"white",
            width:"100%",

          }}>Create Account</Create>
          <Typography sx={{
            display:"flex",
            gap:"10px",
            color:"#d2d2d2"
          }}>Already Have An Account ?<Link to="/SignIn" style={{
            textDecoration:"none",
            color:"#13C5DD"
          }}>Sign In instead</Link></Typography>
        </Box>
    </Box>
   </Box>
  )
}

export default CreateNewAccount
