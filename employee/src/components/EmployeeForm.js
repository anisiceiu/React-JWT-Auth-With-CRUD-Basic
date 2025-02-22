import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, updateEmployee } from "../features/employeesSlice";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeForm = ({ isEdit = false }) => {
  const { id } = useParams();
  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingEmployee = employees.find(emp => emp.id === id);
  const [employee, setEmployee] = useState(existingEmployee || { id: "", name: "", position: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(updateEmployee(employee));
    } else {
      dispatch(addEmployee({ ...employee, id: Date.now().toString() }));
    }
    navigate("/list");
  };

  return (
    <div className="container p-5">
    <h2 className="h3 mb-4">{isEdit ? "Edit Employee" : "Add Employee"}</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input type="text" placeholder="Name" value={employee.name} onChange={e => setEmployee({ ...employee, name: e.target.value })} className="form-control" required />
      </div>
      <div className="mb-3">
        <input type="text" placeholder="Position" value={employee.position} onChange={e => setEmployee({ ...employee, position: e.target.value })} className="form-control" required />
      </div>
      <button type="submit" className="btn btn-success">{isEdit ? "Update" : "Add"} Employee</button>
    </form>
  </div>
  );
};

export default EmployeeForm;