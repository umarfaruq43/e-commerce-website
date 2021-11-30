import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className=" w-full md:h-screen flex  flex-col md:flex-row  ">
      {/* colume one  */}

      <div className="w-full md:w-5/12 equal justify-center bg-Orange h-full">
        <div className="text-white py-3 pb-8 px-8">
          <div className=" text-md mb-4  md:text-2xl font-semibold leading-2 ">
            You're a step away from <br /> taking your business <br />
            <span className=" text-2xl md:text-6xl inline-block pt-2 md:pt-4">
              Online.
            </span>
          </div>
          <ul className=" leading-7 md:leading-8">
            <li> — Create business page</li>
            <li>— Create a store & sell on WhatsApp</li>
            <li>— Collect payments with popular payment gateways</li>
            <li>— CRM & Customer support tools</li>
            <li> — Create polls on WhatsApp</li>
          </ul>
        </div>
      </div>

      {/* colum two  */}

      <div className="w-full md:w-3/6 flex-grow equal justify-center pt-10 ">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
