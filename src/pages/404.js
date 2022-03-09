import { Box, Button, Text } from '@skynexui/components';
import appConfig from '../styles/config.json';
import { useRouter } from 'next/router'

export default function Custom404() {
    const router = useRouter()
    return (<>
        <Box

            styleSheet={{
                display: 'flex',
                margin: '20px',
                flexDirection: 'column',
                justifyContent: "flex-start",
                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                fontSize: "20px",
                fontWeight: "bold",
                padding: "5px",

            }}>
            <Text
                styleSheet={{
                    marginHorizontal: "auto",
                    fontSize: "20px",
                    fontWeight: "bold",
                }}>
                Página não encontrada ou em desenvolvimento retorne para a página inicial
            </Text>

            <Button

                styleSheet={{

                    height: "30px",
                    width: {
                        xs: "100%",
                        sm: "300px"
                    },
                    textAlign: 'center',
                    paddingTop: '7px',
                    marginTop: "auto",
                    marginHorizontal: "auto",
                    marginBottom: "10px",

                }}
                buttonColors={{
                    contrastColor: appConfig.theme.colors.secondary["black"],
                    mainColor: appConfig.theme.colors.primary["brown_light"],
                    mainColorLight: appConfig.theme.colors.primary["green_light"],
                    mainColorStrong: appConfig.theme.colors.primary["brown_dark"]
                }}
                label="Voltar"
                onClick={() => {
                    router.push({
                        pathname: '/'

                    });
                }}></Button>
        </Box>
    </>)
}