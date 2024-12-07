import { Search } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br />
          Get your <span className="text-[#6a3bc2]">Dream Jobs</span>
        </h1>
        <p>lorem ipsum dolor lorem ipsum dolor lorem ipsium dolwoer lolorem ipsum dolor lorem ipsum dolor lorem</p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 mx-auto pl-3 gap-4 rounded-full items-center">
            <input 
                type="text"
                placeholder="Search Jobs here..."
                className="outline-none border-none w-full"
            />
            <Button className="bg-[#6a3bc2] rounded-r-full">
                <Search className="h-5 w-5" />
            </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
