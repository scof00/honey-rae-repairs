import { EmployeeList } from "../components/employees/employeesList";
import { CustomerList } from "../components/tickets/customers/customersList";
import { TicketList } from "../components/tickets/tickets/ticketList";
import { NavBar } from "../components/nav/navBar";
import { Welcome } from "../components/welcome/welcome";
import { CustomerDetails } from "../components/tickets/customers/customerDetails";
import { Outlet, Route, Routes } from "react-router-dom";
import "../app.css";
import { useEffect, useState } from "react";


export const ApplicationViews = () => {

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObj = JSON.parse(localHoneyUser)

    setCurrentUser(honeyUserObj)
  },[])

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
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails/>} />
          
          </Route>
        <Route path="employees" element={<EmployeeList />} />
      </Route>
  </Routes>)
}
