'use client';

import { Container, Text, SimpleGrid, Divider } from '@mantine/core';
import { FirmPaper } from './FirmPaper';
import { usePathname } from 'next/navigation';


export function FirmList() {
    const pathname = usePathname()
    
    return (
        <Container size={800} mt='xl'>
            <Divider my='md' label='Click on the logo of any trading company below for more details'/>
            <SimpleGrid cols={3}>
                <Container size='md'>
                    <FirmPaper
                        company={'Flow Traders'}
                        url={pathname + '/flow_traders'}
                    />
                </Container>
                <Container size='md'>
                    <FirmPaper
                        company={'IMC'}
                        url={pathname + '/imc'}
                    />
                </Container>
                <Container size='md'>
                    <FirmPaper
                        company={'Optiver'}
                        url={pathname + '/optiver'}
                    />
                </Container>
            </SimpleGrid>
        </Container>
    );
}