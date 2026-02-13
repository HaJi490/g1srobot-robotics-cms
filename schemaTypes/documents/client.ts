import { defineType, defineField } from "sanity";

export default defineType ({
    name: 'client',
    title: '고객사 관리',
    type: 'document',
    fields: [
        defineField({name: 'name', title: '회사명', type: 'string'}),
        defineField({name: 'logo', title: '로고 (화이트)', type: 'image'}),
    ]
})