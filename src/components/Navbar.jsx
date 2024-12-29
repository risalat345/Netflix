import React, { useEffect, useRef } from 'react';
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_icon from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { logout } from '../firebase';

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("bg-black");
      } else {
        navRef.current.classList.remove("bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className="p-3 flex justify-between items-center gap-16 fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div>
        <img className='w-[70px] md:w-[100px]' src={logo} alt="" />
      </div>
      <div>
      <div className='hidden md:block'>
  <ul className="flex gap-3 text-sm cursor-pointer whitespace-nowrap">
    <li className="hover:text-gray-200">Home</li>
    <li className="hover:text-gray-200">TV Shows</li>
    <li className="hover:text-gray-200">Movies</li>
    <li className="hover:text-gray-200">New & Popular</li>
    <li className="hover:text-gray-200">My List</li>
    <li className="hover:text-gray-200">Browse by Language</li>
  </ul>
</div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <img src={search_icon} alt="" />
        <p>Children</p>
        <img src={bell_icon} alt="" />
        <div className="relative nav-profile flex cursor-pointer justify-center items-center gap-2">
          <img src={profile_icon} alt="" />
          <img src={caret_icon} alt="" />
        </div>
        <div onClick={()=>{logout()}} className="signout absolute ring-0 top-14">
          Sign Out Of Netflix
        </div>
      </div>
    </div>
  );
};

export default Navbar;
