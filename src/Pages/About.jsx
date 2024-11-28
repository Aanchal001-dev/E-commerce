import React from 'react'
import { assets } from '../assets/assets'
import Title from '../Components/Tittle'
import NewLetterBox from '../Components/NewLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>

        
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias provident consequuntur debitis numquam rerum placeat, expedita fuga dignissimos labore natus autem eum dolorem voluptas suscipit voluptates esse ea, aliquid facere?</p>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quia, saepe voluptatum, pariatur provident ad ex nulla molestias corporis, minima accusantium! Sed dolorum vitae corrupti incidunt vel autem delectus. Aspernatur!
        Tempore alias numquam maxime natus, similique vitae optio distinctio doloremque soluta voluptatem qui excepturi molestias iusto minima est nobis. Explicabo voluptates commodi ex blanditiis iusto vero voluptatem maxime debitis officia!</p>
        <b className='text-gray-800'>Our Misssin</b>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam officia nisi minima enim officiis quis, quia sit quos alias similique eum necessitatibus velit, molestiae odit praesentium veritatis ducimus cupiditate architecto.</p>

        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gp-5">
          <b>Ouality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at amet necessitatibus voluptatibus illum laborum illo expedita quas, iste voluptatum natus nam. Saepe, id reprehenderit consequatur d
            olorem ut animi itaque.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gp-5">
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at amet necessitatibus voluptatibus illum laborum illo expedita quas, iste voluptatum natus nam. Saepe, id reprehenderit consequatur d
            olorem ut animi itaque.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gp-5">
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at amet necessitatibus voluptatibus illum laborum illo expedita quas, iste voluptatum natus nam. Saepe, id reprehenderit consequatur d
            olorem ut animi itaque.</p>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default About
