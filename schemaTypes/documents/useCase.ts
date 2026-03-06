import { defineType, defineField } from "sanity";

export default defineType ({
    name: 'useCase',
    title: '적용 사례',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: '제목',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'title'},
        }),
        defineField({
            name: 'summary',
            title: '요약',
            type: 'text'
        }),
        defineField({
            name: 'description',
            title: '사례 설명',
            type: 'text'
        }),
        defineField({
            name: 'systems',
            title: '관련 시스템',
            type: 'array',
            of: [{ 
                type: 'reference',
                to:[{type: 'system'}]
            }]
        }),
        defineField({
            name: 'industries',
            title: '산업',
            type: 'array',
            of: [{
                type: 'reference',
                to:[{type: 'industry'}]
            }]
        }),
        defineField({
            name: 'mainImage',
            title: '대표 이미지',
            type: 'image',
            options: {hotspot: true}
        }),
        defineField({
            name: 'startDate',
            title: '시작일',
            type: 'date'
        }),
        defineField({
            name: 'endDate',
            title: '종료일',
            type: 'date'
        }),
    ]
})