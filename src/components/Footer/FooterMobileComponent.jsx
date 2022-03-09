
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import Link from "next/link";
import appConfig from '../../styles/config.json';
import { useSelector } from 'react-redux';
function FooterMobileButton(props) {

    return (
        <Button
            href={props.href}
            label={props.children}
            rounded="none"
            buttonColors={{
                contrastColor: appConfig.theme.colors.secondary["black"],
                mainColor: appConfig.theme.colors.primary["green"],
                mainColorLight: appConfig.theme.colors.primary["green"]
            }}
            styleSheet={{
                textAlign: "center",
                paddingBottom: "20px",
                borderLeft: "0.5px solid " + appConfig.theme.colors.primary["green_light"],
                borderRight: "0.5px solid " + appConfig.theme.colors.primary["green_light"],
                borderStyle: "solid",
                width:"100%"
            }}
        />
    )
}

function FooterMobileComponent() {
    const user = useSelector((state) => state.user);
    return (
        <>
            <div style={{
                position: "fixed",
                left: 0,
                bottom: 0,
                right: 0,
            }}>
                <Box
                    styleSheet={{
                        display: "flex",
                        flexDirection: 'row'
                    }}
                >
                    {user.type == "common" ?
                        <>
                            <FooterMobileButton href="/animal">Meus Animais</FooterMobileButton>
                            <FooterMobileButton href="/treatments">Tratamentos</FooterMobileButton>
                            <FooterMobileButton href="/">Sair</FooterMobileButton>
                        </>
                        : ""}
                    {user.type == "vet" ?
                        <>
                            <FooterMobileButton href="/vetanimal">Meus Animais</FooterMobileButton>
                            <FooterMobileButton href="/vettreatments">Tratamentos</FooterMobileButton>
                            <FooterMobileButton href="/">Sair</FooterMobileButton>
                        </>
                        : ""}
                </Box>
            </div>






        </>
    )
}
export default FooterMobileComponent