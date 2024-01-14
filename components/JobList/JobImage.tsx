'use client';

import { Image, Box } from '@mantine/core';

export function JobImage(props: { company: String }) {

    switch (props.company) {
        case "Optiver":
            return(
                <Box
                    bg="white"
                    style={{ '--radius': '0.5rem', borderRadius: 'var(--radius)' }}
                >
                    <Image
                        src='/optiver.svg'
                        alt="Optiver"
                        my="md"
                        mx="md"
                        w={150}
                        radius={100}
                    />
                </Box>                    
            );
        case "Flow Traders":
            return(
                <Box
                    bg="black"
                    style={{ '--radius': '0.5rem', borderRadius: 'var(--radius)' }}
                >
                    <Image
                        src='/flow_traders.svg'
                        alt="Flow Traders"
                        my="md"
                        mx="md"
                        w={150}
                    />
                </Box>  
            );
        case "IMC":
            return(
                <Box
                    bg="white"
                    style={{ '--radius': '0.5rem', borderRadius: 'var(--radius)' }}
                >
                    <Image
                        src='/imc.svg'
                        alt="IMC"
                        my="md"
                        mx="md"
                        w={150}
                    />
                </Box>  
            );
        default:
            return(
                <Box
                    bg="white"
                    style={{ '--radius': '0.5rem', borderRadius: 'var(--radius)' }}
                >
                    <Image
                        src='/favicon.svg'
                        alt="Amsterdam Trading Jobs"
                        my="md"
                        mx="md"
                        w={150}
                    />
                </Box>   
            );
    }
}