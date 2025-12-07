import React, { useState, useEffect } from 'react';
import { FireIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bars3Icon, XMarkIcon, ArrowUpIcon, 
  UserIcon, AcademicCapIcon, CodeBracketIcon, 
  FolderIcon, TrophyIcon, SparklesIcon, 
  HeartIcon, ChatBubbleLeftIcon, 
  PencilIcon, VideoCameraIcon, RocketLaunchIcon,
  EnvelopeIcon, PaperAirplaneIcon 
} from '@heroicons/react/24/outline';
// import cr from './Photos/cr.jpeg';
import Lackcity from './Photos/Lackcity.jpeg';
import Manit from './Photos/Manit.jpeg';
import Vit1 from './Photos/Vit1.jpeg';
import Problem from './Photos/Problem.jpeg';
import AIBuild from './Photos/AIBuild.png';
// import Tech from './Photos/Tech.jpeg';
import Techi from './Styling/Techillustration.png';
import resume from './Techmt/Aastha_Resume.pdf';
import Bansal from './Photos/Bansal.jpeg';
import Chatbot from './Styling/Chatbot.jpg';
import Studyhelper from './Styling/Studyhelper.jpg';
import Ecommerce from './Styling/Ecommerce.jpg';
import aastha from './Photos/aastha.jpeg';




const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);


  



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3033/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    });

    if (response.ok) {
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to Send Message!");
    }
  } catch (error) {
    console.log(error);
    alert("Server Error");
  }
};


  
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .gradient-bg {
          background: linear-gradient(-45deg, #0f172a, #1e293b, #334155, #475569);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .float { animation: float 3s ease-in-out infinite; }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(20, 184, 166, 0.3); }
          50% { box-shadow: 0 0 40px rgba(20, 184, 166, 0.6); }
        }
        .pulse-glow { animation: pulseGlow 2s ease-in-out infinite; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .fade-in-up.delay-1 { animation-delay: 0.2s; }
        .fade-in-up.delay-2 { animation-delay: 0.4s; }
        .fade-in-up.delay-3 { animation-delay: 0.6s; }
        .glassmorphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .gradient-text {
          background: linear-gradient(to right, #14b8a6, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .parallax-bg {
          background-attachment: fixed;
          background-size: cover;
        }
      `}</style>
      {/* Navbar */}
    <nav
  className="
    fixed top-0 left-0 w-full z-50 
    backdrop-blur-2xl bg-black/20 
    border-b border-white/10 
    shadow-[0_0_25px_rgba(0,255,255,0.25)]
    transition-all duration-500
  "
>
  {/* TOP NAV CONTAINER */}
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative">

    {/* --- BRAND LOGO (Neon + Magnetic Hover) --- */}
    <div
      onClick={() => scrollToSection('hero')}
      className="
        text-3xl font-bold tracking-wide 
        cursor-pointer select-none
        bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 
        bg-clip-text text-transparent 
        hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]
        transition-all duration-300
      "
    >
      Aastha's Potfolio
    </div>

    {/* --- DESKTOP MENU --- */}
    <div className="hidden md:flex items-center space-x-10">

      {['about', 'education', 'skills', 'projects', 'contact'].map((section) => (
        <div
          key={section}
          onClick={() => scrollToSection(section)}
          className="
            relative cursor-pointer capitalize text-[18px] 
            text-gray-300 tracking-wide 
            hover:text-cyan-300 
            transition-all duration-300 group
          "
        >
          {section}

          {/* Neon Underline */}
          <span
            className="
              absolute left-0 -bottom-1 h-[2px] w-0 
              bg-gradient-to-r from-teal-400 to-cyan-300 
              shadow-[0_0_10px_cyan]
              rounded-full 
              transition-all duration-300 group-hover:w-full
            "
          ></span>
        </div>
      ))}
    </div>

    {/* --- MOBILE MENU BUTTON --- */}
    <button
      className="
        md:hidden text-cyan-300 text-3xl
        hover:scale-110 transition-all
      "
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? "✖" : "☰"}
    </button>
  </div>

  {/* SCROLL PROGRESS BAR */}
  <div className="w-full h-1 bg-black/50">
    <div className="h-full bg-gradient-to-r from-teal-200 to-cyan-200 shadow-[0_0_12px_cyan] transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>
  </div>

  {/* --- MOBILE DROPDOWN MENU --- */}
  {isMenuOpen && (
    <div
      className="
        md:hidden 
        bg-black/70 backdrop-blur-xl 
        border-t border-white/10  
        shadow-[0_0_20px_rgba(0,255,255,0.15)]
        px-6 py-4 space-y-3
        animate-fadeDown
      "
    >
      {['about', 'education', 'skills', 'projects', 'contact'].map((section) => (
        <div
          key={section}
          onClick={() => scrollToSection(section)}
          className="
            text-gray-200 text-lg 
            px-3 py-2 rounded-md 
            cursor-pointer 
            hover:bg-white/10 hover:text-cyan-300 
            transition-all duration-300
          "
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </div>
      ))}
    </div>
  )}
</nav>


      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Workshops />
      <Achievements />
      <Strengths />
      <Hobbies />
      <Contact handleSubmit={handleSubmit} formData={formData} handleFormChange={handleFormChange} />
      {/* Back to Top Button */}
      {showBackToTop && (
        <button onClick={handleBackToTop} className="fixed bottom-6 right-6 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition pulse-glow z-40">
          <ArrowUpIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

// Section 1: Hero / Intro - Enhanced with parallax
const Hero = () => (
  <section 
    id="hero" 
    className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4 pt-20 md:pt-0"
  >
  {/* Background Lights */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)] animate-pulse"></div>
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-600/10 to-transparent mix-blend-overlay"></div>

  {/* Floating Orbs */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl animate-floating1"></div>
    <div className="absolute right-10 top-32 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl animate-floating2 hidden md:block"></div>
  </div>

  {/* Bubbles (auto adjusts for mobile) */}
  <div className="absolute inset-0 opacity-20 hidden md:block">
    {[...Array(8)].map((_, i) => (
      <span
        key={i}
        className="absolute w-6 h-6 bg-white/10 rounded-full blur-sm animate-bubble"
        style={{
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 90}%`,
          animationDelay: `${i * 0.7}s`,
        }}
      ></span>
    ))}
  </div>

  <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-0 relative z-10">

    {/* 🖼 RIGHT IMAGE (CENTERED ON MOBILE) */}
    <div className="w-full flex justify-center lg:w-1/2 animate-fadeUp">
      <div className="relative group">
        <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-3xl opacity-40 group-hover:opacity-70 transition-all"></div>

        <img 
          src={Techi}
          alt="Tech illustration"
          className="w-64 sm:w-72 lg:w-[420px] rounded-3xl shadow-0xl border border-white/1 
                     transform group-hover:scale-105 transition-all duration-500"
        />
      </div>
    </div>

    {/* 📝 LEFT TEXT CONTENT */}
    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5 animate-fadeUp px-2">

      {/* NAME – NOW FULLY RESPONSIVE */}
     <h1 className="
  text-4xl sm:text-5xl md:text-5xl lg:text-7xl 
  font-extrabold 
  leading-[1.15]            /* line-height fix */
  mt-16 sm:mt-14 md:mt-16   /* niche adjust */
  mx-auto lg:mx-0
  hero-glow
">
  <span className="
    bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 
    bg-clip-text text-transparent
    block                /* important for proper spacing */
    pb-2                 /* little padding bottom for clean look */
  ">
    Aastha Rathore
  </span>
</h1>


      {/* Subtitle */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white/90">
        <span className="gradient-text">Computer Science & Engineering Student</span>
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-md mx-auto lg:mx-0 leading-relaxed">
        Motivated CSE student specializing in MERN development & AI-based innovative projects.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">

        <a 
          href={resume}
          download
          className="relative px-7 py-3 text-sm sm:text-base rounded-full font-semibold bg-white text-cyan-700
                     hover:bg-cyan-50 transition group overflow-hidden shadow-xl"
        >
          <span className="relative z-10 flex items-center gap-2 justify-center">
            <UserIcon className="h-5 w-5" /> Download Resume
          </span>
        </a>

        <button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="px-7 py-3 text-sm sm:text-base rounded-full font-semibold border border-white text-white 
                     hover:bg-white hover:text-cyan-700 transition shadow-xl"
        >
          <div className="flex items-center gap-2 justify-center">
            <EnvelopeIcon className="h-5 w-5" /> Contact Me
          </div>
        </button>
      </div>
    </div>
  </div>
</section>

);

// Section 2: About Me - Glassmorphism card
const About = () => {
  const aboutText = "A highly motivated and enthusiastic Computer Science & Engineering student passionate about building innovative solutions using modern technologies. Skilled in programming, web development, and applied AI. I aim to solve real-world problems through impactful engineering solutions.";
 
  return (
    <section
      id="about"
      className="py-28 bg-black relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative">

        {/* Title */}
        <h2
          className="
            text-4xl md:text-5xl font-extrabold text-center mb-16 
            bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 
            bg-clip-text text-transparent drop-shadow-lg
          "
        >
          <AcademicCapIcon className="h-10 w-10 inline-block mr-2" />
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-14">

          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative group">

              {/* Back Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 blur-2xl rounded-full opacity-70 group-hover:opacity-90 transition-all duration-500"></div>

              {/* Image */}
              <img
                src={aastha}
                alt="Profile"
                className="
                  w-60 h-60 rounded-3xl object-cover shadow-2xl 
                  border border-white/10 transition-all duration-500 
                  group-hover:scale-105 group-hover:rotate-1
                "
              />

              {/* Shine swipe */}
              <div
                className="
                  absolute inset-0 rounded-3xl bg-gradient-to-r 
                  from-transparent via-white/10 to-transparent 
                  opacity-0 group-hover:opacity-60 
                  translate-x-[-120%] group-hover:translate-x-[120%] 
                  transition-all duration-[1500ms] ease-out
                "
              ></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-2/3">

            {/* Card */}
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5">
              <div
                className="
                  bg-black/50 backdrop-blur-xl rounded-2xl p-8 md:p-10 
                  border border-white/10 shadow-2xl relative overflow-hidden
                "
              >
                {/* Subtle shine */}
                <div
                  className="
                    absolute inset-0 bg-gradient-to-r 
                    from-transparent via-white/10 to-transparent 
                    opacity-0 hover:opacity-70 transition-all duration-700
pointer-events-none "
                ></div>

                {/* Text */}
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {aboutText}
                </p>

     {/* Contact list */}
<div className="space-y-3 text-gray-200">

  <p className="flex items-center gap-3 hover:text-cyan-300 transition">
    📍 Bhopal, Madhya Pradesh
  </p>

  {/* Email */}
  <p
    className="flex items-center gap-3 hover:text-cyan-300 transition cursor-pointer"
    onClick={() => window.location.href = "mailto:aashtha643@gmail.com"}
  >
    ✉️ aashtha643@gmail.com
  </p>

  {/* LinkedIn */}
  <p
    className="flex items-center gap-3 hover:text-cyan-300 transition cursor-pointer"
    onClick={() => window.open("https://www.linkedin.com/in/Aastha-Rathore12", "_blank")}
  >
    💼 LinkedIn
  </p>

  {/* GitHub */}
  <p
    className="flex items-center gap-3 hover:text-cyan-300 transition cursor-pointer"
    onClick={() => window.open("https://github.com/Aastha348", "_blank")}
  >
    🐙 GitHub
  </p>
  {/* GFG */}
  <p
    className="flex items-center gap-3 hover:text-cyan-300 transition cursor-pointer"
    onClick={() => window.open("https://www.geeksforgeeks.org/profile/aashthjbpj", "_blank")}
  >
    👨‍💻 GFG
  </p>
  {/* Leetcode */}
  <p
    className="flex items-center gap-3 hover:text-cyan-300 transition cursor-pointer"
    onClick={() => window.open("https://leetcode.com/u/Rathoreaastha/", "_blank")}
  >
    🟧 Leetcode
  </p>

</div>


                {/* Small Divider */}
                <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 opacity-60 rounded-full"></div>

                {/* Mini Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <h3 className="text-2xl font-bold text-teal-300">3+</h3>
                    <p className="text-gray-400 text-sm">Projects</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-300">Fresher</h3>
                    <p className="text-gray-400 text-sm">Years Exp.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-300">5+</h3>
                    <p className="text-gray-400 text-sm">Skills</p>
                  </div>
                </div>

                {/* Resume Button */}
                

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>



  );
};

// Section 3: Education - Enhanced timeline with icons
const Education = () => {
  const items = [
    {
      title: "B.Tech CSE (2022–2026)",
      school: "SGI Sistec-E, Bhopal",
      cgpa: "CGPA: 7.76/10",
      year: "2026",
      icon: AcademicCapIcon
    },
    {
      title: "Higher Secondary (2022)",
      school: "MK Adharsh Kulas, Sehore",
      cgpa: "85%",
      year: "2022",
      icon: AcademicCapIcon
    },
    {
      title: "Secondary School (2020)",
      school: "Excellence School, Shajapur",
      cgpa: "80%",
      year: "2020",
      icon: AcademicCapIcon
    }
  ];

  return (
    <section id="education" className="py-24 bg-black relative overflow-hidden">

      {/* Soft Neon Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-teal-500/30 blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/30 blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-20">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20
                       bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-300
                       bg-clip-text text-transparent">
          <AcademicCapIcon className="h-12 w-12 inline-block mb-2" /> Education
        </h2>

        {/* HORIZONTAL TIMELINE */}
        <div className="relative">

          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[3px]
                          bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400
                          opacity-60 rounded-full transform -translate-y-1/2" />

          {/* TIMELINE ITEMS */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-4">

            {items.map((ed, i) => {
              const Icon = ed.icon;

              return (
                <div key={i} className="relative flex flex-col items-center group">

                  {/* Dot */}
                  <div className="w-8 h-8 rounded-full bg-cyan-400 
                                  shadow-[0_0_20px_cyan] border border-white/20"></div>

                  {/* Connecting line (mobile) */}
                  {i !== items.length - 1 && (
                    <div className="md:hidden w-[3px] h-10 bg-cyan-400/40"></div>
                  )}

                  {/* Card */}
                  <div className="mt-6 w-full md:w-72 bg-black/60 backdrop-blur-xl 
                                  border border-white/10 rounded-2xl p-6 shadow-lg
                                  hover:border-teal-400/40 hover:shadow-[0_0_25px_cyan]
                                  transition-all duration-300 hover:-translate-y-2">

                    {/* Year */}
                    <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full
                                     bg-teal-500/10 text-teal-300 border border-teal-400/20">
                      {ed.year}
                    </span>

                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-gray-900 border border-white/10 rounded-xl">
                        <Icon className="h-6 w-6 text-teal-300" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{ed.title}</h3>
                    </div>

                    {/* School */}
                    <p className="text-gray-300">{ed.school}</p>

                    {/* Score */}
                    <p className="text-teal-300 font-medium mt-1">{ed.cgpa}</p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

// Section 4: Skills - Progress bars for attractiveness
const Skills = () => {

  const skills = [
    { name: "C", level: 85, icon: "💻" },
    { name: "C++", level: 80, icon: "⚙️" },
    { name: "Python", level: 60, icon: "🐍" },
    { name: "HTML", level: 85, icon: "🌐" },
    { name: "CSS", level: 65, icon: "🌐" },
    { name: "JavaScript", level: 75, icon: "🌐" },
    { name: "MERN Stack", level: 70, icon: "🌐" },
    { name: "SQL", level: 75, icon: "🗄️" },
    { name: "Machine Learning", level: 50, icon: "🤖" }
  ];

  return (
    <section id="skills" className="py-28 bg-black relative overflow-hidden">

      {/* 🔥 Neon Blob BG  */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-500/30 blur-[180px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/30 blur-[180px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">

        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-16
                       bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-300
                       bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]">
          Skills
        </h2>

        {/* ⭐ Trending Grid Style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-black/40 border border-white/10 
                         rounded-2xl p-6 backdrop-blur-xl cursor-pointer
                         hover:border-teal-400/40 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]
                         transition-all duration-500 hover:-translate-y-2"
            >

              {/* Glow Aura */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br 
                              from-teal-300/10 via-cyan-300/10 to-purple-300/10 
                              opacity-0 group-hover:opacity-100 blur-xl transition"></div>

              {/* Content */}
              <div className="relative z-10 space-y-4">

                {/* Icon + Name */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-white group-hover:text-teal-300 transition">
                    {skill.name}
                  </h3>
                </div>

                {/* Percentage Row */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Proficiency</span>
                  <span className="text-teal-300 font-medium">{skill.level}%</span>
                </div>

                {/* Stylish Bar */}
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden relative">
                  {/* Moving shine */}
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)]
                                  bg-[length:200%_100%] animate-[shine_2s_linear_infinite]"></div>

                  {/* Actual bar */}
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 
                               rounded-full shadow-[0_0_10px_cyan] transition-all duration-[1500ms]"
                  ></div>
                </div>

                {/* ⭐ Glow Badge */}
                <div className="inline-block px-3 py-1 rounded-full text-xs 
                                bg-teal-500/10 text-teal-300 border border-teal-400/20
                                shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                  {skill.level >= 85 ? "Advanced" : skill.level >= 70 ? "Intermediate" : "Beginner"}
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Shine Animation */}
      <style>{`
        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

    </section>
  );
};


// Section 5: Projects - Enhanced cards with badges and links
const Projects = () => {

  const projects = [
    { 
      title: 'Ecommerce App',
      desc: 'A full-stack ecommerce platform with product browsing, JWT login, admin dashboard and Razorpay/Stripe payments.',
      tags: ['MERN Stack'],
      img: Ecommerce,
      link: 'https://github.com/yourname/ecommerce-app'
    },
    { 
      title: 'Study-helper',
      desc: 'AI powered study helper that improves student learning and allows teachers/guardians to monitor progress.',
      tags: ['ML + MERN'],
      img: Studyhelper,
      link: 'https://github.com/yourname/study-helper'
    },
    { 
      title: 'AI ChatBot',
      desc: 'NLP based AI chatbot with smart response engine, scalable backend and conversational intelligence.',
      tags: ['MERN + Python'],
      img: Chatbot,
      link: 'https://github.com/yourname/ai-chatbot'
    }
  ];

  return (
    <section id="projects" className="py-28 bg-black relative overflow-hidden">

      {/* ===== Background Neon Lights ===== */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-teal-500/30 blur-[170px] animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/30 blur-[170px] animate-pulse"></div>
      </div>

      {/* Floating Cyber Particles */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] bg-white/30 rounded-full animate-bounce"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20">

        {/* Title */}
        <h2 className="text-4xl md:text-4xl font-extrabold text-center mb-20
                       bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-300
                       bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.4)]">
          <FolderIcon className="h-10 w-10 inline-block mb-1" /> Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {projects.map((proj, index) => (
            <div
              key={index}
              className="fade-in-up group relative transition-all duration-700 cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >

              {/* Neon Glow Wrapper */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                              bg-gradient-to-br from-teal-400/10 via-cyan-400/10 to-purple-400/10
                              blur-2xl transition-all duration-700"></div>

              {/* Border */}
              <div className="relative p-[2px] rounded-3xl
                              bg-gradient-to-br from-white/10 to-white/5
                              group-hover:from-cyan-300/20 group-hover:to-teal-300/20
                              transition-all duration-700 shadow-xl">

                {/* Main Card */}
                <div className="rounded-3xl bg-black/60 backdrop-blur-xl overflow-hidden 
                                shadow-lg group-hover:shadow-[0_0_35px_rgba(0,255,255,0.4)]
                                transition-all duration-700 hover:-translate-y-3">

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={proj.img} alt={proj.title}
                      className="w-full h-52 object-cover transition-transform duration-[1300ms]
                                 group-hover:scale-[1.12]"
                    />

                    {/* Glossy Shine */}
                    <div className="absolute inset-0 bg-gradient-to-r 
                                    from-transparent via-white/10 to-transparent
                                    opacity-0 group-hover:opacity-40 
                                    translate-x-[-100%] group-hover:translate-x-[100%]
                                    transition duration-[1800ms] ease-out"></div>
                  </div>

                  {/* Content */}
                  <div className="p-7 space-y-4">

                    {/* Project Title */}
                    <h3 className="text-xl font-semibold text-white 
                                   group-hover:text-cyan-300 transition-all">
                      {proj.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {proj.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {proj.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm rounded-full text-teal-300 
                                     bg-teal-500/10 border border-teal-400/20 
                                     shadow-[0_0_10px_rgba(0,255,255,0.15)]
                                     hover:bg-teal-500/20 transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* GitHub link */}
                    <a 
                      href={proj.link}
                      target="_blank"
                      className="flex items-center gap-1 text-cyan-300 
                                 hover:text-teal-300 transition-all font-medium"
                    >
                      View on GitHub
                      <ArrowUpIcon className="h-4 w-4 rotate-45 
                                              group-hover:translate-x-1 transition-all" />
                    </a>

                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

// Section 6: Workshops & Certifications - Icon bullets\
const Workshops = () => {
  const [openImg, setOpenImg] = useState(null);



  {
  const items = [
    
    { 
    text: 'Partucipated in Hacathon – Bansal Institute of Science & Technology', 
    icon: SparklesIcon,
    certificate: Bansal
  },
     { 
    text: 'Participated in Hacathone – VIT University', 
    icon: CodeBracketIcon, 
    certificate: Vit1
  },
  { 
    text: '2-Day DSA Workshop – MANIT Bhopal', 
    icon: AcademicCapIcon, 
    certificate: Manit 
  },
  { 
    text: 'Participated in SIH 2024, LakeCity Hackathon, VIT Hackathon, Bansal Hackathon',
    icon: TrophyIcon,
    certificate: Lackcity
  },
   { 
    text: 'Problem Solving (Basic) - HackerRank',
    icon: TrophyIcon,
    certificate: Problem
  },
  { 
    text: 'AI Bhuild Lab - H2S',
    icon: TrophyIcon,
    certificate: AIBuild
  }
  
  ];
  return (
    <section id="workshops" className="py-20 bg-black relative overflow-hidden">

  {/* ===== Background Neon Glows ===== */}
  <div className="absolute inset-0 opacity-20 md:opacity-30 pointer-events-none">
    <div className="absolute top-10 left-1/4 w-52 h-52 md:w-72 md:h-72 bg-teal-500/30 blur-[140px] animate-pulse"></div>
    <div className="absolute bottom-10 right-1/4 w-52 h-52 md:w-72 md:h-72 bg-purple-500/30 blur-[140px] animate-pulse"></div>
  </div>

  {/* Floating Particles (lighter on mobile) */}
  <div className="absolute inset-0 pointer-events-none hidden md:block">
    {[...Array(18)].map((_, i) => (
      <div
        key={i}
        className="absolute w-[3px] h-[3px] bg-white/40 rounded-full animate-bounce"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${2 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>

  <div className="container mx-auto px-4 relative z-20">

    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 md:mb-14
                   bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-300
                   bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.45)]">
      <TrophyIcon className="h-8 w-8 md:h-10 md:w-10 inline mb-2" /> Workshops & Certifications
    </h2>

    {/* List container */}
    <ul className="max-w-2xl md:max-w-3xl mx-auto space-y-5 md:space-y-8">

      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <li
            key={index}
            className="group relative flex items-start md:items-center justify-between
                       gap-4 p-4 md:p-6 rounded-xl
                       bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg
                       hover:bg-black/60 hover:border-teal-400/40
                       hover:shadow-[0_0_25px_rgba(0,255,255,0.25)]
                       transition-all duration-500 cursor-pointer"
          >

            {/* Left side info */}
            <div className="flex items-start md:items-center gap-3 md:gap-4">

              {/* Icon with soft aura */}
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-teal-400/20 blur-xl
                                 opacity-0 group-hover:opacity-70 transition"></span>

                <Icon className="h-6 w-6 md:h-7 md:w-7 text-teal-400 z-10 relative 
                                 group-hover:scale-110 transition" />
              </div>

              <div>
                <p className="text-gray-300 text-base md:text-lg leading-snug md:leading-normal
                              group-hover:text-teal-200 transition">
                  {item.text}
                </p>
                {/* Underline only on desktop */}
                <div className="hidden md:block w-0 group-hover:w-full h-[2px] mt-1 bg-teal-300 transition-all"></div>
              </div>

            </div>

            {/* View Button — mobile friendly size */}
            <button
              onClick={() => setOpenImg(item.certificate)}
              className="px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium rounded-lg
                         bg-gradient-to-r from-teal-500/20 to-cyan-500/20
                         border border-teal-400/40 text-teal-300
                         hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500
                         hover:text-white shadow-[0_0_12px_rgba(0,255,255,0.2)]
                         transition overflow-hidden"
            >
              <span className="relative z-10">View</span>

              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
                               opacity-0 hover:opacity-60 translate-x-[-120%] hover:translate-x-[120%]
                               transition-all duration-[1200ms]"></span>
            </button>

          </li>
        );
      })}

    </ul>
  </div>

  {/* ===== Certificate Modal ===== */}
  {openImg && (
    <div
      onClick={() => setOpenImg(null)}
      className="fixed inset-0 flex justify-center items-center bg-black/90 backdrop-blur-xl 
                 z-50 cursor-pointer animate-fadeIn px-3"
    >
      <img
        src={openImg}
        alt="Certificate"
        className="max-w-full md:max-w-[90%] max-h-[70vh] md:max-h-[85vh]
                   rounded-xl border border-teal-400/40 shadow-[0_0_30px_rgba(0,255,255,0.4)]
                   animate-zoomIn"
      />
    </div>
  )}

  {/* Animations */}
  <style>{`
    @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
    .animate-fadeIn { animation: fadeIn .35s ease-out forwards; }

    @keyframes zoomIn {
      from { transform: scale(.85); opacity: .4 }
      to { transform: scale(1); opacity: 1 }
    }
    .animate-zoomIn { animation: zoomIn .4s ease-out forwards; }
  `}</style>

</section>

  );
}};

// Section 7: Achievements / Activities - Badge style
const Achievements = () => {

  const items = [
    'Class Representative & Student Activity Council (2023–24)',
    'Winner – Interdepartmental Garba Competition 2023',
    'Winner - RampWalk Compitition 2025'
  ];

  // ADD YOUR CERTIFICATE IMAGES HERE (same order as items)
  //const certificates = [
  //  '/Photos/CR.jpeg', 
  //  '/certificates/cert2.jpg'
 // ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="achievements" className="py-28 bg-black relative overflow-hidden">

      {/* ======= Neon Background Glow ======= */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-16 left-1/4 w-80 h-80 bg-teal-500/20 blur-[170px]"></div>
        <div className="absolute bottom-16 right-1/4 w-80 h-80 bg-purple-500/20 blur-[170px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">

        {/* Small Title */}
        <p className="text-center text-gray-400 text-sm mb-3 tracking-widest uppercase">
          Verified Achievements
        </p>

        {/* Main Title */}
        <h2 className="text-4xl font-extrabold text-center mb-16
                       bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-300
                       bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.45)]">
          <TrophyIcon className="h-10 w-10 inline-block mb-2" /> Achievements / Activities
        </h2>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(certificates[index])}
              className="group relative fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >

              {/* Outer hover glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br 
                              from-teal-300/20 via-cyan-300/10 to-purple-300/10
                              opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>

              {/* Border container */}
              <div className="relative p-[2px] rounded-2xl
                              bg-gradient-to-br from-teal-400/20 via-cyan-400/10 to-blue-400/20
                              group-hover:from-teal-300/30 group-hover:to-cyan-300/30
                              transition-all duration-700">

                {/* Main Card */}
                <div className="bg-black/70 backdrop-blur-xl p-8 rounded-2xl
                                border border-white/10 shadow-lg
                                group-hover:-translate-y-3 group-hover:shadow-[0_0_35px_rgba(0,255,255,0.4)]
                                transition-all duration-700 relative">

                  {/* Trophy Icon */}
                  <div className="relative w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center
                                  bg-black/60 border border-teal-400/20 shadow-inner">

                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-xl opacity-70"></div>

                    <TrophyIcon className="h-10 w-10 text-teal-300 animate-pulse" />
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 text-center text-lg font-medium leading-relaxed
                                group-hover:text-teal-200 transition duration-500">
                    {item}
                  </p>

                  {/* Shine line */}
                  <div className="mt-6 w-24 h-[2px] mx-auto rounded-full 
                                  bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-300
                                  opacity-80 group-hover:opacity-100 transition"></div>

                  {/* CLICK TEXT */}
                  {/*<p className="text-xs text-teal-400 mt-3 text-center opacity-70 group-hover:opacity-100">
                   Click to view certificate
                  </p>*/}

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ===================== CERTIFICATE MODAL ======================= */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl flex justify-center items-center z-50 
                     animate-fadeIn cursor-pointer"
        >
          <img 
            src={CR} 
            alt="Certificate"
            className="max-w-[90%] max-h-[80vh] rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.4)] 
                       border border-teal-400/30 animate-scaleUp"
          />
        </div>
      )}

      {/* Modal Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes scaleUp {
          from { transform: scale(0.85) }
          to { transform: scale(1) }
        }
        .animate-scaleUp {
          animation: scaleUp 0.35s ease-out forwards;
        }
      `}</style>

    </section>
  );
};

// Section 8: Strengths - Chip badges with icons
const Strengths = () => {
  const items = [
    { name: 'Problem Solving & Analytical Thinking', icon: SparklesIcon },
    { name: 'Adaptability & Leadership', icon: HeartIcon },
    { name: 'Punctuality', icon: CodeBracketIcon },
    { name: 'Quick Learning', icon: RocketLaunchIcon }
  ];

  return (
    <section id="strengths" className="py-28 bg-black relative overflow-hidden">

      {/* ======= Neon Background Glow ======= */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-teal-500/25 blur-[180px]"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-purple-500/25 blur-[180px]"></div>
      </div>

      {/* Floating Cyber Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] bg-white/40 rounded-full animate-bounce"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20">

        {/* ⭐ Mini Tagline */}
       
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-6 
                       bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-400
                       bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.45)]">
          <SparklesIcon className="h-10 w-10 inline-block mb-2" /> Strengths
        </h2>

        {/* Supporting Text */}
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-14 text-sm">
          These qualities help me stay focused, consistent, and continuously improving in my work.
        </p>

        {/* Strength Chips */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  relative px-8 py-4 rounded-full fade-in-up
                  backdrop-blur-xl border border-white/10 shadow-md
                  bg-black/50 text-gray-200 font-medium tracking-wide
                  group hover:bg-black/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]
                  hover:border-teal-400/40 hover:scale-105 cursor-default
                  transition-all duration-500
                "
                style={{ animationDelay: `${index * 0.12}s` }}
              >

                {/* Neon glow behind chip */}
                <span className="absolute inset-0 rounded-full scale-75
                                 bg-teal-400/10 blur-xl opacity-0 group-hover:opacity-70
                                 transition-all duration-700"></span>

                {/* Shine effect */}
                <span className="absolute inset-0 rounded-full 
                                 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                 opacity-0 group-hover:opacity-40
                                 translate-x-[-100%] group-hover:translate-x-[100%]
                                 transition-all duration-[1400ms] pointer-events-none"></span>

                {/* Content */}
                <div className="relative flex items-center gap-3">
                  <Icon className="h-5 w-5 text-teal-400 group-hover:text-teal-300 transition" />
                  <span>{item.name}</span>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};


// Section 9: Hobbies - Icon cards with hover glow
const Hobbies = () => {
  const items = [
    { name: 'Drawing', icon: <PencilIcon className="h-12 w-12 text-teal-400" /> },
    { name: 'Watching Informative Videos', icon: <VideoCameraIcon className="h-12 w-12 text-teal-400" /> },
    { name: 'Exploring New Technologies', icon: <RocketLaunchIcon className="h-12 w-12 text-teal-400" /> },
    // { name: 'Cooking', icon: <FireIcon className="h-12 w-12 text-teal-400" /> }
  ];

  return (
    <section id="hobbies" className="py-28 bg-black relative overflow-hidden">

      {/* ======= Neon Background Glow ======= */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-teal-500/20 blur-[180px]"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-purple-500/20 blur-[180px]"></div>
      </div>

      {/* Floating Cyber Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] bg-white/40 rounded-full animate-bounce"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20">

        {/* Mini Top Text */}
        <p className="text-center text-gray-400 text-sm mb-3 tracking-widest uppercase">
          My Interests
        </p>

        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-6
                       bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-400
                       bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(0,255,255,0.45)]">
          <HeartIcon className="h-10 w-10 inline-block mb-2" /> Hobbies
        </h2>

        {/* Supporting subtext */}
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-sm">
          Activities that help me stay creative, curious, and continuously learning.
        </p>

        {/* Hobby Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">

          {items.map((item, index) => (
            <div
              key={index}
              className="relative group fade-in-up cursor-pointer 
                         transition-all duration-700"
              style={{ animationDelay: `${index * 0.15}s` }}
            >

              {/* Hover neon ambient glow */}
              <div className="absolute inset-0 rounded-2xl 
                              bg-gradient-to-br from-teal-400/10 via-cyan-400/10 to-purple-400/10
                              opacity-0 group-hover:opacity-100 blur-2xl 
                              transition-all duration-700"></div>

              {/* Cyber gradient border */}
              <div className="relative p-[2px] rounded-2xl
                              bg-gradient-to-br from-teal-500/20 via-cyan-400/20 to-purple-500/20 
                              group-hover:from-teal-300/30 group-hover:via-cyan-300/30 group-hover:to-purple-300/30
                              transition-all duration-700">

                {/* Main card */}
                <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-8 
                                border border-white/10 shadow-lg 
                                group-hover:shadow-[0_0_35px_rgba(0,255,255,0.45)]
                                group-hover:-translate-y-3
                                transition-all duration-500 text-center">

                  {/* Icon Circle */}
                  <div className="relative w-20 h-20 mx-auto mb-6 
                                  rounded-full bg-black/60 border border-teal-400/20
                                  flex items-center justify-center shadow-inner shadow-black/30
                                  group-hover:bg-black/70 transition-all duration-500">

                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full 
                                    bg-teal-400/10 blur-xl opacity-70"></div>

                    {item.icon}
                  </div>

                  {/* Hobby Title */}
                  <p className="text-gray-200 text-lg font-medium 
                                group-hover:text-teal-200 transition duration-300">
                    {item.name}
                  </p>

                  {/* Tiny description */}
                  <p className="text-gray-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition">
                    Click to explore more
                  </p>

                  {/* Shine Animation */}
                  <span className="absolute inset-0 rounded-2xl 
                                   bg-gradient-to-r from-transparent via-white/10 to-transparent
                                   opacity-0 group-hover:opacity-40 
                                   translate-x-[-100%] group-hover:translate-x-[100%]
                                   transition-all duration-[1500ms] pointer-events-none"></span>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};


// Section 10: Contact Form - Enhanced with icons
const Contact = ({ handleSubmit, formData, handleFormChange }) => (
 <section id="contact" className="py-24 bg-black relative overflow-hidden">

  {/* ======= Animated BG Neon Waves ======= */}
  <div className="absolute inset-0 opacity-30 pointer-events-none">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/25 blur-[200px] animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/25 blur-[200px] animate-pulse"></div>
  </div>

  {/* ======= Floating Particles ======= */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(16)].map((_, i) => (
      <div 
        key={i}
        className="absolute w-[3px] h-[3px] bg-white/40 rounded-full animate-bounce"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 3}s`,
        }}
      />
    ))}
  </div>

  <div className="container mx-auto px-5 relative z-20">

    {/* ⭐ Small Intro Text Above Title */}
    <p className="text-center text-gray-400 text-sm mb-3 tracking-widest uppercase">
      Let's Connect
    </p>

    {/* ======= TITLE ======= */}
    <h2 className="text-4xl font-extrabold text-center mb-3
                   bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-400
                   bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(0,255,255,0.45)]">
      <EnvelopeIcon className="h-9 w-9 inline mb-2" /> Contact Me
    </h2>

    {/* ⭐ Supporting Line */}
    <p className="text-center text-gray-400 max-w-xl mx-auto mb-12 text-sm">
      I respond to messages quickly. Whether it's work, collaboration, or just a friendly hello — feel free to reach out.
    </p>

    {/* ======= MAIN GRID ======= */}
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

      {/* ================= CONTACT FORM ================= */}
      <div className="fade-in-up">

        {/* Neon Border */}
        <div className="p-[2px] rounded-2xl bg-gradient-to-r from-teal-500/40 via-purple-500/40 to-blue-500/40">

          <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10
                          shadow-[0_0_25px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]
                          transition-all duration-500">

            {/* ⭐ Mini Highlight Strip */}
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2 w-2 bg-teal-400 rounded-full animate-ping"></span>
              <p className="text-gray-300 text-sm tracking-wide">Send me a direct message</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-black/80 border border-gray-700 
                           focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 
                           text-white transition placeholder-gray-500"
              />

              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-black/80 border border-gray-700 
                           focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 
                           text-white transition placeholder-gray-500"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-4 rounded-xl bg-black/80 border border-gray-700
                           focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 
                           text-white resize-none transition placeholder-gray-500"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold relative overflow-hidden
                           bg-gradient-to-r from-teal-500 to-cyan-500 text-white
                           hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]
                           transition-all">
                <div className="flex items-center justify-center gap-2">
                  <PaperAirplaneIcon className="h-5 w-5" /> Send Message
                </div>

                {/* Shine */}
                <span className="absolute inset-0 bg-gradient-to-r 
                                 from-transparent via-white/30 to-transparent
                                 opacity-0 hover:opacity-80
                                 translate-x-[-120%] hover:translate-x-[120%]
                                 transition-all duration-[1100ms]"></span>
              </button>

            </form>

          </div>
        </div>

      </div>

      {/* ================= SOCIAL BLOCK ================= */}
      <div className="fade-in-up delay-1">

        <div className="p-1 rounded-2xl bg-gradient-to-br from-teal-500/20 via-purple-500/20 to-pink-500/20 
                        backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,255,0.25)]">

          <div className="bg-black/70 rounded-2xl p-6 md:p-8 flex flex-col items-center gap-8">

            {/* Heading */}
            <h3 className="text-white text-xl font-bold tracking-wide
                           bg-gradient-to-r from-teal-200 to-purple-300 bg-clip-text text-transparent">
              Social Profiles
            </h3>

            {/* ⭐ Mini Text Block */}
            <p className="text-center text-gray-400 text-sm max-w-xs leading-relaxed">
              Follow me on platforms where I share work, updates, and professional insights.
            </p>

            {/* ======= ICON ROW ======= */}
            <div className="flex items-center justify-center gap-5 md:gap-7">

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/Aastha-Rathore12"
                target="_blank"
                className="group flex flex-col items-center gap-1 p-3 md:p-4 rounded-xl
                           bg-white/5 border border-white/10 backdrop-blur-xl
                           hover:bg-teal-500/10 hover:border-teal-400/40
                           transition-all hover:-translate-y-1"
              >
                <span className="text-2xl md:text-3xl group-hover:scale-125 transition-transform">💼</span>
                <p className="text-gray-300 text-xs md:text-sm group-hover:text-teal-300">LinkedIn</p>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/Aastha348"
                target="_blank"
                className="group flex flex-col items-center gap-1 p-3 md:p-4 rounded-xl
                           bg-white/5 border border-white/10 backdrop-blur-xl
                           hover:bg-purple-500/10 hover:border-purple-400/40
                           transition-all hover:-translate-y-1"
              >
                <span className="text-2xl md:text-3xl group-hover:scale-125 transition-transform">🐙</span>
                <p className="text-gray-300 text-xs md:text-sm group-hover:text-purple-300">GitHub</p>
              </a>

              {/* Email */}
              <a 
                href="mailto:aashtha643@gmail.com"
                className="group flex flex-col items-center gap-1 p-3 md:p-4 rounded-xl
                           bg-white/5 border border-white/10 backdrop-blur-xl
                           hover:bg-pink-500/10 hover:border-pink-400/40
                           transition-all hover:-translate-y-1"
              >
                <span className="text-2xl md:text-3xl group-hover:scale-125 transition-transform">✉️</span>
                <p className="text-gray-300 text-xs md:text-sm group-hover:text-pink-300">Email</p>
              </a>

            </div>

            {/* ⭐ Extra Mini Information Block */}
            {/* <div className="mt-4 text-center">
              <p className="text-gray-400 text-xs">
                Active Hours: <span className="text-teal-400">9 AM – 10 PM IST</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Avg Reply Time: <span className="text-purple-300">1–3 hours</span>
              </p>
            </div> */}

          </div>
        </div>

      </div>

    </div>

    {/* Footer */}
    <footer className="mt-16 text-center text-gray-600">
      <p className="text-sm">&copy; 2025 Aastha Rathore.</p>
    </footer>

  </div>
</section>


);

export default App;