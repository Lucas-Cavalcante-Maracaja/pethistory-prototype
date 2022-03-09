
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import Link from "next/link";
import appConfig from "../../styles/config.json";
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';


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

function HeaderMobileComponent() {
    const router = useRouter()
    const [pageName, setPageName] = useState("")
    let animal = null
    if(router.query.animal!= null){
        animal =  JSON.parse(router.query.animal)
    }
    
    let arrayPages = [
        { key: ["/animal","/vetanimal"], value: "Meus Animais" },
        { key: ["/animaldetails","/vetanimaldetails"], value: animal != null ? animal.name : "Detalhes" },
        { key: ["/"], value: "Entrar" },
        { key: ["/treatments","/vettreatments"], value: "Tratamentos" }
    ]


    useEffect(() => {
        arrayPages.map((page) => {
            if (page.key.includes(router.pathname)) {
                setPageName(page.value)
            }
        })
    }, [router.asPath]);
    return (
        <>
            <div  className="mobile" style={{
                position: "fixed",
                left: 0,
                top: 0,
                right: 0,
                height: "50px",
                zIndex: '1'
            }}>
                <Box
                    styleSheet={{
                        display: "flex",
                        flexDirection: 'row',
                        alignSelf: "flex-start",
                        backgroundColor: appConfig.theme.colors.primary["green_light"]

                    }}
                >
                    <Image
                        width="50" height="50"
                        src={"/imgs/logo.jpg"}
                    />
                    <Text styleSheet={{
                        width: "100%",
                        textAlign: "center",
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        left: '50%',
                        top: '35%',
                        transform: 'translate(-50%, -50%)',
                        fontWeight: "bold"
                    }}>
                        {pageName}
                    </Text>
                </Box>
            </div>

        </>
    )
}
export default HeaderMobileComponent