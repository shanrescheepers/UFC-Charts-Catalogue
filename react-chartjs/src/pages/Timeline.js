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
                event.Fights.forEach(fight => {
                    fightCount++;
                    fights.push(`Fight: ${fightCount}`);
                    fightDiffs.push(fight.Fighters[0].Moneyline - fight.Fighters[1].Moneyline);
                });

                setChartData({
                    labels: fights,
                    datasets: [
                        {
                            label: "Fights",
                            data: fightDiffs,
                            backgroundColor: "#E31C25",
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
            <div className="linechart">
                <Line options={chartOptions} data={chartData} />
            </div>

        </div>
    )
}