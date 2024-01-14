import { Title, Text, Anchor } from '@mantine/core';
// import classes from './Welcome.module.css';

export function NumberOfJobs(props: { number_of_jobs: Number } ) {

  return (
    <>
      <Title order={2} ta="center" m={25}>
        Browse {' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          {String(props.number_of_jobs)}
        </Text>
        {' '} trading jobs!
      </Title>
      {/* <Title c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        
      </Title> */}
    </>
  );
}
