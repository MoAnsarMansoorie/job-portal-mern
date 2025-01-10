import CategoryCarousal from "@/components/sharedComponents/CategoryCarousal"
import Footer from "@/components/sharedComponents/Footer"
import HeroSection from "@/components/sharedComponents/HeroSection"
import LatestJobs from "@/components/sharedComponents/LatestJobs"
import Navbar from "@/components/sharedComponents/Navbar"
import useGetAllJobs from "@/hooks/useGetAllJobs"

const Home = () => {
  useGetAllJobs()
  return (
    <div>
        <Navbar />
        <HeroSection />
        <CategoryCarousal />
        <LatestJobs />
        <Footer />
    </div>
  )
}

export default Home