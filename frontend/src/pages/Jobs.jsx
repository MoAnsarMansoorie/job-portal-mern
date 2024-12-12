import FilterCard from "@/components/sharedComponents/FilterCard";
import JobCard from "@/components/sharedComponents/JobCard";
import Navbar from "@/components/sharedComponents/Navbar";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[20%]">
            {/*Filter Card  */}
            <FilterCard />
          </div>
          {/* Job card */}
          {
            jobsArray.length <= 0 ? <span>Job not found</span> :
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-5">
                {
                  jobsArray.map((item, index) => (
                    <div key={index}>
                      <JobCard />
                    </div>
                  ))
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Jobs;
