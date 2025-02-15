"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../header";
const Login = () => {
  const [val, setVal] = useState("");
  const [val1, setVal1] = useState("");
  const click = () => {
    console.log(val);
    console.log(val1);
  };
  const change = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setVal(event.target.value);
  };
  const change1 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setVal1(event.target.value);
  };
  return (
    <>
      <div className="bg-black">
        <Header />
        <h1 className="text-white font-bold text-xl md:text-[60px]  text-center pt-16 pb-16">
          Login
        </h1>
      </div>
      <div className="w-full bg flex items-center h-screen justify-center tracking-wider  bg-[#309689] background">
        <div className="md:w-[38%] md:h-[70%] text-sm glass content-center">
          <div className="w-full text-center my-3">
            <h2 className="md:text-2xl text-md text-black  font-bold">Login</h2>
          </div>

          <form className="my-2">
            <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
              <input
                type="text"
                onChange={change}
                value={val}
                className="w-11/12 bg-transparent text-sm md:text-base outline-none placeholder-black"
                placeholder="Enter Your Email"
              />
              <div>
                <Image
                  className="md:h-[30px] md:w-[30px]"
                  src="/email.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
              <input
                type="password"
                onChange={change1}
                value={val1}
                className="w-11/12 bg-transparent md:text-base text-sm outline-none placeholder-black"
                placeholder="Enter Your Password"
              />
              <div>
                <Image
                  className="md:h-[30px] md:w-[30px]"
                  src="/lock.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <div className="mx-5 flex cursor-pointer justify-end tracking-wider text-sm items-center"></div>

            <div className="mx-5 my-7 py-2">
              <button
                type="button"
                onClick={click}
                className="bg-black w-full h-[35px] rounded-sm text-white"
              >
                Login
              </button>
            </div>
            <div className="m-5 py-2 flex items-center justify-center cursor-pointer">
              <p className="text-sm">
                Not Have Account <Link href={"/Register"}>/Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
