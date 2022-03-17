import { useRouter } from 'next/router'
import React, { useEffect } from 'react';
import { Box, Text, Image, Button, Icon } from '@skynexui/components';
import { animals } from '../lib/data_mock/animals'
import AnimalList from "../components/Animal/AnimalListComponent"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useUserAuthSession } from '../lib/hooks/user';
//import { useAuthSession } from '../lib/hooks/user';
import { useDispatch, useSelector } from 'react-redux';

export default function Animal() {
    const router = useRouter()
    useUserAuthSession();
    const [animalsActive, setAnimalsActive] = React.useState([])
    const [animalsInactive, setAnimalsInactive] = React.useState([])
    const user = useSelector((state) => state.user);



    
    React.useEffect(() => {

        setAnimalsActive(animals.filter((el) => {
            return el.active && (user.type=="common"?el.nameUser == user.name : el.vetName == user.name)
        }))

        setAnimalsInactive(animals.filter((el) => {
            return !el.active && (user.type=="common"?el.nameUser == user.name : el.vetName == user.name)
        }))
    }, []);
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Animais</Tab>
                    <Tab>Animais desativados</Tab>
                </TabList>
                <TabPanel>
                    <AnimalList animals={animalsActive} />
                </TabPanel>
                <TabPanel>
                    <AnimalList animals={animalsInactive} />
                </TabPanel>
            </Tabs>


        </>
    )
}