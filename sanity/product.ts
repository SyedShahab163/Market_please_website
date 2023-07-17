import { defineType, defineField} from "sanity"
import { category } from "./category"
export const product = {

    name:"product",
    type:"document",
    title:"product",
    fields: [
        {
            name: "title",
            type:"string",
           title: "product Title",
        },
        {
            name: "description",
            type: "string",
           title: "product description",
        },
        {
            name:"prices",
            title:"product prices",
            type: "number",
        },
        {
            name: "image",
            type: "image",
           title: "product image",
        },
        defineField({
            name: "category",
           title: "product category",
           type: "reference",
           to:[{
            type: "category"
           },
        //    {
            // type: "product"
        //    }
        ]
        })
    ]
}