import React from 'react';
import { Box, Text, Image, Button, Icon } from '@skynexui/components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TreatmentList from '../components/Treatments/TreatmentListComponent';
import HistoryList from '../components/MedicalHistory/HistoryListComponent';
import ConditionList from '../components/Conditions/ConditionListComponent';
import AnimalCard from '../components/Animal/AnimalCardComponent';
import { useUserAuthSession } from '../lib/hooks/user';
import { useRouter } from 'next/router'
import { treatments } from '../lib/data_mock/treatments'
import { histories } from '../lib/data_mock/history'
import { conditions } from '../lib/data_mock/condition'

//import { useAuthSession } from '../lib/hooks/user';


export default function AnimalDetails() {
    const router = useRouter()
    let animal = null
    const [treatmentsActive, setTreatmentsActive] = React.useState([])
    const [treatmentsInactive, setTreatmentsInactive] = React.useState([])
    const [historyList, setHistory] = React.useState([])
    const [conditionList, setConditions] = React.useState([])
    useUserAuthSession();

    if (router.query.animal != null) {
        animal = JSON.parse(router.query.animal);
        
    }
    

    React.useEffect(() => {
        if (animal != null) {
            setHistory(histories.filter((el) => {
                return el.animalId == animal.id
            }))
            setConditions(conditions.filter((el) => {
                return el.animalId == animal.id
            }))
            setTreatmentsActive(treatments.filter((el) => {
                return el.active && el.animalId == animal.id
            }))

            setTreatmentsInactive(treatments.filter((el) => {
                return !el.active && el.animalId == animal.id
            }))
        }

    }, []);
    return (
        <>
            {animal != null ?
                <>
                    <AnimalCard
                        animal={animal}
                    />
                    <Tabs>
                        <TabList>
                            <Tab >Hist??rico</Tab>
                            <Tab >Condi????es</Tab>
                            <Tab >Tratamentos</Tab>

                        </TabList>
                        <TabPanel>
                            <HistoryList histories={historyList} />
                        </TabPanel>

                        <TabPanel>
                            <ConditionList conditions={conditionList} />
                        </TabPanel>
                        <TabPanel>

                            <Tabs>
                                <TabList>
                                    <Tab >Tratamentos em andamento</Tab>
                                    <Tab >Tratamentos conclu??dos</Tab>
                                </TabList>
                                <TabPanel>
                                    <TreatmentList treatments={treatmentsActive} concluded={false} />
                                </TabPanel>
                                <TabPanel>
                                    <TreatmentList treatments={treatmentsInactive} concluded={true} />
                                </TabPanel>
                            </Tabs>





                        </TabPanel>
                    </Tabs>
                </> : ""}

        </>
    )


}

