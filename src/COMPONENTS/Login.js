import React from 'react';
import{auth,provider}from '../SERVICES/firebasse';
import '../CSS/Login.css';
import hero from '../Assets/hero-img.png';

function Login() {
    const signinwithgoogle=()=>{
        auth.signInWithPopup(provider).catch(alert)
        
      };
    return (
      //<button  className="login-provider-button" onClick={signinwithgoogle} >
      //src={book}
      <div className="main">
        <h1 className="heading font-weight-bolder mt-3 pr-4">&gt;&gt;DINGU</h1>
        <div className="row no-gutters">
        <div id="img-grid" className="col-sm-5 col-md-5 mx-3 py-3 my-3" align="center">
              <img className="img-fluid" src={hero} alt=""/>
            </div>
          <div className="col-sm-5 col-md-5 mx-4 py-3 my-3" align="left">
            <p className="message" align="justify">
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will.
            </p>
            <br/>
            <button type="button" class="btn btn-lg btn-block" onClick={signinwithgoogle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-google pb-1" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg> <span className="signin-text font-weight-bolder">Sign In</span>
            </button>
          </div>
        </div>
      </div>
      
    )
}

export default Login;