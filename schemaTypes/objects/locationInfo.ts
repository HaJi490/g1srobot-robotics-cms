import { defineField } from "sanity";

export const locationInfo = {
    name: 'locationInfo',
    title: '위치 정보',
    type: 'object',
    fieldsets: [{
        name: 'details',
        title: '위치 상세 설정 (경도/위도/링크)',
        options: {
            collapsible: true, 
            collapsed: true 
        }
    }],
    fields: [
        {name: 'text', title: '주소', type: 'string'},
        {name: 'lat', title: '위도(Latitude)', type: 'number', fieldset: 'details'},
        {name: 'lng', title: '경도(Longitude)', type: 'number', fieldset: 'details'},
        {name: 'mapLink', title: '지도 바로가기 링크', type: 'url', fieldset: 'details'},
        {name: 'iconName', title: '아이콘 이름', type: 'string', initialValue: 'MapPin', fieldset: 'details'}
    ]
}