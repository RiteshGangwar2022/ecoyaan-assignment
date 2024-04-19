import React from "react";
import { Link } from "react-router-dom";
import './../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar h-[80px] w-full flex justify-between shadow-xl z-10 fixed t-0 bg-white ">
      <div className="items-center flex  gap-5 p-1">
        <p className="text-4xl  flex font-sans font-semibold ml-12 text-green-600 cursor-pointer hover:scale-105 transition ease delay-80">
          Ec
          <span>
            <img className="h-7 w-7 mt-3 mx-1" src="earth.png"></img>
          </span>
          yaan
        </p>
      </div>
      <div className="font-sans flex gap-10 items-center text-1xl mr-14 ">
        <Link
          className="transition ease-in-out delay-80  p-2 hover:underline underline-offset-[29px] font-semibold focus:font-bold  hover:font-bold"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className=" transition ease-in-out delay-80 p-2 hover:underline underline-offset-[29px] font-semibold focus:font-bold hover:font-bold"
          to={"/about"}
        >
          About Us
        </Link>
        <Link className=" transition ease-in-out delay-80 p-2 hover:underline underline-offset-[29px] font-semibold focus:font-bold  hover:font-bold">
          Sell on Ecoyaan
        </Link>
        <Link className="transition ease-in-out delay-80 p-2 hover:underline underline-offset-[29px] font-semibold focus:font-bold  hover:font-bold">
          Careers
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
