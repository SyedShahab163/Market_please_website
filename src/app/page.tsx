import { data } from "autoprefixer"
import { client } from "../app/lib/sanityClient"
import { Image as IImage } from "sanity"
import { category } from '../../sanity/category';
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
// import ProductCard from "./ProductCard";
import  Header from "@/app/components/layout/header"
import Hero from "./components/layout/views/Hero";

//  const name = "jacket"
export const getProductsData = async () => {
 const res = await client.fetch(`*[_type=="product"]{
  price,
  _id,
  title,
  image,
  category -> {
    name
  }
 }`,{
  
 })
 return res
}

interface IProduct {
  title:string,
  _id: string,
  description:string,
  image:IImage,
  price: number,
  category:{
    name:string
  }
}

export default async function Home() {

   const data:IProduct[] = await getProductsData()
  //  console.log(data)  
  return (
    <>
    <Header/>
    <Hero/>
   <div className="grid grid-cols-[auto,auto,auto] justify-center gap-x-10">
 
     {data.map((item) => (
      <div>   
      {/* <ProductCard item={item}/> */}
      </div>
     ))}
   </div>
   </>
  )
}
   
// grid grid-cols-[auto,auto,auto] justify-center gap-x-10

   
   
   
   
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  
