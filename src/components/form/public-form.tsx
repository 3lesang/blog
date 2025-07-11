import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({});

export type PublicType = z.infer<typeof formSchema>;

interface PublicFormProps {
  onSubmit?: (values: PublicType) => void;
}

function PublicForm({ onSubmit }: PublicFormProps) {
  const form = useForm<PublicType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function handleSubmit(values: PublicType) {
    onSubmit?.(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="flex justify-between">
          <div></div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 rounded-full text-white "
          >
            Đăng bài
          </button>
        </div>
      </form>
    </Form>
  );
}

export default PublicForm;
