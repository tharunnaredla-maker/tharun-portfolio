import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 } as any}
            className="text-xl font-bold text-gradient"
          >
            Tharun
          </motion.div>
          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Skills
            </a>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663039612424/6Jda9qj7WmyFQ6XMExcTkt/hero_background-4aq73S2XRsDmTDRp4HUads.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="accent-line"
              />
              <h1 className="text-5xl md:text-7xl font-bold font-poppins leading-tight">
                Product-Focused
                <span className="text-gradient"> Engineering Leader</span>
              </h1>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 max-w-md leading-relaxed"
            >
              6+ years driving end-to-end product development from concept to manufacturing. Specialized in electromechanical systems, cross-functional leadership, and scalable solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:border-primary"
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-8"
            >
              <a
                href="https://linkedin.com/in/tharun-naredla"
                className="p-3 rounded-lg glass-effect hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:naredlatharun@gmail.com"
                className="p-3 rounded-lg glass-effect hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg glass-effect hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            <div className="glass-effect p-6 rounded-lg glow-effect">
              <div className="text-3xl font-bold text-gradient mb-2">6+</div>
              <p className="text-sm text-foreground/70">Years Experience</p>
            </div>
            <div className="glass-effect p-6 rounded-lg glow-effect">
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <p className="text-sm text-foreground/70">Projects Delivered</p>
            </div>
            <div className="glass-effect p-6 rounded-lg glow-effect">
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <p className="text-sm text-foreground/70">Team Members Led</p>
            </div>
            <div className="glass-effect p-6 rounded-lg glow-effect">
              <div className="text-3xl font-bold text-gradient mb-2">1</div>
              <p className="text-sm text-foreground/70">Patent Holder</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="accent-line" />
              <h2 className="text-4xl md:text-5xl font-bold font-poppins">
                About Me
              </h2>
            </div>

            <p className="text-lg text-foreground/80 max-w-3xl leading-relaxed">
              I'm a product-focused engineering leader with a passion for translating complex user needs into scalable, manufacturable solutions. My journey spans electromechanical design, cross-functional team leadership, and driving products from concept through to market.
            </p>

            <p className="text-lg text-foreground/80 max-w-3xl leading-relaxed">
              Currently leading product development at Keystone Robotix, where I'm architecting an AI-powered automated cooking platform. My expertise includes product lifecycle management, DFM/DFA optimization, rapid prototyping, and building high-performing teams across mechanical, electronics, and embedded systems disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <div className="accent-line" />
              <h2 className="text-4xl md:text-5xl font-bold font-poppins">
                Experience
              </h2>
            </div>

            {/* Experience Items */}
            {[
              {
                title: "Senior Product Design Engineer & Project Lead",
                company: "Keystone Robotix",
                period: "Aug 2024 – Present",
                location: "Hyderabad",
                description:
                  "Leading development of an AI-powered automated cooking platform from concept to production. Defined product architecture, managed cross-functional teams, and conducted DFMEA for manufacturing readiness.",
              },
              {
                title: "Senior Product Design Engineer",
                company: "Quainnt Techsoft Pvt. Ltd.",
                period: "May 2022 – Aug 2024",
                location: "Hyderabad",
                description:
                  "Owned mechanical design for multiple consumer and industrial products. Led design team in delivering production-ready CAD, BOM, and manufacturing packages.",
              },
              {
                title: "Product Development Engineer",
                company: "Quainnt Techsoft Pvt. Ltd.",
                period: "May 2019 – May 2022",
                location: "Hyderabad",
                description:
                  "Designed and developed electromechanical assemblies for early-stage products. Built and tested prototypes to validate design concepts.",
              },
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 } as any}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-lg glow-effect"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">
                      {exp.title}
                    </h3>
                    <p className="text-foreground/70">{exp.company}</p>
                  </div>
                  <div className="text-sm text-foreground/60 whitespace-nowrap">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-foreground/80">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <div className="accent-line" />
              <h2 className="text-4xl md:text-5xl font-bold font-poppins">
                Core Skills
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: "Product & Strategy",
                  skills: [
                    "Product Lifecycle Management",
                    "PRD Definition",
                    "User-Centric Design",
                    "Product Roadmapping",
                  ],
                },
                {
                  category: "Leadership & Execution",
                  skills: [
                    "Cross-functional Team Leadership",
                    "Project Planning & Agile",
                    "Stakeholder Management",
                    "Risk Analysis (DFMEA)",
                  ],
                },
                {
                  category: "Engineering & Design",
                  skills: [
                    "Electromechanical Systems",
                    "DFM / DFA / GD&T",
                    "Rapid Prototyping",
                    "Manufacturing Scale-up",
                  ],
                },
              ].map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-lg glow-effect"
                >
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.skills.map((skill, sidx) => (
                      <li
                        key={sidx}
                        className="text-foreground/80 flex items-start gap-3"
                      >
                        <span className="text-primary mt-1">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-12 rounded-lg glow-effect text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Whether you're looking to develop a new product, scale your team, or solve a complex engineering challenge, I'd love to connect.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:border-primary"
              >
                View Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60">
              © 2026 Tharun Naredla. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/tharun-naredla"
                className="text-sm text-foreground/60 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:naredlatharun@gmail.com"
                className="text-sm text-foreground/60 hover:text-primary transition-colors"
              >
                Email
              </a>
              <a
                href="#"
                className="text-sm text-foreground/60 hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
