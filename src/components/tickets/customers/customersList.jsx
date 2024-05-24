import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../../services/userServices";
import "../../../users/user.css"
import { User } from "../../../users/user";
import { Link } from "react-router-dom";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customersArray) => setCustomers(customersArray));
  },[]);

  return (
    <div className="customers">
      {customers.map((user) => {
        return (
          <Link to={`/customers/${user.id}`}> <User user={user} key={user.id}/> 
          </Link>
        );
      })}
    </div>
  );
};
