import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { pb } from "@/lib/pocketbase";
import { cn } from "@/lib/utils";
import { LogOutIcon, SquarePenIcon } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router";

function Layout() {
  const navigate = useNavigate();
  const handleSignout = () => {
    pb.authStore.clear();
    navigate("/app/signin");
  };
  return (
    <div className="">
      <div className="py-2">
        <div className="flex  items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center">
            <Link
              to="/app/draft"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hover:no-underline"
              )}
            >
              <SquarePenIcon />
              Viết bài
            </Link>
            <Link
              to="/app/new-post"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hover:no-underline"
              )}
            >
              Cộng đồng
            </Link>
          </div>
          <div>
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="border-none w-fit p-2">
                <Separator className="my-2" />
                <Button
                  variant="ghost"
                  className="text-red-500"
                  onClick={handleSignout}
                >
                  <LogOutIcon />
                  Đăng xuất
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <Separator />
      <Outlet />
    </div>
  );
}

export default Layout;
