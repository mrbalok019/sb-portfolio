import { FaFacebook } from "react-icons/fa";
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";

const Nav = () => {
  const menu = (
    <>
      <li className=" text-base mx-auto font-semibold">
        <a>Home</a>
      </li>
      <li  className=" text-base mx-auto font-semibold">
        <a>About</a>
      </li>
      <li  className=" text-base mx-auto font-semibold">
        <a>Skillset</a>
      </li>
      <li  className=" text-base mx-auto font-semibold">
        <a>Projects</a>
      </li>
      <li  className=" text-base mx-auto font-semibold">
        <a>Education</a>
      </li >
      <li  className=" text-base mx-auto font-semibold">
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div className="    rounded-3xl  flex flex-col">
      <div className="card rounded-b-none rounded-t-3xl bg-base-100 w-full h-fit ">
        <h1 className="text-xl font-semibold text-black text-center mt-2">
          My Portfolio
        </h1>
        <h1 className="text-lg font-bold text-orange-600 text-center mb-4">
          Web Developer
        </h1>
        <figure className="sm:mx-auto lg:mx-8 bg-slate-200 w-52 h-32 rounded-xl bg-no-repeat">
          <img 
            src="https://i.ibb.co/R4G38CP/IMG-20240704-205057.jpg"
            alt="SB"
          />
        </figure>
        <div className="card-body pt-0 ">
          <div className="navbar w-full flex-col">
           
            <div className="navbar-center flex">
              <ul className="menu menu-dropdown p-0">{menu}</ul>
            </div>
            <div className="">
              <button className="btn bg-orange-500 text-white text-lg 
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
