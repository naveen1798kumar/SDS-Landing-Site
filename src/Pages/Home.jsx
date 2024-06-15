import React from 'react';

import Hero from './HomeComponents/Hero';

function Home() {
  return (
    <div className="h-screen  p-6 flex flex-col justify-center items-center" >
      <Hero/>
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
    </div>
  );
}

export default Home;
