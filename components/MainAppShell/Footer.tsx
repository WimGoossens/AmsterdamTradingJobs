'use client'

import { Container, Group, Anchor, Flex, Image, Button, Text } from '@mantine/core';
import classes from './Footer.module.css';

const links = [
    { link: '/contact', label: 'Contact' },
  { link: '/privacy', label: 'Privacy' },
  { link: '/terms', label: 'Terms of Use' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
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
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}