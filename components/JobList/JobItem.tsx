// 'use client';

import { Text, Container, Stack, useMantineColorScheme, Title } from '@mantine/core';
import { useState, useEffect, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal } from "react";
import { JobPosting } from './JobPosting';
import { NumberOfJobs } from './NumberOfJobs';
import { HighlightedJobPosting } from './HighlightedJobPosting';


export function JobItem(initialJobs: any) {
    // const [jobs, setJobs] = useState(initialJobs);
    const jobs = initialJobs;
    
    return (
        <Container size={1200}>
            <NumberOfJobs number_of_jobs={jobs.initialJobs.length}/>
            <Stack m={25}>
                {jobs.initialJobs.slice(42, 45).map((job : any) =>
                    <HighlightedJobPosting
                        key={job.id}
                        job_title={job.job_title}
                        company={job.company}
                        url={job.url}
                    />
                )}
            </Stack>
            <Stack m={25}>
                {jobs.initialJobs.map((job : any) =>
                    <JobPosting
                        key={job.id}
                        job_title={job.job_title}
                        company={job.company}
                        url={job.url}
                    />
                )}
            </Stack>
        </Container>
    );
}