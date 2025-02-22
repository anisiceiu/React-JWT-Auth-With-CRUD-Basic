import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../features/employeesSlice";

const EmployeeList = () => {
  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();

  return (
    <div className="container p-5">
    <h2 className="h3 mb-4">Employee List</h2>
    <Link to="/add" className="btn btn-primary mb-3">Add Employee</Link>
    <ul className="list-group">
      {employees.map(emp => (
        <li key={emp.id} className="list-group-item d-flex justify-content-between align-items-center">
          {emp.name} ({emp.position})
          <div>
            <Link to={`/edit/${emp.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
            <button onClick={() => dispatch(deleteEmployee(emp.id))} className="btn btn-danger btn-sm">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default EmployeeList;