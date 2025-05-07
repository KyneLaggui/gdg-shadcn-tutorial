import React from "react";
import { cn } from "@/lib/utils";

const ChatMessage = ({ message }) => {
  const isUser = message.role === "user";
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-2",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground"
        )}
      >
        <div className="whitespace-pre-wrap">{message.content}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
