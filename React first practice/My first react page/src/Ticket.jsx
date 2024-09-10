import TicketNum from "./TicketNum.jsx";
import "./Ticket.css";
    
export default function Ticket({ ticketArr }) {
    return(
        <div className="Ticket">
            <h3>Ticket</h3>
            {
                ticketArr.map((num, idx) => <TicketNum key={idx} num={num} />)
            }
        </div>
    )
}