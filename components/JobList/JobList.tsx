'use server';

import { JobItem } from './JobItem';
import { getJobs } from '@/src/lib/firebase/firestore';

export async function JobList() {
  const filterDate = new Date();
  const x = 10;

  // 1000 milliseconds, 60 seconds, 60 minutes, 24 hours, x days
  filterDate.setTime(Date.now() - 1000 * 60 * 60 * 24 * x);

  const jobList = await getJobs(filterDate);
  const sortedJobList = jobList.sort((a : any, b : any) => (a.job_title < b.job_title ? -1 : 1));

  return (
    <div>
      <JobItem initialJobs={sortedJobList}/>
    </div>
  );
}
