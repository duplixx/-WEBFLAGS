import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <div className='container '>
      <div className='mission-vision-team flex-1'>
        <h2 className='text-xl font-bold'>Our Mission</h2>
        <div className='md:flex md:flex-cols flex-row w-full  justify-center items-start md:space-x-[80px] space-y-4 '>
        <p className='text-lg mt-4'>
          At WEBFLAGS, our mission is to empower businesses with cutting-edge e-commerce solutions that drive growth and success in the digital marketplace. We strive to revolutionize the way businesses engage with their customers online, providing innovative, bespoke solutions tailored to meet their unique needs and objectives.
        </p>
        <Image
              src="https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg"
              alt=""
              height={400}
              width={450}
              className='h-full'
            />
        </div>
        
        <div className='md:flex md:flex-cols flex-row w-full  justify-center items-start md:space-x-[80px] space-y-4 '>
        <Image
              src="https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg"
              alt=""
              height={400}
              width={450}
              className='h-full'
            />
            <div className='flex flex-col space-y-4'>
            <h2 className='text-xl font-bold'>Our Vision</h2>
            <p className='text-lg'>
          Our vision is to be the premier provider of e-commerce services, setting new standards of excellence and driving industry-wide innovation. We envision a future where businesses of all sizes can thrive in the digital age, empowered by our advanced e-commerce solutions and unparalleled expertise.
        </p>
            </div>
        
        </div>
        <div className='md:flex md:flex-cols flex-row w-full  mt-8 justify-center items-start md:space-x-[80px] space-y-4 '>
        <Image
              src="https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg"
              alt=""
              height={400}
              width={450}
              className='h-full'
            />
            <div className='flex flex-col space-y-4'>
            <h2 className='text-xl font-bold'>Our Team</h2>
            <p className='text-lg'>
            At the heart of WEBFLAGS is our team of experienced software engineers, each with a proven track record of success in top-tier companies around the world. With degrees from prestigious Indian universities, our engineers bring a wealth of knowledge and expertise to every project, ensuring the highest standards of technical excellence.
        </p>
            </div>
        
        </div>
        <h2 className='text-xl font-bold'>Our Approach</h2>
        <div className='md:flex md:flex-cols flex-row w-full  justify-center items-start md:space-x-[80px] space-y-4 '>
        <p className='text-lg mt-4'>
        Our approach is collaborative, transparent, and results-driven. We believe that successful partnerships are built on trust, communication, and mutual respect. That's why we work closely with our clients to understand their unique needs and objectives, providing tailored solutions that deliver tangible results and drive business growth.
        </p>
        <Image
              src="https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg"
              alt=""
              height={400}
              width={450}
              className='h-full'
            />
        </div>
      </div>

    </div>
  );
}

export default About;
