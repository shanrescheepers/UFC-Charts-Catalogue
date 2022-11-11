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
            <h3 style={{ color: 'black' }}>TOTAL FIGHTERS</h3>

            <h1 style={{ color: 'black' }} className='number'>{totalFighters.count}</h1>
            <p className="allfighters-p-tag">All round data of all the fighters in the UFC</p>
        </div>
    );
}