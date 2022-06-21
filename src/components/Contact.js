import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const[userData,setUserData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  })
  let name,value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserData({...userData, [name]:value});
  }

  const submitData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;
    const res = fetch('https://reactfirebasewebsite-c8001-default-rtdb.firebaseio.com/userDataRecords.json',
  {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify({
      firstName, lastName, phone, email, address, message
    })
  }
    )

  if(res){
    setUserData({
      firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    message: '',
    })
    alert('Data Stored');
  } else {
    alert('Please fill the Data');
  }
  }
  return (
    <>
      <section className='contactus-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-10 mx-auto'>
              <div className='row'>
                <div className='contact-leftside col-12 col-lg-5'>
                  <h1 className='main-heading fw-bold'>
                    Connect With Our <br/>Sales Team
                  </h1>
                  <p className='main-hero-para'>
                  Lorem ipsum, dolor sit amet 
                  consectetur adipisicing elit. 
                  Etquia quis?
                  </p>
                  <figure>
                    <img src='./Photos/image8.jpg' alt='contactusimg' className='img-fluid'/>
                  </figure>
                </div>

                <div className='contact-rightside col-12 col-lg-7'>
                  <form method='POST'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-12 col-lg-6  contact-input-filed'>
                          <input type='text' name='firstName' id='' className='form-control' placeholder='First Name' value={userData.firstName} onChange={postUserData} />
                        </div>
                        <div className='col-12 col-lg-6  contact-input-filed'>
                          <input type='text' name='lastName' id='' className='form-control' placeholder='Last Name' value={userData.lastName} onChange={postUserData}  />
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-12 col-lg-6  contact-input-filed'>
                          <input type='text' name='phone' id='' className='form-control' placeholder='Phone Number' value={userData.phone} onChange={postUserData} />
                        </div>
                        <div className='col-12 col-lg-6  contact-input-filed'>
                          <input type='text' name='email' id='' className='form-control' placeholder='Email Id' value={userData.email} onChange={postUserData} />
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-12 contact-input-filed'>
                        <input type='text' name='address' className='form-control' placeholder='Address' value={userData.address} onChange={postUserData} ></input>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-12 contact-input-filed'>
                        <input type='text' name='message' className='form-control' placeholder='Enter your massage' value={userData.message} onChange={postUserData} ></input>
                        </div>
                      </div>

                      <div class="form-check form-checkbox-style">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" className='main-hero-para'>
                             I agree for my fill all documnts all are fild are checke my me
                            </label>
                      </div>

                      <button type='submit' className='btn btn-style w-100' onClick={submitData}>Submit</button>
                    </div>

                  </form>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Contact