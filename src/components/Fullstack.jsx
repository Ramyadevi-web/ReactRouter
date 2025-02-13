import React from 'react'

import { Link } from 'react-router-dom'

import fs1 from '../assets/fs1.webp'
import fs2 from '../assets/fs2.webp'
import fs3 from '../assets/fs3.jpg'

function Fullstack() {
  return (
        <div to ='/fullstack' className='container'>
           <div className=' d-flex flex-row gap-3 mt-5 pt-5'>
                <div className="card rounded-5" style={{width: "20rem",height: "20rem",marginRight:"30px"}}>
                 <img className="card-img-top" src={fs1} alt="Card image cap" style={{width: "318px",height: "323px"}}/>
                 <div className="card-body">
                   <h5 className="card-title">10 Best HTML and CSS Project Ideas for Beginners</h5>
                   <p className="card-text text-muted">By Isha Sharma</p>
                 </div>
               </div>
    
                <div className="card rounded-5" style={{width: "20rem",height: "20rem",marginRight:"30px"}}>
                  <img className="card-img-top" src={fs2} alt="Card image cap" style={{width: "318px",height: "323px"}}/>
                  <div className="card-body">
                    <h5 className="card-title">10 Best React Project Ideas for Developers [with Source Code]</h5>
                    <p className="card-text text-muted">By Isha Sharma</p>
                  </div>
                </div>
    
                <div className="card  rounded-5" style={{width: "20rem",height: "20rem"}}>
                  <img className="card-img-top" src={fs3} alt="Card image cap" style={{width: "318px",height: "323px"}}/>
                  <div className="card-body">
                      <h5 className="card-title">Best Full-Stack Development Project Ideas in 2025</h5>
                      <p className="card-text text-muted">By Isha Sharma</p>
                  </div>
                </div>
            </div>
        </div>
  )
}

export default Fullstack
