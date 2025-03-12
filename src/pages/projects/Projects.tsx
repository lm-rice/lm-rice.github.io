import React from 'react';
import { Linkedin, Globe } from 'react-feather';
import projectsData from './projects.json';
import './Projects.css';

interface Sponsor {
    name: string;
    linkedin: string;
    website?: string;
}

interface Contributor {
    name: string;
    linkedin: string;
}

interface Project {
    id: string;
    title: string;
    dateRange?: string;
    image?: string;
    details?: string[];
    associated?: string;
    description?: string;
    sponsors?: Sponsor[];
    contributors?: Contributor[];
    skills?: string[];
    seeMoreLink?: string;
    repo?: string;
}

/* -------------------------- COMPONENTS -------------------------- */

/* Sponsors Section */
const Sponsors: React.FC<{ sponsors: Sponsor[] }> = ({ sponsors }) => (
    <div className="sponsors-section">
        <h4>Sponsors ({sponsors.length})</h4>
        <div className="sponsors-list">
            {sponsors.map((sponsor, idx) => (
                <div key={idx} className="sponsor-item">
                    <span>{sponsor.name}</span>
                    <a href={sponsor.linkedin} target="_blank" rel="noopener noreferrer" className="sponsor-link">
                        <Linkedin size={16} />
                    </a>
                    {sponsor.website && (
                        <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <Globe size={16} />
                        </a>
                    )}
                </div>
            ))}
        </div>
    </div>
);

/* Contributors Section */
const Contributors: React.FC<{ contributors: Contributor[] }> = ({ contributors }) => (
    <div className="contributors-section">
        <h4>Contributors ({contributors.length})</h4>
        <div className="contributors-list">
            {contributors.map((contributor, idx) => (
                <a key={idx} href={contributor.linkedin} target="_blank" rel="noopener noreferrer" className="contributor-link">
                    <span>{contributor.name}</span>
                    <Linkedin size={16} />
                </a>
            ))}
        </div>
    </div>
);

/* Skills Section */
const Skills: React.FC<{ skills: string[] }> = ({ skills }) => (
    <div className="skills-section">
        <h4>Skills ({skills.length})</h4>
        <div className="skills-list">
            {skills.map((skill, idx) => (
                <span key={idx} className="skill-item">{skill}</span>
            ))}
        </div>
    </div>
);

/* Call-to-Action Buttons */
const ProjectActions: React.FC<{ seeMoreLink?: string; repo?: string }> = ({ seeMoreLink, repo }) => (
    <div className="project-actions">
        {seeMoreLink && (
            <a href={seeMoreLink} target="_blank" rel="noopener noreferrer" className="see-more-link">
                See More →
            </a>
        )}
        {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer" className="repo-link">
                GitHub Repository
            </a>
        )}
    </div>
);

/* -------------------------- MAIN PROJECTS COMPONENT -------------------------- */

const Projects: React.FC = () => {
    return (
        <main className="projects-main">
            <div className="section-container">
                <section className="projects-section">
                    <h1 className="projects-title">Projects</h1>
                    <div className="projects-list">
                        {projectsData.map((project) => (
                            <div key={project.id} className="project-card">
                                {project.image && (
                                    <img src={project.image} alt={`${project.title} Screenshot`} className="project-image" />
                                )}
                                <div className="project-content">
                                    <h2 className="project-title">{project.title}</h2>
                                    {project.dateRange && <p className="project-date">{project.dateRange}</p>}
                                    {project.associated && <p className="project-associated">{project.associated}</p>}
                                    {project.description && <p className="project-description">{project.description}</p>}
                                    {project.details && (
                                        <ul className="project-details">
                                            {project.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                                        </ul>
                                    )}
                                    {project.sponsors && <Sponsors sponsors={project.sponsors} />}
                                    {project.contributors && <Contributors contributors={project.contributors} />}
                                    {project.skills && <Skills skills={project.skills} />}
                                    <ProjectActions seeMoreLink={project.seeMoreLink} repo={project.repo} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Projects;