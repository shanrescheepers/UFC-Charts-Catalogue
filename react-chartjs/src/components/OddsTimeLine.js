import { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { getEvent, getSchedule } from "../services/ApiService";

export function OddsTimeLine() {
    const [chartOptions, setChartOptions] = useState({});
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
        var eventIds = []
        var fightOddDiffs = []
        getSchedule(2021).then(schedule => {
            console.log(schedule.map(event => event.EventId))
            getEvent(schedule[0].EventId).then(event => {
                console.log(event)
            })
        });
    }, []);
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item onClick={() => alert("Test")}>Event x</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

