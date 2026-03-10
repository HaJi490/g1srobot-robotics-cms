import { defineField } from "sanity";
import { SpecTableInput } from "../../components/SpecTableInput"
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
        description: '핵심 사양 3개를 우선 입력해주세요. 3개 초과 입력 시 하단 표 영역에 텍스트로 출력됩니다.',
        validation: (Rule) => 
        Rule.custom((value) => {
            // value가 없거나(0개) 3개 미만이면 경고 메시지 반환
            if (!value || value.length < 3) {
                return '최소 3개의 사양을 입력하는 것을 권장합니다.';
            }
            return true; // 조건 충족 시 통과
        }).warning(), 
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
        name: 'specsImg',
        title: '제품 사양 표 (이미지)',
        type: 'image',
        description: '입력된 텍스트 사양이 3개 이하일 때, 상세페이지 하단에 표를 대신해 출력됩니다.',
        options: { hotspot: true }
    }),
]

export const categoryFields = [
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