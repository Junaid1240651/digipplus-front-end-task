import React from 'react'
import Header from '../../Header/Header'
import "./MyJob.css"
const MyJob = () => {
  return (
    <div >
    <Header/>
    <div className='top'>
        <div className='head'>
            <h3 className='job'>JOBS</h3>
            <button className='sol1'>SOLUTION WRITE</button>
            <h3 className='job'>FOR JOB APPLICATION</h3>
            <button className='sol1'>SCREENING TASK</button>
            <h3 className='job'>APPLICATION STATUS</h3>
            <button className='sol1'>JOB APPLICATION</button>
        </div>
        <div className="form">
        <form >
          <h3 className="form1">K10 Maths Text Book Solutions</h3>
          <textarea rows="4" cols="20" className="form2" placeholder="Intern diggiplus"></textarea>
          </form>
      </div>
      <div className='abc' align="right">
           
            <h1 className='ann'>Anouncement📢📢</h1>
           
            <p className='annp'>We are working on adding Project and Internship Details, So just fill up profile only</p>
           
      </div>
      </div>
     
    </div>
    
  )
}

export default MyJob