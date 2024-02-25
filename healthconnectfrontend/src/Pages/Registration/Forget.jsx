import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Verify_Otp from "./Verify_Otp";

const Forget = () => {
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  function changeHandler(event) {
    setemail(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    navigate("/Verify_Otp", { state: { email } });
  }

  return (
    <div className="flex justify-center items-center h-[600px]">
      <div className="w-[400px] border border-gray-300">
        <div>
          <h3 className="px-7 py-2">Forget Password</h3>
          <div class="border border-gray-150 border-t-2 w-full"></div>
        </div>
        <div className="px-7 py-4">
          <p className="text-sm text-gray-500">
            Provide us the Email id of your Health Connect account and we will
            send you an email with instructions to reset your password.
          </p>
          <form onSubmit={submitHandler}>
            <label >
              <p className="text-[0.65rem] mb-2 mt-4 leading-[1.375rem]">
                Email Address <sup>*</sup>
              </p>
              <input
                required
                type="email"
                value={email}
                onChange={changeHandler}
                placeholder="Enter Email id"
                className="rounded-[0.2rem] w-full p-[4px] border border-gray-400"
              />
              <button className="bg-blue-500 rounded-[8px] font-medium text-white px-[12px] py-[8px] mt-4 w-full">
                Send OTP
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;