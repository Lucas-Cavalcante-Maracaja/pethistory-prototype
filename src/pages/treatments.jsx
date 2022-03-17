import React from 'react';
import { Box, Text, Image, Button, Icon } from '@skynexui/components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TreatmentList from '../components/Treatments/TreatmentListComponent';
import AnimalCard from '../components/Animal/AnimalCardComponent';
import { useRouter } from 'next/router'
import { treatments } from '../lib/data_mock/treatments'
import { useCommonUserAuthSession } from '../lib/hooks/user';



//import { useAuthSession } from '../lib/hooks/user';


export default function AnimalDetails() {
    const router = useRouter()
    useCommonUserAuthSession();
    let animal = null
    const [treatmentsActive, setTreatmentsActive] = React.useState([])
    const [treatmentsInactive, setTreatmentsInactive] = React.useState([])
    
    if (router.query.animal != null) {
        animal = JSON.parse(router.query.animal);
    }



    treatments.sort(function (a, b) {
        let parts_of_date1 = a.start.split("/");
        let date1 = new Date(+parts_of_date1[2], parts_of_date1[1] - 1, +parts_of_date1[0]);

        let parts_of_date2 = b.start.split("/");
        let date2 = new Date(+parts_of_date2[2], parts_of_date2[1] - 1, +parts_of_date2[0]);

        return new Date(date1.getTime()) - new Date(date2.getTime());
    });
    React.useEffect(() => {

        setTreatmentsActive(treatments.filter((el) => {
            return el.active
        }))

        setTreatmentsInactive(treatments.filter((el) => {
            return !el.active
        }))
    }, []);


    return (
        <>


            <Tabs>
                <TabList>
                    <Tab >Tratamentos em andamento</Tab>
                    <Tab >Tratamentos concluídos</Tab>
                </TabList>
                <TabPanel>
                    <TreatmentList treatments={treatmentsActive} />
                </TabPanel>
                <TabPanel>
                    <TreatmentList treatments={treatmentsInactive} />
                </TabPanel>
            </Tabs>




        </>
    )
}