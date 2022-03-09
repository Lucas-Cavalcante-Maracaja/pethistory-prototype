import ConditionCard from "./ConditionCardComponent"
import { Box, Text, Image, Button } from '@skynexui/components';

export default function ConditionList({ conditions }) {

    let cardsArray = "Não há condições para mostrar"
    if (conditions != null && conditions.length > 0) {
        cardsArray = conditions.map(condition => (
            <ConditionCard id={"Conditions" + condition.id} key={"Conditions" + condition.id}
                condition={condition}
            />
        ));
    }


    return (
        <Box
            id='lsCondition'
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