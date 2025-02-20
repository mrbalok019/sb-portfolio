import React from 'react';
import SectionTitle from './SectionTitle';

const Education = () => {
    return (
        <div className='px-12 pb-10'>
            {/* <SectionTitle
            heading="My Education & Trainings"
            /> */}
            

            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
                                <h3 className=" text-2xl lg:text-4xl font-bold">My Education <br /> 
                                & <br /> Training</h3>

                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl font-semibold tracking-wide">MSc in CSE </h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">2018-2019</time>
                                    <p className="mt-3">from Jahangirnagar University</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl font-semibold tracking-wide">BSc in CSE</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">2013-2016</time>
                                    <p className="mt-3">from National University</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Web Development with React</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">2024</time>
                                    <p className="mt-3">from Programming hero</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;