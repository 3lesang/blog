import PublicForm from "@/components/form/public-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import "@blocknote/core/fonts/inter.css";
import { vi } from "@blocknote/core/locales";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { SubtitlesIcon, XIcon } from "lucide-react";
import { useState } from "react";

function NewPostPage() {
  const [hasSubTitle, setHasSubTitle] = useState(false);

  const editor = useCreateBlockNote({
    dictionary: {
      ...vi,
    },
  });

  return (
    <div className="">
      <div className="max-w-4xl mx-auto py-8">
        <div className="flex justify-between">
          <div></div>
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-blue-600 hover:cursor-pointer text-white px-4 py-2 rounded-full">
                Đăng bài
              </button>
            </DialogTrigger>
            <DialogContent className="min-w-fit">
              <DialogHeader>
                <DialogTitle>Tùy chỉnh</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <PublicForm />
            </DialogContent>
          </Dialog>
        </div>
        <Button
          variant="ghost"
          className="rounded-full"
          onClick={() => setHasSubTitle(true)}
        >
          <SubtitlesIcon />
          Thêm mô tả
        </Button>
        <div className="mt-2">
          <div>
            <input
              placeholder="Tiêu đề bài viết..."
              className="w-full border-none outline-none font-bold text-4xl"
            />
          </div>
          {hasSubTitle && (
            <div className="flex justify-between items-center mt-8">
              <input
                placeholder="Mô tả bài viết..."
                className="w-full border-none outline-none font-semibold text-2xl"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setHasSubTitle(false)}
              >
                <XIcon />
              </Button>
            </div>
          )}
        </div>
        <div className="h-8"></div>
        <BlockNoteView editor={editor} />
      </div>
    </div>
  );
}

export default NewPostPage;
