
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import Link from "next/link";
import appConfig from "../../styles/config.json";
import { useDispatch, useSelector } from 'react-redux';
function HeaderButton(props) {

    return (
        <Button
            href={props.href}
            label={props.children}
            id={"btn" + props.id}
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
    const user = useSelector((state) => state.user);
    return (
        <>
            <div className='desktop'>
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
                        {user.type != "" ?
                            <>
                                <HeaderButton id="Animals" href="/animal">Meus Animais</HeaderButton>
                                {user.type != "vet" ? <HeaderButton id="Treatments" href="/treatments">Tratamentos</HeaderButton> : ""}
                                {/*
                    <HeaderButton href="/">Organiza????o</HeaderButton>
                    <HeaderButton href="/">Participantes</HeaderButton>
                    <HeaderButton href="/">Minha Conta</HeaderButton>
                    */}

                                <HeaderButton id="Out" href="/login">Sair</HeaderButton>
                            </> : ""}

                    </Box>



                </Box>
            </div>


        </>
    )
}
export default HeaderComponent