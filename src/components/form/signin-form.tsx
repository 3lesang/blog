import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export type SigninType = z.infer<typeof formSchema>;

interface SigninFormProps {
  onSubmit?: (values: SigninType) => void;
}

function SigninForm({ onSubmit }: SigninFormProps) {
  const form = useForm<SigninType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function handleSubmit(values: SigninType) {
    onSubmit?.(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <input
                  placeholder="@aaa@mail.com"
                  {...field}
                  className="px-4 py-2 border rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu</FormLabel>
              <FormControl>
                <input
                  placeholder="Mật khẩu"
                  {...field}
                  type="password"
                  className="px-4 py-2 border rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-sky-500 rounded-lg text-white w-full"
        >
          Đăng nhập
        </button>
      </form>
    </Form>
  );
}

export default SigninForm;
