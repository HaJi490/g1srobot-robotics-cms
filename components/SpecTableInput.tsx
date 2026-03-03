import React, { useCallback } from 'react'
import { Stack, Grid, Box, TextInput, Button, Flex, Text } from '@sanity/ui'
import { ArrayOfObjectsInputProps, set, insert, unset } from 'sanity'
import { randomKey } from '@sanity/util/content'
import { TrashIcon, AddIcon } from '@sanity/icons'

interface SpecItem {
    _key: string;
    label?: string;
    value?: string;
    unit?: string;
}

export function SpecTableInput(props: ArrayOfObjectsInputProps) {
    const { value = [], onChange, schemaType } = props

    // 값 수정 함수
    const handleChange = useCallback(
        (index: number, fileName: string, newValue: string) => {
            const nextValue = [...value];
            nextValue[index] = { ...nextValue[index], [fileName]: newValue };
            onChange(set(nextValue));
        },
        [onChange, value]);

    // 항목 추가
    const handleAdd = useCallback(() => {
        onChange(insert([{ _key: randomKey(), rabel: '', value: '', unit: '' }], 'after', [-1]))
    }, [onchange]);

    // 항목 삭제
    const handleRemove = useCallback((index: number) => {
        const nextValue = value.filter((_, i) => i !== index);
        onChange(nextValue.length > 0 ? set(nextValue) : unset());
    }, [onChange, value]);

    return (
        <Stack space={3}>
            {/* 헤더 */}
            <Grid
                columns={[4, 4, 12]}
                gap={2}
                paddingBottom={2}
                style={{ borderBottom: '1px solid #ccc', marginTop: '10px' }}
            >
                <Box style={{ gridColumn: 'span 4' }}>
                    <Text size={1} weight="bold">항목명</Text>
                </Box>
                <Box style={{ gridColumn: 'span 5' }}>
                    <Text size={1} weight="bold">값</Text>
                </Box>
                <Box style={{ gridColumn: 'span 2' }}>
                    <Text size={1} weight="bold">단위</Text>
                </Box>
                <Box style={{ gridColumn: 'span 1' }} />
            </Grid>

            {/* 행 반복 */}
            <Stack space={2}>
                {value.map((item: SpecItem, idx: number) => (
                    <Grid
                        key={item._key}
                        columns={[4, 4, 12]}
                        gap={2}
                    >
                        <Box style={{ gridColumn: 'span 4' }}>
                            <TextInput
                                value={item.label || ''}
                                onChange={e => handleChange(idx, 'label', e.currentTarget.value)}
                                placeholder='예: 무게'
                            />
                        </Box>
                        <Box style={{ gridColumn: 'span 5' }}>
                            <TextInput
                                value={item.value}
                                onChange={e => handleChange(idx, 'value', e.currentTarget.value)}
                                placeholder='예: 50'
                            />
                        </Box>
                        <Box style={{ gridColumn: 'span 2' }}>
                            <TextInput
                                value={item.unit}
                                onChange={e => handleChange(idx, 'unit', e.currentTarget.value)}
                                placeholder='예: kg'
                            />
                        </Box>
                        <Box style={{ gridColumn: 'span 1' }}>
                            <Button
                                icon={TrashIcon}
                                mode="bleed"
                                tone="critical"
                                onClick={() => handleRemove(idx)}
                            />
                        </Box>
                    </Grid>
                ))}
            </Stack>
            <Box paddingY={2}>
                <Button
                    fontSize={2}
                    icon={AddIcon}
                    text='사양 추가'
                    mode='ghost'
                    onClick={handleAdd}
                    style={{ width: '100%' }}
                />
            </Box>
        </Stack>
    )
}


