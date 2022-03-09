import { useRouter } from 'next/router'
import React, { useEffect } from 'react';
import { Box, Text, Image, Button, Icon } from '@skynexui/components';
import { animals } from '../lib/data_mock/animalsIndActive'
import { animalsInactive } from '../lib/data_mock/animalsIndInactive'
import AnimalList from "../components/Animal/AnimalListComponent"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useCommonUserAuthSession } from '../lib/hooks/user';
//import { useAuthSession } from '../lib/hooks/user';


export default function Animal() {
    const router = useRouter()
    useCommonUserAuthSession();
    
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Animais</Tab>
                    <Tab>Animais desativados</Tab>
                </TabList>
                <TabPanel>
                    <AnimalList animals={animals} />
                </TabPanel>
                <TabPanel>
                    <AnimalList animals={animalsInactive} />
                </TabPanel>
            </Tabs>


        </>
    )
}