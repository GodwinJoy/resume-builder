import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';


function Header() {
  const projectIntro="A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
          >
          <img width={'30px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwh8EScc5jlIfDbo1rtDqDyDJJ6CPYrT2icw&s" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,fontWeight:'500'}}>
            <Link to={'/'} className='text-light text-decoration-none'>Resume Builder</Link>
          </Typography>
          <Tooltip title={projectIntro}>
            <Button color="inherit">About Us</Button>
            </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header