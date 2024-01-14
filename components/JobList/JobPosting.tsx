// 'use client';

import { Group, Paper, Button, Stack, Title } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { JobImage } from './JobImage';

export function JobPosting(props: { job_title: String, company: String, url: Url }) {
    return (
        <Paper shadow="xl" radius="xl" withBorder p="xl">
            <Group justify="space-between">
                <Group>
                    <JobImage company={props.company}/>
                    <Stack>
                        <Title order={6}>
                            {props.company}
                        </Title>
                        <Title order={3}>
                            {props.job_title}
                        </Title>
                    </Stack>
                </Group>
                <Button
                    variant="filled"
                    rightSection={<IconExternalLink size={25} />}
                    justify="space-between"
                    component={Link}
                    href={props.url}
                    target="_blank"
                >
                    Go to job
                </Button>
            </Group> 
        </Paper>
    );
}