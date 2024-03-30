import React, { useState } from 'react';

const ConnectPage = () => {
    const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);

    const handleSocialMediaClick = (socialMedia) => {
        setSelectedSocialMedia(socialMedia);
    };

    return (
        <div className="bg-blue-300 min-h-[40vh] mx-16 rounded-xl text-black flex flex-col items-center justify-center">
            <h1 className="text-4xl mb-8">Connect with Me</h1>
            <div className="flex flex-wrap justify-center gap-4">
                <button
                    className={`bg-white text-black-300 px-4 py-2 rounded-lg ${selectedSocialMedia === 'Linkedin' ? 'border-2 border-blue-500' : ''}`}
                    onClick={() => handleSocialMediaClick('Linkedin')}
                >
                    <a target='_blank' href="https://www.linkedin.com/in/sattva-doshi-37b0851bb/">Linkedin</a>
                </button>
                <button
                    className={`bg-white text-black-300 px-4 py-2 rounded-lg ${selectedSocialMedia === 'Twitter' ? 'border-2 border-blue-500' : ''}`}
                    onClick={() => handleSocialMediaClick('Twitter')}
                >
                    <a target='_blank' href="https://twitter.com/Sattva_Doshi">Twitter</a>
                </button>
                <button
                    className={`bg-white text-black-300 px-4 py-2 rounded-lg ${selectedSocialMedia === 'Instagram' ? 'border-2 border-blue-500' : ''}`}
                    onClick={() => handleSocialMediaClick('Instagram')}
                >
                    <a target='_blank' href="https://www.instagram.com/__sattva__10/">Instagram</a>
                </button>
                <button
                    className={`bg-white text-black-300 px-4 py-2 rounded-lg ${selectedSocialMedia === 'Github' ? 'border-2 border-blue-500' : ''}`}
                    onClick={() => handleSocialMediaClick('Github')}
                >
                    <a target='_blank' href="https://github.com/SattvaDoshi">Github</a>
                </button>
            </div>
            {selectedSocialMedia && (
                <p className="text-white mt-4">You selected {selectedSocialMedia}</p>
            )}
        </div>
    );
};

export default ConnectPage;