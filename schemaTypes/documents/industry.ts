import { defineType, defineField } from "sanity";

export default defineType ({
    name: 'industry',
    title: '산업군',
    type: 'document',
    fields: [
        defineField ({
            name: 'name',
            title: '산업명(국문)',
            type: 'string'
        }),
        defineField ({
            name: 'nameEn',
            title: '산업명(영문)',
            type: 'string'
        }),

        defineField ({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'},
        }),

        defineField ({
            name: 'icon',
            title: '아이콘',
            type: 'image',
        }),
        defineField ({
            name: 'iconName',
            title: '아이콘 이름',
            type: 'string',
            description: 'Lucide 아이콘 이름을 입력하세요 (예: Car, Cpu, Ship)',
        }),
    ]
})