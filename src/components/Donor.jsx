import React from 'react'
import './Donor.css'

const Donor = () => {




  return (
    <div>
      <div className='DonorPage'>
        <h1 className='Header'>Need Blood</h1>
        <form action="" className='DonorPage'>
          <label htmlFor="">Name</label>
          <input type="text" required placeholder='Enter the Your Name'/>
          <label htmlFor="">Blood Group</label>
          <input type="text" required placeholder='Enter the Your  Blood Group'/>
          <label htmlFor="">Location</label>
          <input type="text" required placeholder='Enter the Your Location'/>
          <label htmlFor="">Phone No</label>
          <input type='tel' required placeholder='Enter the Your Phone No ' />
          <label htmlFor="">Age</label>
          <input type="age"  required placeholder='Enter thr your age'/>
          <label htmlFor="">Email</label>
          <input type="email" placeholder='Enter the your email' required />
          <label htmlFor="">Weight</label>
          <input type="Number" required placeholder='Enter the Your Weight'/>
          <label htmlFor="">Previous Blood Donate Month</label>
          <input type="date" name="" id="" />
          <label htmlFor="">Any Health Issue</label>
          <div>
          <input type="radio"  id='Yes' name='yes'/>
          <label htmlFor="Yes">Yes</label>
          <input type="radio" id='No' name='yes' />
          <label htmlFor="No">No</label>
          

          </div>
          <button type='submit'>submit</button>
          

          
        </form>
      </div>


    </div>
  )
}

export default Donor