"use client";

import { useEffect, useState } from 'react';

export default function Typewriter() {
    const phrases = [
        "Production-Grade RAG Pipelines",
        "Agentic AI Frameworks",
        "Scalable Backend REST APIs",
        "Intelligent Workflow Automation"
    ];

    const [text, setText] = useState('');
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delay, setDelay] = useState(100);

    useEffect(() => {
        const currentPhrase = phrases[phraseIdx];

        const timer = setTimeout(() => {
            if (isDeleting) {
                setText(currentPhrase.substring(0, charIdx - 1));
                setCharIdx(prev => prev - 1);
                setDelay(50);
            } else {
                setText(currentPhrase.substring(0, charIdx + 1));
                setCharIdx(prev => prev + 1);
                setDelay(100);
            }

            if (!isDeleting && charIdx === currentPhrase.length) {
                setDelay(2000);
                setIsDeleting(true);
            } else if (isDeleting && charIdx === 0) {
                setIsDeleting(false);
                setPhraseIdx(prev => (prev + 1) % phrases.length);
                setDelay(500);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [charIdx, isDeleting, phraseIdx, delay]);

    return (
        <span>
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
        </span>
    );
}
