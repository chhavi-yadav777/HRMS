import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Employees() {
  const [empdata, updateEmpdata] = useState({
    name: "",
    username: "",
    phone: "",
    address: "",
    dob: "",
    department: "",
    designation:"",
  });

  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateEmpdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      {
        id: Date.now(),
        ...empdata,
      },
    ]);

    updateEmpdata({
      name: "",
      username: "",
      phone: "",
      address: "",
      dob: "",
      department: "",
      designation:"",
    });

    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Add Employee Button */}
      <div className="mb-8 flex justify-center">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Add Employee</Button>
          </DialogTrigger>

          <DialogContent className="max-h-[500px] sm:max-w-sm overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add Employee</DialogTitle>
              <DialogDescription>
                Enter employee details and save them.
              </DialogDescription>
            </DialogHeader>

            <FieldGroup>
              <Field>
                <Label htmlFor="name">Employee Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={empdata.name}
                  onChange={handleChange}
                />
              </Field>

              <Field>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  value={empdata.username}
                  onChange={handleChange}
                />
              </Field>

              <Field>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={empdata.phone}
                  onChange={handleChange}
                />
              </Field>

              <Field>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={empdata.address}
                  onChange={handleChange}
                />
              </Field>

              <Field>
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  value={empdata.dob}
                  onChange={handleChange}
                />
              </Field>

              <Field>
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  name="department"
                  value={empdata.department}
                  onChange={handleChange}
                />
              </Field>

              <Field>
                <Label htmlFor="username">Designation</Label>
                <Input
                  id="username"
                  name="username"
                  value={empdata.designation}
                  onChange={handleChange}
                />
              </Field>
            </FieldGroup>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>

              <Button type="button" onClick={handleSubmit}>
                Save Employee
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      
      <div className="mx-auto w-[80%] overflow-x-auto rounded-lg border bg-white shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">S.No.</th>
              <th className="border border-gray-300 p-3 text-left">Name</th>
              <th className="border border-gray-300 p-3 text-left">
                Username
              </th>
              <th className="border border-gray-300 p-3 text-left">Phone</th>
              <th className="border border-gray-300 p-3 text-left">Address</th>
              <th className="border border-gray-300 p-3 text-left">DOB</th>
              <th className="border border-gray-300 p-3 text-left">
                Department
              </th>
            </tr>
          </thead>

          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-5 text-center text-gray-500">
                  No employees added yet.
                </td>
              </tr>
            ) : (
              employees.map((employee, index) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">{index + 1}</td>
                  <td className="border border-gray-300 p-3">
                    {employee.name}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {employee.username}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {employee.phone}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {employee.address}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {employee.dob}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {employee.department}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {employee.designation}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}