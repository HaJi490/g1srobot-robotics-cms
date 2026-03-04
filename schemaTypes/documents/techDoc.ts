import { defineType, defineField } from "sanity";
import { AssetRenameInput } from "../../components/AssetRenameInput";

export default defineType({
    name: 'techDoc',
    title: '자료실',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: '제목',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: '구분',
            type: 'string',
            options: {
                list: [
                    { title: '기술자료', value: 'technical-data' },
                    { title: '카탈로그', value: 'catalog' },
                    { title: '사용설명서', value: 'manual' },
                    { title: '기타', value: 'etc' },
                ],
                layout: 'radio'
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'file',
            title: '파일',
            type: 'array',
            of: [{
                type: 'file',
                fields: [
                    {
                        name: 'assetNameEditor',
                        title: '파일명 수정 (전역 반영)',
                        type: 'string',
                        components: {
                            input: AssetRenameInput
                        }
                    },
                ]
            }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'language',
            title: '언어',
            type: 'string',
            options: {
                list: [
                    { title: '한국어(KO)', value: 'ko' },
                    { title: '영어(EN)', value: 'en' },
                ]
            },
            initialValue: 'ko', // 기본값 설정
        }),
        defineField({
            name: 'accessCode',
            title: '접근 코드',
            type: 'string',
            description: '구매자에게 제공되는 코드'
        }),
        defineField({
            name: 'releaseDate',
            title: '등록일',
            type: 'date',
            initialValue: (new Date()).toISOString().split('T')[0], // 오늘 날짜 기본값
        }),
        defineField({
            name: 'relatedProducts',
            title: '연관 제품',
            type: 'array',
            of: [{
                type: 'reference',
                to: [
                    { type: 'system' },
                    { type: 'robot' },
                    { type: 'component' },
                ],
            }],
        }),
    ]
})