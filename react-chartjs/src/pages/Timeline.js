import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getEvent, getSchedule } from "../services/ApiService";
import '../styles/Timeline.css'


export function Timeline() {
    const [chartOptions, setChartOptions] = useState({});
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
        var fightDiffs = [];
        var fights = [];
        var fightCount = 0;
        getSchedule(2022).then(schedule => {
            getEvent(schedule[0].EventId).then(event => {
                // console.log(event);
                event.Fights.forEach(fight => {
                    fightCount++;
                    fights.push(`Fight: ${fightCount}`);
                    fightDiffs.push(fight.Fighters[0].Moneyline - fight.Fighters[1].Moneyline);
                });

                setChartData({
                    labels: event.Fights.map(fight => `${fight.Fighters[0].LastName} vs ${fight.Fighters[1].LastName}`),
                    datasets: [
                        {
                            label: "Fighter 1",
                            data: event.Fights.map(fight => fight.Fighters[0].Moneyline),
                            backgroundColor: "#E31C25",
                        },
                        {
                            label: "Fighter 2",
                            data: event.Fights.map(fight => fight.Fighters[1].Moneyline),
                            backgroundColor: "#2b2b2b",
                        },
                    ]
                });

                setChartOptions({
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: "UFC 2022 Fight Odd Differences",
                        },
                    },
                });
            })
        })
    }, [])

    return (
        <div>
            <h1>See how evenly each fight was matched</h1>
            <p>UFC moneyline betting simply comes down to betting on who you believe is going to win the fight. For example, Conor McGregor was a -140 favorite for his fight vs Eddie Alvarez</p>
            <p>If the line is open, there was no moneyline given to the fighters</p>
            <div className="linechart">
                <Line options={chartOptions} data={chartData} />
            </div>

        </div>
    )
}