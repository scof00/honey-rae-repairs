import { useEffect, useState } from "react";
import { getAllTickets } from "../../../services/ticketService";
import "./ticket.css";
import { Ticket } from "./ticket";
import { TicketFilterBar } from "./ticketFilterBar";

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const[showOpenOnly, setShowOpenOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAndSetTickets = () => {
    getAllTickets().then((ticketsArray) => {
      if(currentUser.isStaff) {
        setAllTickets(ticketsArray);
      }  else {
        const customerTickets = ticketsArray.filter(ticket => ticket.userId === currentUser.id)
        setAllTickets(customerTickets)
      }
    });
  };

  useEffect(() => {
    getAndSetTickets();
  }, [currentUser]);

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

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description?.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setFilteredTickets(foundTickets);
  }, [searchTerm, allTickets]);

  useEffect(() => {
    if(showOpenOnly){
      const openTickets = allTickets.filter(ticket => ticket.dateCompleted === "")
      setFilteredTickets(openTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  },[showOpenOnly, allTickets])

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <TicketFilterBar
        setShowEmergencyOnly={setShowEmergencyOnly}
        setSearchTerm={setSearchTerm}
        currentUser={currentUser}
        setShowOpenOnly={setShowOpenOnly}
      />
      <article className="tickets">
        {filteredTickets.map((ticket) => {
          return (
            <Ticket
              ticket={ticket}
              currentUser={currentUser}
              getAndSetTickets={getAndSetTickets}
              key={ticket.id}
            />
          );
        })}
      </article>
    </div>
  );
};
