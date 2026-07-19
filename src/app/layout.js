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
  title: 'Muhammad Aresh Khan | AI Engineer Portfolio',
  description: 'AI Engineer specializing in production-grade RAG pipelines, agentic AI systems, scalable backend APIs, and n8n workflow automation. Reduced manual effort by 30%+ and improved feature delivery by 20%.',
  keywords: 'AI Engineer, Agentic AI, RAG, FastAPI, Python, n8n, LangChain, CrewAI, Backend Developer, Muhammad Aresh Khan',
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
