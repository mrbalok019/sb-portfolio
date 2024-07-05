/* eslint-disable react/prop-types */
import React from 'react';

const SectionTitle = ({heading,text}) => {
    return (
        <div className='flex flex-col mt-10 mb-6'>
            <h1 className='mb-5 text-2xl lg:text-4xl font-bold'>{heading} </h1>
            <p className='text-lg lg:text-2xl font-medium text-slate-600'>{text} </p>
        </div>
    );
};

export default SectionTitle;