import { defineType, defineField } from "sanity";

export default defineType({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        {name: 'question', title: '질문', type: 'string'},
        {name: 'answer', title: '답변', type: 'text'},
        {name: 'category', title: '카테고리', type: 'string'},
        {name: 'order', title: '정렬 순서', type: 'number'},
    ]
})