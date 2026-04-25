export interface Caregiver {
  id: string;
  name: string;
  role: string; // e.g. "Parent", "Grandparent", "Nanny", "Partner"
  canLog: boolean;
}

export interface CaregiverCard {
  babyName: string;
  birthDate: string;
  allergies: string[];
  medications: string[];
  emergencyContacts: { name: string; phone: string; relationship: string }[];
  pediatrician?: { name: string; phone: string; clinic?: string };
  notes: string;
}

export interface HandoffSnapshot {
  babyName: string;
  generatedAt: string;
  events: HandoffEvent[];
  caregiverCard?: CaregiverCard;
}

export interface HandoffEvent {
  type: string;
  timestamp: string;
  summary: string;
}
