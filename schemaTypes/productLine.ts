import { defineType, defineField } from "sanity";

export default defineType ({
    name: 'productLine',
    title: 'Product Line',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: '제품군명',
            type: 'string'
        },
        {
            name: 'description',
            title: '설명',
            type: 'text'
        },
    ]
})