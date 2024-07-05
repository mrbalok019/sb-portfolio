import React from 'react';
import  './banner.css';

const Banner = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center gap-6 p-6 mx-auto sm:py-12 
                lg:py-24 lg:flex-row ">
                    <div className="flex flex-col justify-center  p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        
                        <p className="mt-6 mb-4 text-xl font-bold "> Hi there, It's me 
                        </p>
                        <h1 id='name1' className="text-3xl font-bold leading-none lg:text-5xl h-auto py-2">
                            Shanchayan <br /> Bhattacharyya
                        </h1>
                        <p className="mt-6 mb-4 text-xl lg:text-2xl font-bold ">
                            Learning & Exploring Website Development with Innovation

                        </p>
                        
                        
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 
                    lg:h-96 xl:h-112 2xl:h-128 ">
                        <img src="https://i.ibb.co/wchXBwR/IMG-20240704-205159-FILEminimizer.jpg" alt="" 
                        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-t-full" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;