import React from 'react'
import{Link} from 'react-router-dom'

function LandingPage(){
  return (
    <>
    <section style={{width:'100%',overflowX:'hidden',height:'450px',backgroundImage:"url('https://media.licdn.com/dms/image/v2/D4E12AQEID-A4wXyPQw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707061503166?e=2147483647&v=beta&t=JE8SF1L0akIaUDONE9OWbdEdCcHSoYQs_94On3Dq9qo')",backgroundAttachment:"fixed",backgroundPosition:'top',backgroundSize:'cover'}} id='part1'>
      <div className=" row pt-5">
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-4 box border py-5 rounded mt-5 text-center text-light" style={{backgroundColor:"rgb(255,255,255,0.3)"}}>
          <h3>Designed to get hired</h3>
          <h4>Your skills,your story,your nextjob,all in one</h4>
          <Link to={'/resume'}>
          <button className='btn btn-primary m-2'>Make Your resume</button>
          </Link>
        </div>
        <div className="col-12 col-md-4"></div>
      </div>
    </section>
          {/* tools section */}
          <section className='tools p-5'>
            <h1 className='text-center'>Tools</h1>
                <div className='d-flex justify-content-center align-items-center'>
              <div className='tool-content col-12 col-md-6 p-5'>
                <h4>Resume</h4>
                <p>Create unlimited new resumes and easily edit them afterwards</p>
                <h4>Cover letter</h4>
                <p>Easily write professional cover letters.</p>
                <h4>jobs</h4>
                <p>Automatically recieve new and relevant job postings.</p>
                <h4>Appplications</h4>
                <p>Effortlessly manage and trackyour job applications in an organized manner.</p>
              </div>
              <div className='tool-image'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/008/889/663/small/creative-modern-cv-resume-template-cv-with-elegant-stylish-dark-blue-color-background-free-vector.jpg" alt="tools-image"/>
              </div>

            </div>
            
          </section>


          {/* image section */}

          <section  style={{width:'100%',overflowX:'hidden',height:'450px',backgroundImage:"url('https://blogs.avua.com/wp-content/uploads/2025/07/Top-Resume-Builder-for-Graduates-scaled.webp')",backgroundAttachment:"fixed",backgroundPosition:'top',backgroundSize:'cover'}}>

          </section>

          {/* testimony */}
           <section className='tools p-5'>
            <h1 className='text-center'>Tools</h1>
                <div className='d-flex justify-content-center align-items-center'>
              <div className='tool-content col-12 col-md-6 p-5'>
                <h4>Trusted by professionals worldwide.</h4>
                <p>At LiveCares we dont just help you create resumes --we help you land the job.whether you're a seasoned professional orjust starting out,our team are designed to get results.</p>
                <p>Infact,users who used LiveCareer reported getting hired an average of 48 days faster.</p>
                <p>Join thousands of job seekers who've fast-tracked their careers with a resume that truly stands out.</p>
              </div>
              <div className='tool-image col-12 col-md-6 p-5 '>
                <div className="row my-3">
                  <div className='col-3'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScerYcM2RggBeX0LrNAWTGjYI1zHSZgjQiIQ&s" alt="" />
                  </div>
                    <div className='col-3'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScerYcM2RggBeX0LrNAWTGjYI1zHSZgjQiIQ&s" alt="" />
                  </div>
                    <div className='col-3'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScerYcM2RggBeX0LrNAWTGjYI1zHSZgjQiIQ&s" alt="" />
                  </div>
                      <div className='col-3'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScerYcM2RggBeX0LrNAWTGjYI1zHSZgjQiIQ&s" alt="" />
                  </div>

                </div>
                {/* row-2 */}
                <div className="row my-3">
                  <div className='col-3'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScerYcM2RggBeX0LrNAWTGjYI1zHSZgjQiIQ&s" alt="" />
                  </div>
                    <div className='col-3'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScerYcM2RggBeX0LrNAWTGjYI1zHSZgjQiIQ&s" alt="" />
                  </div>
                    <div className='col-3'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScerYcM2RggBeX0LrNAWTGjYI1zHSZgjQiIQ&s" alt="" />
                  </div>
                      <div className='col-3'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScerYcM2RggBeX0LrNAWTGjYI1zHSZgjQiIQ&s" alt="" />
                  </div>

                </div>
                {/* row-3 */}
                <div className="row my-3">
                  <div className='col-3'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScerYcM2RggBeX0LrNAWTGjYI1zHSZgjQiIQ&s" alt="" />
                  </div>
                    <div className='col-3'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScerYcM2RggBeX0LrNAWTGjYI1zHSZgjQiIQ&s" alt="" />
                  </div>
                    <div className='col-3'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScerYcM2RggBeX0LrNAWTGjYI1zHSZgjQiIQ&s" alt="" />
                  </div>
                      <div className='col-3'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScerYcM2RggBeX0LrNAWTGjYI1zHSZgjQiIQ&s" alt="" />
                  </div>

                </div>

              </div>

            </div>
            
          </section>
    </>
  )
}

export default LandingPage