import React from 'react'
import Header from '../../Header/Header'
import "./MyPayment.css"

const MyPayment = () => {
  return (
    <div >
    <Header/>
    <div className='top1'>
        <div className='top2'>
            <h3 className='payment'>PAYMENT NAVIGATION</h3>
            <button className='invoice'>INVOICE DETAILS</button>
            <button className='bank'>MY BANK DETAILS</button>
        </div>
        <div className='detailsdiv'>
        <p className='detail'>Payment Date: <strong>Oct. 25, 2022,11:07am.</strong>Amount Paid: <strong>₹3150</strong></p>
        <p className='detail'>Payment Made for Project</p>
        <p className='detail'>K10 Maths Text Booj Solution</p>
        <p className='detail'>K12 Maths Text Booj Solution</p>
      </div>
      <div className='amt'> 
            <p className='amt1'>Lifetime Earning</p>
            <h1>₹ 3150</h1>
            <p className='amt1'>This Month Earning</p>
            <h1>₹ 0</h1>           
      </div>
      </div>
     
    </div>
  )
}

export default MyPayment