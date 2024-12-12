import { Bookmark } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const JobCard = () => {
  return (
    <div className="p-5 rounded-md bg-white border border-gray-200 shadow-xl">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button variant="outline" className="p-6" size="icon">
          <Avatar>
            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">title</h1>
        <p className="text-sm text-gray-600">
          lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
          dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          ob Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          jo
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          jLPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
};

export default JobCard;
