import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="copyright">&copy; 2026 Muhammad Aresh Khan. All rights reserved.</p>
                <p className="built-with">
                    Designed & Built with <Heart className="heart-icon" size={14} fill="var(--accent-pink)" style={{ display: 'inline-block', verticalAlign: 'middle', animation: 'heartBeat 1.5s infinite' }} /> &amp; Next.js &amp; Vanilla CSS.
                </p>
            </div>
        </footer>
    );
}
