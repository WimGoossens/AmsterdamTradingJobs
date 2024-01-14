'use client'

import { Title, Text, Center, Grid, Container, Space, Skeleton, Anchor, ActionIcon } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { FirmImage } from './FirmImage';

export function FirmInfo(props: {
    company: String,
    description: String,
    founded_in: String,
    google_maps_src: string,
    fte: String,
    website: string,
    linkedin: string
 }) {
  return (
    <>
    {/* <Container mt='xl'> */}
    <Space h='xl'/>
    <Title order={1} ta="center" mt={50}>
        {props.company}
    </Title>

        <Grid justify='center' align='flex-start' m='xl' gutter='xl'>
            <Grid.Col span={3}>
                <FirmImage company={props.company}/>
                <Text ta='left' mt={25} my='xs'>
                    Founded in: {' ' + props.founded_in}
                </Text>
                <Text ta='left' my='xs'>
                    Number of employees:  {' ' + props.fte}
                </Text>
                <Text ta='left' my='xs'>
                    Website:  {' '}
                    <Anchor href={props.website} target='_blank'>
                    {props.website}
                    </Anchor>
                </Text>
                <Anchor href={props.linkedin} target='_blank'>
                    <IconBrandLinkedin/>
                </Anchor>
            </Grid.Col>
            <Grid.Col span={4}>
                <div style={{ filter: 'grayscale(75%)' }}>
                    <iframe
                        src={props.google_maps_src}
                        width="480"
                        height="270"
                        style={{ border:'0' }}
                        loading="lazy"
                    ></iframe>
                </div>
                
            </Grid.Col>
        </Grid>
    {/* </Center> */}
    
    </>
  );
}
