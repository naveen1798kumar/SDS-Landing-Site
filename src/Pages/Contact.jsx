import React from 'react';

function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name:</label>
            <input type="text" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-gray-700">Email:</label>
            <input type="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          
          <div>
            <label className="block text-gray-700">Message:</label>
            <textarea name="message" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" rows="4"></textarea>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Submit
          </button>
        </form>

      </div>
    </div>
  );
}

export default Contact;
