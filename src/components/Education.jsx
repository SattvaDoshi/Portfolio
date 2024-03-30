import { useState } from 'react';

const Education = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-zinc-900 min-h-[80vh] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-white m-16">Educational Background</h1>
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              className={`cursor-pointer bg-gray-800 rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 ${
                selectedOption === 1 ? 'ring-4 ring-amber-500' : ''
              }`}
              onClick={() => handleOptionClick(1)}
            >
              <h2 className="text-2xl font-semibold text-white mb-2">B.Tech</h2>
              <p className="text-gray-400">Bachelor of Technology</p>
            </div>
            <div
              className={`cursor-pointer bg-gray-800 rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 ${
                selectedOption === 2 ? 'ring-4 ring-amber-500' : ''
              }`}
              onClick={() => handleOptionClick(2)}
            >
              <h2 className="text-2xl font-semibold text-white mb-2">H.S.C</h2>
              <p className="text-gray-400">Higher Secondary Certificate</p>
            </div>
            <div
              className={`cursor-pointer bg-gray-800 rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 ${
                selectedOption === 3 ? 'ring-4 ring-amber-500' : ''
              }`}
              onClick={() => handleOptionClick(3)}
            >
              <h2 className="text-2xl font-semibold text-white mb-2">S.S.C</h2>
              <p className="text-gray-400">Secondary School Certificate</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-8">
          {selectedOption === 1 && (
            <div>
              <h2 className="text-3xl font-semibold text-white mb-4">Bachelor of Technology</h2>
              <p className="text-gray-400 mb-2">
                Dwarkadas J. Sanghvi College of Engineering | Mumbai
              </p>
              <p className="text-gray-400 mb-2">Major: Information Technology</p>
              <p className="text-gray-400 mb-2">Tenure: 4 Years (2022-2026)</p>
              <p className="text-gray-400 mb-2">CGPA: 8.32/10 </p>
            </div>
          )}
          {selectedOption === 2 && (
            <div>
              <h2 className="text-3xl font-semibold text-white mb-4">
                Higher Secondary Certificate Examination
              </h2>
              <p className="text-gray-400 mb-2">
                Sardar Vallabbhai Patel  Science and Commerce College | Mumbai
              </p>
              <p className="text-gray-400 mb-2">Major: Science</p>
              <p className="text-gray-400 mb-2">Tenure: 2 Years (2020-2022)</p>
              <p className="text-gray-400 mb-2">CET : 95.86 %tile</p>
              <p className="text-gray-400 mb-2">JEE : 91.86 %tile</p>
            </div>
          )}
          {selectedOption === 3 && (
            <div>
              <h2 className="text-3xl font-semibold text-white mb-4">Secondary School Certificate Examination</h2>
              <p className="text-gray-400 mb-2">
                J. H. Poddar High School | Mumbai
              </p>
              <p className="text-gray-400 mb-2">Tenure: 13 Years (2007-2020)</p>
              <p className="text-gray-400 mb-2">Percentage : 91.30%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
