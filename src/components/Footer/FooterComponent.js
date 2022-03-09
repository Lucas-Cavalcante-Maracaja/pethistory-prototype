
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import Link from "next/link";
import appConfig from '../../styles/config.json';

function FooterComponent() {
    return (
        <>

            <Box
                tag='footer'
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid',
                    borderRadius: '10px',
                    padding: '0px 5px',
                    backgroundColor: appConfig.theme.colors.primary['brown_light']
                }}>

                <Text>Esse sistema é uma demonstração. Quaisquer dúvida ou feedback contatar: lucascavalcantemaracaja@outlook.com</Text>




            </Box>

        </>
    )
}
export default FooterComponent