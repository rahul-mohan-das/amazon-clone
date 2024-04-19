import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flag from "../images/flag.png";

const Links = () => {
  return (
    <>
      <div className="bg-[#232f3e] text-white flex flex-row justify-around py-[10vh] px-[10vw] border-b-2 border-gray-500">
        <div className="flex flex-col">
          <span className="font-bold">Get to Know Us</span>
          <Link to="#">About Us</Link>
          <Link to="#">Careers</Link>
          <Link to="#">Press Releases</Link>
          <Link to="#">Amazon Science</Link>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Connect With Us</span>
          <Link to="#">Facebook</Link>
          <Link to="#">Twitter</Link>
          <Link to="#">Instagram</Link>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Make Money with Us</span>
          <Link to="#">Sell on Amazon</Link>
          <Link to="#">Sell under Amazon Accelerator </Link>
          <Link to="#">Protect and Build Your Brand</Link>
          <Link to="#">Amazon Global Selling</Link>
          <Link to="#">Become an Affiliate</Link>
          <Link to="#">Fulfilment by Amazon</Link>
          <Link to="#">Advertise Your Products</Link>
          <Link to="#">Amazon Pay on Merchants</Link>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Let Us Help You</span>
          <Link to="#">COVID-19 and Amazon</Link>
          <Link to="#">Your Account</Link>
          <Link to="#">Returns Centre</Link>
          <Link to="#">100% Purchase Protection</Link>
          <Link to="#">Amazon App Download</Link>
          <Link to="#">Help</Link>
        </div>
      </div>
      <div className="bg-[#232f3e] text-white flex flex-row justify-center gap-[5vw] py-[10vh] px-[10vw]">
        <Link to="#">
          <img src={logo} alt="logo" className="w-[7vw]" />
        </Link>
        <div className="flex flex-row gap-[0.5vw] items-center">
          <div className="rounded border-[1px] border-white px-[1vw] py-[1vh] flex flex-row gap-[0.5vw] items-center">
            <FontAwesomeIcon icon={faGlobe} />
            English
          </div>
          <div className="rounded border-[1px] border-white px-[1vw] py-[1vh] flex flex-row gap-[0.5vw] items-center">
            <img src={flag} alt="flag" className="w-[1vw]" /> India
          </div>
        </div>
      </div>
      <div className="bg-[#0f1111] text-white flex flex-row justify-around px-[10vw] py-[10vh] text-xs">
        <div className="flex flex-col gap-[1vw]">
          <Link to="#" className="flex flex-col">
            <span className="font-bold">AbeBooks</span> Books, art &
            collectibles
          </Link>
          <Link to="#" className="flex flex-col">
            <span className="font-bold">Shopbop</span> Designer Fashion Brands
          </Link>
        </div>
        <div className="flex flex-col gap-[1vw]">
          <Link to="#" className="flex flex-col">
            <span className="font-bold">Amazon Web Services</span> Scalable
            Cloud Computing Services
          </Link>
          <Link to="#" className="flex flex-col">
            <span className="font-bold">Amazon Business</span> Everything For
            Your Business
          </Link>
        </div>
        <div className="flex flex-col gap-[1vw]">
          <Link to="#" className="flex flex-col">
            <span className="font-bold">Audible</span> Download Audio Books
          </Link>
          <Link to="#" className="flex flex-col">
            <span className="font-bold">Prime Now</span> 2-Hour Delivery on
            Everyday Items
          </Link>
        </div>
        <div className="flex flex-col gap-[1vw]">
          <Link to="#" className="flex flex-col">
            <span className="font-bold">IMDb</span> Movies, TV & Celebrities
          </Link>
          <Link to="#" className="flex flex-col">
            <span className="font-bold">Amazon Prime Music</span> 100 million
            songs, ad-free Over 15 million podcast episodes
          </Link>
        </div>
      </div>
    </>
  );
};

export default Links;
