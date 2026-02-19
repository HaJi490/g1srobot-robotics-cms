import { defineField } from "sanity";

export const topFields =  [
    defineField({
        name: 'name',
        title: '제품명(국문)',
        type: 'string',
        validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'nameEn',
        title: '제품명(영문)',
        type: 'string',
        //validation: Rule => Rule.required(),
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
]

export const bottomFields =[
    defineField ({
        name: 'publishedAt',
        title: '출시일',
        type: 'datetime',
    }),
    defineField({
        name: 'description',
        title: '설명',
        type: 'text'
    }),
    defineField({
        name: 'mainImage',
        title: '대표 이미지',
        type: 'image',
        options: {hotspot: true}
    }),
    defineField ({
        name: 'images',
        title: '제품 이미지',
        type: 'array',
        of: [{ type: 'image'}]
    }),
    defineField ({
        name: 'videos',
        title: '제품 작동영상',
        type: 'array',
        of:[{
            type: 'file',
            name: 'videoFile',
            title: '영상 파일',
            options: {accept: 'video/*'}
        }]
    }),


]