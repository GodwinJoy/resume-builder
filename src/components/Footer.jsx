import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";




function Footer() {
  return (
    <div style={{height:'300px' ,background:'blue',color:'white', marginTop:'100px'}} className='d-flex justify-content-center align-items-center'>
      <div className='text-center'>
        <h1>Contact Us</h1>
        <h4><CiMail /> godwin@gmail.com</h4>
        <h4><CiPhone />53678287</h4>
        <h3>Connect with Us</h3>
        <div className='d-flex justify-content-evenly'>
          <FaWhatsapp />
          <CiFacebook />
          <FaInstagram />
        </div>
        <p>Designed and built with using React</p>

      </div>


    </div>
  )
}

export default Footer