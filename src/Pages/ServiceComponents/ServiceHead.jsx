import React from "react";
import ServiceBg from "../../assets/Service-Bg.jpeg";

function ServiceHead() {
  return (
    <>
      <div className="container h-auto relative" data-aos="fade-in">
        <div
          className="absolute inset-0 bg-cover bg-start"
          style={{
            backgroundImage: `url(${ServiceBg})`,
            filter: "blur(8px)",
          }}
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        <div className="relative z-10 container mx-auto p-4 my-auto sm:my-14">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#2563EB]" data-aos="fade-up">Explore Our Services</h1>
          <p className="text-justify indent-20 text-2xl" data-aos="fade-up" data-aos-delay="200">
            Drive your business forward with SDS Technologies' strategic digital
            and social media marketing services. We leverage data-driven
            insights and creative strategies to elevate your brand presence,
            engage your audience, and achieve measurable growth.
          </p>
          <br />
          <p className="text-justify indent-20 text-2xl" data-aos="fade-up" data-aos-delay="300">
            Our mission at SDS Technologies is to empower businesses and
            individuals with innovative digital solutions and expert training.
            We envision a future where technology fuels success and drives
            meaningful connections in the digital age.
          </p>
        </div>
      </div>
    </>
  );
}

export default ServiceHead;
