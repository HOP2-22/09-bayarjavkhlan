import React from 'react'
import {
  CloudArrowDownIcon,
  CircleStackIcon,
  ServerStackIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/solid'
import bgImg from '../../IMG/cyber-bg.png'


const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 ">
                <p className="text-2xl">Uniquue sequencing & Production</p>
                <h1 className="py-3 text-5xl md:text-7xl font-bold">Cloud management</h1>
                <p className="text-2xl">This is our Tech Brand</p>
                <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
            </div>
            <div>
                <img src={bgImg} className="w-full" alt="" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[768px] bottom-[5%] md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl sm:'>
                <p>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 '><CloudArrowDownIcon className='h-6 text-indigo-500'/> App Security</p>
                    <p className='flex px-4 py-2 '><CircleStackIcon className='h-6 text-indigo-500'/> Dashboard Design</p>
                    <p className='flex px-4 py-2 '><ServerStackIcon className='h-6 text-indigo-500'/> Cloud Data</p>
                    <p className='flex px-4 py-2 '><PaperAirplaneIcon className='h-6 text-indigo-500'/> Api</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
