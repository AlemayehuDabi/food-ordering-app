import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNavLink() {
  const { logout } = useAuth0();

  return (
    <>
      <Link to="/user-profile" className="hover:text-orange-500 font-bold">
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        variant="ghost"
        className="font-bold flex items-center hover:text-orange-600"
      >
        Log Out
      </Button>
    </>
  );
}
