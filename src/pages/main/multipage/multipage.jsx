import { useEffect } from 'react';
import { useState } from 'react';
import Chat from './chat/chat';
import './multipage.scss';
import axios from 'axios'

const players = [
    {
        name: "Kaneki",
        amount: 3500,
        profit: -3500
    },
    {
        name: "Rume",
        amount: 2500,
        profit: -2500
    },
    {
        name: "Naruto",
        amount: 2000,
        profit: -2000
    },
    {
        name: "Delta",
        amount: 1700,
        profit: -1700
    },
    {
        name: "Volta09",
        amount: 1000,
        profit: -1000
    },
    {
        name: "Blondev",
        amount: 500,
        profit: -500
    },
    {
        name: "Kravitz",
        amount: 200,
        profit: -200
    },
]

const history = [
    {
        bust: "2.65x",
        hash: "9af4decc789gj"
    },
    {
        bust: "9.88x",
        hash: "9af4decc789gj"
    },
    {
        bust: "2.43x",
        hash: "9af4decc789gj"
    },
    {
        bust: "4.77x",
        hash: "9af4decc789gj"
    },
    {
        bust: "50.10x",
        hash: "9af4decc789gj"
    },
    {
        bust: "14.56x",
        hash: "9af4decc789gj"
    },
    {
        bust: "1.22x",
        hash: "9af4decc789gj"
    },
    {
        bust: "2.34x",
        hash: "9af4decc789gj"
    }
]


const Multipage = () => {
    const [page, setPage] = useState("players");

    useEffect(() => {
        axios.get("http://localhost:3002/getPastOdds")
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="multipage">
            <ul className="nav">
                <li onClick={() => setPage("chat")} className={page === "chat" ? "active" : null}>CHAT</li>
                <li onClick={() => setPage("history")} className={page === "history" ? "active" : null}>HISTORY</li>
                <li onClick={() => setPage("players")} className={page === "players" ? "active" : null}>PLAYERS</li>
            </ul>
            <div className="page">
                {page === "chat" && <Chat />}
                {page === "history" &&
                    <div className="players">
                    <table>
                        <tr>
                            <th>BUST</th>
                            {/* <th>@</th> */}
                            <th>AMOUNT</th>
                            <th>WON</th>
                            <th>HASH</th>
                        </tr>
                        {history.map(({bust, hash}, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='side'>{bust}</td>
                                            {/* <td>-</td> */}
                                            <td>-</td>
                                            <td>-</td>
                                            <td>{hash.slice(0,5)}...</td>
                                        </tr>
                                    )
                                })}
                    </table>
                </div>
                }
                {page === "players" &&
                    <div className="players">
                        <table>
                            <tr>
                                <th>USER</th>
                                {/* <th>@</th> */}
                                <th>AMOUNT</th>
                                <th>WON</th>
                            </tr>
                            {players.map(({name, amount, profit}, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='side'>{name}</td>
                                            {/* <td>-</td> */}
                                            <td>{amount}</td>
                                            <td>{profit}</td>
                                        </tr>
                                    )
                                })}
                        </table>
                    </div>
                }
            </div>
               
            
        </div>
    )
}

export default Multipage;