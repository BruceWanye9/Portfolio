import React from 'react';

const About = () => {
  return (
    <section name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
      <div className='max-w-screen-lg p-4 flex flex-col justify-center w-full h-full mx-auto'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='mt-20 text-xl'>
          Welcome to my portfolio! I'm Harsh Chaudhari, a passionate developer specializing in Android and Go programming.
        </p><br />
        <p className='text-xl'>
          In my work, I prioritize clean, efficient code and a user-centric approach. Whether it's crafting elegant Android apps or designing robust backend systems with Go, I aim to deliver solutions that not only meet but exceed expectations.
        </p>
        <br/>
        <p className='text-xl'>
        I'm excited about the future of technology and the endless possibilities it holds. If you're looking for a dedicated developer with a passion for innovation, I'd love to chat and explore how we can work together to bring your ideas to life.
        </p>
      </div>
    </section>
  );
}

export default About;
