'use client'

import Link from 'next/link';

import { AppShell, Burger, Group, UnstyledButton, Image, Title, Flex, Text, Anchor, Button, Stack, Drawer } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import classes from './MainAppShell.module.css';
import { NightMode } from '../ColorSchemeToggle/NightMode';


export function MainAppShell({
    children,
  }: {
    children: React.ReactNode;
  }) {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: false }}
      // navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
      footer={{ height: 60, collapsed: false, offset: true }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Anchor href="/" underline='never'>
              <Flex align='center'>
                  <Image
                      src='/favicon.svg'
                      alt="Amsterdam Trading Jobs"
                      // my="md"
                      // mx="md"
                      w={30}
                  />
                  <Button color="gray" variant="transparent" size="xl">
                    Amsterdam
                    <Text inherit variant="gradient" gradient={{ from: 'pink', to: 'yellow' }}>
                      Trading
                    </Text>
                    Jobs
                  </Button>
              </Flex>
            </Anchor>
            <Group justify='center' ml="xl" gap='md' visibleFrom="sm">
              <Anchor href='/'>
                <Button fullWidth color="gray" variant="transparent">
                  Jobs
                </Button>
              </Anchor>
              <Anchor href='/firms'>
                <Button fullWidth color="gray" variant="transparent">
                  Firms
                </Button>
              </Anchor>
              <Anchor href='/resources'>
                <Button fullWidth color="gray" variant="transparent">
                  Resources
                </Button>
              </Anchor>
              <NightMode/>
            </Group>
          </Group>
          <Burger opened={drawerOpened} onClick={toggle} hiddenFrom="sm" size="md" />
          <Drawer
            offset={4}
            radius="md"
            size='md'
            position='right'
            opened={opened}
            onClose={toggle}
          >
            <Drawer.Body>
              <Flex gap='xl' direction="column">
                <Anchor href="/" underline='never'>
                  <Flex align='center'>
                      <Image
                          src='/favicon.svg'
                          alt="Amsterdam Trading Jobs"
                          // my="md"
                          // mx="md"
                          w={30}
                      />
                      <Button color="gray" variant="transparent" size="xl">
                        Amsterdam
                        <Text inherit variant="gradient" gradient={{ from: 'pink', to: 'yellow' }}>
                          Trading
                        </Text>
                        Jobs
                      </Button>
                  </Flex>
                </Anchor>
                <Anchor href='/'>
                  <Button fullWidth color="gray" variant="transparent">
                    Jobs
                  </Button>
                </Anchor>
                <Anchor href='/firms'>
                  <Button fullWidth color="gray" variant="transparent">
                    Firms
                  </Button>
                </Anchor>
                <Anchor href='/resources'>
                  <Button fullWidth color="gray" variant="transparent">
                    Resources
                  </Button>
                </Anchor>
                <Group justify="center">
                  <NightMode/>
                </Group>
              </Flex>
            </Drawer.Body>
          </Drawer>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        {children}
      </AppShell.Main>

      {/* <AppShell.Footer>
        Footer
      </AppShell.Footer> */}

    </AppShell>
  );
}