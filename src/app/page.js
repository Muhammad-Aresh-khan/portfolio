import NeuralCanvas from '@/components/NeuralCanvas';
import Header from '@/components/Header';
import Typewriter from '@/components/Typewriter';
import ProjectsGrid from '@/components/ProjectsGrid';
import AgentTerminal from '@/components/AgentTerminal';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

import { 
  ArrowRight, 
  Terminal, 
  Mail, 
  Zap, 
  TrendingUp, 
  Cpu, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin,
  Trophy,
  Layers,
  Server
} from 'lucide-react';

const GithubIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* Background canvas animation */}
      <NeuralCanvas />

      {/* Navigation Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="badge-container">
                <span className="hero-badge">
                  <span className="pulse-dot"></span> AI Engineer @ Wenawa • BSCS ’27 @ DUET
                </span>
              </div>
              <h1 className="hero-title">
                Hi, I'm <span className="text-glow">Muhammad Aresh Khan</span>
              </h1>
              <h2 className="hero-subtitle">
                I build <Typewriter />
              </h2>
              <p className="hero-description">
                AI Engineer focused on building intelligent software products, SaaS applications, web platforms, automation systems, and backend solutions that solve real-world problems. Turning ideas into functional products — from API & backend architecture to AI integration, workflow automation, and practical web apps.
              </p>
              <div className="hero-ctas">
                <a href="#projects" className="btn btn-primary">
                  <span>View Projects</span>
                  <ArrowRight size={16} />
                </a>
                <a href="#agent-playground" className="btn btn-secondary">
                  <Terminal size={16} />
                  <span>Chat with my AI</span>
                </a>
              </div>
              <div className="hero-socials">
                <a href="https://linkedin.com/in/Muhammad-Aresh-khan" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://github.com/Muhammad-Aresh-khan" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href="mailto:muhammadareshk@gmail.com" className="social-icon" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="stats-card-container">
                {/* Stat Card 1 */}
                <div className="stat-card glass-card">
                  <div className="stat-icon-wrapper cyan">
                    <Zap size={24} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-value">30%+</span>
                    <span className="stat-label">Manual Effort Cut</span>
                  </div>
                </div>
                {/* Stat Card 2 */}
                <div className="stat-card glass-card">
                  <div className="stat-icon-wrapper purple">
                    <TrendingUp size={24} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-value">~20%</span>
                    <span className="stat-label">Faster Delivery Speed</span>
                  </div>
                </div>
                {/* Stat Card 3 - Hackathon Award */}
                <div className="stat-card glass-card stat-card-award">
                  <div className="stat-icon-wrapper gold">
                    <Trophy size={24} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-value">3rd / 500+</span>
                    <span className="stat-label">STEM Hackathon Winner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About & Metrics Section */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">About Me</span>
              <h2 className="section-title">Who is Aresh Khan?</h2>
              <div className="title-underline"></div>
            </div>
            
            <div className="about-grid">
              <div className="about-bio glass-card">
                <h3>Bridging AI, Robust Backend Systems & Product Development</h3>
                <p>
                  I’m an <strong>AI Engineer @ Wenawa</strong> focused on building intelligent software products, SaaS applications, web platforms, automation systems, and backend solutions that solve real-world problems.
                </p>
                <p>
                  My work sits at the intersection of <strong>Artificial Intelligence, Software Engineering, and Product Development</strong>. I enjoy turning ideas into functional products — from designing APIs and backend architecture to integrating AI capabilities, automating workflows, and building practical web applications.
                </p>
                <p>
                  My core expertise includes <strong>Python, LLMs, Agentic AI, RAG, AI automation, backend development, REST APIs, and database-driven applications</strong>, with hands-on experience using technologies such as <strong>LangChain, LangGraph, n8n, FastAPI, Django, PostgreSQL, Docker</strong>, and modern LLM platforms.
                </p>
                <p>
                  Beyond AI, I build complete software systems and business applications, including management platforms, role-based dashboards, portals, workflow systems, and SaaS solutions designed around real business processes.
                </p>
                <p>
                  I’m continuously exploring emerging technologies and turning ideas into practical, scalable, and user-focused products — combining technical depth in Machine Learning, Data Science, and UI/UX with solid engineering discipline.
                </p>
                
                <div className="certifications-container">
                  <h4>Honors & Certifications</h4>
                  <ul className="cert-list">
                    <li className="cert-item-award">
                      <Trophy className="cert-icon award-icon" size={20} />
                      <div>
                        <strong>3rd Position Nationwide (out of 500+ Teams)</strong>
                        <span className="cert-meta">Lok Sahita STEM Talent Search Hackathon (51Skills AI Project)</span>
                      </div>
                    </li>
                    <li>
                      <Award className="cert-icon" size={20} />
                      <div>
                        <strong>Python for Data Science, AI & Development</strong>
                        <span className="cert-meta">Coursera (IBM)</span>
                      </div>
                    </li>
                    <li>
                      <Award className="cert-icon" size={20} />
                      <div>
                        <strong>n8n Chatbot Lab Masterclass</strong>
                        <span className="cert-meta">Datacrumbs</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="about-details glass-card">
                <div className="education-block">
                  <h3>Education</h3>
                  <div className="education-card">
                    <div className="edu-icon">
                      <GraduationCap size={24} />
                    </div>
                    <div className="edu-details">
                      <h4>BS in Computer Science (CGPA 3.27)</h4>
                      <p className="edu-inst">Dawood University of Engineering and Technology</p>
                      <span className="edu-date">Jul 2023 – Jun 2027</span>
                      <p className="edu-loc">Karachi, Pakistan</p>
                    </div>
                  </div>
                </div>

                <div className="quick-facts">
                  <h3>Quick Facts</h3>
                  <div className="facts-grid">
                    <div className="fact-item">
                      <span className="fact-title">Location:</span>
                      <span className="fact-value">Karachi, Pakistan</span>
                    </div>
                    <div className="fact-item">
                      <span className="fact-title">Email:</span>
                      <span className="fact-value">
                        <a href="mailto:muhammadareshk@gmail.com">muhammadareshk@gmail.com</a>
                      </span>
                    </div>
                    <div className="fact-item">
                      <span className="fact-title">Phone:</span>
                      <span className="fact-value">
                        <a href="tel:+923111641305">+92 311 1641305</a>
                      </span>
                    </div>
                    <div className="fact-item">
                      <span className="fact-title">Languages:</span>
                      <span className="fact-value">English, Urdu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Expertise</span>
              <h2 className="section-title">Technical Skills</h2>
              <div className="title-underline"></div>
            </div>

            <div className="skills-grid">
              {/* Backend & Cloud Architecture */}
              <div className="skill-category-card glass-card">
                <div className="skill-category-header">
                  <Server size={20} style={{ color: 'var(--accent-cyan)' }} />
                  <h3>Backend & Cloud Architecture</h3>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag-item">FastAPI</span>
                  <span className="skill-tag-item">Django</span>
                  <span className="skill-tag-item">Python</span>
                  <span className="skill-tag-item">PostgreSQL</span>
                  <span className="skill-tag-item">SQL & SQLAlchemy</span>
                  <span className="skill-tag-item">REST API Design</span>
                  <span className="skill-tag-item">Docker</span>
                  <span className="skill-tag-item">GCP Linux Servers</span>
                </div>
              </div>

              {/* AI & Agentic Systems */}
              <div className="skill-category-card glass-card">
                <div className="skill-category-header">
                  <Cpu size={20} style={{ color: 'var(--accent-purple)' }} />
                  <h3>AI & Agentic Systems</h3>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag-item">LLMs & Prompt Eng</span>
                  <span className="skill-tag-item">Agentic AI</span>
                  <span className="skill-tag-item">LangGraph</span>
                  <span className="skill-tag-item">LangChain</span>
                  <span className="skill-tag-item">CrewAI</span>
                  <span className="skill-tag-item">RAG Pipelines</span>
                  <span className="skill-tag-item">Vector Databases</span>
                  <span className="skill-tag-item">Whisper & LiveKit</span>
                </div>
              </div>

              {/* Product & Solution Engineering */}
              <div className="skill-category-card glass-card">
                <div className="skill-category-header">
                  <Layers size={20} style={{ color: 'var(--accent-green)' }} />
                  <h3>Product & Solution Engineering</h3>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag-item">Product Development</span>
                  <span className="skill-tag-item">Solution Architecture</span>
                  <span className="skill-tag-item">Multi-Tenant SaaS</span>
                  <span className="skill-tag-item">Role-Based Access (RBAC)</span>
                  <span className="skill-tag-item">B2B Web Platforms</span>
                  <span className="skill-tag-item">Business Workflows</span>
                  <span className="skill-tag-item">API Integrations</span>
                  <span className="skill-tag-item">UI/UX & User Flows</span>
                </div>
              </div>

              {/* Automation & Tools */}
              <div className="skill-category-card glass-card">
                <div className="skill-category-header">
                  <Zap size={20} style={{ color: 'var(--accent-pink)' }} />
                  <h3>Automation & Tooling</h3>
                </div>
                <div className="skill-tags">
                  <span className="skill-tag-item">n8n Automation</span>
                  <span className="skill-tag-item">Git & GitHub</span>
                  <span className="skill-tag-item">PM2 Process Manager</span>
                  <span className="skill-tag-item">Data Science & ML</span>
                  <span className="skill-tag-item">Figma</span>
                  <span className="skill-tag-item">Microservices</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">History</span>
              <h2 className="section-title">Professional Experience</h2>
              <div className="title-underline"></div>
            </div>

            <div className="timeline-container">
              <div className="timeline-line"></div>
              
              <div className="timeline-item">
                <div className="timeline-marker">
                  <Briefcase size={20} />
                </div>
                <div className="timeline-content glass-card">
                  <div className="timeline-header">
                    <div className="timeline-title-group">
                      <h3 className="role-title">AI Engineer (SaaS & Backend Engineering)</h3>
                      <h4 className="company-name">Wenawa</h4>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-date">
                        <Calendar size={14} style={{ marginRight: '4px' }} /> Aug 2025 – Present
                      </span>
                      <span className="timeline-loc">
                        <MapPin size={14} style={{ marginRight: '4px' }} /> Karachi, Pakistan
                      </span>
                    </div>
                  </div>
                  <div className="timeline-body">
                    <ul className="experience-bullets">
                      <li>
                        <span className="bullet-point-arrow"></span>
                        <span>Architected and delivered secure, production-grade REST APIs and SaaS backend infrastructure using <strong>FastAPI</strong> & <strong>PostgreSQL</strong>, integrating advanced LLM agents and semantic RAG workflows linked to <strong>n8n automation pipelines</strong>, reducing manual effort by <strong>30%+</strong>.</span>
                      </li>
                      <li>
                        <span className="bullet-point-arrow"></span>
                        <span>Built modular business workflows, role-based dashboards, and client-facing AI platforms, converting complex functional specifications into scalable software products.</span>
                      </li>
                      <li>
                        <span className="bullet-point-arrow"></span>
                        <span>Optimized deployment pipelines by containerizing and hosting microservices on <strong>Google Cloud Platform (GCP) Linux servers</strong> using <strong>Docker</strong> and <strong>PM2</strong> to ensure 99.9% uptime.</span>
                      </li>
                      <li>
                        <span className="bullet-point-arrow"></span>
                        <span>Championed clean software engineering practices, writing modular Python codebases and reusable architecture that accelerated feature delivery speed by <strong>~20%</strong>.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects showcase */}
        <ProjectsGrid />

        {/* Chat Playground */}
        <AgentTerminal />

        {/* Contact Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
