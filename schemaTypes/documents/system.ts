import { defineType, defineField } from "sanity";
import { topFields, bottomFields } from "../objects/commonFields";

export default defineType ({
    name: 'system',
    title: '시스템 정보',
    type: 'document',
    fields: [
        ...topFields,
        defineField({
            name: 'robots',
            title: '사용 로봇',
            type: 'array',
            of: [{type: 'reference', to:[{type: 'robot'}]}]
        }),
        ...bottomFields
    ]
})