"use client";

import { useState } from 'react';
import { ShieldCheck, Database, GitPullRequest, Mic, Users, Terminal, FileText, Cpu } from 'lucide-react';

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
        category: ["backend", "agentic"],
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
        category: ["backend", "agentic"],
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
        title: "51Skills AI Backend",
        role: "Backend & AI Developer",
        category: ["backend", "agentic"],
        desc: "FastAPI-based microservice layer powering intelligent assessment engines and dynamic educational roadmaps.",
        bullets: [
            "Built an adaptive assessment quiz engine generating checkpoint quizzes grounded in transcripts.",
            "Designed curriculum sequencing logic adjusting course pathways dynamically based on verified ELO-style scoring.",
            "Developed Firestore caching layers and semantic domain mapping algorithms to optimize response latency."
        ],
        tech: ["FastAPI", "Python", "Firestore", "Gemini", "Pydantic", "Pytest"],
        icon: Cpu,
        status: "Production Contribution"
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
                        className={`filter-btn ${filter === 'agentic' ? 'active' : ''}`}
                        onClick={() => setFilter('agentic')}
                    >
                        Agentic AI & LLMs
                    </button>
                    <button 
                        className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
                        onClick={() => setFilter('backend')}
                    >
                        Backend & APIs
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
                                className="project-card glass-card"
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
