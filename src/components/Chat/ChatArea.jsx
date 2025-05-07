import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Send } from "lucide-react";
import ChatMessage from "@/components/Chat/ChatMessage";

const ChatArea = ({
  messages,
  onSendMessage,
  activeModel,
  toggleSidebar,
  isMobile,
  isLoading = false,
}) => {
  const messagesEndRef = useRef(null);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSendMessage(input);
    setInput("");
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behaviour: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b border-border p-4 flex items-center justify-start md:justify-center">
        <div className="flex items-center">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="mr-2"
              aria-label="Toggle sidebar"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <h2 className="font-semibold">
            {activeModel ? activeModel.name : "Chat"}
          </h2>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4 max-w-3xl mx-auto">
          {messages
            .filter((m) => m.role !== "system")
            .map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="border-t border-border p-4">
        <form
          className="flex space-x-2 max-w-3xl mx-auto"
          onSubmit={handleSubmit}
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatArea;
