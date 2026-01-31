import { 
  Code2, 
  Database, 
  Globe, 
  Terminal, 
  Cpu, 
  Eye, 
  Brain, 
  Mic 
} from 'lucide-react';
import { Project, EducationItem, Certification, SkillCategory } from './types';

export const HERO_DATA = {
  name: "Shakthipriya S D",
  title: "MCA Graduate | Python Developer | ML & Computer Vision Enthusiast",
  tagline: "Building intelligent, accessible, and real-world software solutions using Python, Machine Learning, and Web Technologies."
};

export const ABOUT_TEXT = "Detail-oriented and motivated MCA graduate with strong foundational knowledge in computer applications, web technologies, and software development. Hands-on experience in developing academic and real-time projects using Python, HTML, CSS, JavaScript, and MySQL, with exposure to machine learning, computer vision, automation, and accessibility-focused solutions. Demonstrates strong problem-solving ability, adaptability, teamwork, and a continuous learning mindset.";

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java"],
    icon: Terminal
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
    icon: Globe
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQL", "Oracle"],
    icon: Database
  },
  {
    title: "Tools & Platforms",
    skills: ["VS Code", "Google Colab"],
    icon: Code2
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Voice Assistant for Visually Impaired",
    description: "A Python-based accessibility tool enabling hands-free computer interaction via Speech Recognition and Text-to-Speech. Supports web browsing, email handling, and app management to promote digital inclusivity.",
    tags: ["Python", "Speech Recognition", "pyttsx3", "NLP", "API Integration"],
    icon: Mic
  },
  {
    title: "Helmet Detection & Number Plate Recognition",
    description: "Real-time AI solution for traffic safety using YOLO and Tesseract OCR. Detects helmet violations and extracts number plates in challenging conditions, triggering instant alerts via SMS and Email.",
    tags: ["Python", "YOLO", "Tesseract OCR", "Computer Vision", "MySQL", "Tkinter"],
    icon: Eye
  },
   {
    title: "Fake News Detection System",
    description: "An automated system utilizing NLP and Machine Learning (Logistic Regression, SVM) to classify news articles as real or fake. It analyzes linguistic patterns to help users assess website authenticity and reduce misinformation.",
    tags: ["Python", "NLP", "Machine Learning", "Logistic Regression", "SVM"],
    icon: Brain
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Vellore Institute of Technology",
    period: "2023 – 2025"
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "DK M College for Women",
    period: "2020 – 2023"
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "Machine Learning with Python",
    issuer: "IBM"
  },
  {
    title: "JavaScript and React.js from A–Z",
    issuer: "DevTown Bootcamp"
  }
];

export const CONTACT_INFO = {
  email: "shakthipriyaseenu@gmail.com",
  phone: "+91 6380135129",
  linkedin: "https://www.linkedin.com/in/shakthipriya-s-d-7518a12b2/" 
};