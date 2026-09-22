import { Inter, Plus_Jakarta_Sans, Fira_Code } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata = {
  title: 'Muhammad Aresh Khan | AI Engineer & Backend Architect | SaaS Products',
  description: 'AI Engineer @ Wenawa building AI-powered SaaS & software products, LLMs & Agentic AI, and scalable FastAPI backend architectures. BSCS ’27 @ DUET.',
  keywords: 'AI Engineer, Agentic AI, SaaS Products, FastAPI, Django, Python, LLMs, LangGraph, LangChain, PostgreSQL, Backend Developer, Muhammad Aresh Khan',
  authors: [{ name: 'Muhammad Aresh Khan' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${firaCode.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
