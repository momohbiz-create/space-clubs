import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { GlassCard, GlassCardContent, GlassCardFooter } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { XPBar } from "@/components/XPBar";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Send, Mic, X, Loader2, Zap, BookOpen, Target, Award, Rocket } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  selected?: number;
  answered: boolean;
}

const suggestedQuestions = [
  "What is the solar system?",
  "How do rockets work?",
  "What is gravity?",
  "What are black holes?",
  "How do satellites stay in orbit?",
  "What is the speed of light?",
];

const sampleQuiz: QuizQuestion[] = [
  {
    id: "1",
    question: "What is the approximate speed of light in a vacuum?",
    options: ["299,792 km/s", "150,000 km/s", "300,000 km/s", "1,080,000 km/h"],
    correct: 0,
    answered: false,
  },
  {
    id: "2",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1,
    answered: false,
  },
  {
    id: "3",
    question: "What force keeps planets in orbit around the sun?",
    options: ["Electromagnetic force", "Nuclear force", "Gravitational force", "Friction"],
    correct: 2,
    answered: false,
  },
];

const AITutorPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVoice, setIsVoice] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quiz, setQuiz] = useState<QuizQuestion[]>(sampleQuiz);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const simulateAIResponse = async (content: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const responses: Record<string, string> = {
      "What is the solar system?":
        "The Solar System is a gravitationally bound system of the Sun and the objects that orbit it. It formed about 4.6 billion years ago from a giant cloud of gas and dust called the solar nebula. The Sun is at the center, and the eight planets — Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune — orbit around it. Beyond the planets are smaller bodies like asteroids, comets, and dwarf planets like Pluto.",
      "How do rockets work?":
        "Rockets work on Newton's Third Law of Motion: For every action, there is an equal and opposite reaction. A rocket engine burns fuel (propellant) and expels the exhaust gases at high speed out of the back. This creates thrust that pushes the rocket forward. The key is that rockets carry both fuel and oxidizer, so they can work in the vacuum of space where there's no air to provide oxygen.",
      "What is gravity?":
        "Gravity is a fundamental force of nature that causes any two masses to attract each other. On Earth, gravity gives weight to physical objects and causes objects to fall toward the ground when dropped. The strength of gravity depends on mass and distance — the more massive an object, the stronger its gravitational pull. Earth's gravity is about 9.8 m/s², which means objects fall 9.8 meters per second faster each second they fall.",
      "What are black holes?":
        "A black hole is a region of spacetime where gravity is so strong that nothing — not even light — can escape from it. Black holes form when massive stars collapse at the end of their life cycles. The boundary beyond which nothing can escape is called the event horizon. At the center of a black hole is a singularity, where density and gravity become infinite. Despite their name, black holes don't 'suck' things in — they have the same gravitational effect as any other object of the same mass at the same distance.",
      "How do satellites stay in orbit?":
        "Satellites stay in orbit because of a balance between their forward velocity and the gravitational pull of the Earth. A satellite is constantly falling toward Earth due to gravity, but it also has enough horizontal velocity to keep missing it. This creates a curved path around the Earth — an orbit. The higher the altitude, the slower the required orbital speed. Low Earth orbit satellites travel at about 28,000 km/h!",
      "What is the speed of light?":
        "The speed of light in a vacuum is exactly 299,792,458 meters per second (about 186,282 miles per second). This is a fundamental constant of nature, denoted by the letter 'c'. Nothing with mass can travel at or faster than the speed of light. Light from the Sun takes about 8 minutes and 20 seconds to reach Earth, which is about 150 million kilometers away.",
    };

    const response = responses[content] || responses[Object.keys(responses)[Math.floor(Math.random() * Object.keys(responses).length)]] || "That's a great question! Let me help you understand this concept better.";

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "assistant", content: response, timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
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
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      simulateAIResponse(input);
    }, 500);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  const handleQuizAnswer = (questionId: string, optionIndex: number) => {
    setQuiz((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? { ...q, selected: optionIndex, answered: true }
          : q
      )
    );
  };

  const handleQuizSubmit = () => {
    const score = quiz.filter((q) => q.selected === q.correct).length;
    setQuizScore(score);
  };

  const handleNewQuiz = () => {
    setQuiz(sampleQuiz.map((q) => ({ ...q, selected: undefined, answered: false })));
    setQuizScore(null);
  };

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <TopBar />
      <main className="relative z-10 pt-6 lg:pt-12 pb-24 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-space-cyan/20 border border-space-cyan/30">
                <Zap className="w-6 h-6 text-space-cyan" />
              </div>
              <Badge variant="cyan" size="lg">AI Mission Assistant</Badge>
            </div>
            <h1 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              AI <span className="text-gradient-cyan">Tutor</span>
            </h1>
            <p className="text-white/50 font-dm-sans max-w-2xl">
              Ask questions about space science, get help with your courses, or take an AI-generated quiz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Tutor Chat */}
            <div className="lg:col-span-2">
              <GlassCard className="h-[600px] flex flex-col">
                <GlassCardContent className="p-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-space-cyan to-space-purple flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="font-orbitron text-lg font-bold text-white">AI Tutor</h2>
                      <p className="text-xs text-white/50 font-dm-sans">Online • Ready to help</p>
                    </div>
                  </div>
                </GlassCardContent>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.length === 0 && !isLoading && (
                    <div className="flex-1 flex flex-col items-center justify-center h-full text-center">
                      <Zap className="w-12 h-12 text-white/20 mb-4" />
                      <p className="text-white/40 font-dm-sans mb-4">
                        Ask me anything about space science, astronomy, or your courses!
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md">
                        {suggestedQuestions.map((q) => (
                          <button
                            key={q}
                            onClick={() => handleSuggestedQuestion(q)}
                            className="text-left p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm text-white/80 font-dm-sans"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={cn(
                        "max-w-[80%] rounded-xl px-4 py-3 font-dm-sans",
                        msg.role === "user"
                          ? "ml-auto text-right bg-gradient-to-br from-space-green to-space-cyan text-white"
                          : "mr-auto bg-white/5 border border-white/10 text-white/90"
                      )}
                    >
                      <p className="leading-relaxed break-words">{msg.content}</p>
                      <div className="mt-1 text-xs opacity-70">
                        {msg.timestamp}
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="mr-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow" />
                      </div>
                      <span className="text-white/60 text-sm font-dm-sans">AI is thinking...</span>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <GlassCardFooter className="p-4 pt-0">
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
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </button>
                  </form>
                </GlassCardFooter>
              </GlassCard>
            </div>

            {/* Quiz Section */}
            <div className="space-y-6">
              <GlassCard hover>
                <GlassCardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-orbitron text-lg font-semibold text-white flex items-center gap-2">
                      <Target className="w-5 h-5 text-space-purple" />
                      AI Quiz Generator
                    </h3>
                    <Badge variant="purple" size="sm">
                      {quizScore !== null ? `${quizScore}/${quiz.length}` : "New Quiz"}
                    </Badge>
                  </div>

                  {quizScore !== null ? (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-space-gold to-yellow-400 flex items-center justify-center mx-auto mb-4">
                        <Award className="w-10 h-10 text-space-navy" />
                      </div>
                      <h4 className="font-orbitron text-2xl font-bold text-white mb-2">
                        Quiz Complete!
                      </h4>
                      <p className="text-white/60 font-dm-sans mb-4">
                        You scored {quizScore} out of {quiz.length}
                      </p>
                      <XPBar value={quizScore} max={quiz.length} label="Score" showLabel={false} size="sm" />
                      <button
                        onClick={handleNewQuiz}
                        className="btn-primary w-full mt-4"
                      >
                        Take Another Quiz
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {quiz.map((q) => (
                        <div key={q.id} className="space-y-2">
                          <p className="font-orbitron font-medium text-white text-sm">{q.question}</p>
                          <div className="space-y-1">
                            {q.options.map((opt, i) => (
                              <button
                                key={i}
                                onClick={() => handleQuizAnswer(q.id, i)}
                                disabled={q.answered}
                                className={cn(
                                  "w-full text-left p-2 rounded-lg text-sm font-dm-sans transition-all",
                                  q.answered
                                    ? i === q.correct
                                      ? "bg-space-green/20 border border-space-green/30 text-space-green-light"
                                      : i === q.selected
                                      ? "bg-space-coral/20 border border-space-coral/30 text-space-coral"
                                      : "bg-white/5 border border-white/10 text-white/50"
                                    : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80"
                                )}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={handleQuizSubmit}
                        disabled={!quiz.every((q) => q.answered)}
                        className={cn(
                          "btn-rocket w-full",
                          !quiz.every((q) => q.answered) && "opacity-50 cursor-not-allowed"
                        )}
                      >
                        Submit Quiz
                      </button>
                    </div>
                  )}
                </GlassCardContent>
              </GlassCard>

              <GlassCard hover>
                <GlassCardContent className="p-6">
                  <h3 className="font-orbitron text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-space-green" />
                    Quick Tips
                  </h3>
                  <div className="space-y-3 text-sm font-dm-sans">
                    <p className="text-white/70">
                      • Ask about specific topics like "How do rockets work?"
                    </p>
                    <p className="text-white/70">
                      • Request a quiz on any space science topic
                    </p>
                    <p className="text-white/70">
                      • Use voice input for hands-free learning
                    </p>
                  </div>
                </GlassCardContent>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AITutorPage;