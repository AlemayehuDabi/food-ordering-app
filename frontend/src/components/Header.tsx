import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl text-orange-600 font-bold tracking-tighter"
        >
          Food Ordering
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
