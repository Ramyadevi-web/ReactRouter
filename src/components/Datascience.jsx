import React from 'react'

import ds1 from '../assets/ds1.webp'
import ds2 from '../assets/ds2.webp'
import ds3 from '../assets/ds3.webp'


function Datascience() {
  return (
     <div className='container p-3'>
               <div className=' d-flex flex-row gap-3 mt-5 pt-5'>
                    <div className="card rounded-5" style={{width: "20rem",height: "20rem",marginRight:"30px"}}>
                     <img className="card-img-top" src={ds1} alt="Card image cap" style={{width: "318px",height: "323px"}}/>
                     <div className="card-body">
                       <h5 className="card-title">Top 10 High Paying Non-Coding Jobs in Data Science in 2025</h5>
                       <p className="card-text text-muted">By Isha Sharma</p>
                     </div>
                   </div>
        
                    <div className="card rounded-5" style={{width: "20rem",height: "20rem",marginRight:"30px"}}>
                      <img className="card-img-top" src={ds2} alt="Card image cap" style={{width: "318px",height: "323px"}}/>
                      <div className="card-body">
                        <h5 className="card-title">4 Types of Data: Nominal, Ordinal, Discrete, Continuous</h5>
                        <p className="card-text text-muted">By Jaishree Tomar</p>
                      </div>
                    </div>
        
                    <div className="card  rounded-5" style={{width: "20rem",height: "20rem"}}>
                      <img className="card-img-top" src={ds3} alt="Card image cap" style={{width: "318px",height: "323px"}}/>
                      <div className="card-body">
                          <h5 className="card-title">Can A Commerce Student Do Data Science?</h5>
                          <p className="card-text text-muted">By Saakshi Priyadarshini</p>
                      </div>
                    </div>
                </div>
            </div>
  )
}

export default Datascience
