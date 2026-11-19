export type ProjectCategory = 'all' | 'backend' | 'fullstack' | 'devops';

export type ProjectStatusFilter = 'all' | 'completed' | 'in_progress';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  status: 'completed' | 'in_progress';
  statusLabel?: string;
  category: 'backend' | 'fullstack' | 'devops';
  technologies: string[];
  features: string[];
  architectureHighlights?: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  type: string;
  iconName: string;
  accentColor: string;
}

export interface SkillItem {
  name: string;
  description?: string;
  level?: string;
  icon: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineMilestone {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  skillsAcquired: string[];
  type: 'education' | 'project' | 'specialization';
  icon: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  icon: string;
  badge?: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}
