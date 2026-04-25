export interface PoopColor {
  color: string;
  hexCode: string;
  title: string;
  description: string;
  isNormal: boolean;
  isUrgent: boolean;
  causes: string[];
  whenToWorry: string;
}

export interface PoopTexture {
  name: string;
  description: string;
  isNormal: boolean;
  commonAges: string;
  causes: string[];
}

export interface PoopByAge {
  ageRange: string;
  normalColors: string[];
  normalFrequency: string;
  normalTexture: string;
  notes: string;
}
