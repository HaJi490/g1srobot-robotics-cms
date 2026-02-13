import { defineType, defineField } from "sanity";

export default defineType ({
    name: 'useCase',
    title: 'Use Case',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: '제목',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'title'},
        },
        {
            name: 'summary',
            title: '요약',
            type: 'text'
        },
        {
            name: 'products',
            title: '관련 제품',
            type: 'array',
            of: [{ 
                type: 'reference',
                to:[{type: 'product'}]
            }]
        },
        {
            name: 'industries',
            title: '산업',
            type: 'array',
            of: [{
                type: 'reference',
                to:[{type: 'industry'}]
            }]
        },
        {
            name: 'content',
            title: '상세 내용',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'mainImage',
            title: '대표 이미지',
            type: 'image',
            options: {hotspot: true}
        },
        {
            name: 'startDate',
            title: '시작일',
            type: 'date'
        },
        {
            name: 'endDate',
            title: '종료일',
            type: 'date'
        },
    ]
})