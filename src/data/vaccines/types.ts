export interface VaccineDose {
  doseNumber: number;
  ageLabel: string;
  ageMonths: number;
  notes?: string;
}

export interface Vaccine {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  doses: VaccineDose[];
  commonSideEffects: string[];
  whenToWorry: string[];
}

export interface VaccineRecord {
  vaccineId: string;
  doseNumber: number;
  dateGiven?: string;
  notes?: string;
}
