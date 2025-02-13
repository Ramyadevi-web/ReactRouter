import React from 'react'

import c1 from '../assets/c1.webp'
import c2 from '../assets/c2.webp'
import c3 from '../assets/c3.webp'

function Career() {
  return (
 <div className='container p-3'>
            <div className=' d-flex flex-row gap-3 mt-5 pt-5'>
                 <div className="card rounded-5" style={{width: "20rem",height: "20rem",marginRight:"30px"}}>
                  <img className="card-img-top" src={c1} alt="Card image cap" style={{width: "318px",height: "323px"}}/>
                  <div className="card-body">
                    <h5 className="card-title">40 Java Interview Questions for Freshers with Clear & Concise Answers</h5>
                    <p className="card-text text-muted">By Tushar Vinocha</p>
                  </div>
                </div>
     
                 <div className="card rounded-5" style={{width: "20rem",height: "20rem",marginRight:"30px"}}>
                   <img className="card-img-top" src={c2} alt="Card image cap" style={{width: "318px",height: "323px"}}/>
                   <div className="card-body">
                     <h5 className="card-title">Top 9 TCS Xplore Python Coding Questions</h5>
                     <p className="card-text text-muted">By Archana</p>
                   </div>
                 </div>
     
                 <div className="card  rounded-5" style={{width: "20rem",height: "20rem"}}>
                   <img className="card-img-top" src={c3} alt="Card image cap" style={{width: "318px",height: "323px"}}/>
                   <div className="card-body">
                       <h5 className="card-title">10 Hardest and Easiest Programming Languages in 2025</h5>
                       <p className="card-text text-muted">By Saakshi Priyadarshini</p>
                   </div>
                 </div>
             </div>
         </div>
  )
}

export default Career
