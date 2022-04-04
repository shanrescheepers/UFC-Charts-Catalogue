import { useEffect, useState } from "react";
import { getAllFighters, getFighter } from "../services/ApiService";
import { Dropdown, DropdownButton, Form, Button } from "react-bootstrap";
import { Bar, Pie, Radar } from "react-chartjs-2";
import '../styles/FighterStats.css';


export function FighterStats() {
    const [pieChartOptions, setPieChartOptions] = useState({});
    const [barChartOptions, setBarChartOptions] = useState({});
    const [pieChartData, setPieChartData] = useState({
        datasets: [],
    });
    const [barChartData, setBarChartData] = useState({
        datasets: [],
    });
    const [fighterData, setFighterData] = useState([]);
    const [filteredFighters, setFilteredFighters] = useState([]);

    useEffect(() => {
        getAllFighters().then(fighters => {
            // console.log(fighters)
            setFighterData(fighters);
        })
    }, []);


    const filterFighters = (lastname) => {
        const searchedFighters = fighterData.filter(fighter => fighter.LastName.includes(lastname));
        setFilteredFighters(searchedFighters);
    }

    const handleSelect = (fighterId) => {
        getFighter(fighterId).then(fighter => {
            console.log(fighter);
            // "CareerStats.SigStrikesLandedPerMinute": 2.6,
            // "CareerStats.SigStrikeAccuracy": 31.7,
            // "CareerStats.TakedownAverage": 3.2,
            // "CareerStats.SubmissionAverage": 0.8,
            // "CareerStats.KnockoutPercentage": 0.0,
            // "CareerStats.TechnicalKnockoutPercentage": 0.0,
            // "CareerStats.DecisionPercentage": 13.3
            setPieChartData({
                labels: ["Sig.Strikes Landed p/m", "Sig.Strikes Acc", "Takedown Avg", "Submission Avg", "KO %", "TKO %", "Decision %"],
                datasets: [
                    {
                        label: `${fighter.FirstName} ${fighter.LastName}`,
                        data: [fighter.CareerStats.SigStrikesLandedPerMinute, fighter.CareerStats.SigStrikeAccuracy, fighter.CareerStats.TakedownAverage, fighter.CareerStats.SubmissionAverage, fighter.CareerStats.KnockoutPercentage, fighter.CareerStats.TechnicalKnockoutPercentage, fighter.CareerStats.DecisionPercentage],
                        backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6'],
                    },
                ]
            });

            setBarChartData({
                labels: ["Wins", "Losses", "Draws", "TKOs", "Submissions"],
                datasets: [
                    {
                        label: `${fighter.FirstName} ${fighter.LastName}`,
                        data: [fighter.Wins, fighter.Losses, fighter.Draws, fighter.TechnicalKnockouts, fighter.Submissions],
                        backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6'],
                    },
                ]
            });

            setPieChartOptions({
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: `${fighter.FirstName} ${fighter.LastName} Career Stats`,
                    },
                },
            });

            setBarChartOptions({
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: `${fighter.FirstName} ${fighter.LastName} Fight Stats`,
                    },
                },
            });
        })
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicFighterLastName">
                    <Form.Label>Fighter Lastname</Form.Label>
                    <Form.Control onChange={textValue => filterFighters(textValue.target.value)} type="text" placeholder="Enter Fighter Lastname" />
                </Form.Group>

            </Form>

            <DropdownButton onSelect={selection => handleSelect(selection)} id="dropdown-basic-button" title="Dropdown button">
                {filteredFighters.map(fighter => <Dropdown.Item eventKey={fighter.FighterId} key={fighter.FighterId}>{fighter.FirstName} {fighter.LastName}</Dropdown.Item>)}
            </DropdownButton>
            <Pie data={pieChartData} options={pieChartOptions} />
            <Bar data={barChartData} options={barChartOptions} />
        </div>
    )
}