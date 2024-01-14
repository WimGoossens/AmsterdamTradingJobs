'use client';

import Link from 'next/link';
import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { NightMode } from './NightMode';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" m="xl">
      <NightMode/>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button component={Link} href="/firms">Auto</Button>
    </Group>
  );
}
