"use client";

import { useState } from 'react';
import { ShieldCheck, Database, GitPullRequest, Mic, Users, Terminal, FileText, Cpu, Activity, Trophy, Layers, Target } from 'lucide-react';

const InstagramIcon = ({ size = 20, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const projectsData = [
    {
        id: 1,
        title: "Munafah AI",
        role: "Lead Backend & AI Engineer",
        category: ["backend", "agentic", "saas"],
        desc: "A comprehensive B2B matchmaking engine and AI-driven lead enrichment platform for market intelligence.",
        bullets: [
            "Buyer Enrichment Pipeline: Automates personal contact info enrichment and market intelligence retrieval.",
            "Seller Enrichment & Chatbot Export Manager: Gathers business metrics and enables lead exporting via chat UI.",
            "Smart Outreach & News Feed: Integrates n8n communication workflows and niche-specific real-time news feeds."
        ],
        tech: ["FastAPI", "LangChain", "RAG", "n8n", "PostgreSQL", "GCP"],
        icon: ShieldCheck,
        status: "Enterprise Client"
    },
    {
        id: 2,
        title: "Logixa",
        role: "AI & Backend Developer",
        category: ["backend", "agentic", "saas"],
        desc: "AI DB — A conversational AI platform that allows users to chat directly with any relational database (RDBMS) using natural language.",
        bullets: [
            "Built intelligent LangChain database agents and RAG routing mechanisms.",
            "Developed an interactive Chainlit UI with dynamic chart rendering, chat state recovery, and PDF report creation."
        ],
        tech: ["Python", "FastAPI", "Chainlit", "LangChain", "RAG", "PostgreSQL"],
        icon: Database,
        status: "Company Product"
    },
    {
        id: 3,
        title: "Virtual Instagram Manager",
        role: "AI Automation Engineer",
        category: ["agentic", "automation"],
        desc: "Automated end-to-end social media management system performing content research, asset generation, and posting.",
        bullets: [
            "Created agent pipelines for topic generation, caption writing, and image creation via HF models.",
            "Developed automated posting and scheduling pipelines using Playwright to interact with social dashboards."
        ],
        tech: ["LangChain", "Transformers", "Playwright", "Python", "Cron"],
        icon: InstagramIcon,
        status: "Agentic AI"
    },
    {
        id: 4,
        title: "n8n Workflow Suite",
        role: "Workflow Architect",
        category: ["automation"],
        desc: "A portfolio of business automation integrations designed to optimize operations and sales outreach.",
        bullets: [
            "Smart Outreach for Munafah AI: seller message triggers background n8n webhook, mails buyer, polls response, and builds chat history.",
            "HR Automation: architected automated candidate email outreach, screening, and onboarding workflows.",
            "Shopify Product Recommendation: designed agentic RAG search pipeline for e-commerce client store work.",
            "Lofty CRM Integration: built automated n8n workflow for real-time real estate lead syncing."
        ],
        tech: ["n8n", "LangChain", "RAG", "Gmail API", "Sheets API", "Webhooks"],
        icon: GitPullRequest,
        status: "Enterprise Client"
    },
    {
        id: 5,
        title: "Real-Time AI Interview Module",
        role: "Lead AI Developer",
        category: ["agentic", "backend"],
        desc: "Speech-to-speech AI candidate screening module integrating high-fidelity audio streams and candidate evaluation models.",
        bullets: [
            "Built live communication interface integrating speech recognition and low-latency voice synthesis.",
            "Combined Kokoro TTS, Whisper speech-to-text, and LiveKit WebRTC server with LLMs for real-time analysis."
        ],
        tech: ["Python", "Kokoro TTS", "Whisper", "LiveKit", "LLMs"],
        icon: Mic,
        status: "Company Product"
    },
    {
        id: 6,
        title: "Startup Evaluator",
        role: "AI Engineer",
        category: ["agentic"],
        desc: "Multi-agent AI analysis framework created to audit startup strategies, pitch decks, and financial assumptions.",
        bullets: [
            "Created structured CrewAI agent workflows executing competitor research, risk evaluation, and product validation.",
            "Utilized LiteLLM routing for efficient API cost-management and Streamlit for dynamic reporting dashboards."
        ],
        tech: ["CrewAI", "LiteLLM", "Streamlit", "Python", "RAG"],
        icon: Users,
        status: "CrewAI"
    },
    {
        id: 7,
        title: "Code Assistant",
        role: "Developer",
        category: ["agentic"],
        desc: "LLM-powered agent to generate files, write scripts, explain algorithms, and automate manual coding tasks.",
        bullets: [
            "Designed structured agent workflows using LangChain to generate high-quality Python/Javascript codebase.",
            "Engineered Streamlit application featuring prompt templates, contextual code memory, and file export options."
        ],
        tech: ["LangChain", "Python", "Streamlit", "LLMs"],
        icon: Terminal,
        status: "LLM Tools"
    },
    {
        id: 8,
        title: "PDF to Audio & Summary with AI Chatbot",
        role: "Independent Project",
        category: ["agentic", "automation", "backend"],
        desc: "A local, privacy-first document intelligence system that processes multiple uploaded PDFs as a unified knowledge base and outputs MP3 audio.",
        bullets: [
            "Implements optimized semantic chunking and retrieval to mitigate LLM context window congestion.",
            "Features database-backed SQLAlchemy persistent conversation resuming across system restarts.",
            "Built with Chainlit and orchestrated with LangChain, executing locally via Ollama with gemma-long (128k context)."
        ],
        tech: ["Chainlit", "LangChain", "Ollama", "gemma-long", "SQLAlchemy", "gTTS", "pypdf"],
        icon: FileText,
        status: "R&D Lab"
    },
    {
        id: 9,
        title: "51Skills AI Backend & Learning Platform",
        role: "Backend & AI Developer",
        category: ["backend", "agentic", "saas"],
        desc: "FastAPI-powered microservice layer delivering adaptive skill testing, transcript-grounded quizzes, and personalized roadmaps.",
        bullets: [
            "🏆 Won 3rd Position Nationwide out of 500+ teams at the Lok Sahita STEM Talent Search Hackathon.",
            "Production Contribution: Engineered FastAPI microservice layer powering adaptive skill assessment and personalized roadmaps.",
            "Built an adaptive assessment quiz engine generating checkpoint quizzes dynamically grounded in lesson transcripts.",
            "Designed curriculum sequencing logic adjusting course pathways based on verified ELO-style skills scoring."
        ],
        tech: ["FastAPI", "Python", "Firestore", "Gemini", "Pydantic", "Pytest"],
        icon: Trophy,
        status: "Production Contribution",
        awardBadge: "🏆 3rd Place Nationwide (500+ Teams)",
        isAward: true
    },
    {
        id: 10,
        title: "RaahAI",
        role: "Backend & Agentic Architect",
        category: ["agentic", "backend", "automation"],
        desc: "Autonomous NGO Case Intelligence & Dispatch System developed for the Google Antigravity Hackathon (Challenge 1).",
        bullets: [
            "Architected a 5-agent sequential decision pipeline (Intake, Validation, Severity/Impact, Action Gen, Dispatch) orchestrated via Google Antigravity.",
            "Built a FastAPI backend serving as an MCP Tool Server and API Gateway routing payloads securely to Google Sheets, Firestore, Maps, and SMS.",
            "Enforced strict stateless schemas, trace loggers (TraceObject), and fail-safe validations to safely process multilingual help requests (Urdu, Roman Urdu, English)."
        ],
        tech: ["FastAPI", "Google Antigravity", "Python", "Firestore", "MCP Tools", "Docker"],
        icon: Cpu,
        status: "Production Contribution"
    },
    {
        id: 11,
        title: "Clinic WebApp CMS & Patient Portal",
        role: "Lead Backend Engineer (FastAPI) & Full-Stack Contributor",
        category: ["backend", "saas"],
        desc: "End-to-end Healthcare ERP & Clinic Management platform featuring role-based portals for Admin, Reception, Laboratory, and Pharmacy POS.",
        bullets: [
            "Architected complete backend with FastAPI: High-performance async REST APIs, PostgreSQL schemas, and JWT Role-Based Access Control (RBAC).",
            "Multi-Role Modular Portals: Dedicated workspaces for Admin oversight, Reception desk with patient intake & receipt print, Laboratory diagnostic queue, and Pharmacy POS.",
            "Pharmacy Point-of-Sale (POS): Complete inventory tracking, prescription dispensing, automated receipt generation, and real-time sales logging.",
            "Patient Portal & Medical Records: Secure diagnostic report generation, billing history, and streamlined operational workflows with responsive UI touches."
        ],
        tech: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "JWT / RBAC", "POS & Receipt Print", "REST APIs"],
        icon: Activity,
        status: "Production WebApp / SaaS"
    },
    {
        id: 12,
        title: "Cardience",
        role: "Lead Backend & AI Systems Engineer",
        category: ["backend", "agentic", "saas"],
        desc: "B2B business intelligence and matchmaking ecosystem. Spearheaded end-to-end backend feature development using Next.js combined with a high-performance FastAPI AI microservice layer.",
        bullets: [
            "End-to-End Backend Feature Engineering: Delivered complete backend features, data models, and scalable API pipelines across Next.js and PostgreSQL.",
            "AI Microservice Architecture: Designed high-throughput FastAPI microservice layers communicating seamlessly with the Next.js backend for heavy AI tasks.",
            "Lead Matchmaking Engine: Built semantic and criteria-driven matchmaking algorithms linking high-fit enterprise buyers and vendors.",
            "Business Opportunity & Profile Analyzer: Engineered LLM-powered intelligence analyzers evaluating market feasibility and automating corporate profile enrichment."
        ],
        tech: ["FastAPI", "Next.js", "Python", "LLMs", "Microservices", "PostgreSQL", "REST APIs"],
        icon: Target,
        status: "Company Product"
    }
];

export default function ProjectsGrid() {
    const [filter, setFilter] = useState('all');

    const filteredProjects = projectsData.filter(proj => 
        filter === 'all' || proj.category.includes(filter)
    );

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Work Showcase</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="project-filters">
                    <button 
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All Projects
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'saas' ? 'active' : ''}`}
                        onClick={() => setFilter('saas')}
                    >
                        SaaS & Web Platforms
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
                        onClick={() => setFilter('backend')}
                    >
                        Backend & APIs
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'agentic' ? 'active' : ''}`}
                        onClick={() => setFilter('agentic')}
                    >
                        Agentic AI & LLMs
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'automation' ? 'active' : ''}`}
                        onClick={() => setFilter('automation')}
                    >
                        Automation
                    </button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((proj) => {
                        const Icon = proj.icon;
                        return (
                            <div 
                                key={proj.id} 
                                className={`project-card glass-card ${proj.isAward ? 'card-award-glow' : ''}`}
                                style={{
                                    opacity: 1,
                                    transition: 'opacity 0.4s ease'
                                }}
                            >
                                <div className="project-header">
                                    <span className="project-status">{proj.status}</span>
                                    <div className="project-icons">
                                        <Icon className="proj-type-icon" size={20} />
                                    </div>
                                </div>
                                {proj.awardBadge && (
                                    <div className="project-award-pill">
                                        <span>{proj.awardBadge}</span>
                                    </div>
                                )}
                                <h3 className="project-title">{proj.title}</h3>
                                <p className="project-role">{proj.role}</p>
                                <p className="project-desc">{proj.desc}</p>
                                <ul className="project-bullets-list">
                                    {proj.bullets.map((bullet, idx) => (
                                        <li key={idx}>{bullet}</li>
                                    ))}
                                </ul>
                                <div className="project-tech-stack">
                                    {proj.tech.map((t, idx) => (
                                        <span key={idx}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
