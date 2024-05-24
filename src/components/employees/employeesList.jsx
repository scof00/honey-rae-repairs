import { useEffect, useState } from "react";
// import { getStaffUsers } from "../../services/userServices";
import { Link } from "react-router-dom";

import "./employees.css"
import { User } from "../../users/user";
import { EmployeeForm } from "../forms/employeeForm";
import { getAllEmployees } from "../../services/employeeService";
import { Employee } from "./employee";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployees().then((staffArray) => setEmployees(staffArray))
    },[])

    return (
      <div className="employees">
        {employees.map((employeeObj) => {
          return (
            <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
              <Employee employee={employeeObj} key={employeeObj.id} />
            </Link>
          )
        })}
      </div>
    )
}