// App.js
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ServicesComponent from './Pages/Services';
import ServiceDetail from './Pages/ServiceComponents/ServiceDetails';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import Layout from './Components/Layout';
import Loading from './Components/Loading'; // Import the Loading component
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });

    // Simulate a loading delay (you can replace this with actual data fetching)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<ServicesComponent />} />
        <Route path="services/:serviceId" element={<ServiceDetail />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
