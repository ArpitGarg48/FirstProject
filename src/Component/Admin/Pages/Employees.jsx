import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitEmployee = () => {
    if (editIndex != null) {
      const updatedEmployees = [...employees];
      updatedEmployees[editIndex] = formData;
      setEmployees(updatedEmployees);
      setEditIndex(null);
    }
    else {
      setEmployees([...employees, formData]);
    }
    setFormData({});
    setOpenModal(false);
  };

  const deleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  const editEmployee = (index) => {
    setFormData(employees[index]);
    setEditIndex(index);
    setOpenModal(true);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Employee Management</CardTitle>
          <CardDescription>Add and manage employees</CardDescription>

          <CardAction>
            <button
              onClick={() => setOpenModal(true)}
              className="h-10 w-40 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
            >
              Add Employee
            </button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <table className="border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Emp Id</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Phone</th>
                <th className="border border-gray-300 p-2">Address</th>
                <th className="border border-gray-300 p-2">DOB</th>
                <th className="border border-gray-300 p-2">Joining Date</th>
                <th className="border border-gray-300 p-2">Designation</th>
                <th className="border border-gray-300 p-2">Department</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{emp.EmpId}</td>
                  <td className="border border-gray-300 p-2">{emp.EmpName}</td>
                  <td className="border border-gray-300 p-2">{emp.EmpEmail}</td>
                  <td className="border border-gray-300 p-2">{emp.EmpPhone}</td>
                  <td className="border border-gray-300 p-2">{emp.EmpAddress}</td>
                  <td className="border border-gray-300 p-2">{emp.EmpDoB}</td>
                  <td className="border border-gray-300 p-2">{emp.EmpJoin}</td>
                  <td className="border border-gray-300 p-2">{emp.EmpDesignation}</td>
                  <td className="border border-gray-300 p-2">{emp.EmpDept}</td>
                  <td className="border border-gray-300 p-2 flex gap-2">

                    <button
                      onClick={() => { editEmployee(index) }}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteEmployee(index)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>

        <CardFooter>
          Employee List
        </CardFooter>
      </Card>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="h-[600px] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>Employee Form</DialogTitle>

            <DialogDescription>
              {[
                ["EmpId", "Employee Id"],
                ["EmpName", "Name"],
                ["EmpEmail", "Email"],
                ["EmpPhone", "Phone"],
                ["EmpAddress", "Address"],
                ["EmpDoB", "Date of Birth"],
                ["EmpJoin", "Joining Date"],
                ["EmpDept", "Department"],
                ["EmpDesignation", "Designation"],
              ].map(([name, label]) => (
                <div key={name} className="mb-3">
                  <label className="block text-amber-700 text-xl text-center">
                    {label}
                  </label>

                  {["EmpDoB", "EmpJoin"].includes(name) ? (
                    <input
                      type="date"
                      name={name}
                      value={formData[name] || ""}
                      onChange={handleChange}
                      className="w-full border-2 text-center rounded-2xl p-2"
                    />
                  ) : (
                    <input
                      type="text"
                      name={name}
                      value={formData[name] || ""}
                      onChange={handleChange}
                      placeholder={`Enter Employee ${label}`}
                      className="w-full border-2 text-center rounded-2xl p-2"
                    />
                  )}
                </div>
              ))}

              <div className="flex justify-center gap-5 mt-5">
                <button
                  onClick={submitEmployee}
                  className="h-10 w-32 bg-red-600 text-white rounded-3xl border-2"
                >
                  {editIndex != null ? "Update" : "Submit"}
                </button>

                <button
                  onClick={() => setOpenModal(false)}
                  className="h-10 w-32 bg-blue-800 text-white rounded-3xl border-2"
                >
                  Close
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}; 