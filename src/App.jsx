
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectSection from './components/ProjectSection';
import './App.css';

const projects = [
  {
    id: 'vv',
    title: 'Validation & Verification',
    url: 'https://vv.luluu.top/',
    description: 'A comprehensive platform for the full dashboard-plan-execute-report lifecycle.',
    solution: 'Implemented a closed-loop system allowing dynamic test plan generation, execution tracking, and automated reporting to streamline V&V processes.',
    tags: ['Planning', 'Execution', 'Report'],
    gradient: 'linear-gradient(135deg, #1f2937, #0f766e)'
  },
  {
    id: 'match3',
    title: 'Match-3 Game',
    url: 'https://match3.luluu.top/',
    description: 'Classic tile-matching puzzle game designed with pure state-pattern logic.',
    solution: 'Built using a strict state machine to manage game states (idle, swapping, matching, falling), ensuring robust animation handling and logic separation.',
    tags: ['Algorithm', 'Game', 'Pattern'],
    gradient: 'linear-gradient(135deg, #6c4f9c, #b56576)'
  },
  {
    id: 'travel',
    title: 'Travel Itinerary Assistant',
    url: 'https://travel-itinerary-assistant.vercel.app/',
    description: 'AI-powered assistant that converts text paragraphs into structured travel itineraries.',
    solution: 'Leverages LLMs to parse unstructured travel notes, extracting timeline, location, and activity data into a visual timeline.',
    tags: ['AI Agent', 'Mobile', 'Structure'],
    gradient: 'linear-gradient(135deg, #0f766e, #0f4c5c)'
  }
];

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="blob-purple" />
        <div className="blob-teal" />
      </div>

      <motion.div style={{ y: y1, opacity }} className="hero-title-container">
        <h1 className="hero-title">
          Vibe Coding
        </h1>
      </motion.div>

      <motion.div style={{ y: y2, opacity }} className="hero-subtitle-container">
        <p className="hero-subtitle">
          by Maxlulu
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="scroll-indicator"
      >
        <p>Scroll to discover</p>
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <main className="app-main">
      <Hero />
      <div className="projects-container">
        {projects.map(project => (
          <ProjectSection key={project.id} project={project} />
        ))}
      </div>

      <footer className="site-footer">
        <p>© 2026 ChupaNERV. All vibes reserved.</p>
      </footer>
    </main>
  );
}
