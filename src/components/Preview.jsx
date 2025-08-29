import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaDownload } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import {addDownloadHistoryAPI} from '../services/allAPI'
import { useState } from 'react';


function Preview({userInput,setUserInput,finish,resumeId}) {
  // console.log(userInput);


const [downloadStatus,setDownloadStatus] = useState(false)





  async function downloadCV() {
    // get the element for taking screenshot
    // alert("download started")
    const input = document.getElementById("result");
    const canvas = await html2canvas(input, { scale: 2 });
    const imgURL = canvas.toDataURL('image/png');
    // console.log(imgURL);
    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgURL, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');


    // to get data
    const localTimeData = new Date();
    const timestamp = `${localTimeData.toLocaleDateString()},${localTimeData.toLocaleTimeString()}`;
    // console.log(timestamp);
    // add download cv to json using api call
    try {
      const result = await addDownloadHistoryAPI({ ...userInput, imgURL, timestamp });
      console.log(result);
      setDownloadStatus(true);

    }
    catch (err) {
      console.log(err);


    }

  }
  return (
    <>
    {
      userInput.personalData.name!=""&&
        <div className='flex flex-column'>
        {finish &&
          <Stack direction={'row'} sx={{justifyContent:'center'}} style={{marginTop:'100px'}}>
          <Stack direction={'row'} sx={{alignItems:'center', marginTop:'50px'}}> 
            {/* download */}
            <button onClick={downloadCV} className='btn fs-3 text-primary' style={{color:'blue'}}><FaDownload /></button>
            {/* edit buttons view from edit component*/}
            <div> <Edit setUpdateUserInput={setUserInput} resumeId={resumeId} /></div>
            

            {
            downloadStatus &&
             
             <> 
             {/* history */}
             <Link to={'/history'} className='btn fs-3 text-primary' style={{color:'blue'}}><FaHistory /></Link>
             </>
              
             
            }

            {/* back button */}
          <Link to={'/resume'} className='btn text-primary'>BACK</Link>
          </Stack>
  
        </Stack>
        }
          <Box component="section" >
              <Paper id="result" elevation={3} sx={{my:5, p: 2,textAlign:'center' ,width:'600px',marginTop:'10px',marginBottom:'100px'}}>
              <h2>{userInput.personalData.name}</h2>
              <h4>{userInput.personalData.jobTitle}</h4>
              <p><span>{userInput.personalData.location}</span>|<span>{userInput.personalData.email}</span>|<span>{userInput.personalData.phone}</span></p>
  
              <p>
                  <Link href={""}>{userInput.personalData.gitHub}</Link>|
                  <Link href={""}>{userInput.personalData.linkedIn}</Link>|
                  <Link href={""}>{userInput.personalData.portfolio}</Link>
              </p>
              
              <Divider sx={{fontSize:'25px'}}>Summary</Divider>
              <p className='text-start'>{userInput.summary}</p>
  
              
              <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
              <h5>{userInput.education.course}</h5>
              <p><span>{userInput.education.college}</span>|<span>{userInput.education.university}</span>|<span>{userInput.education.year}</span></p>
  
              
              <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Professional Experience</Divider>
              <h5>{userInput.experience.jobRole}</h5>
              <p><span>{userInput.experience.company}</span>|<span>{userInput.experience.jobLocation}</span>|<span>{userInput.experience.duration}</span></p>
  
              <Divider sx={{fontSize:'25px'}}>Skills</Divider>
              
              <Stack spacing={2} direction="row" sx={{flexWrap:'wrap',gap:'10px'}}>
                {userInput.skills?.map(skill=>(
                <Button variant="contained">{skill}</Button>
                ))}
              </Stack>
  
              </Paper>
        </Box>
        </div>
        }
    </>
  )
}

export default Preview