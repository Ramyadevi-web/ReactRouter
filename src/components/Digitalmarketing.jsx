import React from 'react'

import dm1 from '../assets/dm1.webp'
import dm2 from '../assets/dm2.webp'
import dm3 from '../assets/dm3.webp'

function Digitalmarketing() {
  return (
    <div className='container p-3'>
                   <div className=' d-flex flex-row gap-3 mt-5 pt-5'>
                        <div className="card rounded-5" style={{width: "20rem",height: "20rem",marginRight:"30px"}}>
                         <img className="card-img-top" src={dm1} alt="Card image cap" style={{width: "318px",height: "323px"}}/>
                         <div className="card-body">
                           <h5 className="card-title">10 Outstanding Marketing Management Case Studies from India</h5>
                           <p className="card-text text-muted">By Saanchi Bhardwaj</p>
                         </div>
                       </div>
            
                        <div className="card rounded-5" style={{width: "20rem",height: "20rem",marginRight:"30px"}}>
                          <img className="card-img-top" src={dm2} alt="Card image cap" style={{width: "318px",height: "323px"}}/>
                          <div className="card-body">
                            <h5 className="card-title">10 Best Digital Marketing Projects in 2025</h5>
                            <p className="card-text text-muted">By Jaishree Tomar</p>
                          </div>
                        </div>
            
                        <div className="card  rounded-5" style={{width: "20rem",height: "20rem"}}>
                          <img className="card-img-top" src={dm3} alt="Card image cap" style={{width: "318px",height: "323px"}}/>
                          <div className="card-body">
                              <h5 className="card-title">Best Digital Marketing Webinars and Workshops</h5>
                              <p className="card-text text-muted">By Saanchi Bhardwaj</p>
                          </div>
                        </div>
                    </div>
                </div>
  )
}

export default Digitalmarketing
