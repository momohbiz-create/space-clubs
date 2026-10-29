import React, { useState, useRef, useEffect } from "react";
import { GlassCard, GlassCardContent, GlassCardFooter } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Navigation } from "@/components/Navigation";
import { Send, Mic, X, Loader2, Zap, BookOpen, Star, Lightbulb, MessageSquare, Trash2, Copy } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const suggestedQuestions = [
  "What is a black hole?",
  "How do rockets work?",
  "Explain orbital mechanics",
  "What is the solar system?",
  "How do astronauts live in space?",
  "What are exoplanets?",
];

export default function AITutorPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVoice, setIsVoice] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const simulateAIResponse = async (content: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const responses: Record<string, string> = {
      "black hole": "A black hole is a region in space where gravity is so strong that nothing, not even light, can escape from it. They form when massive stars collapse at the end of their life cycle. The boundary around a black hole is called the event horizon.",
      "rocket": "Rockets work on Newton's Third Law: for every action, there is an equal and opposite reaction. They expel hot gases at high speed from their engines, which pushes the rocket forward. Modern rockets use multiple stages to reach orbit efficiently.",
      "orbital": "Orbital mechanics is the study of how objects move in space under the influence of gravity. Key concepts include orbital velocity, escape velocity, and orbital transfers like Hohmann transfers. Satellites stay in orbit by balancing their forward velocity with Earth's gravitational pull.",
      "solar system": "Our solar system consists of the Sun, 8 planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune), dwarf planets like Pluto, moons, asteroids, and comets. The planets orbit the Sun in elliptical paths.",
      "astronaut": "Astronauts live on the International Space Station (ISS) in microgravity. They exercise 2 hours daily to prevent muscle and bone loss, eat specially prepared food, and conduct scientific experiments. They sleep in sleeping bags attached to walls.",
      "exoplanet": "Exoplanets are planets that orbit stars outside our solar system. Over 5,000 have been discovered! They range from gas giants larger than Jupiter to rocky planets in the habitable zone where liquid water could exist.",
    };

    let response = "That's a great question about space science! Let me explain...";
    for (const [key, value] of Object.entries(responses)) {
      if (content.toLowerCase().includes(key)) {
        response = value;
        break;
      }
    }

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

    setMessages((prev) => [...prev, userMessage]);
    setShowSuggestions(false);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      simulateAIResponse(currentInput);
    }, 500);
  };

  const handleVoiceInput = async () => {
    setIsVoice(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsVoice(false);
    setInput("What is the solar system?");
    setMessages((prev) => [...prev, {
      id: Date.now().toString(),
      role: "user",
      content: "What is the solar system?",
      timestamp: new Date().toLocaleTimeString(),
    }]);
  };

  const handleSuggestionClick = (question: string) => {
    setInput(question);
    handleSend(new Event("submit"));
  };

  const clearConversation = () => {
    setMessages([]);
    setShowSuggestions(true);
  };

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Navigation />
      <main className="lg:ml-72 min-h-screen">
        <TopBar />
        <div className="pt-6 lg:pt-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-space-cyan to-space-purple flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="heading-xl text-white mb-1">AI Space Tutor</h1>
                  <p className="text-sm text-white/50 font-dm-sans">Ask me anything about space science, astronomy, or your courses!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="cyan" size="sm" icon={<BookOpen className="w-3 h-3" />}>
                                  Space Science Expert
                                </Badge>
                                <Badge variant="purple" size="sm" icon={<Star className="w-3 h-3" />}>
                                  24/7 Available
                                </Badge>
                                <Badge variant="gold" size="sm" icon={<Lightbulb className="w-3 h-3" />}>
                                  Personalized Learning
                                </Badge>
              </div>
            </div>

            {/* Chat Interface */}
            <GlassCard className="h-[calc(100vh-280px)] flex flex-col">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-space-cyan to-space-purple flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="font-orbitron text-lg font-bold text-white">AI Tutor</h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={clearConversation}
                    className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all"
                    aria-label="Clear conversation"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto flex flex-col gap-4 px-6 pb-6" style={{ flex: '1 1 auto' }}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-3 font-dm-sans",
                      msg.role === "user"
                        ? "items-end text-right ml-auto bg-gradient-to-br from-space-green to-space-cyan"
                        : "items-start text-left mr-auto bg-white/5 border border-white/10"
                    )}
                  >
                    <p className="text-white/90 leading-relaxed break-words">{msg.content}</p>
                    <div className="mt-1 text-xs opacity-70">{msg.timestamp}</div>
                  </div>
                ))}

                {/* Loading State */}
                {isLoading && messages.length > 0 && messages[messages.length - 1].role === "assistant" && (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow" />
                    </div>
                    <span className="text-white/60 text-sm font-dm-sans">AI is thinking...</span>
                  </div>
                )}

                {/* Empty State */}
                {messages.length === 0 && !isLoading && (
                  <div className="flex-1 flex flex-col items-center justify-center py-12 text-white/40 font-dm-sans">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                      <Zap className="w-8 h-8 text-white/40" />
                    </div>
                    <p className="text-center text-lg mb-6">Ask me anything about space science!</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {suggestedQuestions.map((q) => (
                        <button
                          key={q}
                          onClick={() => handleSuggestionClick(q)}
                          className="btn-secondary text-sm px-4 py-2"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <GlassCardFooter className="p-4 pt-0 border-t border-white/10">
                <form onSubmit={handleSend} className="flex gap-3 w-full">
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
                    <Loader2 className="w-5 h-5 text-space-cyan animate-spin" />
                  ) : (
                    <Mic className="w-5 h-5 text-white" />
                  )}
                </button>
              </GlassCardFooter>
            </GlassCard>

            {/* Quick Actions */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <GlassCard hover className="p-4 text-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-green to-space-cyan flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-orbitron font-semibold text-white text-sm">Course Help</h3>
                <p className="text-xs text-white/50 font-dm-sans mt-1">Get help with your current course</p>
              </GlassCard>
              <GlassCard hover className="p-4 text-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-purple to-space-teal flex items-center justify-center mx-auto mb-2">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-orbitron font-semibold text-white text-sm">Explain Concept</h3>
                <p className="text-xs text-white/50 font-dm-sans mt-1">Deep dive into any space topic</p>
              </GlassCard>
              <GlassCard hover className="p-4 text-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-gold to-yellow-400 flex items-center justify-center mx-auto mb-2">
                  <Star className="w-5 h-5 text-space-navy" />
                </div>
                <h3 className="font-orbitron font-semibold text-white text-sm">Quiz Practice</h3>
                <p className="text-xs text-white/50 font-dm-sans mt-1">Generate practice questions</p>
              </GlassCard>
              <GlassCard hover className="p-4 text-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-coral to-space-orange flex items-center justify-center mx-auto mb-2">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-orbitron font-semibold text-white text-sm">Study Plan</h3>
                <p className="text-xs text-white/50 font-dm-sans mt-1">Create a personalized study schedule</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}