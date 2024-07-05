import React from 'react';
import SectionTitle from './SectionTitle';

const Skillset = () => {
    return (
        <div className='px-12 pb-10'>
            <SectionTitle
            heading="My Skillset"
            text="I've been working on developing for some years. 
           I focus on interactively enabling corporate functionalities rather than front-end catalysts for change. 
           Here are some expertise of mine."
            />

            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-auto'>
                <button className='btn btn-circle w-28 h-28 bg-orange-400'>
                     <i className="programming lang-c w-24 h-24"></i>
                </button>
                <button className='btn btn-circle w-28 h-28 bg-orange-400'>
                     <i className="programming lang-cpp w-24 h-24"></i>
                </button>
                <button className='btn btn-circle w-28 h-28 bg-orange-400'>
                     <i className="programming lang-html w-24 h-24"></i>
                </button>
                <button className='btn btn-circle w-28 h-28 bg-orange-400'>
                     <i className="programming lang-css w-16 h-16"></i>
                </button>
                <button className='btn btn-circle w-28 h-28 bg-orange-400'>
                     <i className="programming lang-javascript w-24 h-24 rounded-full"></i>
                </button>
                <button className='btn btn-circle w-28 h-28 bg-orange-400'>
                     <img className="w-24 h-24" src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"/>
                </button>
            
                <button className='btn btn-circle w-28 h-28 bg-orange-400'>
                     <img className="w-24 h-24" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind"/>
                </button>
            
                <button className='btn btn-circle w-28 h-28 bg-orange-400'>
                     <img className="w-20 h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"/>
                </button>
            
                <button className='btn btn-circle w-28 h-28 bg-orange-400'>
                     <img className="w-20 h-20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"/>
                </button>
            
                <button className='btn btn-circle w-28 h-28 bg-orange-400'>
                     <img className="w-24 h-24" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"/>
                </button>
            
           
         
            </div>
        </div>
    );
};

export default Skillset;