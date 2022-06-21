import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <header>
        <section className='container main-hero-container'>
            <div className='row'>
                <div className='col-12 col-lg-6 header-left-side d-flex 
                justify-content-center flex-column align-items-start'>
                    <h1 className='display-2'>Digital Payment Made <br/> Easy For You </h1>
                    <p className='main-hero-para'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                    <h3>Get early access for you</h3>
                    <div className='input-group mt-3'>
                        <input type='text' 
                        className='rounded-pill w-75 me-3 p-2 form-control-text'
                        placeholder='Enter Your Email' />
                        <div className='input-group-button'>
                            Get in Now
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 header-left-side d-flex 
                justify-content-center align-items-start main-herosection-images'>
                    <img src='./Photos/image5.jpg' 
                    alt='images5' 
                    className='img-fluid' />
                    <img src='./Photos/image1.jpg' 
                    alt='images1' 
                    className='img-fluid main-hero-img2' />

                </div>

            </div>
        </section>
    </header>
    </>
  )
}

export default Header