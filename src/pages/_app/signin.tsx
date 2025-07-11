import SigninForm, { type SigninType } from "@/components/form/signin-form";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pb } from "@/lib/pocketbase";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

function SigninPage() {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (values: SigninType) =>
      pb.collection("users").authWithPassword(values.email, values.password),
    onSuccess: () => {
      navigate("/app");
    },
  });
  const handleSubmit = (values: SigninType) => {
    mutate(values);
  };
  return (
    <div className="bg-gray-50">
      <div className="h-screen flex justify-center items-center">
        <div>
          <Card className="border-none shadow-none w-96">
            <CardHeader>
              <CardTitle>Đăng nhập</CardTitle>
            </CardHeader>
            <CardContent>
              <SigninForm onSubmit={handleSubmit} />
            </CardContent>
          </Card>
          <div className="mt-2">
            <span className="text-sm">Chưa có tài khoản?</span>
            <a
              href="/app/signup"
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-sky-500"
              )}
            >
              Tạo tài khoản
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
