import AppliedJobTable from "@/components/sharedComponents/AppliedJobTable";
import Navbar from "@/components/sharedComponents/Navbar";
import UpdateProfileDialoge from "@/components/sharedComponents/UpdateProfileDialoge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Contact, Mail, Pen } from "lucide-react";
import { useState } from "react";

const skills = ["html", "css", "javascript", "python"];

const Profile = () => {
  const [open, setOpen] = useState(false)
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-8 my-5 rounded-xl shadow-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p className="text-sm">
                lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem ipsum dolor{" "}
              </p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-3">
          <div className="flex items-center gap-3 my-3">
            <Mail />
            <span>asdfg@asdfg.com</span>
          </div>
          <div className="flex items-center gap-3 my-3">
            <Contact />
            <span>9876543210</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="font-medium text-xl">Skills</h1>
          <div className="flex items-center gap-1 mt-1">
            {skills.length !== 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>Not applicable</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="https://youtube.com"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              Ansar MERN Stack
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        {/* Applied Job Table   */}
        <AppliedJobTable />
      </div>
      <UpdateProfileDialoge open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
