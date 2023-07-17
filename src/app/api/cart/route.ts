 import { NextRequest, NextResponse } from "next/server"
  import { db ,cartTable} from "@/app/lib/drizzle"
  import {v4 as uuid} from "uuid"
import { cookies } from "next/headers"
import { eq} from "drizzle-orm"; 

cookies().get("user_id")?.value

  fetch(`http://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}`)

 export const GET = async (request: NextRequest) => {
    const req = request.nextUrl
       const  uid = req.searchParams.get("user_id") as string
       console.log("uid")
        //    if(){}
     try {
        const res = await db.select({}).from(cartTable).where(eq(cartTable.user_id, uid))
        
         return NextResponse.json({res})
     } catch (error) {
        return NextResponse.json({message:"something went wrong"})
     }
     
 }
 export const POST = async (request: NextRequest) => {
          
         const req = await request.json()
          
         const uid = uuid();
         const  setCookies= cookies();

        

         const user_id = cookies().get("user_id")
        if(!user_id){

                    setCookies.set("user_id",uid)
         }
        
    try {
       const res = await db.insert(cartTable).values({
        product_id: req.product_id,
        quantity:1,
        user_id: cookies().get("user_id")?.value as string
       }).returning();
       // res[0].product_id
        return NextResponse.json({res})
    } catch (error) {
       
    }
   
    
}
 
 