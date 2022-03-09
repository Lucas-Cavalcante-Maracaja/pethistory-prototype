import TreatmentCard from "./TreatmentCardComponent"
import { Box, Text, Image, Button } from '@skynexui/components';

export default function  TreatmentList ({ treatments, concluded }) {
    treatments.sort(function (a, b) {
        let parts_of_date1 = a.start.split("/");
        let date1 = new Date(+parts_of_date1[2], parts_of_date1[1] - 1, +parts_of_date1[0]);

        let parts_of_date2 = b.start.split("/");
        let date2 = new Date(+parts_of_date2[2], parts_of_date2[1] - 1, +parts_of_date2[0]);

        if(concluded){
            //recent to old
            return new Date(date2.getTime()) - new Date(date1.getTime());
        }else{
            //old to recent
            return new Date(date1.getTime()) - new Date(date2.getTime());
        }
    });
    let cardsArray = "Não há tratamentos para mostrar"
    if(treatments!=null && treatments.length>0){
        cardsArray = treatments.map(treatment => (
            <TreatmentCard id={"Treatments"+treatment.id} key={"Treatments"+treatment.id}
              treatment={treatment}
               />
          ));
    }
    
  
    return (
        <Box
            id='lsTreatment'
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