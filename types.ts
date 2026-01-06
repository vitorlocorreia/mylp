import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  desktopImg: string;
  mobileImg: string;
  link: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
}