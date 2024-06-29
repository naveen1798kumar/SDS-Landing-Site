import React from "react";
import { TiTick } from "react-icons/ti";
import "./CourseDetails4.css";

const CourseDetails4 = () => {
  return (
    <>
      <div className="w-[100%] h-auto  ">
        <div className="learn w-[100%] h-auto  text-[rgba(248,246,248)] px-10 py-10">
          <div className="learn1 w-[100% ]  h-auto px-10 py-10">
            <h2 className="lg:text-5xl w-[100%] text-4xl font-semibold p-5 mb-5">
              What You'll Learn
            </h2>
            <div className="b flex flex-col lg:flex-row py-5">
              <div className=" lg:w-[50vw]  lg:px-5 px-2">
                <div className="flex flex-row gap-5">
                  <TiTick className="text-2xl mt-5 ml-2 " />
                  <p className="text-lg leading-relaxed  py-5">
                    {" "}
                    Practical projects and hands-on exercises, students will
                    apply theoretical knowledge to real-world scenarios.
                  </p>
                </div>

                <div className="flex flex-row gap-5 ">
                  <TiTick className="text-4xl mt-5 ml-2 " />
                  <p className="text-lg leading-relaxed  py-5">
                    {" "}
                    Apply user interface and user experience (UI/UX) principles
                    and best practices, manage your code with GitHub
                    repositories and branches.
                  </p>
                </div>
                <div className="flex flex-row gap-5 ">
                  <TiTick className="text-2xl mt-5 ml-2 " />
                  <p className="text-lg leading-relaxed  py-5">
                    Learn core backend languages such as Python, Node.js, Java,
                    or PHP, understanding their syntax, data structures, and how
                    they interact with databases.
                  </p>
                </div>
              </div>

              <div className=" lg:w-[50vw] lg:px-5 px-2 ">
                <div className="flex flex-row gap-5 ">
                  <TiTick className="text-4xl mt-5 ml-2 " />
                  <p className="text-lg leading-relaxed  py-5">
                    {" "}
                    Learn how to develop web pages using programming languages
                    like HTML, CSS, JavaScript, and React.
                  </p>
                </div>
                <div className="flex flex-row gap-5 ">
                  <TiTick className="text-4xl mt-5  ml-2" />
                  <p className="text-lg leading-relaxed  py-5">
                    {" "}
                    Gain technical experience through hands-on labs and projects
                    and build a portfolio to showcase your work to potential
                    employers.
                  </p>
                </div>
                <div className="flex flex-row gap-5 ">
                  <TiTick className="text-4xl mt-5  ml-2" />
                  <p className="text-lg leading-relaxed  py-5">
                    {" "}
                    Dive into popular backend frameworks like Mangodp,
                    Express.js, Spring Boot, Nodejs, gaining proficiency in
                    routing, middleware, authentication, and integrating with
                    frontend technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails4;
