import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './ProjectSection.css';

export default function ProjectSection({ project }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
    const opacity = useTransform(scrollYProgress, [0.2, 1], [0.6, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], ["40px", "24px"]);

    // Content fade in only when nearly expanded
    const contentOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0.8, 1], [20, 0]);

    return (
        <section ref={ref} className="project-section">
            <motion.div
                style={{ scale, opacity, borderRadius }}
                className="project-card"
            >
                {/* Background Gradient */}
                <div
                    className="card-gradient-bg"
                    style={{ background: project.gradient }}
                />

                {/* Dark overlay gradient for text readability */}
                <div className="card-overlay" />

                <div className="card-content">
                    <motion.div style={{ opacity: contentOpacity, y: contentY }}>
                        <div className="card-grid">
                            <div className="text-content">
                                <div className="tags-container">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="tag"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="project-title">{project.title}</h2>
                                <p className="project-description">{project.description}</p>

                                <div className="solution-box">
                                    <h4 className="solution-label">The Solution</h4>
                                    <p className="solution-text">{project.solution}</p>
                                </div>
                            </div>

                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="visit-btn"
                            >
                                <span>Visit Project</span>
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
