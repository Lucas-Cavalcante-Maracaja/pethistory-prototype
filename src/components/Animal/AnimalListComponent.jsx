import AnimalCard from "./AnimalCardComponent"
import { Box, Text, Image, Button } from '@skynexui/components';

export default function  AnimalList ({ animals }) {
    const cardsArray = animals.map(animal => (
      <AnimalCard id={"Animal"+animal.id} key={"Animal"+animal.id}
        animal={animal}
         />
    ));
  
    return (
        <Box
            id='lsAnimal'
            styleSheet={{
                display: 'flex',
                flex:2,
                flexFlow: "row wrap",
                
                margin:{
                    xs: '0',
                    sm: '20px',
                },
                flexDirection: {
                    xs: 'column',
                    sm: 'row',
                },
                justifyContent:"space-evenly",
                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)'
            }}>
            {cardsArray}
        </Box>
    );
  };