// 사이트 전역 설정
import { defineType, defineField } from "sanity";
import { contactItem } from "../objects/contactItem";
import { locationInfo } from "../objects/locationInfo";

export default defineType ({
    name: 'siteSettings',
    title: '사이트 기본 설정',
    type: 'document',
    fields: [
        defineField ({
            name: 'companyName',
            title: '회사명',
            type: 'string',
        }),
        defineField ({
            name: 'logos',
            title: '회사 로고',
            type: 'object',
            fields: [
                {name: 'main', title: '메인 색상', type: 'image' },
                {name: 'light', title: '밝은 배경용 (블랙)', type: 'image' },
                {name: 'dark', title: '어두운 배경용 (화이트)', type: 'image' },
            ]
        }),
        defineField ({
            name: 'contact',
            title: '연락 정보',
            type: 'object',
            fields: [
                { name: 'phone', title: '대표 전화', type: 'contactItem' },
                { name: 'email', title: '대표 이메일', type: 'contactItem' },
                { name: 'address', title: '회사 주소 및 지도 설정', type: 'locationInfo' },
            ]
        }),
        defineField ({
            name: 'clients',
            title: '고객사',
            type: 'array',
            of: [{type: 'reference', to:[{type: 'client'}]}]
        }),
        defineField ({
            name: 'SEOSetiing',
            title: '검색엔진 최적화',
            type: 'object',
            fields: [
                {name: 'metaTitle', title: '사이트 제목', type: 'string'},
                {name: 'metaDescription', title: '사이트 설명(2-3줄)', type: 'string'},
                {name: 'ogImage', title: '대표 이미지', type: 'image'},
            ]
        })
    ]
})