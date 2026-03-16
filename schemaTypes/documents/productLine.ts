import { defineType, defineField } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default defineType ({
    name: 'productLine',
    title: '제품군',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'productLine' }),
        defineField({
            name: 'name',
            title: '제품군명(국문)',
            type: 'string'
        }),
        defineField({
            name: 'nameEn',
            title: '제품군명(영문)',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: '설명',
            type: 'text'
        }),
        defineField({
            name: 'mainImage',
            title: '대표 이미지',
            type: 'image'
        })
    ]
})