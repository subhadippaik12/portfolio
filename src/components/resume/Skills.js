import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Skill</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">DATA STRUCTURE </p>
           
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">ALGORITHEMS</p>
            
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">OBJECT ORIENTED PROGRAMMING</p>
            
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Operating Systems</p>
            
          </div>
         
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">React</p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">HTML</p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">CSS3</p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">JAVASCRIPT</p>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}

export default Skills