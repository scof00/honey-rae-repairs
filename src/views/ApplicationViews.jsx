import { EmployeeList } from "../components/employees/employeesList";
import { CustomerList } from "../components/tickets/customers/customersList";
import { TicketList } from "../components/tickets/tickets/ticketList";
import { NavBar } from "../components/nav/navBar";
import { Welcome } from "../components/welcome/welcome";
import { CustomerDetails } from "../components/tickets/customers/customerDetails";
import { Outlet, Route, Routes } from "react-router-dom";
import "../app.css";
import { useEffect, useState } from "react";
import { EmployeeForm } from "../components/forms/employeeForm";

import { EmployeeDetails } from "../components/employees/employeeDetails";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObj = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObj);
  }, []);

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
