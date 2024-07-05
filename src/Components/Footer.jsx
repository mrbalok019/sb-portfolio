import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="mb-10">
      <footer className="footer footer-center bg-slate-800 text-base-content p-4">
        <aside>
          <p className="text-sm lg:text-xl font-semibold text-white">
            Copyright © ${new Date().getFullYear()} - All right reserved by Shanchayan Bhattacharyya
            
          </p>
        </aside>

       <a href="#home">
       <button className="btn btn-circle absolute right-5 bottom-16 z-[10]">
            <BiSolidUpArrow/>
        </button>
       </a>
      </footer>
    </div>
  );
};

export default Footer;
