"use client";

import { Companion } from "@prisma/client";
import { ChatMessage, ChatMessageProps } from "./chat-message";
import { ElementRef, useEffect, useRef, useState } from "react";

interface ChatMessagesProps {
    messages: ChatMessageProps[];
    isLoading: boolean;
    companion: Companion;
};

export const ChatMessages = ({
    messages = [],
    companion,
    isLoading   
}:ChatMessagesProps) => {

    const scrollref = useRef<ElementRef<"div">>(null);

    const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFakeLoading(false)
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    useEffect(()=> {
        scrollref?.current?.scrollIntoView({ behavior: "smooth" });
    },[]);


    return (
        <div className="flex-1 overflow-y-auto pr-4" >
            <ChatMessage
                isLoading={fakeLoading}
                src={companion.src}
                role="system"
                content={`Hello, I am ${companion.name}, ${companion.description}`}
            />
            {messages.map((messages)=> (
                <ChatMessage
                    key={messages.content}
                    role={messages.role}
                    content={messages.content}
                    src={companion.src}
                />
            ))}
            {isLoading && (
                <ChatMessage
                    role="system"
                    src={companion.src}
                    isLoading
                />
            )}
            <div ref={scrollref} />
        </div>
    )
}