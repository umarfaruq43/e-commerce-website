import React, { useContext, useState } from "react";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";
import { RiRotateLockFill, RiLoginBoxLine } from "react-icons/ri";
import { BiLock } from "react-icons/bi";
import { MdHelp } from "react-icons/md";
import AuthLayout from "../components/AuthLayout";
import Validation from "./Validation";
import Logo from "../assests/images/logo.svg";
import { Link } from "react-router-dom";
import { Auth } from "../Contexts/AuthContext";

const Login = () => {
  // use contexts

  // const { handleAuth } = useContext(Auth);

  // initial state
  const initialData = {
    email: "",
    password: "",
  };

  // usestate
  const [showPass, setShowPass] = useState(false);
  const [userDetails, setUserDetails] = useState(initialData);
  const [err, setErr] = useState({});

  // state handlers
  const handleShow = () => {
    setShowPass(!showPass);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(Validation(userDetails));
  };

  const { email, password } = userDetails;
  return (
    <AuthLayout>
      <form className="w-10/12 md:w-3/4 lg:w-2/4 xl:2/4">
        <div className="mb-4">
          <div className="text-center  mb-4">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="relative pb-1">
            <label htmlFor="">
              <span className="inline-block pb-1 text-sm">Email</span>
              <span className="relative">
                <input
                  type="email"
                  className="input_form"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                />
                <FaEnvelope className=" text-dark-grayish-blue absolute top-1/2 transform -translate-y-1/2 left-3 text-2xl" />
              </span>
            </label>
          </div>
          {err.email && (
            <p className="text-red-700 text-sm ">
              <sup> *</sup> {err.email}
            </p>
          )}
        </div>

        {/* PASSWORD  */}

        <div>
          <div className="relative ">
            <label htmlFor="">
              <span className="inline-block pb-1 text-sm">Password</span>
              <span className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="input_form"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                />

                <BiLock
                  onClick={handleShow}
                  className=" absolute top-1/2 transform -translate-y-1/2   cursor-pointer left-3 text-2xl"
                />
              </span>
            </label>
          </div>
          {err.password && (
            <p className="text-red-700 text-sm ">
              <sup> *</sup> {err.password}
            </p>
          )}
        </div>

        <div className="mt-8 ">
          <button
            type="submit"
            className=" form-btn equal "
            onClick={handleSubmit}
          >
            Login
            <span className="text-xl">
              <RiLoginBoxLine />
            </span>
          </button>
        </div>
        <div className="my-7">
          <ul className=" mb-4 equal justify-between text-sm md:text-base ">
            <li>Don't have an account?</li>

            <li className="equal gap-2 font-semibold text-Orange">
              <Link to="/register">Create Account</Link>
              <span className="text-lg ">
                <FaUserCircle />
              </span>
            </li>
          </ul>

          <ul className=" mb-4 equal justify-between text-sm md:text-base ">
            <li>Forgot Password?</li>

            <li className="equal gap-2 font-semibold text-blue-700">
              <Link to="/forgetPassword">Reset</Link>
              <span className="text-lg ">
                <RiRotateLockFill />
              </span>
            </li>
          </ul>

          <ul className=" mb-4 equal justify-between text-sm md:text-base ">
            <li>Having Issues </li>

            <li className="equal gap-2 font-semibold text-blue-700">
              <Link to="/">Get Help</Link>
              <span className="text-lg ">
                <MdHelp />
              </span>
            </li>
          </ul>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
