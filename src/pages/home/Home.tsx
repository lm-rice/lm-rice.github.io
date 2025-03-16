import React from "react";
import PageTop from "../../components/PageTop";
import "./Home.css";

const Home: React.FC = () => (
    <PageTop>
        <div className="home-container">
            <div className="home-content">
                <h1>Hi, I'm Lucy!</h1>
                <p>
                    I'm a senior at Drexel University majoring in Computer Science, currently contributing as a part-time
                    software developer at Nasdaq's Philadelphia office.
                </p>
                <p>
                    I'm a dedicated engineer driven to solve hard problems. I have experience with all aspects of software
                    development, from concept to design, to implementation and testing, and to product deployment and
                    production support. Furthermore, it's my mission to be the go-to person on any team that I work with.
                </p>
                <p>It's nice to meet you!</p>
                <div className="home-actions">
                    <a href="/about" className="home-action-link">About Me →</a>
                    <a href="/resume.pdf" className="home-action-link">View Resume →</a>
                    <a href="/contact" className="home-action-link">Contact →</a>
                </div>
            </div>
        </div>
    </PageTop>
);

export default Home;