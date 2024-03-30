import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations (optional)

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Implement form submission logic here (e.g., email sending or API call)
    // For example:
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      // Handle errors
      console.error('Error submitting form:', response.statusText);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} 
      className="min-h-screen bg-gray-900 text-white px-4 py-16 md:px-20 md:py-40 flex flex-col space-y-12 md:flex-row md:space-y-0" // Responsive layout
    >
      <div className="flex flex-col space-y-4 md:w-1/2">
      <h2 className="text-3xl lg:text-4xl text-white font-bold mb-4">Contact Information</h2>
        <div className="flex flex-col gap-4 text-gray-300">
          <p><span className="font-bold">Name:</span> Sattva Doshi</p>
          <p><span className="font-bold">Email:</span> sattvadoshi103@gmail.com</p>
          <p><span className="font-bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/sattva-doshi-37b0851bb/" className="text-blue-400 hover:text-blue-300">www.linkedin.com/in/sattva-doshi/</a></p>
          <p><span className="font-bold">GitHub:</span> <a href="#" className="text-blue-400 hover:text-blue-300">github.com/johndoe</a></p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="md:w-1/2">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full mb-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full mb-4"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full h-32 mb-4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Send Message
        </button>
        {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
      </form>
    </motion.div>
  );
};

export default Contact;