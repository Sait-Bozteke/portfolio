import React from "react";
import Kendim from "../assets/kendim.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-5">
          {/* <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-center'>
              About Me
            </p>
          </div> */}
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-5 px-4">
          <div>
            <img src={Kendim} alt="" />
          </div>
          <div>
         
            <div className="sm:text-left text-4xl font-bold">
              <p>Hi. I'm Sait</p>
            </div>
            <div>
              <p>
                A curious full-blown developer with strong creative thinking
                skills, high energy, and integrity, skilled in developing
                complex solutions, interested in writing new code. Has the
                ability to communicate appropriately with team members and
                always eager to learn about various technologies, tools, and
                libraries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
