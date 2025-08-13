import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';



function Preview() {
  return (
    <>
        <Box component="section" >
            <Paper elevation={3} sx={{ p: 2,textAlign:'center' }}>
            <h2>Name</h2>
            <h4>Job Title</h4>
            <p><span>Location</span>|<span>Email</span>|<span>Phone</span></p>

            <p>
                <Link href={""}>Github</Link>|
                <Link href={""}>LinkedIn</Link>|
                <Link href={""}>Portfolio</Link>
            </p>
            <Divider>Summary</Divider>

            </Paper>
      </Box>
    </>
  )
}

export default Preview