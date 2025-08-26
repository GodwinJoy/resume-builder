import React from 'react'
import { MdModeEdit } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
        <button onClick={handleOpen} className='btn fs-3 text-primary'> <MdModeEdit /></button>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal details */}
                      <h3>Personal details</h3>
                      <div className='d-flex row p-3'>
                      <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                      <TextField id="standard-basic-name-job" label="Job Title" variant="standard" />
                      <TextField id="standard-basic-name-location" label="Location" variant="standard" />
                      </div>

            {/* contact details */}
            <h3>Contact details</h3>
                      <div className='d-flex row p-3'>
                      <TextField id="standard-basic-mail" label="Email 
                      " variant="standard" />
                      <TextField id="standard-basic-phone" label="Phone Number" variant="standard" />
                      <TextField id="standard-basic-github" label="Github profile Link" variant="standard" />
                      <TextField id="standard-basic-linkedin" label="Linkedin profile Link" variant="standard" />
                      <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                      </div>

            {/* educational details */}
             <h3>Education details</h3>
                      <div className='d-flex row p-3'>
                      <TextField id="standard-basic-course" label="Course Name" variant="standard" />
                      <TextField id="standard-basic-college" label="College name" variant="standard" />
                      <TextField id="standard-basic-name-university" label="University" variant="standard" />
                      <TextField id="standard-basic-name-year" label="Year of passsout" variant="standard" />
                      </div>

                      {/* professional details */}
                 <h3>Professional details</h3>
                          <div className='d-flex row p-3'>
                          <TextField id="standard-basic-role" label="Job or internships" variant="standard" />
                          <TextField id="standard-basic-name-company" label="Company Name" variant="standard" />
                          <TextField id="standard-basic-name-clocation" label="Company Location" variant="standard" />
                          <TextField id="standard-basic-name-duration" label="Duration" variant="standard" />
                          </div>

                          {/* skills */}
                          <h3>SKills</h3>
                        <div className='d-flex justify-content-center align-items-center row p-3'>
          <TextField sx={{width:'300px'}} id="standard-basic-skillname" label="Add skill" variant="standard" />
          <Button variant="text">ADD</Button>
          </div>
            <h5>Added Skills :</h5>
          
          <div className='d-flex flex-wrap justify-content-between my-3'>
            {/* span must be duplicated according to the user addedskills */}
            <span className='btn btn-primary d-flex align-items-center justify-content-center'>React <button className='text-light btn'>X</button></span>

          </div>
                          {/* summary */}
                          <h3>Professional Summary</h3>
                        <div className='d-flex row p-3'>
                         <TextField id="standard-basic-summary" label="Write a short summary of yourself" multiline rows={4} variant="standard" />
                         </div>

          </Typography>
          <Button>Update</Button>
        </Box>
      </Modal>
    </>
  )
}

export default Edit