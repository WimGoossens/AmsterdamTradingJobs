'use client'

import { useWindowScroll } from '@mantine/hooks';
import { Group, Button, BackgroundImage, Image, Space } from '@mantine/core';

export default function ScrollToTop() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            <Space h='xl'/>
            {/* <Space h='xl'/> */}
            <Group justify="center">
                <Button
                    onClick={() => scrollTo({ y: 0 })}
                    my='xl'
                >
                    Back to top
                </Button>
            </Group>
            <Space h='xl'/>
            <Space h='xl'/>
            <div style={{ filter: 'grayscale(100%' }}>
                <Image
                    radius="md"
                    h={350}
                    alt="Amsterdam Damrak"
                    src="https://images.unsplash.com/photo-1627964718300-fab24a8a85ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </div>
        </>
  );
}