import React, { useEffect } from 'react'
import { StringInputProps, set, useFormValue, useClient } from 'sanity'

export function AssetTitleInput(props: StringInputProps) {
    const { onChange, value, path } = props;                        // 1. 함수, 현재 위치, 현재 값 
    const client = useClient({ apiVersion: '2023-01-01' });         // 2. 클라이언트 초기화 

    const parentPath = path.slice(0, -1);                           // 3. 현재 필드 위치에서 마지막 요소('title')을 제거하여 부모 객체의 위치 잡음
    const imageValue = useFormValue(parentPath) as any;             // 4. 부모 객체(이미지 asset 정보가 담긴 곳)의 전체 데이터를 가져옴

    useEffect(() => {
        
        if (value || !imageValue?.asset?._ref) return;              // 5. 이미 title값이 있거나, 아직 이미지가 업로드(asset._ref)되지 않았다면 중단

        
        const fetchFilename = async () => {                         // 6. 이미지 에셋의 원본 정보를 서버에 가져옴
            const asset = await client.fetch(`*[_id == $id][0]`, { id: imageValue.asset._ref });    // 이미지 파일의 메타데이터를 ID로 조회
            if (asset?.originalFilename) {                          // 7. 서버에서 가져온 데이터에 원본 파일명이 존재한다면 로직을 수행
                onChange(set(asset?.originalFilename));  
            }               
        }

        fetchFilename();
    }, [imageValue?.asset?._ref, value, onChange, client]);         // 8. 이미지 에셋이 바뀌면 재실행

    return props.renderDefault(props)                               // 9. 기본 텍스트 입력창 UI를 화면에 그림
}
