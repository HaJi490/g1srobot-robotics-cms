import { defineType, defineField } from "sanity";
import { topFields, bottomFields } from "./commonFields";

export default defineType({
    name: 'productComponent',
    title: '부품 정보',
    type: 'document',
    fields: [...topFields, ...bottomFields]
})