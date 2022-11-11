import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getEvent, getSchedule } from "../services/ApiService";
import { Dropdown, DropdownButton, Form, Button } from "react-bootstrap";
import '../styles/Timeline.css'
export function Timeline() {
    const [chartOptions, setChartOptions] = useState({});
    const [chartData, setChartData] = useState({
        datasets: [],
    });
    const [scheduleData, setScheduleData] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState({
        name: 'Select Event'
    });

    useEffect(() => {
        getSchedule(2022).then(schedule => {
            const finalFights = schedule.filter(event => event.Status == "Final");
            setScheduleData(finalFights);
        })
    }, [])

    const handleSelect = (eventId) => {
        var fightDiffs = [];
        getEvent(eventId).then(event => {
            console.log(event);

            setSelectedEvent({
                name: `${event.Name}`
            });

            const filteredFights = event.Fights.filter(fight => fight.Fighters.length == 2);

            filteredFights.forEach(fight => {
                // if (fight.Fighters.length == 2) {
                //     console.log(fight);
                //     fightDiffs.push(fight.Fighters[0].Moneyline - fight.Fighters[1].Moneyline);
                // }
                fightDiffs.push(fight.Fighters[0].Moneyline - fight.Fighters[1].Moneyline);
            });

            setChartData({
                labels: filteredFights.map(fight => `${fight.Fighters[0].LastName}(1) vs ${fight.Fighters[1].LastName}(2)`),
                datasets: [
                    {
                        label: "Fighter 1",
                        data: filteredFights.map(fight => fight.Fighters[0].Moneyline),
                        backgroundColor: "#E31C25",
                    },
                    {
                        label: "Fighter 2",
                        data: filteredFights.map(fight => fight.Fighters[1].Moneyline),
                        backgroundColor: "#2b2b2b",
                    },
                ]
            });

            setChartOptions({
                responsive: true,
                plugins: {
                    title: {
                        display: false,
                    },
                },
            });
        })
    }

    return (
        <section>
            <div className="timeline">
                <div className="block"></div>
                <div className="moneyline">
                    <h1 className="fight-match">See how evenly each fight was matched</h1>
                    <p className="betting-def">UFC moneyline betting simply comes down to betting on who you believe is going to win the fight.<br /> For example, Conor McGregor was a -140 favorite for his fight vs Eddie Alvarez who was at 60</p>
                    <p className="betting-def">If the line is open, there was no moneyline or odds given to the fighters</p>
                </div>
                <DropdownButton onSelect={selection => handleSelect(selection)} id="dropdown-basic-button" title={selectedEvent.name}>
                    {scheduleData.map(event => <Dropdown.Item eventKey={event.EventId} key={event.EventId}>{event.Name}</Dropdown.Item>)}
                </DropdownButton>
                <div className="linechart-div">
                    <Line options={chartOptions} data={chartData} className="linechart" />
                </div>
            </div >
        </section>
    )
}