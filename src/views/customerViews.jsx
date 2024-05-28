import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/welcome/welcome";
import { CustomerNav } from "../components/nav/customerNavBar";
import { TicketList } from "../components/tickets/tickets/ticketList";
import { TicketForm } from "../components/forms/ticketForm";

export const CustomerViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CustomerNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route
          path="tickets"
        >
            <Route index element={<TicketList currentUser={currentUser}/>}/>
            <Route path="create" element={<TicketForm currentUser={currentUser}/>} />
        </Route>
      </Route>
    </Routes>
  );
};
