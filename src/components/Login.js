import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';

const Login = (props) => {
  const navigate = useNavigate()
  const [values,setValues] = useState({
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
    signInWithEmailAndPassword(auth,values.email,values.password).then(res => {
      
      if(res){
        setValues({
        email: '',
        password: '',
        })
        alert('your login sucessful');
        {
          navigate('/')
        }
      } else {
        alert('Please fill the Data');
      }
      
    }
    
    
    )
    
  }

  return (
    <>
    <div className="row d-flex justify-content-center align-items-center h-100">
    <div className='container_Loginpage'>
      <form>
      <h1 className='main-heading text-center fw-bold login_possition'>LOGIN</h1>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <input type="email" name='email' id="form2Example1" class="form-control " value={values.email} onChange={postSignUpData}/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" name='password' id="form2Example2" class="form-control" value={values.password} onChange={postSignUpData}/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="button" className='btn btn-style w-100' onClick={submitData}>Login</button>

  {/* <!-- Register buttons --> */}
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
  </div>
</form>
</div>
</div>
    </>
  )
}

export default Login