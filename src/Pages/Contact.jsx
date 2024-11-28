import React from 'react';
import { assets } from '../assets/assets'; 
import NewLetterBox from '../Components/NewLetterBox';
import Title from '../Components/Tittle';

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        {/* Image Section */}
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="Contact Us"
        />
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="text-gray-600 font-semibold">Our Store</p>
          <p className="text-gray-500">
            5487 Willar Station<br />Suite 673, Washington
          </p>
          <p className="text-gray-500">
            Tel: (415) 55-0122<br />Email: admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our team and job openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Job
          </button>
        </div>
      </div>
      <NewLetterBox />
    </div>
  );
};

export default Contact;
