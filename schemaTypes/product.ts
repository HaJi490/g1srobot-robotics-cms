import { defineType, defineField } from "sanity";

export default defineType ({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: '제품명',
            type: 'string',
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'description',
            title: '설명',
            type: 'text'
        }),

        defineField({
            name: 'productLine',
            title: '제품군',
            type: 'reference',
            to: [{type: 'productLine'}],
        }),

        defineField ({
            name: 'industries',
            title: '적용 산업',
            type: 'array',
            of: [{
                type: 'reference', 
                to: [{type: 'industry'}] 
            }]
        }),

        defineField ({
            name: 'images',
            title: '제품 이미지',
            type: 'array',
            of: [{ type: 'image'}]
        }),

        defineField ({
            name: 'specs',
            title: '제품 사양',
            type: 'array',
            of: [{
                    type: 'object',
                    fields: [
                        {name: 'label', title: '항목명', type: 'string'},
                        {name: 'value', title: '값', type: 'string'},
                        {name: 'unit', title: '단위', type: 'string'},
                    ],
                },],
        }),

        defineField ({
            name: 'publishedAt',
            title: '게시일',
            type: 'datetime',
        }),
    ],
})