import React, { useState } from "react";
import { GlassCard, GlassCardContent, GlassCardFooter } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { XPBar } from "@/components/XPBar";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Navigation } from "@/components/Navigation";
import { Send, Loader2, Zap, Lightbulb, Clock, Star, Trophy, Check, X, Mic, Moon, Sun, ArrowRight } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  xpReward: number;
}

interface QuizProgress {
  currentQuestion: number;
  score: number;
  completed: boolean;
  answers: number[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the name of the galaxy that contains our Solar System?",
    options: ["Andromeda Galaxy", "Milky Way", "Whirlpool Galaxy", "Sombrero Galaxy"],
    correctAnswer: 1,
    explanation: "Our Solar System is located in the Milky Way galaxy, a barred spiral galaxy containing billions of stars.",
    xpReward: 50,
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    explanation: "Mars is called the Red Planet due to iron oxide (rust) on its surface, giving it a reddish appearance from Earth.",
    xpReward: 50,
  },
  {
    id: 3,
    question: "What is the largest planet in our Solar System?",
    options: ["Earth", "Mars", "Jupiter", "Neptune"],
    correctAnswer: 2,
    explanation: "Jupiter is the largest planet in our Solar System, with a diameter of about 140,000 km, more than 11 times Earth's diameter.",
    xpReward: 50,
  },
  {
    id: 4,
    question: "Which of these is NOT a terrestrial planet?",
    options: ["Venus", "Earth", "Jupiter", "Mars"],
    correctAnswer: 2,
    explanation: "Jupiter is a gas giant, while Venus, Earth, and Mars are terrestrial (rocky) planets.",
    xpReward: 50,
  },
  {
    id: 5,
    question: "What powers the Sun?",
    options: ["Coal combustion", "Nuclear fusion", "Chemical reactions", "Geothermal energy"],
    correctAnswer: 1,
    explanation: "The Sun generates energy through nuclear fusion, where hydrogen atoms combine to form helium, releasing tremendous energy.",
    xpReward: 50,
  },
  {
    id: 6,
    question: "What is the escape velocity from Earth's surface?",
    options: ["7.8 km/s", "11.2 km/s", "15.4 km/s", "20.1 km/s"],
    correctAnswer: 1,
    explanation: "The escape velocity from Earth is approximately 11.2 km/s, the speed needed to break free from Earth's gravitational pull.",
    xpReward: 50,
  },
];

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Quiz() {
  const [progress, setProgress] = useState<QuizProgress>({
    currentQuestion: 0,
    score: 0,
    completed: false,
    answers: new Array(quizQuestions.length).fill(-1),
  });

  const handleAnswer = (selectedIndex: number) => {
    setProgress((prev) => {
      const newAnswers = [...prev.answers];
      newAnswers[prev.currentQuestion] = selectedIndex;

      const question = quizQuestions[prev.currentQuestion];
      const isCorrect = selectedIndex === question.correctAnswer;
      const newScore = isCorrect ? prev.score + question.xpReward : prev.score;

      return {
        ...prev,
        score: newScore,
        answers: newAnswers,
        currentQuestion: prev.currentQuestion + 1,
      };
    });
  };

  const nextQuestion = () => {
    setProgress((prev) => {
      if (prev.currentQuestion >= quizQuestions.length - 1) {
        return { ...prev, completed: true };
      }
      return { ...prev, currentQuestion: prev.currentQuestion + 1 };
    });
  };

  const restartQuiz = () => {
    setProgress({
      currentQuestion: 0,
      score: 0,
      completed: false,
      answers: new Array(quizQuestions.length).fill(-1),
    });
  };

  if (progress.completed) {
    return (
      <div className="relative min-h-screen">
        <Starfield />
        <Navigation />
        <main className="lg:ml-72 min-h-screen">
          <TopBar />
          <div className="pt-6 lg:pt-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-space-gold to-yellow-400 mb-6">
                <Trophy className="w-10 h-10 text-space-navy" />
              </div>
              <h1 className="heading-xl text-4xl font-bold text-white mb-4">
                Quiz Complete!
              </h1>
              <p className="text-white/50 font-dm-sans mb-8">
                You scored {progress.score} XP!
              </p>
              <button
                onClick={restartQuiz}
                className="btn-primary px-8 py-3 rounded-xl text-white font-orbitron"
              >
                <Play className="w-5 h-5 mr-2" />
                Retry Quiz
              </button>
              <div className="mt-6 text-white/50 font-dm-sans">
                <p>Questions answered: {quizQuestions.length}</p>
                <p>Final score: {progress.score} XP</p>
              </div>
            </div>
          </div>
        </main>
        </div>
      </div>
    );
  }

  const currentQ = quizQuestions[progress.currentQuestion];

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Navigation />
      <main className="lg:ml-72 min-h-screen">
        <TopBar />
        <div className="pt-6 lg:pt-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="heading-xl text-white mb-1">Space Quiz</h1>
                <p className="text-sm text-white/50 font-dm-sans">
                  Test your knowledge and earn XP
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-space-gold" />
                  <span className="text-sm text-white/70 font-dm-sans">Score: {progress.score} XP</span>
                </div>
                <XPBar value={progress.currentQuestion + 1} max={quizQuestions.length} showLabel={false} size="sm" color="cyan" />
              </div>
            </div>

            {/* Question */}
            <GlassCard hover className="p-6 mb-8">
              <div className="text-left">
                <p className="text-xs font-orbitron font-medium text-space-cyan mb-3 uppercase tracking-wider">
                  Question {progress.currentQuestion + 1} of {quizQuestions.length}
                </p>
                <h2 className="font-orbitron text-2xl font-bold text-white mb-4">{currentQ.question}</h2>
                <p className="text-white/60 font-dm-sans text-sm mb-6">
                  {currentQ.explanation}
                </p>
              </div>
            </GlassCard>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <GlassCard
                  key={index}
                  className={cn(
                    "p-5 rounded-xl text-left",
                    progress.answers[index] !== -1 && "bg-white/5",
                    progress.answers[index] === index && "bg-space-green/10 border border-space-green/30",
                    !progress.answers[index] && "hover:bg-white/5 transition-colors"
                  )}
                >
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${progress.answers[index] === index ? "bg-space-green text-white" : progress.answers[index] !== -1 && index !== progress.answers[index] ? "bg-space-coral/20 text-space-coral" : "bg-white/10 text-white/50"}`}>
                      {progress.answers[index] === index ? <Check className="w-3 h-3 text-white" /> : progress.answers[index] !== -1 && index !== progress.answers[index] ? <X className="w-3 h-3 text-space-coral" : ""}</div>
                      <span className="font-orbitron font-medium text-white flex-1">{option}</span>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Action Buttons */}
            <GlassCardFooter className="p-6 pt-0 border-t border-white/10">
              {progress.currentQuestion < quizQuestions.length - 1 ? (
                <div className="flex gap-3">
                  <button
                    onClick={nextQuestion}
                    className="btn-secondary flex-1 flex items-center justify-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Next
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setProgress((prev) => ({ ...prev, completed: true }))}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Trophy className="w-4 h-4" />
                  Submit Quiz
                </button>
              )}
            </GlassCardFooter>

            {/* Progress Indicator */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-white/50 font-dm-sans mb-4">
                Progress through all questions
              </p>
              <div className="grid grid-cols-6 gap-2">
                {quizQuestions.map((_, i) => {
                  const answered = progress.answers[i] !== -1;
                  const correct = answered && quizQuestions[i].correctAnswer === progress.answers[i];
                  return (
                    <div
                      key={i}
                      className={cn(
                        "h-2 rounded-full bg-white/5 transition-colors",
                        progress.currentQuestion > i && "bg-space-green/30",
                        answered && !correct && "bg-space-coral/30",
                        i === progress.currentQuestion && "bg-space-orange/30"
                      )}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
