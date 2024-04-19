import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import flag from "../images/flag.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="max-w-screen h-[10vh] bg-slate-900 flex flex-row items-center justify-around text-nowrap">
      <Link className="hover:border-white hover:border-2 flex flex-row items-center">
        <img src={Logo} alt="logo" className="w-[6vw]" />
      </Link>
      <Link className="flex flex-row hover:border-white hover:border-2 h-[10vh] items-center">
        <FontAwesomeIcon className="text-white w-[3vw]" icon={faLocationDot} />
        <div className="text-white flex flex-col text-[4px] sm:text-6px] md:text-[10px] lg:text-[12px]">
          Deliver to Rahul
          <span className="font-bold">Kozhikode 673010</span>
        </div>
      </Link>

      <div className="flex flex-row ml-[1vw] active:outline active:outline-orange-400 active:rounded-md text-[4px] sm:text-6px] md:text-[10px] lg:text-[12px]">
        <button className="bg-gray-200 hover:bg-gray-300 w-[9vw] md:w-[6vw] lg:w-[3vw] h-[6vh] rounded-l-md text-[4px] sm:text-6px] md:text-[8px] lg:text-[10px]">
          All
        </button>
        <input
          type="text"
          className="bg-white w-[15vw] md:w-[20vw] lg:w-[30vw] h-[6vh] pl-[1vw] focus:outline-none"
          placeholder="Search Goodies.in"
        />
        <button className="bg-orange-300 hover:bg-orange-400 w-[9vw] md:w-[6vw] lg:w-[3vw] h-[6vh] rounded-r-md">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="flex flex-row ml-[1vw] hover:border-white hover:border-2 h-[10vh] items-center">
        <img src={flag} alt="country" className="w-[2vw]" />
        <div className="text-white px-2 text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px]">
          EN
        </div>
      </div>
      <div className="flex flex-col ml-[1vw] hover:border-white hover:border-2 h-[10vh] items-center justify-center text-[4px] sm:text-6px] md:text-[10px] lg:text-[12px]">
        <div className="text-white">Hello, Rahul</div>
        <div className="font-bold text-white">Account & Lists</div>
      </div>
      <div className="flex flex-col ml-[1vw] hover:border-white hover:border-2 h-[10vh] items-center justify-center text-[4px] sm:text-6px] md:text-[10px] lg:text-[12px]">
        <div className="text-white">Returns</div>
        <div className="font-bold text-white">& Orders</div>
      </div>
      <div className="flex flex-row text-white ml-[1vw] hover:border-white hover:border-2 h-[10vh] items-center px-2">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="text-[4px] sm:text-6px] md:text-[8px] lg:text-[10px]">
          Cart
        </span>
      </div>
    </div>
  );
};

export default Header;
