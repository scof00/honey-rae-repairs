import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../../services/userServices";
import "./customer.css"
import { User } from "../../../users/user";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customersArray) => setCustomers(customersArray));
  });

  return (
    <div className="customers">
      {customers.map((user) => {
        return (
          <User user={user} key={user.id}/>
        );
      })}
    </div>
  );
};
