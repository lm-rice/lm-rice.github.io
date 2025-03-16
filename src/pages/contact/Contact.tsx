import React from 'react';
import { Linkedin, Mail, GitHub } from 'react-feather';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <main className="contact-main">
            <section className="contact-section">
                <h1 className="contact-title">Contact</h1>
                <p className="contact-description">
                    I'm currently open to new opportunities! Feel free to get in touch.
                </p>

                <div className="contact-details">
                    <div className="contact-item">
                        <Mail size={20} />
                        <a href="mailto:lm-rice@outlook.com">lm-rice@outlook.com</a>
                    </div>

                    <div className="contact-item">
                        <Linkedin size={20} />
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                            Placeholder
                        </a>
                    </div>

                    <div className="contact-item">
                        <GitHub size={20} />
                        <a href="https://github.com/lm-rice" target="_blank" rel="noopener noreferrer">
                            github.com/lm-rice
                        </a>
                    </div>
                </div>

                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>

                <div className="resume-download">
                    <a href="/resume.pdf" download>Download Resume →</a>
                </div>
            </section>
        </main>
    );
};

export default Contact;