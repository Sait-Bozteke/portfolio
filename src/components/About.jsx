import React from 'react';
import Kendim from "../assets/kendim.jpg"

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-5'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-center'>
              About
            </p>
          </div>
         
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-5 px-4'>
            <div><img src={Kendim} alt="" /></div>
            <div> <div className='sm:text-left text-4xl font-bold'>
              <p>Hi. I'm Sait</p>
            </div>
            <br />
            <div><p>I was born and raised in Turkey.  After completing high school education, I studied mathematics. I came to the Netherlands after working as a teacher for 6 years.  As soon as I came to the Netherlands, I immediately learned Dutch.  I love learning languages.  Afterwards, I attended a few courses related to Programming.  I loved it because it gave the feeling of learning a new language after I joined.  After that day, I always learn different programming languages.  My areas of expertise include learning new skills and programming languages ​​quickly, problem solving, responsive design principles, website optimization, and code editing methods.  So far I have React.js, Redux, JavaScript, HTML, CSS, Bootstrap, SASS,  Python, Linux, SDLC, Agile methods, Jira, and Git/GitHub under my belt.  I'm still eagerly grabbing any other programming languages, frameworks or principles that I can integrate into the coding web in my head.</p>  </div>
              
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
