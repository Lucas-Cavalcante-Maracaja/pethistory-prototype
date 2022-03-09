import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../../styles/config.json';
import { useRouter } from 'next/router'



export default function HistoryCard({ history }) {
    const router = useRouter()

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: "15px",
                    justifyContent: 'space-evenly',
                    justifyContent:"flex-start",
                }} >
                <Box
                    styleSheet={{
                        display: 'flex',
                        flexDirection: 'column',
                        width:"100px"

                    }} >
                    <Text styleSheet={{ fontWeight: "bold", width: "180px" }}>{history.date} -</Text>
                    <Text styleSheet={{ fontWeight: "bold", width: "180px" }}>{" Vet. " + history.vetName}</Text>
                </Box>
                <Text styleSheet={{ marginLeft: "3px" }}>{history.text}</Text>



            </Box>

        </>
    )
}