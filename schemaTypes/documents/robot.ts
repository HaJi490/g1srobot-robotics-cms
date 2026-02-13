import { defineType, defineField } from "sanity";
import { topFields, bottomFields } from "../objects/commonFields";

export default defineType ({
    name: 'robot',
    title: '로봇 정보',
    type: 'document',
    fields:[
        ...topFields,
        defineField({
            name: 'components',
            title: '사용 부품',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'productComponent'}] }]
        }),
        ...bottomFields
    ]
})