/* eslint-disable */

'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Moon, Sun, ChevronRight, ChevronDown, ChevronUp, ExternalLink, Send } from 'lucide-react';
import showcaseImage from "/public/showcase-image.png"; // Import the image

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

  useEffect(() => {
    // Redirect after 3 seconds (3000 milliseconds)
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://vmp-plus-showcase-front.lovable.app/';
    }, 3000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(redirectTimer);
  }, []); // Empty dependency array means this runs once when component mounts

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
    <div className="flex justify-center items-center min-h-screen bg-white">
      <a href="https://vmp-plus-showcase-front.lovable.app/" target="_blank" rel="noopener noreferrer">
        <Image 
          src="/vmpplus_poster.png"
          alt="VMP+ Showcase" 
          width={800}
          height={1131}
          priority
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </a>
    </div>
  );
}