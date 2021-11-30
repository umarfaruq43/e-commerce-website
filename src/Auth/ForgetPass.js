import React, { useState } from "react";
import { FaArrowRight, FaEnvelope, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import AuthLayout from "../components/AuthLayout";
import Logo from "../assests/images/logo.svg";
import Validation from "./Validation";
import { MdHelp } from "react-icons/md";
import { RiLoginBoxLine, RiRotateLockFill } from "react-icons/ri";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState({});
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(Validation(email));
  };

  return (
    <AuthLayout>
      <form className="w-10/12 md:w-3/4 lg:w-2/4 xl:2/4">
        <div className="mb-4">
          <div className="text-center  mb-4">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="relative pb-1">
            <label htmlFor="">
              <span className="inline-block pb-1 text-sm">Account Email</span>
              <span className="relative">
                <input
                  type="email"
                  className="input_form"
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
          <small>
            We'll send you an email with password reset instructions{" "}
          </small>
        </div>

        <div className="mt-8 ">
          <button
            type="submit"
            className=" form-btn equal "
            onClick={handleSubmit}
          >
            Reset Password
            <span className="text-xl">
              <RiRotateLockFill />
            </span>
          </button>
        </div>
        <div className="my-7">
          <ul className=" mb-4 equal justify-between text-sm md:text-base ">
            <li>Have an account?</li>

            <li className="equal gap-2 font-semibold text-Orange">
              <Link to="/login">Login</Link>
              <span className="text-lg ">
                <RiLoginBoxLine />
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

export default ForgetPass;
