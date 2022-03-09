import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../../styles/config.json';
import { useRouter } from 'next/router'



export default function HistoryCard({ condition }) {
    const router = useRouter()

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: "15px",
                    justifyContent: 'space-evenly',
                    justifyContent: "flex-start",
                }} >
                <ul>
                    <li>
                        <Text styleSheet={{ fontWeight: "bold" }}>{condition.type}</Text>
                        <Box
                            styleSheet={{
                                display: 'flex',
                                flexDirection: 'column',
                              

                            }} >
                            <Text>{condition.description}</Text>
                            <Text>{condition.resolution}</Text>
                        </Box>
                    </li>
                </ul>
            </Box>
        </>
    )
}