import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { Starfield } from "@/components/Starfield";
import { TopBar } from "@/components/Navigation";
import { Rocket, School, Mail, Phone, MapPin, Building2, GraduationCap, ArrowRight } from "lucide-react";

interface FormStep {
  id: number;
  title: string;
  description: string;
}

const steps: FormStep[] = [
  { id: 1, title: "School Details", description: "Tell us about your school" },
  { id: 2, title: "Contact Information", description: "How can we reach you?" },
  { id: 3, title: "Classroom Setup", description: "Set up your first classroom" },
  { id: 4, title: "Review & Submit", description: "Review your information" },
];

const SchoolRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolType: "",
    location: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    numStudents: "",
    numTeachers: "",
    classroomName: "",
    gradeLevel: "",
  });

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("School registration submitted! We'll review your application and contact you shortly.");
  };

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <TopBar />
      <main className="relative z-10 pt-6 lg:pt-12 pb-24 lg:pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-space-rocket-orange/20 border border-space-rocket-orange/30">
                <Rocket className="w-6 h-6 text-space-rocket-orange" />
              </div>
              <Badge variant="gold" size="lg">School Registration</Badge>
            </div>
            <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-2">
              Register Your <span className="text-gradient-rocket">School</span>
            </h1>
            <p className="text-white/50 font-dm-sans">
              Join Space Clubs Nigeria and bring space science education to your students.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-orbitron font-medium text-white/70">Step {currentStep} of {steps.length}</span>
              <span className="text-sm font-orbitron font-medium text-space-cyan">{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-space-rocket-orange to-space-cosmic-purple rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Steps */}
          <div className="flex items-center justify-between mb-8">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center gap-2">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                  currentStep > step.id
                    ? "bg-space-green text-white border border-space-green"
                    : currentStep === step.id
                    ? "bg-space-rocket-orange text-white border border-space-rocket-orange"
                    : "bg-white/5 text-white/40 border border-white/10"
                )}>
                  {step.id}
                </div>
                <span className="text-xs font-orbitron font-medium text-white/60">{step.title}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <GlassCard hover>
            <div className="p-8">
              <h2 className="font-orbitron text-xl font-semibold text-white mb-6">
                {steps[currentStep - 1].title}
              </h2>
              <p className="text-white/50 font-dm-sans mb-6">{steps[currentStep - 1].description}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: School Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-dm-sans text-white/70 mb-2">School Name</label>
                        <input
                          type="text"
                          value={formData.schoolName}
                          onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                          placeholder="e.g. Greenfield College"
                          className="input-space w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-dm-sans text-white/70 mb-2">School Type</label>
                        <select
                          value={formData.schoolType}
                          onChange={(e) => setFormData({ ...formData, schoolType: e.target.value })}
                          className="input-space w-full"
                        >
                          <option value="">Select school type</option>
                          <option value="public">Public School</option>
                          <option value="private">Private School</option>
                          <option value="international">International School</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-dm-sans text-white/70 mb-2">Location (City, State)</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Lagos, Nigeria"
                        className="input-space w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-dm-sans text-white/70 mb-2">Number of Students</label>
                      <input
                        type="number"
                        value={formData.numStudents}
                        onChange={(e) => setFormData({ ...formData, numStudents: e.target.value })}
                        placeholder="e.g. 500"
                        className="input-space w-full"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-dm-sans text-white/70 mb-2">Contact Person</label>
                        <input
                          type="text"
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          placeholder="e.g. Mr. Adebayo Okafor"
                          className="input-space w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-dm-sans text-white/70 mb-2">Email Address</label>
                        <input
                          type="email"
                          value={formData.contactEmail}
                          onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                          placeholder="e.g. principal@greenfield.edu.ng"
                          className="input-space w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-dm-sans text-white/70 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.contactPhone}
                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                        placeholder="e.g. +234 801 234 5678"
                        className="input-space w-full"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Classroom Setup */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-dm-sans text-white/70 mb-2">Classroom Name</label>
                        <input
                          type="text"
                          value={formData.classroomName}
                          onChange={(e) => setFormData({ ...formData, classroomName: e.target.value })}
                          placeholder="e.g. Space Explorers JSS1"
                          className="input-space w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-dm-sans text-white/70 mb-2">Grade Level</label>
                        <select
                          value={formData.gradeLevel}
                          onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                          className="input-space w-full"
                        >
                          <option value="">Select grade level</option>
                          <option value="jss1">JSS 1 (Age 12-13)</option>
                          <option value="jss2">JSS 2 (Age 13-14)</option>
                          <option value="jss3">JSS 3 (Age 14-15)</option>
                          <option value="sss1">SSS 1 (Age 15-16)</option>
                          <option value="sss2">SSS 2 (Age 16-17)</option>
                          <option value="sss3">SSS 3 (Age 17-18)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-dm-sans text-white/70 mb-2">Number of Teachers</label>
                      <input
                        type="number"
                        value={formData.numTeachers}
                        onChange={(e) => setFormData({ ...formData, numTeachers: e.target.value })}
                        placeholder="e.g. 5"
                        className="input-space w-full"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-xs text-white/50 font-dm-sans mb-1">School Name</p>
                        <p className="font-orbitron text-white">{formData.schoolName}</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-xs text-white/50 font-dm-sans mb-1">Location</p>
                        <p className="font-orbitron text-white">{formData.location}</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-xs text-white/50 font-dm-sans mb-1">Contact Person</p>
                        <p className="font-orbitron text-white">{formData.contactName}</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-xs text-white/50 font-dm-sans mb-1">Email</p>
                        <p className="font-orbitron text-white">{formData.contactEmail}</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-xs text-white/50 font-dm-sans mb-1">Classroom</p>
                        <p className="font-orbitron text-white">{formData.classroomName}</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-xs text-white/50 font-dm-sans mb-1">Grade Level</p>
                        <p className="font-orbitron text-white">{formData.gradeLevel}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-space-gold/10 border border-space-gold/30 rounded-xl">
                      <p className="text-sm text-white/70 font-dm-sans mb-2">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Your school will be reviewed within 3-5 business days. You'll receive a confirmation email once approved.
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
                    >
                      Back
                    </button>
                  )}
                  {currentStep < steps.length ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn-rocket px-6 py-3 rounded-xl font-medium"
                    >
                      Next <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn-rocket px-6 py-3 rounded-xl font-medium"
                    >
                      Submit Application <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
};

export default SchoolRegistration;