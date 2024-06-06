import { createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState('');
  const [passwordShow, setPasswordShow] = useState(true);
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setRegisterError('');
    setSuccess('');

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess('Logged in successfully');
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if(!email){
      alert('Please enter a valid email');
      return;
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      alert('Provided a valid email address!!!');
      return;
    }

    sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("please check your email");
    })
    .catch(error => {
      alert(error.message);
    })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  ref={emailRef}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={passwordShow ? 'password' : 'text'}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <span onClick={() => setPasswordShow(!passwordShow)}>
                  {
                    passwordShow ? <FaEye /> : <FaEyeSlash />
                  }
                </span>
                <label className="label">
                  <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>You Do not have an account. please, <Link to='/register' className="text-blue-700">Register</Link></p>
              {registerError && <p className="bg-red-700">{registerError}</p>}
              {success && <p className="bg-green-700">{success}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
