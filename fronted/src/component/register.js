import react, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './regis.css'

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  })
  
  const loggedIn = false;
  const submitForm= async (e)=>{
    e.preventDefault()
    try{

      console.log("username", username)
      if (username.email === '' || username.mobile === '' || username.firstName === '') {
        alert("please fill all fields!")
      };
        const loginapi= await fetch('/api/v1/auth/signup', {
          method: "Post",
          body: JSON.stringify({
            firstName: username.firstName,
            lastName: username.lastName,
            email: username.email,
            mobile: username.mobile
          }),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          credentials: "include"
        })
        const result= await loginapi.json()
        console.log("result", result)
      if(result){
        localStorage.setItem("mytime", JSON.stringify(result))
        navigate('/login')
      }
    }
    catch(err){
      console.log("err.message")
    }
    
  }


  return (
    <>
      <div className="signDiv">
        <div className="img">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/10/16/c3f9ae89-8072-41e1-9fed-6eb9bb699fe91634323933951-500_hamburger.png" width="420px" height="200px"></img>
        </div>
        <div style={{textAlign:"center", padding: "15px"}}>
          <h3><strong>Signup</strong></h3>
        </div>
        <div>
          <form onSubmit={submitForm}>
            <div className="mb-3">
            <label className="label">
                <input className="form-control"
                  type="text"
                  name="firstName"
                  onChange={(e) => setUsername({...username,[e.target.name]:e.target.value})}
                  value={username.firstName}
                  placeholder=" FirstName..."
                />
              </label>
              <label className="label">
                <input className="form-control"
                  type="text"
                  name="lastName"
                  onChange={(e) => setUsername({...username,[e.target.name]:e.target.value})}
                  value={username.lastName}
                  placeholder=" LastName..."
                />
              </label>  <label className="label">
                <input className="form-control"
                  type="text"
                  name="email"
                  onChange={(e) => setUsername({...username,[e.target.name]:e.target.value})}
                  value={username.email}
                  placeholder=" Email..."
                />
              </label>
              <label className="label">
                <input className="form-control "
                  type="Number"
                  name="mobile"
                  value={username.mobile}
                  onChange={(e) => setUsername({...username,[e.target.name]:e.target.value})}
                  placeholder=" +91  |  Mobile Number..."
                />
              </label>
              <button type="submit" className="btn btn-primary btn-lg btn-block">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


export default Register;