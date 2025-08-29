import React, { useState } from 'react'
import { MdModeEdit } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { editResumeAPI, getAResumeAPI } from '../services/allAPI';
import swal from 'sweetalert';

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

function Edit({resumeId,setUpdateUserInput}) {

  // state to get user input from skill input box in edit skill 
  const [userSkill,setUserSkill]=React.useState("")
  const[userInput,setUserInput]=useState({})
    const [open, setOpen] = React.useState(false);
    // console.log(resumeId);
    console.log(userInput);
    
    React.useEffect(()=>{
      resumeId && getEditResumeDetails()
    },[resumeId])
    
       // for getaresume api call
    const getEditResumeDetails=async ()=>{
      try{
        const result= await getAResumeAPI(resumeId)
        setUserInput(result?.data)
      }
      catch(err){
        console.log(err);
        
      }
}

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

//  to add skill
const addSkill=()=>{
  if(userSkill){
    if(userInput.skills.includes(userSkill)){
      alert("Given skill is already existing!! Add another")
    }else{
      // userInput.skills.push(inputSkill)
      setUserInput({...userInput,skills:[...userInput.skills,userSkill]})
    }
    // to clear add skill textbox
    setUserSkill('')
  }
}
// to remove skill
const removeSkill=(skill)=>{
  setUserInput({...userInput,skills:userInput.skills.filter(item=>item!=skill)})
}

// to handle update resume after clicking update button

const handleResumeUpdate=async()=>{
  try{
    const result =await editResumeAPI(userInput?.id,userInput)
    setUpdateUserInput(result?.data)
    swal("Success!","Resume updated successfully","Success");
    handleClose()
  }
  catch(err){
    console.log(err);
    
  }
}



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
                      <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,name:e.target.value}})} value={userInput?.personalData?.name}/>
                      <TextField id="standard-basic-name-job" label="Job Title" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,jobTitle:e.target.value}})} value={userInput?.personalData?.jobTitle}/>
                      <TextField id="standard-basic-name-location" label="Location" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,location:e.target.value}})} value={userInput?.personalData?.location}/>
                      </div>

            {/* contact details */}
            <h3>Contact details</h3>
                      <div className='d-flex row p-3'>
                      <TextField id="standard-basic-mail" label="Email" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,email:e.target.value}})}  value={userInput?.personalData?.email}/>
                      <TextField id="standard-basic-phone" label="Phone Number" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,phone:e.target.value}})}  value={userInput?.personalData?.phone}/>
                      <TextField id="standard-basic-github" label="Github profile Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,gitHub:e.target.value}})}  value={userInput?.personalData?.gitHub}/>
                      <TextField id="standard-basic-linkedin" label="Linkedin profile Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,linkedIn:e.target.value}})}  value={userInput?.personalData?.linkedIn}/>
                      <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,portfolio:e.target.value}})}  value={userInput?.personalData?.portfolio}/>
                      </div>

            {/* educational details */}
             <h3>Education details</h3>
                      <div className='d-flex row p-3'>
                      <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,course:e.target.value}})}  value={userInput?.education?.course} />
                      <TextField id="standard-basic-college" label="College name" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,college:e.target.value}})}  value={userInput?.education?.college}/>
                      <TextField id="standard-basic-name-university" label="University" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,university:e.target.value}})}  value={userInput?.education?.university}/>
                      <TextField id="standard-basic-name-year" label="Year of passsout" variant="standard"  onChange={e=>setUserInput({...userInput,education:{...userInput.education,year:e.target.value}})}  value={userInput?.education?.year}/>
                      </div>

                      {/* professional details */}
                 <h3>Professional details</h3>
                          <div className='d-flex row p-3'>
                          <TextField id="standard-basic-role" label="Job or internships" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,jobRole:e.target.value}})} value={userInput?.experience?.jobRole}/>
                          <TextField id="standard-basic-name-company" label="Company Name" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,company:e.target.value}})} value={userInput?.experience?.company}/>
                          <TextField id="standard-basic-name-clocation" label="Company Location" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,jobLocation:e.target.value}})} value={userInput?.experience?.jobLocation}/>
                          <TextField id="standard-basic-name-duration" label="Duration" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,duration:e.target.value}})} value={userInput?.experience?.duration}/>
                          </div>

                          {/* skills */}
                          <h3>SKills</h3>
                        <div className='d-flex justify-content-center align-items-center row p-3'>
          <TextField onChange={e=>setUserSkill(e.target.value)} sx={{width:'300px'}} id="standard-basic-skillname" label="Add skill" variant="standard" value={userSkill} />
          <Button onClick={addSkill} variant="text">ADD</Button>
          </div>

            <h6>Selected Skills :</h6>
           {/* span must be duplicated according to the user addedskills */}

          <div className='d-flex my-3'>
           {
             userInput?.skills?.length>0 &&
            userInput?.skills?.map(item=>(
              <span key={item} className='btn btn-primary d-flex align-items-center justify-content-center me-2'>{item} <button onClick={()=>removeSkill(item)} className='text-light btn'>X</button></span>

            ))
           }
           
          

          </div>
            {/* summary */}
              <h3>Professional Summary</h3>
                <div className='d-flex row p-3'>
                <TextField id="standard-basic-summary" label="Write a short summary of yourself" multiline rows={4} variant="standard" onChange={e=>setUserInput({...userInput,summary:e.target.value})} value={userInput?.summary}/>
                </div>

          </Typography>
          <Button onClick={handleResumeUpdate}>Update</Button>
        </Box>
      </Modal>
    </>
  )
}

export default Edit