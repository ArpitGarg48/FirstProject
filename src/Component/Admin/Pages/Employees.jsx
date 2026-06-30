import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  let handleValidate = (formData) => {
    let formError = {};

    if (!formData.name) {
      formError.name = "Name is required!";
    }

    if (!formData.email) {
      formError.email = "Email is required!";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formError.email = "Enter valid email!";
    }
    if (!formData.phone) {
      formError.phone = "Mobile no is required!";
    }

    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      formError.phone = "Mobile must be 10 digits!";
    }

    if (!formData.eid) {
      formError.eid = "Employee ID is required!";
    }

    if (!formData.designation) {
      formError.designation = "Designation is required!";
    }

    if (!formData.department) {
      formError.department = "Department is required!";
    }

    if (!formData.address) {
      formError.address = "Address is required!";
    }

    if (!formData.joining) {
      formError.joining = "Joining Date is required!";
    }

    if (!formData.dob) {
      formError.dob = "DOB is required!";
    }

    setError(formError);

    return Object.keys(formError).length === 0;
  };

  const fetchEmployee = () => {
    axios.get("http://localhost:5000/api/get/employee")
      .then((res) => {
        setEmployees(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchEmployee();
  }, []);


  const submitEmployee = () => {
    let isValid = handleValidate(formData);

    if (isValid) {
      console.log(formData);

      if (editIndex !== null) {
        axios
          .put(
            `http://localhost:5000/api/update/employee/byeid/${formData.eid}`,
            formData
          )
          .then((res) => {
            alert("Employee Updated Successfully");

            setFormData({});
            setEditIndex(null);
            setError({});
            setOpenModal(false);
            fetchEmployee();
          })
          .catch((err) => {
            console.log(err.response?.data || err.message);
          });

        return;
      }

      axios.post("http://localhost:5000/api/post/employee", formData)
        .then((res) => {
          setEmployees([...employees, formData]);
          alert("Employee Data Submitted Successfully");

          setFormData({});
          setOpenModal(false);
        })
        .catch((err) => {
          console.log(err.response?.data) || err.message;
        })
    }

  };

  const deleteEmployee = (id) => {
    if(!window.confirm("Are You Sure You Want To Delete This Employee? ")){
      return;
    }

    axios.delete(`http://localhost:5000/api/delete/employee/${id}`)
      .then((res)=>{
        alert(res.data.message);
        fetchEmployee();
      })
      .catch((err)=>{
        alert(err.response?.data?.message || "Failed To Delete Employee ");
      })
      
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
                  <td className="border border-gray-300 p-2">{emp.eid}</td>
                  <td className="border border-gray-300 p-2">{emp.name}</td>
                  <td className="border border-gray-300 p-2">{emp.email}</td>
                  <td className="border border-gray-300 p-2">{emp.phone}</td>
                  <td className="border border-gray-300 p-2">{emp.address}</td>
                  <td className="border border-gray-300 p-2">{emp.dob}</td>
                  <td className="border border-gray-300 p-2">{emp.joining}</td>
                  <td className="border border-gray-300 p-2">{emp.designation}</td>
                  <td className="border border-gray-300 p-2">{emp.department}</td>
                  <td className="border border-gray-300 p-2 flex gap-2">

                    <button
                      onClick={() => { editEmployee(index) }}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteEmployee(emp.eid)}
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
                ["eid", "Employee Id"],
                ["name", "Name"],
                ["email", "Email"],
                ["phone", "Phone"],
                ["address", "Address"],
                ["dob", "Date of Birth"],
                ["joining", "Joining Date"],
                ["department", "Department"],
                ["designation", "Designation"],
              ].map(([name, label]) => (
                <div key={name} className="mb-3">
                  <label className="block text-amber-700 text-xl text-center">
                    {label}
                  </label>

                  {["dob", "joining"].includes(name) ? (
                    <>
                      <input
                        type="date"
                        name={name}
                        value={formData[name] || ""}
                        onChange={handleChange}
                        className="w-full border-2 text-center rounded-2xl p-2"
                      />
                      {error[name] && (
                        <p className="mt-1 text-xs text-red-500 text-center">
                          {error[name]}
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        name={name}
                        value={formData[name] || ""}
                        onChange={handleChange}
                        placeholder={`Enter Employee ${label}`}
                        className="w-full border-2 text-center rounded-2xl p-2"
                      />
                      {error[name] && (
                        <p className="mt-1 text-xs text-red-500 text-center">
                          {error[name]}
                        </p>
                      )}
                    </>
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