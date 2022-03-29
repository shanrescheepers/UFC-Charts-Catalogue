import { Pie } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import { getSchedule } from "../services/ApiService";

export function Schedule() {
    const [chartOptions, setChartOptions] = useState({});
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
        getSchedule(2022).then(schedule => {
            const finalEventsCount = schedule.filter(event => event.Status === "Final").length;
            const scheduledEventsCount = schedule.filter(event => event.Status === "Scheduled").length;

            setChartData({
                labels: schedule.map(event => event.Status).filter(onlyUnique),
                datasets: [
                    {
                        label: "UFC Schedule 2022",
                        data: [finalEventsCount, scheduledEventsCount],
                        backgroundColor: ["#111111", "#E31C25"],
                    },
                ]
            });
        })
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "UFC Schedule 2022",
                },
            },
        });
    }, []);

    return (
        <Pie options={chartOptions} data={chartData} />
    );
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}