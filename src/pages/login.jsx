import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React, { useEffect, useState } from "react";
import appConfig from '../styles/config.json';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import UserTest from '../components/Login/UserTestComponent';

export default function Login() {
    const router = useRouter()
    const dispatch = useDispatch();
    const [userExists, setUserExist] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector((state) => state.user);



    const handleSubmit = async e => {
        e.preventDefault();

        if (password == "12345" && username == "Marcus") {

            dispatch(setUser({ name: "Marcus", type: "common" }));
            router.push({
                pathname: '/animal'
            });
        } else if (password == "14682" && username == "Joana") {
            dispatch(setUser({ name: "Joana", type: "vet" }));
            router.push({
                pathname: '/vetanimal'
            });
        } else {
            setUserExist(false)
        }
    };

    useEffect(() => {
        /*if (user.type == "common") {
          router.push({
            pathname: '/animal'
          });
        }*/
        if (user.type != '') {
            dispatch(setUser({ name: "", type: "" }));
        }
    }, [])

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',
                    }
                }}

            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px',
                        margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)'
                    }} >

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' },
                            textAlign: 'center',
                            marginBottom: '32px',
                        }}
                        onSubmit={handleSubmit}

                    >
                        <h2 tag="h2">Login</h2>
                        {!userExists ?
                            <Text
                                variant="body4"
                                id="txtFailLogin"
                                styleSheet={{
                                    color: 'white',
                                    backgroundColor: 'red',
                                    padding: '2px',
                                    borderRadius: '1000px',
                                    marginBottom: '4px'
                                }}
                            >
                                Usuário não encontrado
                            </Text>
                            : ""}
                        <TextField
                            fullWidth
                            label="Nome de usuário"
                            value={username}
                            id="tfName"
                            textFieldColors={{
                                neutral: {
                                    backgroundColor: '#FFFFFF',
                                    mainColor: '#000000',
                                    mainColorHighlight: appConfig.theme.colors.primary["green"],
                                    textColor: '#222222'
                                },
                                positive: {
                                    backgroundColor: '#FFFFFF',
                                    mainColor: '#000000',
                                    mainColorHighlight: appConfig.theme.colors.primary["green"],
                                    textColor: '#014807'
                                }
                            }}
                            onChange={async function (event) {
                                let name = event.target.value;
                                setUserExist(true)
                                setUsername(name)


                            }}
                        />

                        <TextField
                            fullWidth
                            label="Senha"
                            value={password}
                            type="password"
                            id="tfPassword"
                            textFieldColors={{
                                neutral: {
                                    backgroundColor: '#FFFFFF',
                                    mainColor: '#000000',
                                    mainColorHighlight: appConfig.theme.colors.primary["green"],
                                    textColor: '#222222'
                                },
                                positive: {
                                    backgroundColor: '#FFFFFF',
                                    mainColor: '#000000',
                                    mainColorHighlight: appConfig.theme.colors.primary["green"],
                                    textColor: '#014807'
                                }
                            }}
                            onChange={async function (event) {
                                let password = event.target.value;
                                setUserExist(true)
                                setPassword(password)


                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            id="btnSubmit"
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.secondary["black"],
                                mainColor: appConfig.theme.colors.primary["green"],
                                mainColorLight: appConfig.theme.colors.primary["green_light"],
                                mainColorStrong: appConfig.theme.colors.primary["green_dark"]
                            }}

                        />
                    </Box>
                    {/* Formulário */}



                </Box>
                <UserTest />

            </Box>

        </>
    )
}