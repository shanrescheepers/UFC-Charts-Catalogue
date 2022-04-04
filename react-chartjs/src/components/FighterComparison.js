import { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import { getEvent, getFighter, getSchedule } from "../services/ApiService";

export function FighterComparison() {
    const [chartOptions, setChartOptions] = useState({});
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
        getSchedule(2022).then(schedule => {
            const scheduledEvents = schedule.filter(event => event.Status === "Scheduled");

            getEvent(scheduledEvents[0].EventId).then(event => {
                const fighter1Id = event.Fights[0].Fighters[0].FighterId;
                const fighter2Id = event.Fights[0].Fighters[1].FighterId;

                getFighter(fighter1Id).then(fighter => {
                    var fighter1Name = `${fighter.FirstName} ${fighter.LastName}`;
                    var fighter1Stats = fighter;

                    getFighter(fighter2Id).then(fighter => {
                        var fighter2Name = `${fighter.FirstName} ${fighter.LastName}`;
                        var fighter2Stats = fighter;

                        setChartData({
                            labels: ["Draws", "Losses", "Submission Losses", "Submissions", "TKO Losses", "TKOs", "Title Draws", "Title Losses", "Title Wins", "Wins"],
                            datasets: [
                                {
                                    label: fighter1Name,
                                    data: [fighter1Stats.Draws, fighter1Stats.Losses, fighter1Stats.SubmissionLosses, fighter1Stats.Submissions, fighter1Stats.TechnicalKnockoutLosses, fighter1Stats.TechnicalKnockouts, fighter1Stats.TitleDraws, fighter1Stats.TitleLosses, fighter1Stats.TitleWins, fighter1Stats.Wins],
                                    backgroundColor: "#111111",
                                },
                                {
                                    label: fighter2Name,
                                    data: [fighter2Stats.Draws, fighter2Stats.Losses, fighter2Stats.SubmissionLosses, fighter2Stats.Submissions, fighter2Stats.TechnicalKnockoutLosses, fighter2Stats.TechnicalKnockouts, fighter2Stats.TitleDraws, fighter2Stats.TitleLosses, fighter2Stats.TitleWins, fighter2Stats.Wins],
                                    backgroundColor: "#E31C25",
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
                                    text: `${fighter1Name} vs. ${fighter2Name}`,
                                },
                            },
                        });
                    })
                })

            })
        });
    }, []);

    return (
        <div>

            <div>
                <Radar data={chartData} options={chartOptions} />
            </div>

        </div>




    )
}
