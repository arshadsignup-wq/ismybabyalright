export type TriageLevel = "green" | "yellow" | "red";

export interface TriageOption {
  label: string;
  nextNodeId: string;
}

export interface TriageNode {
  id: string;
  question: string;
  helpText?: string;
  options: TriageOption[];
}

export interface TriageOutcome {
  id: string;
  level: TriageLevel;
  title: string;
  description: string;
  actions: string[];
  callScript?: string;
}

export interface TriageTree {
  slug: string;
  title: string;
  description: string;
  icon: string;
  nodes: Record<string, TriageNode>;
  outcomes: Record<string, TriageOutcome>;
  startNodeId: string;
}
