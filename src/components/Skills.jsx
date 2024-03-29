import React, { useState } from 'react';

function SkillsSection() {
  const [expandedSkills, setExpandedSkills] = useState({});

  const skills = [
    {
      name: 'HTML',
      level: 90,
      description: 'Proficient in structuring and organizing web content.',
      icon: 'fas fa-code', // Font Awesome icon for HTML
    },
    {
      name: 'CSS',
      level: 80,
      description: 'Skilled in styling and visual presentation of web pages.',
      icon: 'fas fa-palette', // Font Awesome icon for CSS
    },
    {
      name: 'JavaScript',
      level: 75,
      description: 'Comfortable with front-end and back-end development using JavaScript.',
      icon: 'fas fa-js', // Font Awesome icon for JavaScript
    },
    {
      name: 'Bootstrap',
      level: 60,
      description: 'Familiar with grid system and components for rapid prototyping.',
      icon: 'fas fa-bootstrap', // Font Awesome icon for Bootstrap
    },
    {
      name: 'Tailwind CSS',
      level: 85,
      description: 'Experience with utility-first approach for flexible styling.',
      icon: 'fas fa-wind', // Font Awesome icon for Tailwind CSS
    },
    {
      name: 'React',
      level: 80,
      description: 'Building interactive and reusable UI components with React.',
      icon: 'fas fa-react', // Font Awesome icon for React
    },
    {
      name: 'Node.js',
      level: 70,
      description: 'Server-side development using JavaScript.',
      icon: 'fas fa-node-js', // Font Awesome icon for Node.js
    },
    {
      name: 'Express.js',
      level: 65,
      description: 'Creating web applications with the Express framework.',
      icon: 'fas fa-express', // Font Awesome icon for Express.js
    },
    {
      name: 'MongoDB',
      level: 60,
      description: 'NoSQL database for flexible data storage.',
      icon: 'fas fa-database', // Font Awesome icon for MongoDB
    },
  ];

  const toggleSkill = (skillName) => {
    setExpandedSkills((prevExpandedSkills) => ({
      ...prevExpandedSkills,
      [skillName]: !prevExpandedSkills[skillName],
    }));
  };

  return (
    <section className="bg-zinc-900 py-20 text-white py-20 px-4">
      <h2 className="text-5xl center font-bold mb-8">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-gray-700 rounded-lg p-4 shadow-md hover:bg-gray-600 cursor-pointer"
          >
            <div className="flex items-center mb-4">
              <i className={`text-3xl text-indigo-500 mr-4 ${skill.icon}`}></i>
              <h3 className="text-lg font-medium group-hover:text-indigo-500">
                {skill.name}
              </h3>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full mb-2">
              <div
                className="w-full h-3 bg-indigo-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <button
              className="text-sm text-gray-400 hover:text-gray-300 mt-2"
              onClick={() => toggleSkill(skill.name)}
            >
              {expandedSkills[skill.name] ? 'Hide Details' : 'Show Details'}
            </button>
            {expandedSkills[skill.name] && (
              <p className="text-gray-400 mt-4">{skill.description}</p>
            )}
          </div>
        ))}
      </div>    
    </section>
  );
}

export default SkillsSection;
