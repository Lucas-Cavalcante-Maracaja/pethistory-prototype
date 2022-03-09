
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import Link from "next/link";
import appConfig from "../../styles/config.json";

function HeaderButton(props) {
    return (
        <Button
            href={props.href}
            label={props.children}
            styleSheet={{
                marginBottom: "5px",
                marginRight: "15px"
            }}
            buttonColors={{
                contrastColor: appConfig.theme.colors.secondary["black"],
                mainColor: appConfig.theme.colors.primary["green_light"],
                mainColorLight: appConfig.theme.colors.primary["green_light"]
            }}
        />
    )
}

function HeaderComponent() {
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: {
                        xs: "column",
                        sm: 'row',
                    },
                    alignItems: 'center',
                    margin: '16px',
                    border: '1px solid',
                    borderRadius: '10px',
                    flex: 2,
                    padding: '3px'
                }}>
                <Image
                    width="200" height="200"
                    src={"/imgs/logo.jpg"}
                />
                <Box
                    styleSheet={{
                        display: "flex",
                        alignSelf: {
                            xs: "flex-start",
                            sm: "flex-end",
                        },
                        marginBottom: "15px",
                        flexDirection: {
                            xs: "column",
                            sm: 'row',
                        },
                    }}
                >
                    <HeaderButton href="/animal">Meus Animais</HeaderButton>
                    <HeaderButton href="/treatments">Tratamentos</HeaderButton>
                    {/*
                    <HeaderButton href="/">Organização</HeaderButton>
                    <HeaderButton href="/">Participantes</HeaderButton>
                    <HeaderButton href="/">Minha Conta</HeaderButton>
                    */}
                    
                    <HeaderButton href="/">Sair</HeaderButton>
                   
                    
                </Box>



            </Box>

        </>
    )
}
export default HeaderComponent