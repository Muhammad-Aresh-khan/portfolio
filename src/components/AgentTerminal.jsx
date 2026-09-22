"use client";

import { useState, useRef, useEffect } from 'react';
import { Wifi, Send } from 'lucide-react';

const agentAnswers = {
    identity: "Muhammad Aresh Khan is an AI Engineer @ Wenawa focused on building AI-powered SaaS & software products, LLMs & Agentic AI, and scalable backend systems. He is currently pursuing BSCS ('27) at DUET Karachi with a CGPA of 3.27.",
    stack: "Languages & Backend: FastAPI, Django, Python, PostgreSQL, SQLAlchemy, REST APIs, Docker, GCP Linux Servers.\nAI & Agentic AI: LangGraph, LangChain, CrewAI, RAG pipelines, Vector DBs, Whisper STT, Kokoro TTS, LiveKit.\nSaaS & Business Systems: Multi-Role Portals (RBAC), POS & Thermal Receipt Printing, Management Dashboards, n8n automation pipelines.",
    clinic: "The Clinic WebApp CMS & Patient Portal is an end-to-end Healthcare ERP built with FastAPI. It features dedicated role-based portals for Admin, Reception (with patient queueing & receipt printing), Laboratory diagnostic tracking, and Pharmacy POS with medicine inventory management.",
    cardience: "Cardience is a company product where Aresh spearheaded end-to-end backend feature development across Next.js and PostgreSQL, coupled with a high-performance FastAPI AI microservice layer powering the Lead Matchmaking Engine, Business Opportunity Analyzer, and Company Profile Analyzer.",
    awards: "Aresh made a key production contribution to the 51Skills AI platform, engineering its FastAPI assessment & roadmap microservices, which won 3rd Position Nationwide out of 500+ competing teams at the Lok Sahita STEM Talent Search Hackathon!",
    munafah: "Munafah AI is an enterprise client project where Aresh served as Lead Backend & AI Engineer, designing the FastAPI backend architecture, integrating paywalls, secure auth, and automated data synchronization loops via n8n.",
    automation: "Yes! Aresh designed an n8n Workflow Automation Suite. He built multi-channel HR screening/onboarding, automated email outreaches, real estate lead-qualification pipelines, and integrated agentic RAG product finders. Using n8n, he cut manual efforts by over 30%.",
    availability: "Yes! Aresh is available for AI Engineer, Backend Engineer, or SaaS Developer roles. He is open to remote roles globally as well as on-site opportunities. You can reach him directly at muhammadareshk@gmail.com.",
    instagram: "Virtual Instagram Manager is an automated social media execution system. Aresh integrated LangChain and Hugging Face models to research trending topics, formulate descriptions, generate graphic creatives, and schedule postings via backend browser automations built in Playwright.",
    code: "Code Assistant is an LLM agent built with Python, Streamlit, and LangChain. It helps developers generate clean, commented code, refine queries, rewrite algorithms, and automate repetitive coding setups.",
    evaluator: "Startup Evaluator is a CrewAI multi-agent engine. It coordinates multiple specialized agents (competitor research, financials, risks) utilizing LiteLLM API wrappers and Streamlit UI to deliver deep product feedback and RAG-driven valuations.",
    hrms: "Real-Time AI Interview Module is an audio-streamed HR screening interface. It integrates speech-to-text (Whisper), low-latency candidate assessment (LLMs), and high-quality voice synthesis (Kokoro TTS) connected via LiveKit WebRTC channels.",
    education: "Aresh is studying for a BS in Computer Science (Jul 2023 – Jun 2027) at Dawood University of Engineering and Technology (DUET) in Karachi, maintaining a CGPA of 3.27.",
    fallback: "Query analyzed. Muhammad Aresh Khan specializes in AI-Powered SaaS, Agentic AI (LangGraph, LangChain, CrewAI), FastAPI backend engineering, and n8n automation. Feel free to explore his projects grid, inspect his experience log, or reach out via the contact form!"
};

export default function AgentTerminal() {
    const [messages, setMessages] = useState([
        {
            id: 'init-sys',
            type: 'system-msg',
            sender: 'SYSTEM',
            time: '15:38:23',
            content: 'Agent initialized. Model: Llama-3-Agent-8B. Memory loaded successfully.'
        },
        {
            id: 'init-agent',
            type: 'agent-msg',
            sender: 'AGENT',
            time: '15:38:24',
            content: "Hello! I am Aresh's AI Assistant. How can I help you learn more about his qualifications today? Feel free to type below or click one of the preset prompts."
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const terminalBodyRef = useRef(null);

    // Auto scroll to bottom of terminal
    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [messages]);

    const formatTime = () => {
        const now = new Date();
        return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    };

    const runAgentPipeline = async (queryText) => {
        if (isLoading || !queryText.trim()) return;

        setIsLoading(true);
        const queryTime = formatTime();
        
        // Append user query
        setMessages(prev => [...prev, {
            id: Math.random().toString(),
            type: 'user-msg',
            sender: 'USER',
            time: queryTime,
            content: queryText
        }]);

        // Simulated thinking log states
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        
        // Setup a temporary status ID
        const statusId = 'status-temp';
        
        setMessages(prev => [...prev, {
            id: statusId,
            type: 'system-msg',
            sender: 'AGENT',
            time: formatTime(),
            content: 'Starting agent pipeline...',
            isThinking: true
        }]);

        try {
            await sleep(400);
            setMessages(prev => prev.map(m => m.id === statusId ? {
                ...m,
                content: 'Analyzing query keywords & searching semantic context...'
            } : m));

            // Compile conversation history
            const chatHistory = messages
                .filter(m => m.sender === 'USER' || m.sender === 'AGENT')
                .map(m => ({ sender: m.sender, content: m.content }));
            
            // Add the new query
            chatHistory.push({ sender: 'USER', content: queryText });

            await sleep(500);
            setMessages(prev => prev.map(m => m.id === statusId ? {
                ...m,
                content: 'Context matching resolved. Routing to Groq high-speed LLM inference...'
            } : m));

            // Call Next.js Server-side secure route
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ messages: chatHistory })
            });

            const data = await response.json();
            
            await sleep(300);

            // Remove temporary thinking status row and write final answer
            setMessages(prev => prev.filter(m => m.id !== statusId));
            
            if (!response.ok) {
                throw new Error(data.error || 'Server error occurred.');
            }

            setMessages(prev => [...prev, {
                id: Math.random().toString(),
                type: 'agent-msg',
                sender: 'AGENT',
                time: formatTime(),
                content: data.reply
            }]);

        } catch (err) {
            setMessages(prev => prev.filter(m => m.id !== statusId));
            setMessages(prev => [...prev, {
                id: Math.random().toString(),
                type: 'system-msg',
                sender: 'ERROR',
                time: formatTime(),
                content: `Pipeline error: ${err.message}`
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const value = inputValue.trim();
        if (value) {
            runAgentPipeline(value);
            setInputValue('');
        }
    };

    return (
        <section id="agent-playground" className="agent-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Interactive Demo</span>
                    <h2 className="section-title">Interact with my AI Clone</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="agent-playground-grid">
                    <div className="agent-info-column">
                        <h3>Ask My Agent Anything</h3>
                        <p>
                            To demonstrate agentic workflows in action, I've built a simulated <strong>Agentic RAG Pipeline</strong>. 
                        </p>
                        <p>
                            You can interact with my digital assistant to extract details from my resume, evaluate my skills for your tech stack, or query details about my projects.
                        </p>
                        
                        <div className="suggested-queries">
                            <h4>Try these preset commands:</h4>
                            <div className="preset-buttons">
                                <button 
                                    className="preset-btn" 
                                    disabled={isLoading}
                                    onClick={() => runAgentPipeline("Who is Muhammad Aresh Khan?")}
                                >
                                    Who are you?
                                </button>
                                <button 
                                    className="preset-btn" 
                                    disabled={isLoading}
                                    onClick={() => runAgentPipeline("What is Aresh's core tech stack?")}
                                >
                                    Core Tech Stack
                                </button>
                                <button 
                                    className="preset-btn" 
                                    disabled={isLoading}
                                    onClick={() => runAgentPipeline("Tell me about Munafah AI project.")}
                                >
                                    Munafah AI Details
                                </button>
                                <button 
                                    className="preset-btn" 
                                    disabled={isLoading}
                                    onClick={() => runAgentPipeline("Has Aresh worked with n8n and automation?")}
                                >
                                    n8n Experience
                                </button>
                                <button 
                                    className="preset-btn" 
                                    disabled={isLoading}
                                    onClick={() => runAgentPipeline("Tell me about the Clinic WebApp CMS & SaaS project.")}
                                >
                                    Clinic WebApp CMS
                                </button>
                                <button 
                                    className="preset-btn" 
                                    disabled={isLoading}
                                    onClick={() => runAgentPipeline("Tell me about the 51Skills Hackathon award.")}
                                >
                                    🏆 Hackathon Award
                                </button>
                                <button 
                                    className="preset-btn" 
                                    disabled={isLoading}
                                    onClick={() => runAgentPipeline("Is Aresh available for hire or remote roles?")}
                                >
                                    Availability
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="terminal-container glass-card">
                        <div className="terminal-header-bar">
                            <div className="terminal-dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <div className="terminal-title">aresha_agent_v1.0.3.sh</div>
                            <div className="terminal-status">
                                <Wifi size={14} /> ONLINE
                            </div>
                        </div>
                        
                        <div className="terminal-body" ref={terminalBodyRef}>
                            {messages.map((msg) => (
                                <div key={msg.id} className={`terminal-row ${msg.type} ${msg.isThinking ? 'thinking-log' : ''}`}>
                                    <span className="terminal-time">[{msg.time}]</span>
                                    <span className="terminal-log-type">[{msg.sender}]</span>
                                    <span className="terminal-content">
                                        {msg.content.split('\n').map((line, idx) => (
                                            <span key={idx}>
                                                {line}
                                                {idx < msg.content.split('\n').length - 1 && <br />}
                                            </span>
                                        ))}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="terminal-input-bar">
                            <span className="terminal-prompt">aresha_agent@portfolio:~$</span>
                            <form onSubmit={handleFormSubmit} className="terminal-form">
                                <input 
                                    type="text" 
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask about experience, skills, projects..." 
                                    disabled={isLoading}
                                    autoComplete="off" 
                                    required 
                                />
                                <button type="submit" className="terminal-submit" disabled={isLoading} aria-label="Send Query">
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
