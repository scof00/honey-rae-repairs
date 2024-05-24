import { Outlet, Route, Routes } from "react-router-dom";
import { EmployeeNav} from "../components/nav/employeeNav";
import { Welcome } from "../components/welcome/welcome";
import { TicketList } from "../components/tickets/tickets/ticketList";
import { CustomerList } from "../components/tickets/customers/customersList";
import { CustomerDetails } from "../components/tickets/customers/customerDetails";
import { EmployeeList } from "../components/employees/employeesList";
import { EmployeeDetails } from "../components/employees/employeeDetails";
import { EmployeeForm } from "../components/forms/employeeForm";

export const EmployeeViews = (currentUser) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <EmployeeNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route
          path="tickets"
          element={<TicketList currentUser={currentUser} />}
        />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route
          path="profile"
          element={<EmployeeForm currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
