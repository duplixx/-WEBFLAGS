import React from 'react'
import { Button } from './ui/button'

function Contact() {
  return (
    <div className="bg-black text-white p-4 rounded-lg container border ">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form className="flex flex-col gap-4 text-black">
        <input type="text" placeholder="Name" className="p-2 rounded-md" />
        <input type="email" placeholder="Email" className="p-2 rounded-md" />
        <textarea placeholder="Message" className="p-2 rounded-md"></textarea>
        <Button className=" items-end bg-white text-black p-2 rounded-md hover:text-white flex ">Submit</Button>
      </form>
    </div>
  )
}

export default Contact