import React from 'react'
import { Link } from 'react-router-dom'
function PageNotFound() {
  return (
    <div>
      <h1 className='text-center my-5'>Sorry, this page doesn't exist!</h1>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <img src="https://assets-v2.lottiefiles.com/a/6915cc2c-1178-11ee-a783-6b784bd85af7/vUmMyG7Nho.gif" alt=""  style={{height:'400px'}}/>

        <Link to={'/'} className='btn btn-primary my-5'>Go Back</Link>
      </div>
    </div>
  )
}

export default PageNotFound