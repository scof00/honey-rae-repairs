import { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/userServices";

import "./employees.css"
import { User } from "../../users/user";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((staffArray) => setEmployees(staffArray))
    })

    return (
    <div className="employees">
    {employees.map((user) => {
      return (
        <User user={user} key={user.id}/>
      );
    })}
  </div>
);
}