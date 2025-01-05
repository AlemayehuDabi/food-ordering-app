import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { CircleUserRound, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLink from "./MobileNavLink";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-800" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="space-y-4">
          <SheetTitle>
            {isAuthenticated ? (
              <span className="flex items-center font-bold gap-2">
                <CircleUserRound className="text-orange-600" />
                <span>{user?.name}</span>
              </span>
            ) : (
              <span>Welcome to Food Order</span>
            )}
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col gap-4">
            {isAuthenticated ? (
              <MobileNavLink />
            ) : (
              <Button
                className="border-orange-600 border-2 text-black hover:bg-orange-600 hover:text-white text-[1rem] flex-1"
                variant="outline"
                onClick={async () => await loginWithRedirect()}
              >
                Log in
              </Button>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
