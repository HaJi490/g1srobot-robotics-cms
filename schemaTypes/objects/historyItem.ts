import { defineField } from "sanity"

export const historyItem=  {
    name: 'historyObject',
    title: '연혁 항목',
    type: 'object',
    fields: [
        defineField({name: 'year', title: '연도 (예: 2026)', type: 'string'}),
        defineField({
            name: 'events',
            title: '상세 내용',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {name: 'content', title: '내용', type: 'string'},
                    {name: 'month', title: '월(선택)', type: 'string'},
                ]
            }]
        })
    ]
}
