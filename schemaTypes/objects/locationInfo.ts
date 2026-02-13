import { defineField } from "sanity";

export const locationInfo = {
    name: 'locationInfo',
    title: '위치 정보',
    type: 'object',
    fields: [
        {name: 'text', title: '주소', type: 'string'},
        {name: 'lat', title: '위도(Latitude)', type: 'number'},
        {name: 'lng', title: '경도(Longitude)', type: 'number'},
        {name: 'mapLink', title: '지도 바로가기 링크', type: 'url'},
        {name: 'iconName', title: '아이콘 이름', type: 'string', initialValue: 'MapPin'}
    ]
}