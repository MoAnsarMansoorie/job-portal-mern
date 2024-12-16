import { LogOut, User2 } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";

const Navbar = () => {
  // const user = false;
  const {user} = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true
      })
      if(res.data.success){
        dispatch(setUser(null))
        navigate("/")
        toast.success(res.data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
          </ul>

          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-3 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logOutHandler} variant="link">LogOut</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login"><Button variant="outline">LogIn</Button></Link>
              <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#4f239b]">SignUp</Button></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
