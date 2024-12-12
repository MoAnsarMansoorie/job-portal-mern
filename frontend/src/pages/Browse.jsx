import JobCard from "@/components/sharedComponents/JobCard";
import Navbar from "@/components/sharedComponents/Navbar";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-2xl mb-3">Search Results ({randomJobs.length})</h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
        {
          randomJobs.map((item, index) => {
            return (
              <JobCard key={index}/>
            )
          })
        }
        </div>
      </div>
    </div>
  );
};

export default Browse;
