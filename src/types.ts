export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortSummary?: string;
  role: string;
  timeline: string;
  category: 'Machine Learning' | 'NLP' | 'Computer Vision' | 'Full-Stack AI';
  status: 'Complete' | 'Ongoing Research' | 'Production Demo' | 'Award Winner' | 'Hackathon 3rd Place';
  tags: string[];
  problem: string;
  builtDescription: string;
  technicalDecision: string;
  resultOutcome: string;
  architectureHighlights?: string[];
  keyMetrics?: { label: string; value: string; note?: string }[];
  deliverables?: string[];
  externalUrl?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  interactiveDemoType?: 'sentiment' | 'vision-demo' | 'trend-evaluator';
}

export interface NavItem {
  index: string;
  label: string;
  href: string;
}
