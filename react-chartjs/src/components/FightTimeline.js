import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getEvent, getSchedule } from "../services/ApiService";

export function FightTimeline() {
    const [chartOptions, setChartOptions] = useState({});
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
        var eventFightAmounts = []
        var eventDates = []

        getSchedule(2022).then(schedule => {
            schedule.forEach(event => {
                getEvent(event.EventId).then(eventDetails => {
                    eventFightAmounts.push(eventDetails.Fights.length)
                    // het gaan google (DateTime hou ni van JS nie)
                    eventDates.push(new Date(eventDetails.DateTime).toLocaleDateString('en-za', { month: 'short', day: 'numeric' }))
                })
            });

            setChartData({
                labels: eventDates,
                datasets: [
                    {
                        label: "Total fights",
                        data: eventFightAmounts,
                        backgroundColor: "#E31C25",
                    },
                ]
            });

            setChartOptions({
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                    },
                    title: {
                        display: true,
                        text: "UFC Event Fights for 2021 Season",
                    },
                },
            });
        })
    }, [])

    return (
        <Line options={chartOptions} data={chartData} />
    )
}