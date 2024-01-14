import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {

  return (
    <>
      <Title order={1} ta="center" mt={100}>
        Ready for a new start?
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto">
        Your source for jobs in the field of trading and market making.
      </Text>
    </>
  );
}
