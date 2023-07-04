import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const [userData, setUserData] = useState({
    fnm: "",
    lnm: "",
    email: "",
    phone: "",
    comment: "",
  });

  const { fnm, lnm, email, phone, comment } = userData;

  const type = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${serverUrl}/user/signup`, userData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-96">
      <div className="flex flex-col items-center gap-3">
        <p className="text-white text-7xl fonty">aroma</p>
        <p className="text-red-600 text-2xl fonty">espresso bar</p>
      </div>

      <form className="flex flex-col gap-4 w-full border-2 rounded-lg p-3">
        <h1 className="text-white fonty self-center text-3xl">Sign Up</h1>
        <input
          className="bg-gray-900 rounded-md p-1 px-3 text-white"
          type="text"
          placeholder="first name"
          name="fnm"
          onChange={type}
          value={fnm}
        />
        <input
          className="bg-gray-900 rounded-md p-1 px-3 text-white"
          type="text"
          placeholder="last name"
          name="lnm"
          onChange={type}
          value={lnm}
        />
        <input
          className="bg-gray-900 rounded-md p-1 px-3 text-white"
          type="text"
          placeholder="email"
          name="email"
          onChange={type}
          value={email}
        />
        <input
          className="bg-gray-900 rounded-md p-1 px-3 text-white"
          type="text"
          placeholder="phone number"
          name="phone"
          onChange={type}
          value={phone}
        />
        <textarea
          className="bg-gray-900 rounded-md p-1 px-3 text-white"
          type="text"
          placeholder="comment"
          name="comment"
          onChange={type}
          value={comment}
        />
        <button
          onClick={onSubmit}
          className="bg-gray-900 rounded-md w-fit self-center p-1 px-2 transition-all hover:scale-105 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
