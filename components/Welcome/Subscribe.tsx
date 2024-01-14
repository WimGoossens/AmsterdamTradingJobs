'use client'

import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text, Stack, VisuallyHidden } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useInterval } from '@mantine/hooks';
import { useForm, isEmail } from '@mantine/form';
import { subscribeEmail } from '@/src/lib/firebase/firestore';
import { handleSubscribeFormSubmission } from '@/app/actions';

export default function Subscribe() {
  const [opened, { open, toggle, close }] = useDisclosure(true);
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
    },

    validate: {
        email: isEmail('Invalid email'),
    },
  });

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <>
      <Dialog
        opened={(seconds > 5) && (opened) ? true : false }
        withCloseButton
        onClose={close}
        size="lg"
        radius="md"
        transitionProps={{ transition: 'slide-left', duration: 1000 }}
        shadow="xl"
        withBorder={true}
        >
        <Text size="sm" mb="xs" fw={500}>
            Receive trading job updates in your inbox!
        </Text>

        <Group align="center" gap='xs'>
            <form onSubmit={form.onSubmit((values) => handleSubscribeFormSubmission(values)) }>
            {/* <form onSubmit={form.onSubmit((values) => console.log(values)) }> */}
                <Group>
                    <TextInput
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                    />
                    <VisuallyHidden>
                      <TextInput
                          {...form.getInputProps('name')}
                          />
                    </VisuallyHidden>
                    <Button
                        type='submit'
                        color="blue"
                        variant="light"
                        onClick={(form.isValid() ? close : open)}
                    >
                        Subscribe
                    </Button>
                </Group>
            </form>
        </Group>
      </Dialog>
    </>
  );
}