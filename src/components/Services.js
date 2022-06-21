import React, { useState } from 'react'
import serviceapi from '../API/serviceApi'
import './Services.css'

const Services = () => {
    const[service,setService] = useState(serviceapi)
  return (
    <>
    <section className='service-main-container'>
        <div className='container service-container'>
         <h1 className='main-heading text-center fw-bold'>
            How To Send Money
         </h1>
        <div className='row'>
            {
                service.map((curElem) => {
                    const{id,logo,title,info} = curElem;
                    return(
                        <div className='col-12 col-lg-4 col-xxl-4 service-container-subdiv'>
                <i class={`fontawesome-style ${logo}`}></i>
                <h2 className='sub-heading'>{title}</h2>
                <p className='main-hero-para'>
                    {info}
                </p>

            </div>
                    )
                })
            }
            

        </div>
        </div>

    </section>
    </>
  )
}

export default Services