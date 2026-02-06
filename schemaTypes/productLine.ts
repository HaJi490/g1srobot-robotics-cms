import { defineType, defineField } from "sanity";

export default defineType ({
    name: 'productLine',
    title: 'Product Line',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: '제품군명',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: '설명',
            type: 'text'
        }),
        defineField({
            name: 'mainImage',
            title: '대표 이미지',
            type: 'image'
        })
    ]
})