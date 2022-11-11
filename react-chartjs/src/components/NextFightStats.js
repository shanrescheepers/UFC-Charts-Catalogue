import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import { getEvent, getSchedule } from "../services/ApiService";

export function NextFightStats() {
    const [chartOptions, setChartOptions] = useState({});
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
        getSchedule(2022).then(schedule => {
            const scheduledEvents = schedule.filter(events => events.Status === "Scheduled")
            getEvent(scheduledEvents[0].EventId).then(event => {
                const fighter1 = event.Fights[0].Fighters[0]
                const fighter2 = event.Fights[0].Fighters[1]

                setChartData({
                    labels: ["Wins", "Draws", "Losses"],
                    datasets: [
                        {
                            label: fighter1.LastName,
                            data: [fighter1.PreFightWins, fighter1.PreFightDraws, fighter1.PreFightLosses],
                            backgroundColor: "#111111",
                        },
                        {
                            label: fighter2.LastName,
                            data: [fighter2.PreFightWins, fighter2.PreFightDraws, fighter2.PreFightLosses],
                            backgroundColor: "#8F1C24",
                        },
                    ]
                });

                setChartOptions({
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "bottom",
                        },
                        title: {
                            display: true,
                            text: `${event.Name}`,
                        },
                    },
                });
            })
        })
    }, []);

    return (
        <Bar options={chartOptions} data={chartData} />
    );
}