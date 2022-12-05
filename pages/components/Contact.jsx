import React from 'react'

export default function Contact() {
  return (
     <div id="contact" className="lg:w-2/3 md:w-full first:flex flex-col mb-10 mx-auto">
      <div className="mx-auto text-3xl underline text-orange-300 text-center pb-6">contact</div>
        <div className="flex justify-center items-center">
           <form
              action="https://getform.io/f/(customSlugHere)"
              method="POST"
              className="flex flex-col w-full md:w-7/12"
           >
              <input
                 type="text"
                 name="name"
                 placeholder="name"
                 className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <input
                 type="text"
                 name="email"
                 placeholder="email"
                 className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <textarea
                 name="message"
                 placeholder="message"
                 rows="10"
                 className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <button
                 type="button"
                 className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-400 to-orange-500 drop-shadow-md hover:stroke-white"
              >
                 submit
              </button>
           </form>
        </div>
     </div>
  )
}

