import AnimalCard from "./AnimalCardComponent"
import { Box, Text, Image, Button } from '@skynexui/components';
import { useDispatch, useSelector } from 'react-redux';


export default function  AnimalList ({ filter,animals }) {
    const user = useSelector((state) => state.user);
    const filteredData = animals.filter((el) => {
        //if no input the return the original
        if (filter === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            if(user.type == "vet"){
                return el.name.toLowerCase().includes(filter) || el.nameUser.toLowerCase().includes(filter)
            }else{
                return el.name.toLowerCase().includes(filter)
            }
           
        }
    })
    const cardsArray = filteredData.map(animal => (
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