import { useEffect, useState } from "react"
import { getAllFighters } from "../services/ApiService"
import '../styles/TotalFighters.css';

export function TotalFighters() {
    const [totalFighters, setTotalFighters] = useState({});
    //soos ngoninit hieronder
    useEffect(() => {
        getAllFighters().then(fighters => {
            setTotalFighters({
                count: fighters.length
            });
        })
    }, [])

    return (
        <div className="total-fighters">
            <span>TOTAL FIGHTERS</span>
            <h1>{totalFighters.count}</h1>
        </div>
    );
}