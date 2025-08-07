export interface TabProps {
  title: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export interface WindowControlsProps {
  backgroundColor: string;
}

export interface ButtonProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
} 