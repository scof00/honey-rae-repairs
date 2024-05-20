import { useEffect, useState } from "react";
import { getAllTickets } from "./services/ticketService";
import "./app.css";

export const App = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
      console.log("tickets set");
    });
  }, []);

  useEffect(() => {
    if (showEmergencyOnly === true) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      );
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergencyOnly, allTickets]);

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <div>
        <button
          className="filter-btn btn-primary"
          onClick={() => {
            setShowEmergencyOnly(true);
          }}
        >
          Emergency
        </button>
        <button
          className="filter-btn btn-primary"
          onClick={() => {
            setShowEmergencyOnly(false);
          }}
        >
          Show all
        </button>
      </div>
      <article className="tickets"></article>
      {filteredTickets.map((ticket) => {
        return (
          <section className="ticket" key={ticket.id}>
            <header className="ticker-info">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
              <div>
                <div className="ticket-info">Emergency</div>
                <div>{ticket.emergency ? "yes" : "no"}</div>
              </div>
            </footer>
          </section>
        );
      })}
    </div>
  );
};
