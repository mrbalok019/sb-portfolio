import React from 'react';
import SectionTitle from '../../Pages/SectionTitle';

const Projects = () => {
    return (
        <div className='px-12 pb-10'>
            <SectionTitle
            heading="My Projects"
            text="Working on interactive UI/UX designs and dynamic web applications with React.
            Here are some of projects I've been working on lately."
            />


            <div >
            {/* <img class="paralaxThumb1" src="assets/img/gallery/img-8.jpg" alt="gallery" style="will-change: transform; transform: 
            translate3d(0px, 0px, 0px); transition: transform 5s cubic-bezier(0, 0, 0, 1) 0s;"></img>
             */}
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-6'>
                <div className='row-span-1  flex flex-col' >
                   <div>
                    <a href="https://sb-real-estates.netlify.app">
                    <img src="https://i.ibb.co/TKxBmgN/sbestates-SS-FILEminimizer.jpg" alt=""  
                    //  style={{
                    //     willChange: "transform",
                    //     transform: "translate3d(0px, 0px, 0px)",
                    //     transition: "transform 5s cubic-bezier(0, 0, 0, 1) 0s"
                    //   }}
                      className='object-cover w-auto h-auto  hover:scale-110'
                    />
                    </a>
                   </div>

                </div>
                <div className='row-span-2 '>
                <div className='mt-24'>
                    <a href="https://sb-real-estates.netlify.app">
                    <img src="https://i.ibb.co/K2hppVz/studygrantss.jpg" alt=""  
                    //  style={{
                    //     willChange: "transform",
                    //     transform: "translate3d(0px, 0px, 0px)",
                    //     transition: "transform 5s cubic-bezier(0, 0, 0, 1) 0s"
                    //   }}
                      className='object-cover w-auto h-auto  hover:scale-110'
                    />
                    </a>
                   </div>

                </div>
                <div className='row-span-2 '>
                <div>
                    <a href="https://sb-real-estates.netlify.app">
                    <img src="https://i.ibb.co/TKxBmgN/sbestates-SS-FILEminimizer.jpg" alt=""  
                    //  style={{
                    //     willChange: "transform",
                    //     transform: "translate3d(0px, 0px, 0px)",
                    //     transition: "transform 5s cubic-bezier(0, 0, 0, 1) 0s"
                    //   }}
                      className='object-cover w-auto h-auto  hover:scale-110'
                    />
                    </a>
                   </div>

                </div>
                <div className='row-span-2 '>
                <div>
                    <a href="https://sb-real-estates.netlify.app">
                    <img src="https://i.ibb.co/TKxBmgN/sbestates-SS-FILEminimizer.jpg" alt=""  
                    //  style={{
                    //     willChange: "transform",
                    //     transform: "translate3d(0px, 0px, 0px)",
                    //     transition: "transform 5s cubic-bezier(0, 0, 0, 1) 0s"
                    //   }}
                      className='object-cover w-auto h-auto  hover:scale-110'
                    />
                    </a>
                   </div>

                </div>
              

            </div>
            
            <a href="https://github.com/mrbalok019" className='flex justify-center mt-6 '>
            <button className='rounded-xl btn btn-neutral text-white' >
                View All Projects
            </button>
            </a>

        </div>
    );
};

export default Projects;