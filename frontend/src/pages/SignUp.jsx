import Navbar from "@/components/sharedComponents/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(input)
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="text-2xl text-center font-bold mb-5">SignUp</h1>
          <div className="my-2">
            <Label>Full Name:</Label>
            <Input type="text" placeholder="Enter Full Name" name="fullname" value={input.fullname} onChange={changeEventHandler}/>
          </div>
          <div className="my-2">
            <Label>Email:</Label>
            <Input type="email" placeholder="Enter your Email" name="email" value={input.email} onChange={changeEventHandler} />
          </div>
          <div className="my-2">
            <Label>Phone Number:</Label>
            <Input type="number" placeholder="Enter Phone Number:" name="phoneNumber" value={input.phoneNumber} onChange={changeEventHandler} />
          </div>
          <div className="my-2">
            <Label>Password:</Label>
            <Input type="password" placeholder="Enter password" name="password" value={input.password} onChange={changeEventHandler} />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-5 my-2">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" onChange={changeFileHandler} className="cursor-pointer" />
            </div>
          </div>
          <Button className="w-full cursor-pointer my-3">Submit</Button>
          <span className="text-sm">
            Already Have an account?{" "}
            <Link to="/login" className="text-blue-700">
              LogIn
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
