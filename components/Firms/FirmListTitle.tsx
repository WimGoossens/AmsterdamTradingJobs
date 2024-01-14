import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function FirmListTitle() {

  return (
    <>
      <Title order={1} ta="center" mt={100}>
        Proprietary trading firms active in Amsterdam
      </Title>
      <Text c="dimmed" ta="center" size="md" maw={600} mx="auto" my='md'>
        The Dutch stock market has a history of more than 400 years. Today, Amsterdam hosts multiple cutting edge 
        trading firms. These market makers and liquidity providers trade almost everything: stocks, derivatives, 
        commodities and virtually anything in between.
      </Text>
    </>
  );
}
