import React, { useEffect, useState, useCallback } from 'react'
import { StringInputProps, useFormValue, useClient, set, unset } from 'sanity'
import { TextInput, Stack, Flex, Text, Box, Button, Badge } from '@sanity/ui'

export function AssetRenameInput(props: StringInputProps) {
    const { path, onChange, value } = props; // 📍[현재 문서 정보] 현재 위치, value: 이전 title명
    const client = useClient({ apiVersion: '2023-01-01' });

    // 1. 부모 객체(파일 asset 정보 담긴 곳)에서 assetID 추출
    const parentPath = path.slice(0, -1);
    const fileObj = useFormValue(parentPath) as any;
    const assetRef = fileObj?.asset?._ref;

    const [localValue, setLocalValue] = useState('');   // 입력중인 값
    const [serverValue, setServerValue] = useState(''); // 서버에 저장된 값
    const [isUpdating, setIsUpdating] = useState(false);
    const [isSyncing, setIsSyncing] = useState(true);   // 로딩 상태

    // 2. 초기 로드: 에셋에서 현재 파일명 가져오기
    useEffect(() => {
        if (!assetRef) {
            setIsSyncing(false);
            return;
        }

        const fetchCurrentName = async () => {
            const asset = await client.fetch(`*[_id == $id][0]{ originalFilename }`, { id: assetRef }); // 📍[asset 문서 정보] 현재 문서.asset._ref === asset의 _id
            const actualName = asset?.originalFilename || '';
            
            setLocalValue(actualName);
            setServerValue(actualName);

            // ✨ 중요: 로컬에 저장된 값(value)이 서버의 진짜 이름과 다르면?
            // 사용자가 혼란을 겪지 않게 서버 이름으로 즉시 갱신해줍니다.
            if (value !== actualName) {
                onChange(actualName ? set(actualName) : unset());
            };

            setIsSyncing(false);
        };

        fetchCurrentName();
    }, [assetRef, client]);

    // 3. 수정 핸들러: 에셋 문서의 originalFilename 필드를 직접 Patch
    const handleSave = useCallback(async () => {
        if (!assetRef || !localValue || localValue === serverValue) return;

        setIsUpdating(true);
        try {
            // ✨ 핵심: 로컬 필드가 아닌, 참조된 에셋 문서를 직접 수정함
            await client.patch(assetRef).set({ originalFilename: localValue }).commit();
            onChange(set(localValue));  // 모달밖의 title도 변경

            setServerValue(localValue); // 서버값 동기화
            console.log('에셋 파일명이 성공적으로 변경되었습니다.');
        } catch (err) {
            console.error('파일명 변경 실패: ', err);
        } finally {
            setIsUpdating(false);
        }
    }, [assetRef, client, localValue]);

    return (
        <Stack space={3}>
            <Flex align="center" gap={2}>
            <Text size={1} weight="bold">현재 서버 파일명:</Text>
            <Badge tone="primary">{serverValue}</Badge>
        </Flex>
            <Flex gap={2} align='center'>
                <Box flex={1}>
                    <TextInput
                        value={localValue}
                        onChange={e => setLocalValue(e.currentTarget.value)}
                        onBlur={handleSave} // 포커스를 잃었을 때 서버 반영
                        placeholder='파일명을 입력하세요.'
                        readOnly={!assetRef}
                    />
                    {!assetRef &&
                        <Text size={1} >파일을 먼저 업로드해주세요.</Text>
                    }
                </Box>
                <Button
                    text={isUpdating ? "저장 중..." : "저장"}
                    mode="ghost"
                    tone="positive"
                    onClick={() => handleSave()}
                    disabled={!assetRef || localValue === serverValue || isUpdating}
                />
            </Flex>
        </Stack>
    )
}
