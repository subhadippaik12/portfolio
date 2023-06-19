import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="BLOGLY"
          des=" A web application that allows users to write blogs, add pictures, read other’s blogs.
          Users can find their own blogs and they can edit and delete their own blogs.
          Has authentication and login features ."
          src={projectOne}
        />
        <ProjectsCard
          title="ALT+CONNECT"
          des=" A web application that allows users to talk with their friends and to make a new friend
          Users can make profile picture in the form of avtars
          Has authentication and login features."
          src={projectTwo}
        />
        <ProjectsCard
          title="PORTFOLIO WEBSITE"
          des=" A website that contains my personal details like education,Skills , achievements, projects and contact details at one place .
          "
          src={projectThree}
        />
        
      </div>
    </section>
  );
}

export default Projects