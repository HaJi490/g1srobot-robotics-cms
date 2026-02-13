import { defineType, defineField } from "sanity";

export default defineType ({
    name: 'techDoc',
    title: 'Tech Document',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: '제목',
            type: 'string'
        },
        {
            name: 'file',
            title: '파일',
            type: 'file'
        },
        {
            name: 'accessCode',
            title: '접근 코드',
            type: 'string',
            description: '구매자에게 제공되는 코드'
        },
        {
            name: 'relatedProducts',
            title: '연관 제품',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{
                    type: 'product'
                }],
            }],
        },
    ]
})