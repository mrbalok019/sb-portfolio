import React from "react";

const About = () => {
  return (
    <div className="px-12 mb-10">
      <div className="flex flex-col  text-left ">
        <p className="text-xl lg:text-2xl font-semibold mb-6">WELCOME!</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Developing Digital Delights{" "}
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-6 w-full mt-5">
          
            <h1 className="w-80 text-2xl font-bold leading-none lg:text-3xl text-slate-600 ">
                About Me
            </h1>
            <hr className="w-36 mt-5 bg-orange-400 h-1 border-dashed decoration-dashed" />
          
          <p className="text-xl lg:text-2xl font-semibold w-auto">I am a entry level web developer working and growing with
             MERN stack 
            based web app developing also a CSE lecturer in a college.</p>
        </div>

        <img src="https://i.ibb.co/sQLgjfz/oie-x9s-G4-Pdy4qz-V.png" alt="" 
        className="mt-5 w-full h-auto object-cover bg-no-repeat items-center"/>
      </div>
    </div>
  );
};

export default About;
