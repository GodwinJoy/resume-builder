import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI';


function History() {

  // to control the component we create a state
  const[resume,setResume]=useState([])

  // so we seperately create a useeffect outside the gethistory function,inside it we call the gethistoryfunction as sideffect ,whenever that component is opened in the browser
  useEffect(()=>{
    getHistory()
  },[resume])

  // we create an async function to call api for gethistoryAPI,since ii is an async function we cannot use use effect inside this function-or else we have to use then(),and code becomes complex
  const getHistory=async()=>{
    try{
      const result = await getHistoryAPI()
      // console.log(result);
      setResume(result.data) //result will be an object and whenever we use axios method for api call the datas that are collected are stored inside data key int the form of arrays 
    }
    catch(err){
      console.log(err);
      
    }
  }

  // console.log(resume);

 const handleRemoveHistory=async(id)=>{
  try{
    await deleteHistoryAPI(id)
    getHistory()
  }
  catch(err){
    console.log(err);
    
  }
 }
  
  return (
    <div>
 <div>
        <h1 className='text-center mt-3'>Resume Downloaded history</h1>
        <Link to={'/'} className='float-end-me-5'>BACK</Link>
 </div>
      <Box component="section" className='container-fluid'>
        <div className='row'>
          
          {
            resume.length>0?
            resume?.map((item,index)=>(//map because it is an array-to display arrays in jsx we use map method only
                  <div key={index} className='col-md-4'>
                <Paper elevation={3} sx={{my:5, p: 2,textAlign:'center' }}>
                  <h6>Review at: <br/>{item?.timestamp}</h6>
                  <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={()=>handleRemoveHistory(item?.id)} className='btn text-danger fs-5'><MdDelete /></button>
                    </div>
                    {/* to display the whole content of resume as image in history */}
                  <div className='border rounded p-5'>
                    <img className='img-fluid' src={item?.imgURL} alt="resume" />
                </div>
    
                </Paper>
            </div>
            ))
            :
            <p>History is unavailable!!!</p>
          }
          </div>
      </Box>
    </div>
  )
}

export default History