import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import swal from 'sweetalert';
import { addResumeAPI } from '../services/allAPI';


// because const steps is a global variable-so we write outside function
const steps = ['Basic Information', ' Contact Details', 'Education Details','Work Experience','Skills & Certifications','Review & Submit'];

          
function Steps({userInput,setUserInput,setFinish}) {
  const skillSuggestionArray=['NODEJS','EXPRESS','REACT','ANGULAR','NEXTJS','BOOTSTRAP','TAILWIND','CSS','GIT']
    const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  // state for storing user input data
 
  console.log(userInput);

  // to get input from skill inputbox
  const userSkillRef=React.useRef()

    const isStepOptional = (step) => {
    return step === 1;
    };

    const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  // to go to next step
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  // to goto next step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  // does not skip step if it is the current state
    const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

    const handleReset = () => {
    setActiveStep(0);
  };
  
// to add skill
const addSkill=(inputSkill)=>{
  if(inputSkill){
  if(userInput.skills.includes(inputSkill)){
    alert('Given skill is already existing!! Add another.')
  }else{
    // userInput.skills.push(inputSkill)
    setUserInput({...userInput,skills:[...userInput.skills,inputSkill]})
  }
}
}
// console.log(userInput.skills);

// to remove skill from the already chosen aray  by user
const removeSkill=(skill)=>{
  setUserInput({...userInput,skills:userInput.skills.filter(item=>item!=skill)})
}

  // to render the content corresponding to the array index.

  const renderStepArrayContent=(stepCount)=>{
    switch(stepCount){
      case 0: return(
        <div>
          <h3>Personal details</h3>
          <div className='d-flex row p-3'>
          <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,name:e.target.value}})} value={userInput.personalData.name}/>
          <TextField id="standard-basic-name-job" label="Job Title" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,jobTitle:e.target.value}})} value={userInput.personalData.jobTitle}/>
          <TextField id="standard-basic-name-location" label="Location" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,location:e.target.value}})} value={userInput.personalData.location}/>
          </div>
        </div>
      )

        case 1: return(
        <div>
          <h3>Contact details</h3>
          <div className='d-flex row p-3'>
          <TextField id="standard-basic-mail" label="Email 
          " variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,email:e.target.value}})}  value={userInput.personalData.email}/>
          <TextField id="standard-basic-phone" label="Phone Number" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,phone:e.target.value}})}  value={userInput.personalData.phone}/>
          <TextField id="standard-basic-github" label="Github profile Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,gitHub:e.target.value}})}  value={userInput.personalData.gitHub}/>
          <TextField id="standard-basic-linkedin" label="Linkedin profile Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,linkedIn:e.target.value}})}  value={userInput.personalData.linkedIn}/>
          <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,portfolio:e.target.value}})}  value={userInput.personalData.portfolio}/>
          </div>
        </div>
      )

          case 2: return(
        <div>
          <h3>Education details</h3>
          <div className='d-flex row p-3'>
          <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,course:e.target.value}})}  value={userInput.education.course} />
          <TextField id="standard-basic-college" label="College name" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,college:e.target.value}})}  value={userInput.education.college}/>
          <TextField id="standard-basic-name-university" label="University" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,university:e.target.value}})}  value={userInput.education.university}/>
          <TextField id="standard-basic-name-year" label="Year of passsout" variant="standard"  onChange={e=>setUserInput({...userInput,education:{...userInput.education,year:e.target.value}})}  value={userInput.education.year}/>
          </div>
        </div>
      )

              case 3: return(
        <div>
          <h3>Professional details</h3>
          <div className='d-flex row p-3'>
          <TextField id="standard-basic-role" label="Job or internships" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,jobRole:e.target.value}})} value={userInput.experience.jobRole}/>
          <TextField id="standard-basic-name-company" label="Company Name" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,company:e.target.value}})} value={userInput.experience.company}/>
          <TextField id="standard-basic-name-clocation" label="Company Location" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,jobLocation:e.target.value}})} value={userInput.experience.jobLocation}/>
          <TextField id="standard-basic-name-duration" label="Duration" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,duration:e.target.value}})} value={userInput.experience.duration}/>
          </div>
        </div>
      )

              case 4: return(
        <div>
          <h3>Skills</h3>
          <div className='d-flex justify-content-between align-items-center p-3'>
          {/* <TextField sx={{width:'300px'}} id="standard-basic-skill" label="Add skills" variant="standard" /> */}
          <input ref={userSkillRef}  type="text" className='form-control' placeholder='Add skill' />
          <Button onClick={()=>addSkill(userSkillRef.current.value)} variant="text">ADD</Button>
          </div>
          <h5>Suggestions :</h5>
          <div className='d-flex flex-wrap justify-content-between my-3'>
            {
              skillSuggestionArray.map(userSkill=>(<Button onClick={()=>addSkill(userSkill)} className='m-1' key={userSkill} variant='outlined'>{userSkill}</Button>))
            }

          </div>
          <h5>Added Skills :</h5>
          
          <div className='d-flex flex-wrap justify-content-between my-3'>
            {/* span must be duplicated according to the user addedskills */}
            {
              userInput.skills.length>0?
              userInput.skills.map(skill=>(
                <span key={skill} className='btn btn-primary d-flex align-items-center justify-content-center my-2'>{skill} <button onClick={()=>removeSkill(skill)} className='btn text-light '>X</button ></span>
              ))
              :
              <span>nil</span>
            }

          </div>

        </div>
      )

              case 5: return(
        <div>
          <h3>Professional Summary</h3>
          <div className='d-flex row p-3'>
          <TextField id="standard-basic-summary" label="Write a short summary of yourself" multiline rows={4} defaultValue={'Enthusiastic and detail-oriented MERN Stack Web Developer with strong skills in MongoDB, Express.js, React.js, and Node.js. Proficient in building responsive web applications, creating RESTful APIs, and integrating databases. Strong foundation in JavaScript, HTML, CSS, and eager to apply problem-solving abilities to deliver clean, efficient, and scalable code. Passionate about learning emerging technologies and contributing to innovative projects in collaborative team environments.'} variant="standard"  onChange={e=>setUserInput({...userInput,summary:e.target.value})} value={userInput.summary}/>
          </div>
        </div>
      )
default:return null
    }
  }

  // to handle add resume

  const handleAddResume =async()=>{
    // alert ("API called")
    // api call
    const {name,jobTitle,location}=userInput.personalData
    if(name && jobTitle&& location){
      // alert("API called")
      try{
        const result=await addResumeAPI(userInput)
        console.log(result);
        swal ("sucess!","Resume added successfully","sucess");
        setFinish(true)
      }
      catch(err){
        console.log(err);
        swal("Error!","Resume added failed","Error");
        setFinish(false)
      }
    }else{
      alert("Fill the form")
    }

  }
  return (
    
        <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps={};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

          {/* view of each step */}

          <Box>
            {renderStepArrayContent(activeStep)}
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            
            {
              activeStep===steps.length-1?
              <Button onClick={handleAddResume}>Finish</Button>:
              <Button onClick={handleNext}>Next</Button>
            }
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default Steps