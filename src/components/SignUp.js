import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../components/Firebase'


const SignUp = () => {
  const [values,setValues] = useState({
    name:'',
    email:'',
    password:''
  })
  let name,value;
  const postSignUpData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setValues({...values, [name]:value});
  }



  const submitData = () => {
    createUserWithEmailAndPassword(auth,values.email,values.password).then(res => {
      if(res){
        setValues({
        name: '',
        email: '',
        password: '',
        })
        alert('you are register');
      } else {
        alert('Please fill the Data');
      }
    })
    
  }
  

  
  
  

  return (
    <>
      <section className="vh-100 bg-image"
  // style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
  >
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" 
          // style="border-radius: 15px;"
          >
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div className="form-outline mb-4">
                  <input type="text" name='name' id="form3Example1cg" className="form-control form-control-lg" placeholder='Your Name' 
                  value={values.name} onChange={postSignUpData}/>
                  <label className="form-label" for="form3Example1cg"></label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" name='email' id="form3Example3cg" className="form-control form-control-lg" placeholder='Your Email'
                    value={values.email} onChange={postSignUpData}
                  />
                  {/* <label className="form-label" for="form3Example3cg">Your Email</label> */}
                </div>

                <div className="form-outline mb-4">
                  <input type="password" name='password' id="form3Example4cg" className="form-control form-control-lg" placeholder='Password'
                    value={values.password} onChange={postSignUpData}
                  />
                  {/* <label className="form-label" for="form3Example4cg">Password</label> */}
                </div>

                

                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="button"
                    className="btn btn-style w-100" onClick={submitData}>Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? 
                <NavLink type="submit" to="/login">Login Here</NavLink>
                </p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default SignUp