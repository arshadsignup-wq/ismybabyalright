export interface ChecklistItem {
  id: string;
  text: string;
  detail?: string;
}

export interface CrisisChecklist {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  items: ChecklistItem[];
  tips?: string[];
}
