import React, { FC } from 'react';
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Route, Routes } from 'react-router-dom';
import HomePage from './home';

interface DashboardPageProps {

}

const DashboardPage: FC<DashboardPageProps> = ({ }) => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <React.Fragment>
            <AppShell
                header={{ height: 60 }}
                navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
                padding="md"
            >
                <AppShell.Header>
                    <Group h="100%" px="md">
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                        Movie Booking
                    </Group>
                </AppShell.Header>
                <AppShell.Navbar p="md">
                    Navbar
                    {Array(15)
                        .fill(0)
                        .map((_, index) => (
                            <Skeleton key={index} h={28} mt="sm" animate={false} />
                        ))}
                </AppShell.Navbar>
                <AppShell.Main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </AppShell.Main>
            </AppShell>
        </React.Fragment>
    );
};

export default DashboardPage;