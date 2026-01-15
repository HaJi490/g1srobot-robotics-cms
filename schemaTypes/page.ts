// 회사소개, 랜딩페이지
import { defineType } from "sanity";

export default defineType ({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: '페이지 제목',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug'
        },
        {
            name: 'sections',
            title: '섹션',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {name: 'type',title: '섹션 타입', type: 'string'},
                        {name: 'content', title: '내용', type: 'array', of: [{type: 'block'}]}
                    ]
                }
            ]
        },
    ]
})