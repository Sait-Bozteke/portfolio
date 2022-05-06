import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sait, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I was born and raised in Turkey.  After completing my primary, secondary and high school education, I studied mathematics.  After working in a private school for a year, I learned English and started teaching at international schools abroad.  I came to the Netherlands after working as a teacher for 6 years.  As soon as I came to the Netherlands, I immediately learned Dutch.  I love learning languages.  Afterwards, I attended a few courses related to Programming.  I loved it because it gave the feeling of learning a new language after I joined.  After that day, I always learn different programming languages.  My areas of expertise include learning new skills and programming languages ​​quickly, problem solving, responsive design principles, website optimization, and code editing methods.  So far I have React.js, Redux, JavaScript, HTML, CSS, Bootstrap, SASS,  Python, Linux, SDLC, Agile methods, Jira, and Git/GitHub under my belt.  I'm still eagerly grabbing any other programming languages, frameworks or principles that I can integrate into the coding web in my head.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
