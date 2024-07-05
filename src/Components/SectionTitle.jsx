/* eslint-disable react/prop-types */
import React from 'react';

const SectionTitle = ({heading,text}) => {
    return (
        <div className='flex flex-col mt-10 mb-10'>
            <h1 className='mb-5 text-2xl lg:text-4xl font-bold'>{heading} </h1>
            <p className='text-lg lg:text-xl font-medium text-slate-600 w-2/3'>{text} </p>
        </div>
    );
};

export default SectionTitle;