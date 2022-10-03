import React from 'react'
import img from "../img/call-center.png"
import '../styles/support.scss';

const Support = () => {
  return (
    <div className='support'>
        <div className="support--left">
            <h1>24/7 Service</h1>
            <p>Our Agents typically reply within an Hour</p>
            <button><a href="tel:0701234566">Talk to us</a></button>
        </div>
        <div className="support--right">
            <img src={img} alt="agent" />
        </div>
        

    </div>
  )
}

export default Support
