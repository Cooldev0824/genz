import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Mail, 
  Download, 
  Smartphone, 
  Layers, 
  Code2, 
  Database, 
  Server,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  Brain,
  Cloud
} from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Assets
import heroBg from "@assets/generated_images/abstract_tech_background_for_hero_section.png";
import avatarImg from "@assets/generated_images/3d_developer_avatar.png";
import project1 from "@assets/generated_images/social_media_app_mockup.png";
import project3 from "@assets/generated_images/healthcare_app_mockup.png";
import MusicAppPlaceholder from "@/components/MusicAppPlaceholder";
import CleanupPlaceholder from "@/components/project-placeholders/CleanupPlaceholder";
import MonicaPlaceholder from "@/components/project-placeholders/MonicaPlaceholder";
import MindfitMamaPlaceholder from "@/components/project-placeholders/MindfitMamaPlaceholder";
import HealthBotPlaceholder from "@/components/project-placeholders/HealthBotPlaceholder";
import CalmGutPlaceholder from "@/components/project-placeholders/CalmGutPlaceholder";
import AnatoMovePlaceholder from "@/components/project-placeholders/AnatoMovePlaceholder";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const SKILLS = [
  { category: "AI & Machine Learning", icon: Brain, items: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face", "Computer Vision", "NLP", "Deep Learning", "Neural Networks", "RAG", "GPT Models"] },
  { category: "Frontend", icon: Code2, items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"] },
  { category: "Backend", icon: Server, items: ["Node.js", "Express.js", "Django", "Laravel", "Ruby on Rails", "Golang", "REST API", "GraphQL", "WebSockets"] },
  { category: "Mobile", icon: Smartphone, items: ["React Native", "iOS", "Swift", "Android", "Kotlin", "Cross-platform"] },
  { category: "Database & Cloud", icon: Cloud, items: ["PostgreSQL", "MySQL", "MongoDB", "AWS", "Cloud Functions", "CI/CD"] },
  { category: "Tools & Other", icon: Layers, items: ["Git", "GitHub", "GitLab", "Docker", "Stripe", "PayPal", "Project Management"] },
];

const EXPERIENCE = [
  {
    company: "CodeNest Technologies",
    role: "AI & Mobile Engineer",
    period: "Dec 2023 — Nov 2025",
    location: "Seattle, WA",
    description: [
      "Led development of high-performance Flutter applications serving 500K+ users across iOS and Android platforms.",
      "Architected and implemented a comprehensive widget library with 50+ reusable components, reducing development time by 18% and ensuring consistent UI/UX across all products.",
      "Integrated Stripe and PayPal payment gateways, processing $2M+ in transactions monthly with 99.9% success rate.",
      "Built real-time messaging system using WebSockets and Firebase, supporting 10K+ concurrent users with sub-200ms latency.",
      "Optimized app performance through code splitting and lazy loading, achieving 40% reduction in initial load time.",
      "Collaborated with cross-functional teams using Agile methodologies, delivering 12+ major features on schedule.",
      "Implemented comprehensive testing strategy with 85% code coverage, reducing production bugs by 35%."
    ]
  },
  {
    company: "BrightWave Digital",
    role: "Senior Mobile Developer",
    period: "Dec 2021 — Feb 2023",
    location: "Austin, TX",
    description: [
      "Developed and maintained 5+ React Native applications for iOS and Android, serving 200K+ active users.",
      "Optimized app startup performance by implementing code splitting, image optimization, and lazy loading techniques, resulting in 40% faster launch times.",
      "Integrated OAuth 2.0 and JWT-based authentication systems with biometric security, achieving zero security breaches.",
      "Implemented push notification infrastructure using Firebase Cloud Messaging and OneSignal, reaching 95% delivery rate.",
      "Reduced app crash rate from 2.1% to 0.5% through comprehensive error handling, crash reporting with Sentry, and rigorous testing.",
      "Built RESTful API integrations with GraphQL endpoints, improving data fetching efficiency by 30%.",
      "Participated in code reviews and mentored junior developers, establishing best practices and coding standards."
    ]
  },
  {
    company: "SoftLynk Innovations",
    role: "Mobile Developer",
    period: "May 2019 — Nov 2021",
    location: "Denver, CO",
    description: [
      "Developed native Android applications using Kotlin and Java, focusing on performance optimization and user experience.",
      "Designed and implemented responsive UI components following Material Design guidelines, resulting in 28% increase in user retention and 4.5-star average app rating.",
      "Built robust offline-first architecture using Room database and WorkManager, enabling seamless functionality without network connectivity.",
      "Implemented efficient data synchronization mechanisms with backend APIs, reducing data usage by 25% while maintaining real-time updates.",
      "Created custom animations and transitions using MotionLayout, enhancing user engagement metrics by 35%.",
      "Integrated third-party SDKs including Google Maps, Firebase Analytics, and Crashlytics.",
      "Collaborated with UI/UX designers to translate mockups into pixel-perfect implementations.",
      "Wrote unit and integration tests achieving 75% code coverage, ensuring app stability and reliability."
    ]
  }
];

export const PROJECTS = [
  {
    id: "connect-social",
    title: "Connect Social",
    type: "Social Media App",
    image: project1,
    tech: ["React Native", "Firebase", "Redux"],
    description: "A real-time social platform featuring stories, messaging, and feed algorithms.",
    appStoreLink: "https://apps.apple.com/ru/app/mindful-dating/id6474184435?l=en-GB",
    longDescription: "Mindwibe (formerly Mindful Dating) is a thoughtful dating and personal growth app designed for individuals committed to personal development. The app fosters meaningful connections built on trust, self-awareness, and shared values. It features access to certified relationship coaches, educational resources including articles, podcasts, and videos, and a smart matching algorithm that connects users based on values and interests.",
    relation: [
      "Built and shipped core mobile features focused on onboarding, matching, and trust-first user experience.",
      "Implemented real-time messaging and notifications with scalable, maintainable architecture.",
      "Improved UX polish and performance (image loading, list virtualization, and smooth animations)."
    ]
  },
  {
    id: "frp-spins",
    title: "FRP SPINS",
    type: "Music App",
    image: null, // Will use placeholder component
    imageComponent: MusicAppPlaceholder,
    tech: ["iOS", "Swift", "Core Audio"],
    description: "An innovative music application featuring spins and audio experiences.",
    appStoreLink: "https://apps.apple.com/us/app/frp-spins/id1360454793",
    longDescription: "FRP SPINS is a cutting-edge music application that delivers unique audio experiences and spins. Built with native iOS technologies, the app provides users with an immersive music experience featuring innovative spin mechanics and high-quality audio processing.",
    relation: [
      "Designed the interaction model and UI flows for a fast, gesture-driven music experience.",
      "Focused on performance (smooth scrolling, low-latency UI) and polished motion/animations.",
      "Hardened the app for production with crash fixes, edge-case handling, and QA iterations."
    ]
  },
  {
    id: "fitify",
    title: "Fitify",
    type: "Fitness & Workout App",
    image: project3,
    tech: ["Android", "Kotlin", "Firebase"],
    description: "Comprehensive fitness and workout app with bodyweight exercises and training programs.",
    appStoreLink: "https://play.google.com/store/apps/details?id=com.fitifyworkouts.bodyweight.workoutapp&hl=en_US",
    longDescription: "Fitify is a comprehensive fitness application offering bodyweight workouts and training programs. The app provides users with structured workout routines, exercise tracking, and progress monitoring. Built for Android, it helps users achieve their fitness goals through guided workouts and personalized training plans.",
    relation: [
      "Delivered workout flows and tracking UX with clean state management and responsive UI.",
      "Improved reliability with analytics, crash monitoring, and defensive network handling.",
      "Optimized workout screens for speed and low distraction."
    ]
  },
  {
    id: "cleanup-phone-storage-cleaner",
    title: "Cleanup: Phone Storage Cleaner",
    type: "Utilities App",
    image: "https://play-lh.googleusercontent.com/y0nZUFKhmz2j5tb9_fxo9ARTfl3NeOqojCjQUtq2zqcTrVgj5FPGCs9vtndtm2fZf_lbxyACSHyf6XaZode1XII=w2560-h1440-rw",
    imageComponent: CleanupPlaceholder,
    tech: ["Android", "Kotlin", "MediaStore", "Performance"],
    description: "A phone cleaner that helps users reclaim storage by removing duplicates and compressing videos.",
    appStoreLink: "https://play.google.com/store/apps/details?id=com.storage.androidcleaner",
    longDescription: "Cleanup helps users free up space by identifying duplicate/similar photos, organizing media, and compressing large videos—making device storage management simple and fast.",
    relation: [
      "Built gallery cleanup flows (scan → review → confirm) with a swipe-first UX.",
      "Worked on performance for large media libraries (paging, caching, and efficient queries).",
      "Improved stability and user trust with safe-delete confirmations and clear previews."
    ]
  },
  {
    id: "monica-ai-ultimate-assist",
    title: "Monica AI: Ultimate AI Assist",
    type: "AI Productivity App",
    image: "https://play-lh.googleusercontent.com/3ZL_J1ia5CX5TKEnNQ9cd7RO_kN4y4fGXVbiF0nS4df95h1h5DA469ROjCWI5kTmSN4=w2560-h1440-rw",
    imageComponent: MonicaPlaceholder,
    tech: ["Android", "Kotlin", "LLM APIs", "UX"],
    description: "An AI companion for chat, writing, search, translation, and productivity on the go.",
    appStoreLink: "https://play.google.com/store/apps/details?id=im.monica.app.monica",
    longDescription: "Monica AI is an all-in-one assistant experience that blends chat, writing tools, and quick actions into a clean, mobile-first interface designed for speed and everyday use.",
    relation: [
      "Implemented chat UX patterns (streaming responses, message states, and error recovery).",
      "Built reusable UI components for prompts, history, and tool cards to ship faster.",
      "Focused on responsiveness, offline-safe states, and polish."
    ]
  },
  {
    id: "mindfit-mama",
    title: "Mindfit Mama",
    type: "Wellness App",
    image: "https://play-lh.googleusercontent.com/MtH58Tgj0wDFjLevK9Ri2k2wEgy3oTIpwBZRzkxUPHkM7mqZDUpevDmk_oKeeYZ--VSETlCHyDw6sr4Zws8D=w2560-h1440-rw",
    imageComponent: MindfitMamaPlaceholder,
    tech: ["Android", "Kotlin", "Notifications", "Content"],
    description: "A wellness companion focused on mindfulness, movement, and support for moms.",
    appStoreLink: "https://play.google.com/store/apps/details?id=breakthroughapps.com.natalieunity",
    longDescription: "Mindfit Mama supports daily routines with guided content, reminders, and a calm, friendly interface designed to reduce friction and encourage consistency.",
    relation: [
      "Built content browsing and session flows with clean navigation and state handling.",
      "Added reminders and habit-friendly UX patterns to increase retention.",
      "Improved accessibility and readability for a calmer, more inclusive experience."
    ]
  },
  {
    id: "healthbot",
    title: "HealthBot",
    type: "Healthcare Assistant",
    image: "https://play-lh.googleusercontent.com/uJGdXCIgHtNK7ustp7CW_jD9KYA9Xlv00so09swxmW9neafF-F_O2SR7uPHh02EaM1A=w2560-h1440-rw",
    imageComponent: HealthBotPlaceholder,
    tech: ["Android", "Kotlin", "Secure Storage", "UX"],
    description: "A supportive health assistant experience with guided flows and clear recommendations.",
    appStoreLink: "https://play.google.com/store/apps/details?id=com.cogniser.healthBot",
    longDescription: "HealthBot is a guided health companion designed to keep interactions simple, empathetic, and easy to follow—prioritizing clarity, privacy, and safe user experience.",
    relation: [
      "Designed guided flows that reduce user confusion and promote safe next steps.",
      "Implemented robust form validation and resilient API handling for reliability.",
      "Prioritized privacy-friendly UX and secure local storage patterns where needed."
    ]
  },
  {
    id: "the-calm-gut",
    title: "The Calm Gut: IBS Hypnotherapy",
    type: "Health & Wellness",
    image: "https://play-lh.googleusercontent.com/LcdwGwwUXcR4knltpW7fGQN-oaqzST26ABAbjWatGlfUPNKWyL7VQcdm4kN9bXEoYg=w2560-h1440-rw",
    imageComponent: CalmGutPlaceholder,
    tech: ["Android", "Kotlin", "Audio", "Offline UX"],
    description: "A calming hypnotherapy experience designed to support IBS symptom management.",
    appStoreLink: "https://play.google.com/store/apps/details?id=breakthroughapps.com.jaynecorner",
    longDescription: "The Calm Gut delivers a soothing, structured hypnotherapy journey with sessions and progress tracking—built to feel calm, consistent, and supportive.",
    relation: [
      "Built session playback UX with clear progress states and interruption handling.",
      "Improved offline-first experience so sessions remain accessible without network.",
      "Polished UI to keep attention on content with minimal distractions."
    ]
  },
  {
    id: "anatomove",
    title: "AnatoMove by Celest Pereira",
    type: "Fitness & Movement",
    image: "https://play-lh.googleusercontent.com/XnXH8_L0tsthteTAGXyH4vpW4lzyBHReAgAn5mUgsVhUhUb7UpcBpGnC_z9TYnR0uPpu=w2560-h1440-rw",
    imageComponent: AnatoMovePlaceholder,
    tech: ["Android", "Kotlin", "UI/UX", "Content"],
    description: "A movement and anatomy learning experience with structured content and guidance.",
    appStoreLink: "https://play.google.com/store/apps/details?id=breakthroughapps.com.celestperieira",
    longDescription: "AnatoMove blends movement guidance with anatomy understanding, presenting structured lessons and routines in a clean, modern mobile experience.",
    relation: [
      "Implemented content-first screens and structured modules for easy learning.",
      "Built reusable UI patterns for lessons, routines, and progress states.",
      "Optimized layouts for readability and a premium, modern look."
    ]
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [brokenProjectImages, setBrokenProjectImages] = useState<Record<string, true>>({});

  const isProjectImageBroken = useMemo(() => {
    return (id: string) => Boolean(brokenProjectImages[id]);
  }, [brokenProjectImages]);

  const markProjectImageBroken = (id: string) => {
    setBrokenProjectImages((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center justify-between px-6 md:px-12 backdrop-blur-md bg-background/50 border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          vp<span className="text-primary">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <button 
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a href="/resume.pdf" download="Vraj_Patel_Resume.pdf">
            <Button variant="outline" size="sm" className="ml-4 border-primary/20 hover:bg-primary/10 hover:text-primary transition-all hover:scale-105">
              Resume <Download className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background/95 backdrop-blur-xl border-l-white/10 w-[300px]">
              <div className="flex flex-col gap-6 mt-12">
                {NAV_LINKS.map((link) => (
                  <button 
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-lg font-medium text-left hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <a href="/resume.pdf" download="Vraj_Patel_Resume.pdf" className="w-full">
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                    Download Resume <Download className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 scale-110 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-primary bg-[length:200%_auto] animate-text-shimmer">
                Mobile Future
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              I'm Vraj Patel, a Senior Mobile Developer with 7+ years of experience crafting high-performance iOS, Android, and Cross-Platform applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 h-12 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300" onClick={() => scrollToSection("#projects")}>
                View Work
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 h-12 px-8 rounded-full" onClick={() => scrollToSection("#contact")}>
                Contact Me
              </Button>
            </div>

          </motion.div>

          {/* Hero Visual - using a glass card effect with the avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center relative perspective-1000"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors duration-700" />
              <div className="relative z-10 glass-card rounded-[2rem] p-3 rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out-back overflow-hidden">
                <img 
                  src={avatarImg} 
                  alt="Vraj Patel" 
                  className="w-full h-full object-cover rounded-[1.5rem] scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                
                {/* Floating Badge 1 */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -left-8 top-12 glass px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl border border-white/10 bg-background/60 backdrop-blur-xl"
                >
                  <div className="bg-blue-500/20 p-2.5 rounded-xl">
                    <Smartphone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Experience</span>
                    <span className="font-bold text-sm">7+ Years</span>
                  </div>
                </motion.div>

                {/* Floating Badge 2 */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -right-6 bottom-12 glass px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl border border-white/10 bg-background/60 backdrop-blur-xl"
                >
                  <div className="bg-green-500/20 p-2.5 rounded-xl">
                    <Code2 className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Stack</span>
                    <span className="font-bold text-sm">Full Native</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-secondary/20 skew-y-3 transform origin-right z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Arsenal</h2>
            <p className="text-muted-foreground text-lg">
              A comprehensive toolkit for building robust, scalable mobile solutions across all platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup, idx) => {
              const Icon = skillGroup.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 border-t border-white/10"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span 
                        key={item} 
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-20"
          >
            Professional Journey
          </motion.h2>
          
          <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-16">
            {EXPERIENCE.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-8 md:pl-16 group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-2 w-[18px] h-[18px] rounded-full bg-background border-4 border-primary group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                
                <div className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
                  <div className="font-mono text-sm pt-1 text-primary/80 uppercase tracking-widest font-semibold">
                    {job.period}
                  </div>
                  <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-colors bg-secondary/20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-bold text-foreground">{job.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="text-foreground font-medium">{job.company}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <ul className="text-muted-foreground leading-relaxed text-lg space-y-2 list-disc list-inside">
                      {job.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-secondary/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
              <p className="text-muted-foreground text-lg max-w-xl">A selection of mobile applications I've engineered with focus on performance and user experience.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, idx) => (
              <Link key={project.id} href={`/project/${project.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[9/16] md:aspect-[4/5] overflow-hidden rounded-[2rem] mb-6 bg-secondary/50 border border-white/5 shadow-2xl">
                    {/* Image Zoom Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-60" />
                    {project.image && !isProjectImageBroken(project.id) ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        onError={() => markProjectImageBroken(project.id)}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : project.imageComponent ? (
                      <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                        <project.imageComponent />
                      </div>
                    ) : null}
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="flex flex-wrap gap-2 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {project.tech.map(t => (
                          <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/10 text-white backdrop-blur-md border border-white/10">
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-sm text-gray-300 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        View Case Study <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass-card rounded-[3rem] p-10 md:p-20 text-center border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] bg-background/40 backdrop-blur-xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Let's Build Something <br/><span className="text-primary">Amazing</span></h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="mailto:cooldev0824@gmail.com">
                <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 rounded-full shadow-lg shadow-primary/20">
                  <Mail className="w-5 h-5 mr-3" />
                  Say Hello
                </Button>
              </a>
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
              <div className="flex flex-col items-center gap-2 group cursor-pointer hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>cooldev0824@gmail.com</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-pointer hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <span>646-836-9890</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-pointer hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <span>Land O Lakes, US</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-muted-foreground border-t border-white/5 bg-background/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Vraj Patel. Crafted with precision.</p>
      </footer>
    </div>
  );
}
