import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const Employees = () => {
  let [empData, setempData] = useState({});
  const handleChange = (e) => {
    let { name, value } = e.target;
    setempData({ ...empData, [name]: value });
  };
  console.log(empData);

  return (
    <>
    <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>
      <Dialog>
          <div className="text-end">
          <DialogTrigger className="h-10 w-50 border-2 border-blue-500 rounded-2xl bg-blue-400">
            Add Employee
          </DialogTrigger>
          <DialogContent className="h-100 scroll-smooth overflow-scroll ">
            <DialogHeader>
              <DialogTitle>Employee Form</DialogTitle>
              <DialogDescription className="">
                <div className="text-amber-700 w-80 text-center text-xl gap-1">
                  <label>Emp Id </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="EmpId"
                    placeholder="Enter the Employee Id "
                    className=" w-80 border-2 text-l text-center rounded-2xl"
                    onChange={handleChange}
                  />
                </div>
                <div className="text-amber-700 w-80 text-center text-xl">
                  <label>Name </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="EmpName"
                    placeholder="Enter the Employee name "
                    className=" w-80 border-2 text-l text-center rounded-2xl"
                    onChange={handleChange}
                  />
                </div>
                <div className="text-amber-700 w-80 text-center text-xl">
                  <label>Email </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="EmpEmail"
                    placeholder="Enter the Employee Email "
                    className=" w-80 border-2 text-l text-center rounded-2xl"
                    onChange={handleChange}
                  />
                </div>
                <div className="text-amber-700 w-80 text-center text-xl">
                  <label>Phone </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="EmpPhone"
                    placeholder="Enter the Employee Phone Number "
                    className=" w-80 border-2 text-l text-center rounded-2xl"
                    onChange={handleChange}
                  />
                </div>
                <div className="text-amber-700 w-80 text-center text-xl">
                  <label>Address </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="EmpAddress"
                    placeholder="Enter the Employee address "
                    className=" w-80 border-2 text-l text-center rounded-2xl"
                    onChange={handleChange}
                  />
                </div>
                <div className="text-amber-700 w-80 text-center text-xl">
                  <label>Date of birth </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="EmpDoB"
                    placeholder="Enter the Employee Date of Birth "
                    className=" w-80 border-2 text-l text-center rounded-2xl"
                    onChange={handleChange}
                  />
                </div>
                <div className="text-amber-700 w-80 text-center text-xl">
                  <label>Joining Date </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="EmpJoin"
                    placeholder="Enter the Employee Joining Date "
                    className=" w-80 border-2 text-l text-center rounded-2xl"
                    onChange={handleChange}
                  />
                </div>
                <div className="text-amber-700 w-80 text-center text-xl">
                  <label>Department </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="EmpDept"
                    placeholder="Enter the Employee Department "
                    className=" w-80 border-2 text-l text-center rounded-2xl"
                    onChange={handleChange}
                  />
                </div>
                <div className="text-amber-700 w-80 text-center text-xl">
                  <label>Designation </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="EmpDesignation"
                    placeholder="Enter the Employee Designation "
                    className=" w-80 border-2 text-l text-center rounded-2xl"
                    onChange={handleChange}
                  />
                </div>
                <div className=" flex-2gap-10">
                  <button className=" h-10 w-30 border-blue-800 bg-red-600 rounded-3xl text-white border-2 ">
                    Submit
                  </button>
                  <button className=" h-10 w-30 border-red-600 bg-blue-800 rounded-3xl text-white border-2">
                    Close
                  </button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
          </div>
        </Dialog>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p><table class="border-collapse border border-gray-400 ...">
  <thead>
    <tr>
      <th class="border border-gray-300 ...">Emp Id</th>
      <th class="border border-gray-300 ...">Emp Name</th>
      <th class="border border-gray-300 ...">Emp Email</th>
      <th class="border border-gray-300 ...">Emp Phone</th>
      <th class="border border-gray-300 ...">Emp Address</th>
      <th class="border border-gray-300 ...">Emp Date of Birth</th>
      <th class="border border-gray-300 ...">Emp Joining Date</th>
      <th class="border border-gray-300 ...">Emp Designation</th>
      <th class="border border-gray-300 ...">Emp Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 ...">{empData.EmpId}</td>
      <td class="border border-gray-300 ...">{empData.EmpName}</td>
      <td class="border border-gray-300 ...">{empData.EmpEmail}</td>
      <td class="border border-gray-300 ...">{empData.EmpPhone}</td>
      <td class="border border-gray-300 ...">{empData.EmpAddress}</td>
      <td class="border border-gray-300 ...">{empData.EmpDoB}</td>
      <td class="border border-gray-300 ...">{empData.EmpJoin}</td>
      <td class="border border-gray-300 ...">{empData.EmpDept}</td>
      <td class="border border-gray-300 ...">{empData.EmpDesignation}</td>
    </tr>
    
  </tbody>
</table></p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
      
        
      

      
    </>
  );
};
