import { LogOut, User2 } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Navbar = () => {
  const user = false;
  return (
    <div>
      <div className="flex justify-between items-center mx-auto max-w-6xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex font-medium gap-5 items-center">
            <li>Home</li>
            <li>About</li>
            <li>Browse</li>
          </ul>

          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-3 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Ansar MernStack</h4>
                    <p className="text-sm text-muted-foreground">
                      lorem ipsum hshjbdc hjjsaj jkbcd
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">LogOut</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline">LogIn</Button>
              <Button className="bg-[#6A38C2] hover:bg-[#4f239b]">SignUp</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
