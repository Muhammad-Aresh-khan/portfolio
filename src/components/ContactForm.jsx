"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState({ show: false, type: '', text: '' });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        setIsSubmitting(true);
        setFeedback({ show: false, type: '', text: '' });

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

        if (!accessKey) {
            // Fallback to simulation mode if no Web3Forms API key is defined in .env.local
            setTimeout(() => {
                setIsSubmitting(false);
                setFeedback({
                    show: true,
                    type: 'success',
                    text: 'Thank you! (Simulation Mode) Your message was processed. Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local to receive real emails.'
                });

                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            }, 1200);
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                })
            });

            const resData = await response.json();
            setIsSubmitting(false);

            if (response.ok) {
                setFeedback({
                    show: true,
                    type: 'success',
                    text: 'Thank you! Your message was sent successfully. Aresh will get back to you shortly.'
                });

                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                throw new Error(resData.message || 'Failed to deliver message.');
            }
        } catch (err) {
            setIsSubmitting(false);
            setFeedback({
                show: true,
                type: 'error',
                text: `Sending failed: ${err.message}`
            });
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Let's Connect</span>
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="contact-grid">
                    <div className="contact-info glass-card">
                        <h3>Connect with Me</h3>
                        <p>
                            I am open to discuss freelance projects, full-time engineering positions, agentic automation consulting, or general backend engineering opportunities.
                        </p>
                        
                        <div className="contact-methods">
                            <div className="contact-method-item">
                                <div className="method-icon cyan">
                                    <Mail size={20} />
                                </div>
                                <div className="method-info">
                                    <span className="method-label">Email Me</span>
                                    <span className="method-value">
                                        <a href="mailto:muhammadareshk@gmail.com">muhammadareshk@gmail.com</a>
                                    </span>
                                </div>
                            </div>
                            
                            <div className="contact-method-item">
                                <div className="method-icon purple">
                                    <Phone size={20} />
                                </div>
                                <div className="method-info">
                                    <span className="method-label">Call / Message</span>
                                    <span className="method-value">
                                        <a href="tel:+923111641305">+92 311 1641305</a>
                                    </span>
                                </div>
                            </div>

                            <div className="contact-method-item">
                                <div className="method-icon green">
                                    <MapPin size={20} />
                                </div>
                                <div className="method-info">
                                    <span className="method-label">Location</span>
                                    <span className="method-value">Karachi, Pakistan (Onsite)</span>
                                </div>
                            </div>
                        </div>

                        <div className="social-links-footer">
                            <a href="https://linkedin.com/in/Muhammad-Aresh-khan" target="_blank" rel="noopener noreferrer" className="btn btn-outline footer-social-btn">
                                <LinkedinIcon size={16} />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/Muhammad-Aresh-khan" target="_blank" rel="noopener noreferrer" className="btn btn-outline footer-social-btn">
                                <GithubIcon size={16} />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container glass-card">
                        <h3>Send a Direct Message</h3>
                        <form onSubmit={handleFormSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="form-name">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="form-name" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="John Doe" 
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form-email">Your Email</label>
                                    <input 
                                        type="email" 
                                        id="form-email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="john@example.com" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="form-subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="form-subject" 
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Project Collaboration Proposal" 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="form-message">Message</label>
                                <textarea 
                                    id="form-message" 
                                    rows={5} 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Hi Aresh, I saw your portfolio and wanted to discuss..." 
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-primary form-submit-btn"
                                disabled={isSubmitting}
                            >
                                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                                <Send size={16} />
                            </button>
                        </form>
                        {feedback.show && (
                            <div className={`form-feedback ${feedback.type}`}>
                                {feedback.text}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
