import { getEmployeeByUserId } from "../../services/employeeService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../tickets/customers/customer.css"

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({});
    const { employeeId } = useParams();
   
  
    useEffect(() => {
      getEmployeeByUserId(employeeId).then((data) => {
        const employeeObj = data;
        setEmployee(employeeObj);
      });
    }, [employeeId]);
  
    return (
      <section className="customer">
        <header className="customer-header">{employee?.user?.fullName}</header>
        <div>
          <span className="customer-info"> Email : </span>
          {employee?.user?.email}
        </div>
        <div>
          <span className="customer-info"> Specialty : </span>
          {employee?.specialty}
        </div>
        <div>
          <span className="customer-info"> Rate : </span>
          {employee?.rate}
        </div>
      </section>
    );
  };