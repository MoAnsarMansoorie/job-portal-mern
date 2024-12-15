import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const UpdateProfileDialoge = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name:
                </Label>
                <Input
                  id="name"
                  name="name"
                  className="col-span-3"
                  placeHolder="Name"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email:
                </Label>
                <Input
                  id="email"
                  name="email"
                  className="col-span-3"
                  placeHolder="email"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Number:
                </Label>
                <Input
                  id="number"
                  name="number"
                  className="col-span-3"
                  placeHolder="number"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio:
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  className="col-span-3"
                  placeHolder="bio"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills:
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  className="col-span-3"
                  placeHolder="skills"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume:
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  className="col-span-3"
                  placeHolder="file"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full cursor-pointer my-3">
                  {" "}
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                  wait...
                </Button>
              ) : (
                <Button className="w-full cursor-pointer my-3">Update</Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialoge;
