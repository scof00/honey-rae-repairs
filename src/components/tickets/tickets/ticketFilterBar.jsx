export const TicketFilterBar = ({ setSearchTerm, setShowEmergencyOnly}) => {
    return <div className="filter-bar">
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
        <input
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }}
          type="text"
          placeholder="Search Tickets"
          className="ticket-search"
        />
      </div>
}