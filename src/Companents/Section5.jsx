import React from 'react'
import first from '../image/IMAGE (1).png'
import second from '../image/IMAGE (2).png'
import third from '../image/IMAGE (3).png'
function Section5() {
  return (
    <div className='flex justify-center my-10 flex-wrap gap-5'>
        <div className='space-y-10'>
            <div> <img src={first} alt="first" /> </div>
            <div> <img src={second} alt="second" /> </div>
        </div>
        <div>
             <img src={third} alt="second" /> 
        </div>
    </div>
  )
}

export default Section5