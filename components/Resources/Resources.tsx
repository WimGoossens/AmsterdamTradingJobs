'use client'

import { List, Text, Title, Container, Anchor, Space } from '@mantine/core';

export default function Resources() {
    return (
        <>
            <Title order={1} ta="center" mt={100} my='xl'>
                Resources
            </Title>
            <Container>
                <Text ta='center'>
                    To help you with landing a job at a trading form, we have curated various resources. For example, 
                    many prop trading firms have a mental math test as part of their interview process, as well as 
                    some math brainteasers. We have also listed some books, videos and podcasts about quantitative 
                    finance.
                </Text>

                <Space h='xl'/>

                <Title order={2} ta="left" my='md'>
                    Interview preparation
                </Title>

                <Title order={3} my='md'>
                    Mental math:
                </Title>

                <List size="lg" withPadding>
                    <List.Item>
                        <Anchor href="https://www.tradermath.org/" target="_blank">
                            Tradermath
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://www.mathsprint.io/" target="_blank">
                            mathsprint
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://arithmetic.zetamac.com/" target="_blank">
                            zetamac
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://mathsprint-7f879.web.app/" target="_blank">
                            https://mathsprint-7f879.web.app/
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://www.quantguide.io/" target="_blank">
                            Quant Guide
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://brainstellar.com/" target="_blank">
                            Brain Stellar
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://apps.apple.com/us/app/mental-math-trainer-fastmath/id1551025256" target="_blank">
                            Mental Math Trainer: FastMath (iOS App)
                        </Anchor>
                    </List.Item>
                </List>

                <Title order={3} my='md'>
                    Brainteasers:
                </Title>

                <List size="lg" withPadding>
                    <List.Item>
                        <Anchor href="https://www.tradermath.org/" target="_blank">
                            Tradermath
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://www.quantguide.io/" target="_blank">
                            Quant Guide
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://www.qmr.ai/quantitative-interview-preparation-questions/" target="_blank">
                            Quant Interview Preparation Questions
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://brainstellar.com/" target="_blank">
                            Brain Stellar
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://www.interviewbit.com/" target="_blank">
                            InterviewBit
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://www.cs.cmu.edu/puzzle/index.html" target="_blank">
                            The Puzzle Toad
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://gurmeet.net/puzzles/" target="_blank">
                            Gurmeet Puzzles
                        </Anchor>
                    </List.Item>
                </List>

                <Title order={2} ta="left" my='md'>
                    Books
                </Title>

                <Title order={3} my='md'    >
                    Options and derivatives:
                </Title>

                <List size="lg" withPadding>
                    <List.Item>
                        <Anchor href="https://amzn.eu/d/aZ4iN1h" target="_blank">
                        Option Volatility and Pricing: Advanced Trading Strategies and Techniques, Sheldon Natenberg
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://amzn.eu/d/hLHgbSf" target="_blank">
                            Options, Futures, and Other Derivatives, John C. Hull
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://amzn.eu/d/fHc62Ty" target="_blank">
                        Paul Wilmott on Quantitative Finance, Paul Wilmott
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://amzn.eu/d/dXzlhQK" target="_blank">
                        Dynamic Hedging: Managing Vanilla and Exotic Options, Nassim Nicholas Taleb
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://a.co/d/iVgO72U" target="_blank">
                        Arbitrage Theory in Continuous Time, Tomas Björk
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://amzn.eu/d/aJfqF3z" target="_blank">
                        Stochastic Calculus for Finance II: Continuous-Time Models, Steven Shreve
                        </Anchor>
                    </List.Item>
                </List>

                <Title order={3} my='md'>
                    Trading:
                </Title>

                <List size="lg" withPadding>
                    <List.Item>
                        <Anchor href="https://a.co/d/arzmoPF" target="_blank">
                        Algorithmic Trading and DMA: An introduction to direct access trading strategies, Barry Johnson
                        </Anchor>
                    </List.Item>
                </List>

                <Title order={3} my='md'    >
                    Brainteasers:
                </Title>

                <List size="lg" withPadding>
                    <List.Item>
                        <Anchor href="https://amzn.eu/d/7Af9ZYm" target="_blank">
                            Fifty Challenging Problems in Probability with Solutions, Frederick Mosteller
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://a.co/d/cFYmsx0" target="_blank">
                            Heard on the Street: Quantitative Questions from Wall Street Job Interviews, Timothy Falcon Crack
                        </Anchor>
                    </List.Item>
                </List>

                <Title order={3} my='md'    >
                    Non-fiction:
                </Title>

                <List size="lg" withPadding>
                    <List.Item>
                        <Anchor href="https://a.co/d/gh6qXKu" target="_blank">
                            Trading at the Speed of Light: How Ultrafast Algorithms Are Transforming Financial Markets, Donald MacKenzie
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://a.co/d/8oi8m3V" target="_blank">
                            Flash Boys, Michael Lewis
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://amzn.eu/d/3Wxc517" target="_blank">
                            The Man Who Solved the Market: How Jim Simons Launched the Quant Revolution, Gregory Zuckerman
                        </Anchor>
                    </List.Item>
                </List>

                <Title order={2} ta="left" my='md'>
                    YouTube
                </Title>

                <Title order={3} my='md'>
                    Videos
                </Title>

                <List size="lg" withPadding>
                    <List.Item>
                        <Anchor href="https://www.youtube.com/watch?v=NH1Tta7purM" target="_blank">
                            CppCon 2017: Carl Cook “When a Microsecond Is an Eternity: High Performance Trading Systems in C++”
                        </Anchor>
                    </List.Item>
                </List>

                <Title order={3} my='md'>
                    Channels
                </Title>

                <List size="lg" withPadding>
                    <List.Item>
                        <Anchor href="https://www.youtube.com/@atypicalquant" target="_blank">
                            atypicalquant
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://www.youtube.com/@CodingJesus" target="_blank">
                            Coding Jesus
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://www.youtube.com/@DimitriBianco" target="_blank">
                            Dimitri Bianco
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://www.youtube.com/@QuantPy" target="_blank">
                            QuantPy
                        </Anchor>
                    </List.Item>
                </List>

                <Title order={2} ta="left" my='md'>
                    Podcasts
                </Title>

                <List size="lg" withPadding>
                    <List.Item>
                        <Anchor href="https://signalsandthreads.com/" target="_blank">
                            Signals and Threads
                        </Anchor>
                    </List.Item>
                </List>

                <Title order={2} ta="left" my='md'>
                    Massive open online courses (MOOCs)
                </Title>

                <List size="lg" withPadding>
                    <List.Item>
                        <Anchor href="https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/" target="_blank">
                            Topics in Mathematics with Applications in Finance, MIT
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        <Anchor href="https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/" target="_blank">
                            Financy Theory I, MIT
                        </Anchor>
                    </List.Item>
                </List>


            </Container>

            
        </>
  );
}