import {defineType, defineField} from 'sanity'

export default defineType ({
    name: 'homeConfig',
    title: '메인페이지 관리',
    type: 'document',
    fields: [
        defineField({
            name: 'heroSlogans',
            title: '메인 슬로건',
            type: 'array',
            of: [{ 
                    type: 'object', 
                    fields:[
                        {name: 'kr', title: '한국어', type: 'string'},
                        {name: 'en', title: '영어', type: 'string'},
                    ]
            }]
        })
    ]
})