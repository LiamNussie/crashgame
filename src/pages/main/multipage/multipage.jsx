import { useState } from 'react';
import Chat from './chat/chat';
import './multipage.scss';

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


const Multipage = () => {
    const [page, setPage] = useState("players")
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
                            <th>@</th>
                            <th>AMOUNT</th>
                            <th>PROFIT</th>
                            <th>HASH</th>
                        </tr>
                       
                    </table>
                </div>
                }
                {page === "players" &&
                    <div className="players">
                        <table>
                            <tr>
                                <th>USER</th>
                                <th>@</th>
                                <th>AMOUNT</th>
                                <th>PROFIT</th>
                            </tr>
                            {players.map(({name, amount, profit}, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='side'>{name}</td>
                                            <td>-</td>
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