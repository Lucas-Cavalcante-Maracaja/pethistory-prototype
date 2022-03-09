import HistoryCard from "./HistoryCardComponent"
import { Box, Text, Image, Button } from '@skynexui/components';

export default function HistoryList({ histories }) {
    histories.sort(function (a, b) {
        let parts_of_date1 = a.date.split("/");
        let date1 = new Date(+parts_of_date1[2], parts_of_date1[1] - 1, +parts_of_date1[0]);

        let parts_of_date2 = b.date.split("/");
        let date2 = new Date(+parts_of_date2[2], parts_of_date2[1] - 1, +parts_of_date2[0]);
        return new Date(date2.getTime()) - new Date(date1.getTime());


    });
    let cardsArray = "Não há histórico para mostrar"
    if (histories != null && histories.length > 0) {
        cardsArray = histories.map(history => (
            <HistoryCard id={"Historys" + history.id} key={"Historys" + history.id}
                history={history}
            />
        ));
    }


    return (
        <Box
            id='lsHistory'
            styleSheet={{
                display: 'flex',
                flex: 2,
                flexFlow: "row wrap",

                margin: {
                    xs: '0',
                    sm: '20px',
                },
                flexDirection: 'column',
                justifyContent: "flex-start",
                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)'
            }}>
            {cardsArray}
        </Box>
    );
};