import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'G1SRobot',
  projectId: 'qi043u9d',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            // 1. 사이트 기본 설정
            S.listItem()
              .title('사이트 기본 설정')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings') // 스키마 name과 일치해야함
                  .documentId('siteSettings') // ID를 고정해서 하나만 존재(DB에 저장될 ID)
              ),
            S.listItem()
              .title('회사소개 관리')
              .id('companyConfig')
              .child(
                S.document()
                  .schemaType('companyConfig')
                  .documentId('companyConfig')
              ),
            S.listItem()
              .title('메인페이지 관리')
              .id('homeConfig')
              .child(
                S.document()
                  .schemaType('homeConfig')
                  .documentId('homeConfig')
              ),

            S.divider(), //구분선

            orderableDocumentListDeskItem({
              type: 'productLine',
              title: '제품군(순서 정렬)',
              S,
              context
            }),
            orderableDocumentListDeskItem({
              type: 'industry',
              title: '산업군(순서 정렬)',
              S,
              context
            }),

            // 나머지는 기존처럼 일반 리스트로 보여줌 (Product, Robot 등)
            ...S.documentTypeListItems().filter(
              (listItem) => !['companyConfig','siteSettings', 'homeConfig', 'productLine', 'industry'].includes(listItem.getId() as string)
          ),
          ]),
    }), 
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
