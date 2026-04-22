import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  MinusCircle,
  Maximize2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
}

export function FloatingChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      content:
        "Hello! I am CogniSync, your digital wellness coach. How is your screen time today? Are you feeling overwhelmed by your phone or your studies?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isMinimized, isLoading]);

  const generateResponse = async (
    input: string,
  ): Promise<string> => {
    setIsLoading(true);

    try {
      // If you are bypassing Hono for local testing, you can change this to "http://localhost:8000/chat", "https://cognisync-backend.onrender.com/chat"
      const fastApiUrl = "https://cogni-sync-backend.vercel.app/chat"; 

      const response = await fetch(fastApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: input }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setIsLoading(false);

      // Return the reply from your Llama 3 engine!
      return data.reply;
    } catch (error) {
      console.error("Failed to fetch AI response:", error);
      setIsLoading(false);
      return "Sorry, I am having trouble connecting to my servers right now. Please make sure the backend is running!";
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");

    const responseContent = await generateResponse(
      newUserMsg.content,
    );
    const newBotMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "bot",
      content: responseContent,
    };
    setMessages((prev) => [...prev, newBotMsg]);
  };

  if (!isOpen) {
    return (
      <button
        id="cognisync-chatbot-trigger"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-transform z-50 flex items-center justify-center group hover-btn-anim"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-popover text-popover-foreground text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-border backdrop-blur-md font-medium shadow-sm">
          Chat with CogniSync Coach
        </span>
      </button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
        }}
        className={twMerge(
          "fixed bottom-6 right-6 w-80 sm:w-96 flex flex-col z-50 overflow-hidden",
          "bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl",
          isMinimized ? "h-auto" : "h-[500px]",
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-background/80 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-sm" />
            <h3 className="font-semibold text-foreground text-sm tracking-wide">
              CogniSync Coach
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4" />
              ) : (
                <MinusCircle className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent bg-background/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={clsx(
                    "flex flex-col max-w-[85%]",
                    msg.role === "user"
                      ? "ml-auto items-end"
                      : "mr-auto items-start",
                  )}
                >
                  <span className="text-[10px] text-muted-foreground mb-1 px-1 uppercase tracking-wider font-semibold">
                    {msg.role === "user" ? "You" : "Coach"}
                  </span>
                  <div
                    className={clsx(
                      "px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-sm font-medium"
                        : "bg-muted text-foreground border border-border rounded-tl-sm",
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex flex-col max-w-[85%] mr-auto items-start">
                  <span className="text-[10px] text-muted-foreground mb-1 px-1 uppercase tracking-wider font-semibold">
                    Coach
                  </span>
                  <div className="px-4 py-3.5 bg-muted text-foreground border border-border rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                    <motion.div
                      className="w-1.5 h-1.5 bg-primary rounded-full"
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0,
                      }}
                    />
                    <motion.div
                      className="w-1.5 h-1.5 bg-primary rounded-full"
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.2,
                      }}
                    />
                    <motion.div
                      className="w-1.5 h-1.5 bg-primary rounded-full"
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.4,
                      }}
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSend}
              className="p-3 bg-background/90 border-t border-border"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) =>
                    setInputValue(e.target.value)
                  }
                  placeholder="Type your message..."
                  className="w-full bg-input-background border border-border text-foreground text-sm rounded-full pl-4 pr-12 py-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground shadow-sm"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-2 p-1.5 text-primary hover:text-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-full hover:bg-muted"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}