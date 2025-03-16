import React from "react";
import PageTop from "../../components/PageTop";
import "./About.css";

const About: React.FC = () => (
    <PageTop>
        <div className="about-container">
            <div className="about-content">
                <h1>About Me</h1>
                <section className="about-section">
                    <h2>Professional Background</h2>
                    <p>
                        I'm a senior at Drexel University majoring in Computer Science and currently contribute as a
                        part-time software developer at Nasdaq's Philadelphia office. My experience in the financial
                        services industry has equipped me with a unique skill-set in designing high-performance applications.
                    </p>
                </section>
                <section className="about-section">
                    <h2>Technical Expertise</h2>
                    <p>
                        I have comprehensive experience across all stages of software development, from initial
                        concept and design to implementation, testing, deployment, and production support. I specialize
                        in writing reusable, modular, and performant enterprise Java, with a deep knowledge of the JVM
                        and performance tuning. I've performed extensive upgrades on legacy applications to ensure
                        security compliance, in one case upgrading a large mission-critical application from 13 year old software
                        versions to a modern stack. Additionally, I've worked extensively with React.js, built robust ETL pipelines in Python, and leveraged tools like Docker and AWS.
                    </p>
                </section>
                <section className="about-section">
                    <h2>My Philosophy</h2>
                    <p>
                        I thrive on solving challenging problems and am driven by a passion for innovation. I aim to be
                        the go-to person on any team, consistently delivering scalable solutions while continuously
                        expanding my technical expertise.
                    </p>
                </section>
                <section className="about-section">
                    <h2>Personal Interests</h2>
                    <p>
                        Outside of work, I enjoy exploring linguistics and creative writing (particularly short-form
                        fiction and world-building). I also love riding my bike, climbing, and diving into civil
                        engineering concepts and city design.
                    </p>
                </section>
                <div className="about-actions">
                    <a href="/resume.pdf" className="about-action-link">View Resume →</a>
                    <a href="/contact" className="about-action-link">Contact →</a>
                </div>
            </div>
        </div>
    </PageTop>
);

export default About;