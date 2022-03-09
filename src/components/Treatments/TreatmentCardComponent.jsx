import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../../styles/config.json';
import { useRouter } from 'next/router'



export default function TreatmentCard ({treatment}){
    const router = useRouter()
    const treatmentsPage = router.asPath == "/treatments"
    return (
        <>
             <Box
                styleSheet={{
                    display: 'flex',
                    maxWidth:"500px",
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',

                    },
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    margin:{
                        xs: '5px',
                        sm: '30px',

                    },
                   
                   
                    justifyContent:'space-evenly'
                }} >
                   
                    <Box
                            
                        styleSheet={{
                            display:"flex",
                            flexDirection: 'column',
                        }}
                            
                    >
                        <Box
                            styleSheet={{
                                color: appConfig.theme.colors.secondary["black"],
                                backgroundColor: appConfig.theme.colors.primary["green"],
                                height:"100%",
                                width:"100%",
                                textAlign: 'center',
                                paddingTop:'7px',
                                paddingBottom:'7px',
                            }}
                        >
                            <Text>
                                {treatmentsPage?treatment.animalName + " - "+treatment.name:"" +treatment.name}
                            </Text>
                        </Box>
                        <Box styleSheet={{ padding:"15px",}}>
                        {treatment.permanent?
                            <Text
                            styleSheet={{
                                
                                marginVertical:'7px',
                               
                            }}>
                                Tratamento contínuo
                            </Text>
                        :""}
                       
          
                        <Text
                        styleSheet={{
                            
                            marginVertical:'7px',
                           
                        }}>
                            Veterinário: {treatment.vetName}
                        </Text>
                        <Text styleSheet={{
                            
                            marginVertical:'7px',
                           
                        }}>
                            Início: {treatment.start} <br/>{!treatment.permanent?"Fim: "+ treatment.end:""}
                        </Text>
                        <Text styleSheet={{
                            
                            marginVertical:'7px',
                           
                        }}>
                            Observação: {treatment.observation}
                        </Text>
                        </Box>
                        
                    
                        
                   </Box>
            </Box>
        
        </>
    )
}