import { defineType, defineField } from "sanity";

export const contactItem = {
    name: 'contactItem',
    type: 'object',
    fields: [
        defineField ({
            name: 'text',
            title: '내용',
            type: 'string',
        }),
        defineField ({
            name: 'iconName',
            title: '아이콘 이름',
            type: 'string',
            description: 'Lucide 아이콘 이름을 입력하세요 (예: MapPin)'
        }),
    ]
}