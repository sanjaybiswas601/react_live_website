import React, { useState } from 'react'
import './AboutUs.css'
import HowtoUse from '../API/HowtoUse'

const AboutUs = () => {
    const [aboutData,setAboutData] = useState(HowtoUse);
    
  return (
    <>
        
        
        <section className='common-section our-services'>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
                        <img src='./photos/image3.jpg' alt='aboutusImg'></img>
                    </div>
                    <div className='col-12 col-lg-7 our-services-list'>
                        <h1 className='main-heading'>
                            How to use the App?
                        </h1>
                        {
                            aboutData.map((curElem) => {
                                const {id,title,info} = curElem
                                return(
                            <>
                            <div className='row our-services-info' key={id}>
                            <div className='col-1 our-services-number'>
                                {id}
                            </div>
                            <div className='col-11 our-services-data'>
                                <h2>{title}</h2>
                                <p className='main-hero-para'>
                                {info}
                                </p>
                            </div>

                            </div>
                            </>
                                    
                                )
                            })
                        }
                        
                        <br/>
                        <button className='btn-style btn-style-border'>Learn More</button>
                    </div>

                </div>
                 
            </div>

        </section>

        <section className='common-section our-services'>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 col-lg-7 our-services-list'>
                        <h1 className='main-heading'>
                            World class support is <br/>
                            available 24/7
                        </h1>
                        {
                            aboutData.map((curElem) => {
                                const {id,title,info} = curElem
                                return(
                            <>
                            <div className='row our-services-info' key={id}>
                            <div className='col-1 our-services-number'>
                                {id}
                            </div>
                            <div className='col-11 our-services-data'>
                                <h2>{title}</h2>
                                <p className='main-hero-para'>
                                {info}
                                </p>
                            </div>

                            </div>
                            </>
                                    
                                )
                            })
                        }
                        
                        <br/>
                        <button className='btn-style btn-style-border'>Learn More</button>
                    </div>
                    <div className='col-12 col-lg-5 our-service-leftside-img'>
                        <img src='./photos/image7.jpg' alt='aboutusImg'></img>
                    </div>
                </div>
                 
            </div>

        </section>
    </>
  )
}

export default AboutUs