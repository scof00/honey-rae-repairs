import "../../users/user.css"

export const Employee = ({employee}) => {
  return (
    <div className="user">
      <div>
        <div className="user-info">Name:</div>
        <div>{employee.user?.fullName}</div>
      </div>
      <div>
        <div className="user-info">Email:</div>
        <div>{employee.user?.email}</div>
      </div>
    </div>
  );
};
