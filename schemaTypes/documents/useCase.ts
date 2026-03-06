import { defineType, defineField } from "sanity";
import { AssetRenameInput } from "../../components/AssetRenameInput";

export default defineType({
    name: 'useCase',
    title: '적용 사례',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: '제목',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
        }),
        defineField({
            name: 'startDate',
            title: '시작일',
            type: 'date'
        }),
        defineField({
            name: 'endDate',
            title: '종료일',
            type: 'date'
        }),
        defineField({
            name: 'description',
            title: '사례 설명',
            type: 'text'
        }),
        defineField({
            name: 'systems',
            title: '관련 시스템',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'system' }]
            }]
        }),
        defineField({
            name: 'industries',
            title: '산업',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'industry' }]
            }]
        }),
        defineField({
            name: 'mainImage',
            title: '대표 이미지',
            type: 'image',
            options: { hotspot: true },
            fieldsets: [
                {
                    name: 'metadata',
                    title: '이미지 상세 설정 (파일명/Alt)',
                    options: {
                        collapsible: true, // ✨ 접기/펼치기 가능하게 설정
                        collapsed: true    // ✨ 기본 상태를 '접힘'으로 설정
                    }
                }
            ],
            fields: [
                {
                    name: 'assetNameEditor',
                    title: '파일명 수정 (전역 반영)',
                    type: 'string',
                    fieldset: 'metadata',
                    components: {
                        input: AssetRenameInput 
                    }
                },
                {
                    name: 'alt',
                    title: '이미지 설명',
                    type: 'string',
                    fieldset: 'metadata', 
                    validation: Rule => Rule.required().warning('SEO를 위해 alt를 입력해주세요'),
                }
            ]
        }),
        defineField({
            name: 'images',
            title: '사례 이미지',
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
                        title: '이미지 설명 (alt)',
                        type: 'string',
                        description: 'SEO 및 접근성을 위한 요약 설명',
                        validation: Rule => Rule.required().warning('SEO를 위해 alt를 입력해주세요')
                    }
                ]
            }]
        }),
        defineField({
            name: 'videos',
            title: '사례 영상',
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
                        title: '영상 설명 (alt)',
                        type: 'string',
                        description: 'SEO 및 접근성을 위한 요약 설명',
                        validation: Rule => Rule.required().warning('SEO를 위해 alt를 입력해주세요')
                    }
                ]
            }]
        }),
    ]
})