import { defineType, defineField } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default defineType ({
    name: 'industry',
    title: '산업군',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({type: 'industry'}),
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

    ]
})