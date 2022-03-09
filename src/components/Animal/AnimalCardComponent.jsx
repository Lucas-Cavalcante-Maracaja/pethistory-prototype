import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../../styles/config.json';
import { useRouter  } from 'next/router'

export default function AnimalCard({ animal }) {
    const router = useRouter()

    return (
        <>
            <Box
                id={"animal"+animal.id} 
                
                styleSheet={{
                    display: 'flex',

                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    margin: {
                        xs:"0 0 15px 0",
                        sm: '30px'
                       
                    },
                    width: {
                        xs: "100%",
                        sm: '500px'
                    },
                    height: {
                        
                        sm: "300px"
                    },
                    justifyContent: 'space-evenly'
                }} >
                <Image
                    styleSheet={{
                        width: "100%",
                        height: "100%",
                        maxWidth: {
                            xs: "100%",
                            sm: '240px'
                        }
                        
                    }}
                    src={animal.picUrl}
                />
                <Box

                    styleSheet={{
                        display: "flex",
                        width: { xs: '100%', sm: '50%' },
                        flexDirection: 'column',
                    }}

                >
                    <Box
                        styleSheet={{
                            color: appConfig.theme.colors.secondary["black"],
                            backgroundColor: appConfig.theme.colors.primary["green"],
                            height: "30px",
                            width: "100%",
                            textAlign: 'center',
                            paddingTop: '7px',

                        }}
                    >
                        <Text>
                            {animal.name}
                        </Text>
                    </Box>

                    <Text
                        styleSheet={{

                            marginVertical: '7px',

                        }}>
                        Espécie: {animal.species}
                    </Text>
                    <Text styleSheet={{

                        marginVertical: '7px',

                    }}>
                        Raça: {animal.race}
                    </Text>
                    <Text styleSheet={{

                        marginVertical: '7px',

                    }}>
                        Data de Nascimento: {animal.birthdate}
                    </Text>
                    {router.asPath == "/animal"?
                    <Button
                        id={"btnAnimal"+animal.id} 
                        styleSheet={{

                            height: "30px",
                            width: "100%",
                            textAlign: 'center',
                            paddingTop: '7px',
                            marginTop: "auto",
                            marginBottom: "10px"
                        }}
                        buttonColors={{
                            contrastColor: appConfig.theme.colors.secondary["black"],
                            mainColor: appConfig.theme.colors.primary["brown_light"],
                            mainColorLight: appConfig.theme.colors.primary["green_light"],
                            mainColorStrong: appConfig.theme.colors.primary["brown_dark"]
                        }}
                        label="Ver mais"
                        onClick={() => {
                            router.push({
                                pathname: '/animaldetails',
                                query: { animal: JSON.stringify(animal) }
                            });
                        }}></Button>:""}
                </Box>
            </Box>

        </>
    )
}