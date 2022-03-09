import { useRouter } from 'next/router';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React, { useState } from "react";
import appConfig from '../../styles/config.json';


export default function UserTest() {

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    width: '100%', maxWidth: '700px',
                    borderRadius: '5px', padding: '32px',
                    margin: '16px',
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)'
                }} >
                <h2 >Usuários de Teste</h2>
                <Box
                    styleSheet={{
                        display: 'flex',

                        flexDirection: 'row',

                    }}
                >
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '0px',
                            textAlign: 'center',
                            marginRight:{
                                xs:"0",
                                sm:"3px"
                            }
                        }}

                    >

                        <h3 >Usuário individual</h3>
                        <Text>Nome: Marcus</Text>
                        <Text>Senha: 12345</Text>


                    </Box>
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',

                            textAlign: 'center',
                            marginLeft:{
                                xs:"0",
                                sm:"3px"
                            }
                        }}

                    >

                        <h3 >Usuário Veterinario</h3>
                        <Text>Nome: Joana</Text>
                        <Text>Senha: 14682</Text>


                    </Box>

                    {/*<Box
                    styleSheet={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
          
                    textAlign: 'center', 
                
                    }}
                    
                >
                
                    <h3 >Usuário organização</h3>
                    <Text>Nome: João</Text>
                    <Text>Senha: 123</Text>
                    
                
                </Box>
                */}
                </Box>


            </Box>




        </>
    )
}