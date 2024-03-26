import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLogged } = useAppContext();
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">MernHolidays.com</Link>
        </span>
        <span className="flex space-x-2">
          {!isLogged ? (
            <>
              <Link
                to="/sign-in"
                className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 hover:text-green-500"
              >
                Sign In
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/my-bookings"
                className="flex  items-center text-white px-3 font-bold hover:bg-gray-100 hover:text-blue-500"
              >
                My Bookings
              </Link>
              <Link
                to="/my-motels"
                className="flex text-white items-center  px-3 font-bold hover:bg-gray-100 hover:text-blue-500"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          )}
        </span>
      </div>
    </div>
  );
};
export default Header;
