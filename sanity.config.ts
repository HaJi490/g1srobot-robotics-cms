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
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.documentTypeListItem('policy')
              .title('약관 및 정책 관리'),
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

            S.divider(),

            orderableDocumentListDeskItem({
              type: 'productLine',
              title: '제품군',
              S,
              context
            }),
            orderableDocumentListDeskItem({
              type: 'industry',
              title: '산업군',
              S,
              context
            }),

            // 나머지는 기존처럼 일반 리스트로 보여줌 (Product, Robot 등)
            ...S.documentTypeListItems().filter(
              (listItem) => ![
                'siteSettings', 
                'policy', 
                'companyConfig',
                'homeConfig',
                'productLine', 
                'industry'
              ].includes(listItem.getId() as string)
          ),
          ]),
    }), 
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
