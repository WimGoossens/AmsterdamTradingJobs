import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { MainAppShell } from '@/components/MainAppShell/MainAppShell';

export const metadata = {
  title: 'Amsterdam Trading Jobs',
  description: 'Your source for trading and quant jobs in Amsterdam!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <MainAppShell>
            {children}
          </MainAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
