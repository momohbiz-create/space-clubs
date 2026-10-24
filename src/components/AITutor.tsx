import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { GlassCard, GlassCardContent, GlassCardFooter } from "./GlassCard";
import { XPBar } from "./XPBar";
import { Badge } from "./Badge";
import { Send, Mic, X, Loader2, Zap } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

interface AITutorProps {
  userId?: string;
  courseId?: string;
}

export function AITutor({ userId, courseId }: AITutorProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVoice, setIsVoice] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Simulate AI response
  const simulateAIResponse = async (content: string) => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const responses = [
      `Great question about ${content}! Let me break down the key concepts for you.`,
      `I'd be happy to help you understand ${content}. This is fundamental to space science!`,
      `That's an excellent topic. Let me explain ${content} step by step.`,
    ];

    const response = responses[Math.floor(Math.random() * responses.length)];
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "assistant", content: response, timestamp: new Date().toLocaleTimeString() },
    ]);
    setIsLoading(false);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
          id: Date.now().toString(),
          role: "user",
          content: input,
          timestamp: new Date().toLocaleTimeString(),
        };

    setMessages((prev: Message[]) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      simulateAIResponse(input);
    }, 500);
  };

  const handleVoiceInput = async () => {
    setIsVoice(true);
    // Simulate voice recognition
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsVoice(false);
    setInput("What is the solar system?");
    setMessages((prev: Message[]) => [...prev, {
          id: Date.now().toString(),
          role: "user",
          content: "What is the solar system?",
          timestamp: new Date().toLocaleTimeString(),
        }]);
  };

  return (
    <GlassCard className="h-full">
      <GlassCardContent className="flex-1 flex flex-col h-full">
        <div className="flex items-center justify-between px-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-space-cyan to-space-purple flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-orbitron text-lg font-bold text-white">
              AI Tutor
            </h2>
          </div>
          <button
            onClick={() => setMessages((prev) => prev.slice(0, -1))}
            className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all"
            aria-label="Clear conversation"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages Area */}
        <div
          className="flex-1 overflow-y-auto flex-1 flex flex-col gap-4 px-4 pb-6"
          style={{ flex: '1 1 auto' }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "max-w-[80%] rounded-xl px-4 py-3 font-dm-sans",
                msg.role === "user"
                  ? "items-end text-right ml-auto bg-gradient-to-br from-space-green to-space-cyan"
                  : "items-start text-left mr-auto bg-white/5 border border-white/10"
              )}
            >
              <p className="text-white/90 leading-relaxed break-words">
                {msg.content}
              </p>
              <div className="mt-1 text-xs opacity-70">
                {msg.timestamp}
              </div>
            </div>
          ))}

          {/* Loading State */}
          {isLoading && messages.length > 0 && messages[messages.length - 1].role === "assistant" && (
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow" />
              </div>
              <span className="text-white/60 text-sm font-dm-sans">
                              AI is thinking...
                            </span>
                          </div>
                        )}
              
                        {/* Empty State */}
          {messages.length === 0 && !isLoading && (
            <div className="flex-1 flex items-center justify-center py-12 text-white/40 font-dm-sans">
              <p className="text-center">
                Ask me anything about space science, astronomy, or your courses!
              </p>
            </div>
          )}
        </div>
      </GlassCardContent>

      {/* Input Area */}
      <GlassCardFooter className="p-4 pt-0">
        <form
          onSubmit={handleSend}
          className="flex gap-3 w-full"
        >
          <textarea
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask AI Tutor about space science..."
                      className="input-space flex-1 resize-none py-3 px-4 rounded-xl text-white font-dm-sans focus:outline-none focus:border-space-green focus:ring-2 focus:ring-space-green/20 transition-all"
                      rows={1}
                      aria-label="Message AI Tutor"
                    />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className={cn(
              "btn-primary flex items-center justify-center px-5",
              isLoading && "opacity-50 cursor-not-allowed"
            )}
            aria-label="Send message"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send
              </>
            )}
          </button>
        </form>

        {/* Voice Input */}
        <button
          onClick={handleVoiceInput}
          disabled={isLoading}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mt-2 transition-all hover:bg-white/20"
          aria-label="Voice input"
        >
          {isVoice ? (
            <>
              <Loader2 className="w-5 h-5 text-space-cyan animate-spin" />
            </>
          ) : (
            <Mic className="w-5 h-5 text-white" />
          )}
        </button>
      </GlassCardFooter>
    </GlassCard>
  );
}