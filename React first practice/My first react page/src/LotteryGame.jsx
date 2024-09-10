import { useState } from "react";
import { genRandom, sum } from "./helper";
import Ticket from "./Ticket";

// eslint-disable-next-line react/prop-types
export default function LotteryGame({ n = 3, winningSum = 15 }) {
    const [ticket, setTicket] = useState(genRandom(n));

    const genNewTicket = () => {
        setTicket(genRandom(n));
    }

    const isWinning = sum(ticket) === winningSum;

    return (
        <div className="LotteryGame">
            <h1>Lottery Game</h1>
            <Ticket ticketArr={ticket} />
            <button onClick={genNewTicket}>Buy New Ticket</button>
            <br />
            <h3>{isWinning && "Congratulations!!! You won the lottery."}</h3>
        </div>
    );
}