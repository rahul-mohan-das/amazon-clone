import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const Navbaritems = {
    Fresh: "/Fresh",
    "Amazon miniTV": "/AmazonminiTV",
    Sell: "/Sell",
    "Amazon Pay": "/AmazonPay",
    "Gift Cards": "/GiftCards",
    "Buy Again": "/BuyAgain",
    Coupons: "/Coupons",
    "Amazon Business": "/AmazonBusiness",
    Books: "/Books",
    "Health, Household & Personal Care": "/Health,Household&PersonalCare",
    "Gift Ideas": "/GiftIdeas",
    "Browsing History": "/BrowsingHistory",
    "Today's Deals": "/Today'sDeals",
    "Customer Service": "/CustomerService",
  };
  const NavbarItemDisplay = {
    Fresh: "",
    "Amazon miniTV": "",
    Sell: "",
    "Amazon Pay": "",
    "Gift Cards": "",
    "Buy Again": "",
    Coupons: "",
    "Amazon Business": "",
    Books: "",
    "Health, Household & Personal Care": "hidden lg:block",
    "Gift Ideas": "hidden xl:block",
    "Browsing History": "hidden xl:block",
    "Today's Deals": "hidden xl:block",
    "Customer Service": "hidden xl:block",
  };
  const NavbarLabels = Object.keys(Navbaritems);
  return (
    <div className="max-w-screen flex flex-row justify-around bg-gray-700 h-[5vh] text-white text-[4px] sm:text-6px] md:text-[10px] lg:text-[12px]">
      <Link
        to="/All"
        className="hover:border hover:border-white hover:border-2 p-[1vh] hover:translate-y-[1px] "
      >
        All
      </Link>
      {NavbarLabels.map((item) => {
        return (
          <Link
            className={`${NavbarItemDisplay[item]} hover:border hover:border-white hover:border-2 p-[1vh] hover:translate-y-[1px]`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
