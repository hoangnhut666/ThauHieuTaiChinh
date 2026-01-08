
export enum SlideType {
  TITLE = 'TITLE',
  MINDMAP = 'MINDMAP',
  CONTENT = 'CONTENT',
  CONTRAST = 'CONTRAST',
  CONCLUSION = 'CONCLUSION',
  THANKS = 'THANKS'
}

export interface ContentSection {
  title: string;
  items: string[];
  icon?: string;
  color?: string;
}

export interface Member {
  id: string;
  name: string;
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  members?: Member[]; // New property for team information
  sections?: ContentSection[];
  contrastData?: {
    negative: ContentSection;
    positive: ContentSection;
  };
  mindMapItems?: {
    id: string;
    label: string;
    color: string;
    icon: string;
  }[];
}
