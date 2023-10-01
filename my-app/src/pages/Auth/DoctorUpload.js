import { Button, Stack } from '@mui/material'
import React from 'react'

const DoctorUpload = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="contained" component="label" sx={{
          backgroundColor:"#13C5DD",
          '&:hover': {
            backgroundColor: '#077988',
           color:"white"
          }
        }}>
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Stack>
  )
}

export default DoctorUpload
