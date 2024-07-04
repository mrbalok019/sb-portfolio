import { FaFacebook } from "react-icons/fa";
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";

const Nav = () => {
  const menu = (
    <>
      <li className="text-center text-xl">
        <a>Home</a>
      </li>
      <li  className="text-center text-xl">
        <a>About</a>
      </li>
      <li  className="text-center text-xl">
        <a>Skillset</a>
      </li>
      <li  className="text-center text-xl">
        <a>Projects</a>
      </li>
      <li  className="text-center text-xl">
        <a>Education</a>
      </li >
      <li  className="text-center text-xl">
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div className=" h-full   rounded-3xl border-2 border-black flex flex-col">
      <div className="card bg-base-100 w-full ">
        <h1 className="text-3xl font-semibold text-black text-center mt-2">
          My Portfolio
        </h1>
        <h1 className="text-xl font-bold text-orange-600 text-center mb-4">
          Web Developer
        </h1>
        <figure className="mx-8 rounded-xl bg-slate-200 w-64 h-40 ">
          <img className="contain"
            src="https://i.ibb.co/cxCNpsc/image-1-1-Onnqk-Yf7-Q-transformed.png"
            alt="SB"
          />
        </figure>
        <div className="card-body">
          <div className="navbar  flex-col">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content rounded-box 
                  z-[1]  w-52 p-2 shadow "
                >
                  {menu}
                </ul>
              </div>
            
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-dropdown px-1">{menu}</ul>
            </div>
            <div className="">
              <button className="btn bg-orange-500 text-white text-2xl 
              font-semibold rounded-xl">
                Download CV</button>
            </div>
           
          </div>
        </div>
      </div>
        <div className="bg-orange-500 w-full rounded-b-3xl p-4 
                        text-2xl text-white font-bold flex flex-row justify-center gap-4">
        <a href="www.facebook.com"> <SiFacebook/> </a>
        <a href="https://github.com/mrbalok019"> <SiGithub/> </a>
        <a href=""> <SiInstagram/> </a>
        </div>
    </div>
  );
};

export default Nav;
