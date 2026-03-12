import { defineType, defineField } from "sanity";

export default defineType({
    name: 'policy',
    title: '약관 및 정책 관리',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: '약관 명칭',
            type: 'string',
            description: '관리용 이름 (예: 개인정보 처리방침, 이메일 수집 거부)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'identifier',
            title: '고유 식별자(Slug)',
            type: 'slug',
            description: '프론트엔드 호출용 키값 (예: privacy-policy, email-refusal, inquiry-consent)',
            options: { source: 'title' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'type',
            title: '약관 유형',
            type: 'string',
            options: {
                list: [
                    { title: '전체 문서형 (처리방침 등)', value: 'full' },
                    { title: '동의 체크박스형 (문의폼용)', value: 'consent' },
                ],
                layout: 'radio'
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'consentLabel',
            title: '체크박스 라벨',
            type: 'string',
            description: '문의 폼 체크박스 옆에 표시될 문구',
            hidden: ({ parent }) => parent?.type !== 'consent', // 유형이 consent일 때만 표시
        }),
        defineField({
            name: 'effectiveDate',
            title: '시행일',
            type: 'date',
        }),
        defineField({
            name: 'content',
            title: '내용 상세',
            type: 'array',
            of: [{
                type: 'block',
                styles: [
                    {title: 'Normal', value: 'normal'},
                    {title: 'H3', value: 'h3' }
                ],
                lists: [
                    {title: 'Bullet', value: 'bullet'},
                    {title: 'Number', value: 'number'}
                ]
            }]
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtile: 'identifier.current'
        }
    }
})