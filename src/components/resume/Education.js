import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[500px] w-[1200px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology in Computer Science and Engineering "
            subTitle="INDIAN INSTITUTE OF TECHNOLOGY (INDIAN SCHOOL OF MINES) DHANBAD 2021 - PRESENT "
            result="6.61"
            des="Pursuing bachelor of technology in computer science and engineering ."
          />
          <ResumeCard
            title="HIGHER SECONDARY CBSE 2021"
            subTitle="JAWAHAR NAVODAYA VIDYALAYA ,KOTTAYAM ,KERALA "
            result="95 %"
            des="Completed higher secondary education from jnv kottayam with dakshana foundation"
          />
          <ResumeCard
            title="SECONDARY CBSE 2019"
            subTitle="JAWAHAR NAVODAYA VIDYALAYA ,South 24 parganas ,West bengal "
            result="89.6 %"
            des="Completed higher secondary education from jnv 1 south 24 parganas"
          />
        </div>
      </div>
      
      
    </motion.div>
  );
}

export default Education