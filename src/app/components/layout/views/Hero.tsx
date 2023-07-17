import React from 'react'
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import Heroimage from "/public/Heroimage.webp"
import Image from 'next/image'
const Hero = () => {
  return (
    <section className='flex px-8 py-6'>
        {/*    left Div  */}
       <div>
       <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-300'>Badge</Badge>
       <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
       An Industrial Take on Streetwear      </h1>
       <p className="leading-7 [&:not(:first-child)]:mt-6">
        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <Button className='bg-black text-white h-12 px-8 mt-4'>Start Shopping</Button>

       </div>
         {/*    left Div  */}
         <div>
        <Image src={Heroimage} alt='hero'/>
         </div>
        </section>
  )
}

export default Hero