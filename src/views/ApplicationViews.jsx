
import "../app.css";
import { useEffect, useState } from "react";
import { EmployeeViews } from "./employeeViews";
import { CustomerViews } from "./customerViews";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObj = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObj);
  }, []);

  return currentUser.isStaff ? (
    <EmployeeViews currentUser={currentUser} />
  ) : (
    <CustomerViews currentUser={currentUser}/>
  );
};
