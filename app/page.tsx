'use client';

import { useState, useEffect } from 'react';
// import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Moon, Sun, ChevronRight, ChevronDown, ChevronUp, ExternalLink, Send } from 'lucide-react';

const TypeWriter = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-blue-700 dark:text-blue-300">{skill}</span>
      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <motion.div 
        className="bg-blue-600 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Git', level: 85 },
    { name: 'SQL', level: 70 },
    { name: 'RESTful APIs', level: 80 },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
      longDescription: "This e-commerce platform provides a seamless shopping experience with features like user authentication, product catalog, shopping cart, and secure checkout. The frontend is built with React and Redux for state management, while the backend uses Node.js with Express and MongoDB for data storage. Key features include real-time inventory updates, responsive design, and integration with popular payment gateways.",
      link: "https://github.com/yourusername/ecommerce-platform",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"]
    },
    {
      title: "Weather App",
      description: "A responsive weather application using React and OpenWeatherMap API.",
      longDescription: "This weather application provides real-time weather information for any location worldwide. It features a clean, intuitive interface built with React and styled-components. The app integrates with the OpenWeatherMap API to fetch accurate weather data, including current conditions, hourly forecasts, and 5-day predictions. Additional features include geolocation support, unit conversion (Celsius/Fahrenheit), and dynamic weather icons.",
      link: "https://github.com/yourusername/weather-app",
      category: "Frontend",
      technologies: ["React", "OpenWeatherMap API", "Styled-components", "Axios"]
    },
    {
      title: "Task Manager",
      description: "A productivity app built with React Native and Firebase.",
      longDescription: "This cross-platform mobile application helps users manage their tasks efficiently. Built with React Native, it offers a native app experience on both iOS and Android. The app uses Firebase for real-time data synchronization and user authentication. Features include task creation, due date setting, priority levels, category tagging, and push notifications for reminders. The UI is designed for optimal user experience with smooth animations and intuitive gestures.",
      link: "https://github.com/yourusername/task-manager",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "Expo", "Redux"]
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard using D3.js and React for data visualization.",
      longDescription: "This data visualization dashboard provides insightful representations of complex datasets. Built with React and D3.js, it offers a variety of chart types including line graphs, bar charts, scatter plots, and heatmaps. The dashboard features interactive elements like zooming, panning, and filtering, allowing users to explore data in depth. It's designed to handle large datasets efficiently and includes features like data export and customizable color schemes.",
      link: "https://github.com/yourusername/data-viz-dashboard",
      category: "Data",
      technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB"]
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const toggleProject = (title: string) => {
    if (expandedProject === title) {
      setExpandedProject(null);
    } else {
      setExpandedProject(title);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-10">
          <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <a href="#" className="text-xl font-bold">Your Name</a>
            <div className="flex items-center space-x-4">
              <a href="#skills" className="hidden md:inline-block hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="hidden md:inline-block hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="hidden md:inline-block hover:text-blue-600 transition-colors">Contact</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-6 pt-24 pb-12">
          <section id="hero" className="py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I&apos;m <span className="text-blue-600">Your Name</span>
              </h1>
              <h2 className="text-2xl md:text-3xl mb-8">
                I&apos;m a <TypeWriter text="Software Developer Graduate" delay={100} />
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Passionate about creating efficient, scalable, and user-friendly applications. 
                Ready to bring fresh ideas and strong problem-solving skills to your team.
              </p>
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-flex items-center"
              >
                Get in touch <ChevronRight className="ml-2" />
              </a>
            </motion.div>
          </section>

          <section id="skills" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <motion.div
              className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
              ))}
            </motion.div>
          </section>

          <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="flex justify-center space-x-4 mb-8">
              {['All', 'Full Stack', 'Frontend', 'Mobile', 'Data'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                  } transition-colors duration-300`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <AnimatePresence>
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                layout
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-4">
                        {project.category}
                      </span>
                      <button
                        onClick={() => toggleProject(project.title)}
                        className="text-blue-600 hover:underline inline-flex items-center"
                      >
                        {expandedProject === project.title ? 'Show less' : 'Show more'}
                        {expandedProject === project.title ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                      </button>
                      <AnimatePresence>
                        {expandedProject === project.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4"
                          >
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.longDescription}</p>
                            <div className="mb-4">
                              <h4 className="font-semibold mb-2">Technologies used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-600 hover:underline"
                            >
                              View Project <ExternalLink className="ml-1 w-4 h-4" />
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </section>

          <section id="contact" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 inline-flex items-center"
                >
                  Send Message <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
            <motion.div
              className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-lg hover:text-blue-600 transition-colors">
                <Mail /> your.email@example.com
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg hover:text-blue-600 transition-colors">
                <Github /> GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg hover:text-blue-600 transition-colors">
                <Linkedin /> LinkedIn
              </a>
            </motion.div>
          </section>
        </main>

        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}