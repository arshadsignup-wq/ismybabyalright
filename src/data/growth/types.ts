export interface GrowthDataPoint {
  ageMonths: number;
  p3: number;
  p15: number;
  p50: number;
  p85: number;
  p97: number;
}

export interface GrowthData {
  weight: GrowthDataPoint[];
  length: GrowthDataPoint[];
  headCircumference: GrowthDataPoint[];
}
