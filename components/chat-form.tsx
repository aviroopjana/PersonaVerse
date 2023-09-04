'use-client';

import { ChatRequestOptions } from "ai"
import { ChangeEvent, FormEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SendHorizonal } from "lucide-react";

interface ChatFormProps {
    input: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
    isLoading: boolean;
}

export const ChatForm = ({
    input,
    handleInputChange,
    onSubmit,
    isLoading
}: ChatFormProps) => {
    return(
       <form
        onSubmit={onSubmit}
        className="border-t border-primary/10 py-4 flex items-center gap-x-1"
       >
        <Input
            disabled={isLoading}
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message"
            className="rounded-2xl bg-primary/10"
        />
        <Button disabled={isLoading} variant="ghost" >
            <SendHorizonal className="h-8 w-8" />
        </Button>
       </form>
    )
}