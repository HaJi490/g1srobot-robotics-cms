import { defineField } from "sanity";
import { SpecTableInput } from "../../components/SpecTableInput"
import { AssetTitleInput } from "../../components/AssetTitleInput";
import { AssetRenameInput } from "../../components/AssetRenameInput";

export const topFields = [
    defineField({
        name: 'name',
        title: '제품명(국문)',
        type: 'string',
        validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'nameEn',
        title: '제품명(영문)',
        type: 'string',
        //validation: Rule => Rule.required(),
    }),

    defineField({
        name: 'slug',
        title: 'URL Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 96,
        },
        validation: Rule => Rule.required(),
    }),

    defineField({
        name: 'specs',
        title: '제품 사양',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                { name: 'label', title: '항목명', type: 'string' },
                { name: 'value', title: '값', type: 'string' },
                { name: 'unit', title: '단위', type: 'string' },
            ],
        }],
        components: {
            input: SpecTableInput
        }
    }),

    defineField({
        name: 'productLine',
        title: '제품군',
        type: 'reference',
        to: [{ type: 'productLine' }],
    }),

    defineField({
        name: 'industries',
        title: '적용 산업',
        type: 'array',
        of: [{
            type: 'reference',
            to: [{ type: 'industry' }]
        }]
    }),
]

export const bottomFields = [
    defineField({
        name: 'publishedAt',
        title: '출시일',
        type: 'datetime',
    }),
    defineField({
        name: 'description',
        title: '설명',
        type: 'text'
    }),
    defineField({
        name: 'mainImage',
        title: '대표 이미지',
        type: 'image',
        options: { hotspot: true }
    }),
    defineField({
        name: 'images',
        title: '제품 이미지',
        type: 'array',
        of: [{
            type: 'image',
            fields: [
                {
                    name: 'assetNameEditor',
                    title: '파일명 수정 (전역 반영)',
                    type: 'string',
                    components: {
                        input: AssetRenameInput
                    }
                },
                {
                    name: 'alt',
                    title: '이미지 설명(alt)',
                    type: 'string',
                    description: 'SEO 및 접근성을 위한 요약 설명',
                    validation: Rule => Rule.required().warning('SEO를 위해 alt를 입력해주세요')
                }
            ]
        }]
    }),
    defineField({
        name: 'videos',
        title: '제품 작동영상',
        type: 'array',
        of: [{
            type: 'file',
            name: 'videoFile',
            title: '영상 파일',
            options: { accept: 'video/*' },  // 영상 파일만 선택 가능
            fields: [
                {
                    name: 'assetNameEditor',
                    title: '파일명 수정 (전역 반영)',
                    type: 'string',
                    components: {
                        input: AssetRenameInput
                    }
                },
                {
                    name: 'alt',
                    title: '영상 설명 (alt)',
                    type: 'string',
                    description: 'SEO 및 접근성을 위한 요약 설명',
                    validation: Rule => Rule.required().warning('SEO를 위해 alt를 입력해주세요')
                }
            ]
        }]
    }),
    

]