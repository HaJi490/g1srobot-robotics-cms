import { defineType, defineField } from "sanity";
import { historyItem } from "../objects/historyItem";

export default defineType ({
    name: 'companyConfig',
    title: '회사소개 관리',
    type: 'document',
    fields: [
        defineField({
            name: 'slogan',
            title: '메인 슬로건',
            type: 'object',
            fields: [
                {name: 'kr', title: '한국어', type: 'text', rows: 2 },
                {name: 'en', title: '영어', type: 'string'},
            ]
        }),
        defineField({
            name: 'ceoMessage',
            title: '인사말',
            type: 'text'
        }),
        defineField({
            name: 'businessField',
            title: '사업 분야',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'vision',
            title: '비전 문구',
            type: 'text'
        }),
        // defineField({
        //     name: 'clients',
        //     title: '고객사',
        //     description: '로고(화이트)가 있는 고객사',
        //     type: 'array',
        //     of: [{type: 'reference', to:[{type: 'client'}]
        //         // type: 'object',
        //         // fields: [
        //         //     {name: 'name', title: '회사명', type: 'string'},
        //         //     {name: 'logo', title: '로고(흰색)', type: 'image', options: { hotspot: true } }
        //         // ]
        //     }]
        // }),
        defineField({
            name: 'timeline',
            title: '성장 연혁',
            type: 'array',
            of: [historyItem]
        })
    ],
    preview: {
        prepare() {
            return {title: '회사 소개'}
        }
    }
})