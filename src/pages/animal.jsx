import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import { Box, Text, TextField, Button, Icon } from '@skynexui/components';
import { animals } from '../lib/data_mock/animals'
import AnimalList from "../components/Animal/AnimalListComponent"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useUserAuthSession } from '../lib/hooks/user';
//import { useAuthSession } from '../lib/hooks/user';
import { useDispatch, useSelector } from 'react-redux';

export default function Animal() {
    const router = useRouter()
    useUserAuthSession();
    const [animalsActive, setAnimalsActive] = useState([])
    const [animalsInactive, setAnimalsInactive] = useState([])
    const [inputText, setInputText] = useState("");
    const user = useSelector((state) => state.user);
    var inputPlaceholder = "Animais " + user.type == "vet" ? "ou tutores" : ""

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    let resetInputFilter = (e) => {
        setInputText("");
    };
    React.useEffect(() => {

        setAnimalsActive(animals.filter((el) => {
            return el.active && (user.type == "common" ? el.nameUser == user.name : el.vetName == user.name)
        }))

        setAnimalsInactive(animals.filter((el) => {
            return !el.active && (user.type == "common" ? el.nameUser == user.name : el.vetName == user.name)
        }))
    }, []);
    return (
        <>
            <Tabs onSelect={resetInputFilter}>
                <TabList>
                    <Tab>Animais</Tab>
                    <Tab>Animais desativados</Tab>
                </TabList>
                <TabPanel>
                    <Box
                        styleSheet={{
                            display: "flex",
                            justifyContent: "flex-end"
                        }}
                    >
                        <TextField
                            styleSheet={{

                                marginRight: {
                                    xm: "0",
                                    sm: "15px"
                                },
                                width: {
                                    xm: "100%",
                                    sm: "300px"
                                }
                            }}
                            onChange={inputHandler}
                            label="Pesquisar"
                            placeholder={`Animais ${user.type == "vet" ? "ou tutores" : ""}`}
                        />
                    </Box>

                    <AnimalList filter={inputText} animals={animalsActive} />
                </TabPanel>
                <TabPanel>
                    <Box
                        styleSheet={{
                            display: "flex",
                            justifyContent: "flex-end"
                        }}
                    >
                        <TextField
                            styleSheet={{

                                marginRight: {
                                    xm: "0",
                                    sm: "15px"
                                },
                                width: {
                                    xm: "100%",
                                    sm: "300px"
                                }
                            }}
                            onChange={inputHandler}
                            label="Pesquisar"
                            placeholder={`Animais ${user.type == "vet" ? "ou tutores" : ""}`}
                        />
                    </Box>
                    <AnimalList filter={inputText} animals={animalsInactive} />
                </TabPanel>
            </Tabs>


        </>
    )
}