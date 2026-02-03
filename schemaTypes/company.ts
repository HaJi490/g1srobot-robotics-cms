import { defineType, defineField } from "sanity";

export default defineType ({
    name: 'company',
    title: 'Company',
    type: 'document',
    fields: [
        defineField({
            name: 'businessField',
            title: '사업 분야',
            type: 'string'
        }),
        
    ]
})