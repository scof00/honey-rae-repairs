import { Outlet, Route, Routes } from "react-router-dom";
import "./app.css";
import { EmployeeList } from "./components/employees/employeesList";
import { CustomerList } from "./components/tickets/customers/customersList";
import { TicketList } from "./components/tickets/tickets/ticketList";
import { NavBar } from "./components/nav/navBar";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="employees" element={<EmployeeList />} />
      </Route>
    </Routes>
  );
};
