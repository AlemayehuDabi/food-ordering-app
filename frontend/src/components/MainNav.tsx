import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

export default function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          variant="outline"
          onClick={async () => await loginWithRedirect()}
          className="border-2 border-orange-300 text-gray-800 font-bold tracking-wider text-lg hover:text-orange-500"
        >
          Log in
        </Button>
      )}
    </span>
  );
}
