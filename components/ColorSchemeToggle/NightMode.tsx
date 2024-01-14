'use client'

import { Switch, useMantineTheme, rem, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useState } from 'react';

export function NightMode() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return <Switch
            size="md"
            color="dark.4"
            onLabel={sunIcon}
            offLabel={moonIcon}
            checked={colorScheme === 'dark'}
            onChange={() => toggleColorScheme()}
        />;
}