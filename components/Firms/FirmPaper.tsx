'use client';

import { Paper, Box } from '@mantine/core';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { FirmImage } from './FirmImage';

export function FirmPaper(props: { company: String, url: Url }) {
    return (
        <Paper shadow="xl" radius="xl" withBorder p="xl" component={Link} href={props.url}>
            <Box h={50}>
                <FirmImage company={props.company}/>
            </Box>
        </Paper>
    );
}