'use client';

import { Image, Box, Flex, Text, Stack, Center } from '@mantine/core';

export function FirmImage(props: { company: String }) {

    switch (props.company) {
        case "Optiver":
            return(
                <Center h={50}>
                    <Box
                        bg="white"
                        style={{ '--radius': '0.5rem', borderRadius: 'var(--radius)' }}
                    >
                        <Image
                            src='/optiver.svg'
                            alt="Optiver logo"
                            my="md"
                            mx="md"
                            w={150}
                            radius={100}
                        />
                    </Box>   
                </Center>                 
            );
        case "Flow Traders":
            return(
                <Center h={50}>
                    <Box
                        bg="black"
                        style={{ '--radius': '0.5rem', borderRadius: 'var(--radius)' }}
                    >
                        <Image
                            src='/flow_traders.svg'
                            alt="Flow Traders logo"
                            my="md"
                            mx="md"
                            w={150}
                        />
                    </Box>
                </Center>
            );
        case "IMC":
            return(
                <Center h={50}>
                    <Box
                        bg="white"
                        style={{ '--radius': '0.5rem', borderRadius: 'var(--radius)' }}
                    >
                        <Image
                            src='/imc.svg'
                            alt="IMC logo"
                            my="md"
                            mx="md"
                            w={150}
                        />
                    </Box>
                </Center>
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