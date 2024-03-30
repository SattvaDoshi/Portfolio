import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const SkillItem = ({ back,title, percentage }) => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    gsap.to(progressBarRef.current, {
      duration: 3,
      ease: 'power3.out',
      width: `${percentage}%`,
    });
  }, [percentage]); 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }} 
      className="flex flex-col space-y-2 mb-4"
    >
      <h4 className="text-lg font-medium text-white">{title}</h4>
      <div className="relative w-full h-5 rounded-full bg-gray-700">
        <motion.div
          ref={progressBarRef}
          className={`absolute h-full rounded-full ${back}`}
          
          />
      
      </div>
      <p className="text-xs text-gray-400">{percentage}%</p>
    </motion.div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { title: 'React', percentage: 80 },
    { title: 'JavaScript', percentage: 90 },
    { title: 'HTML & CSS', percentage: 95 },
    { title: 'Next.js', percentage: 75 },
  ];

  const backendSkills = [
    { title: 'Node.js', percentage: 80 },
    { title: 'Express.js', percentage: 85 },
    { title: 'MongoDB', percentage: 70 },
    { title: 'SQL', percentage: 75 },
  ];

  const languageSkills = [
    { title: 'C/C++', percentage: 85 },
    { title: 'Java', percentage: 75 },
    { title: 'Python', percentage: 70 },
    { title: 'JavaScript', percentage: 85 },
  ];  

  const miscSkills = [
    { title: 'Git', percentage: 90 },
    { title: 'Creative Innovation', percentage: 80 },
    { title: 'Problem Solving', percentage: 85 },
    { title: 'Testing', percentage: 75 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8 md:px-20 md:py-16 flex flex-col items-center space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        <div className="border-2 w-[80vw] md:w-[30vw] rounded-lg p-6">
          <h3 className="text-3xl text-blue-500 font-bold mb-4">Frontend</h3>
          {frontendSkills.map((skill) => (
            <SkillItem back="bg-blue-500" key={skill.title} {...skill} />
          ))}
        </div>

        <div className="border-2 w-[80vw] md:w-[30vw] rounded-lg p-6">
          <h3 className="text-3xl text-red-400 font-bold mb-4">Backend</h3>
          {backendSkills.map((skill) => (
            <SkillItem back="bg-red-500" key={skill.title} {...skill} />
          ))}
        </div>

        <div className="border-2 w-[80vw] md:w-[30vw] rounded-lg p-6">
          <h3 className="text-3xl text-green-400 font-bold mb-4">Languages</h3>
          {languageSkills.map((skill) => (
            <SkillItem back="bg-green-500" key={skill.title} {...skill} />
          ))}
        </div>

        <div className="border-2 w-[80vw] md:w-[30vw] rounded-lg p-6">
          <h3 className="text-3xl text-purple-600 font-bold mb-4">Miscellaneous</h3>
          {miscSkills.map((skill) => (
            <SkillItem back="bg-purple-600" key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
