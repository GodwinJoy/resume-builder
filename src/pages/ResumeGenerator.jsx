import React from 'react'
import { FaDownload } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { Link } from 'react-router-dom';



function ResumeGenerator() {
  return (
    <div className='container' style={{height:'550px'}}> 
      <h1 className='text-center m-3 p-2'>Create a job-winning Resume in minutes</h1>
      <div className='row d-flex justify-content-center align-items-center my-5 p-2'>
        <div className='col-1'></div>
        <div className='col-5 shadow p-2 text-center'>
          <IoMdDocument className='fs-3 my-5'/>

          <h2>Add your information</h2>
        <h5>Add pre-written examples for each section.</h5>
        <h3>Step-1 </h3>
        </div>
        <div className='col-5 shadow p-2 text-center'>
          <FaDownload className='fs-3 my-5' />

          <h2>Download your Resume</h2>
          <h5>Download and start applying</h5>
          <h3>Step-2</h3>
        </div>
        <div className='col-1'></div>

      </div>

      <div className='text-center'>
        <Link to={'/form'}>
        <button className='btn btn-primary'>Lets Start</button>
        </Link>
      </div>
    </div>
  )
}

export default ResumeGenerator