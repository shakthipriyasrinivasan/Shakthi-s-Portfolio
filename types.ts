import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}