/**
 * Childcare cost data — average costs by type and region.
 * Sources: Care.com 2024 Cost of Care Survey, DOL/ACF data, IRS tax credit info.
 */

export interface ChildcareType {
  id: string;
  name: string;
  description: string;
  avgMonthlyInfant: number;
  avgMonthlyToddler: number;
  avgMonthlyPreschool: number;
  prosAndCons: { pros: string[]; cons: string[] };
}

export const CHILDCARE_TYPES: ChildcareType[] = [
  {
    id: "daycare-center",
    name: "Daycare Center",
    description: "Licensed facility with structured programs, multiple caregivers, and age-grouped classrooms.",
    avgMonthlyInfant: 1450,
    avgMonthlyToddler: 1300,
    avgMonthlyPreschool: 1150,
    prosAndCons: {
      pros: [
        "Structured learning environment",
        "Licensed and regulated",
        "Socialization with peers",
        "Reliable schedule — won't call in sick",
      ],
      cons: [
        "Higher exposure to illness",
        "Less individual attention",
        "Fixed hours — less flexibility",
        "Often have waitlists",
      ],
    },
  },
  {
    id: "in-home-daycare",
    name: "In-Home Daycare",
    description: "Licensed caregiver watches a small group of children in their home.",
    avgMonthlyInfant: 1000,
    avgMonthlyToddler: 900,
    avgMonthlyPreschool: 850,
    prosAndCons: {
      pros: [
        "Smaller group size — more individual attention",
        "Home-like environment",
        "Often more affordable than centers",
        "More flexible hours",
      ],
      cons: [
        "Less structured curriculum",
        "Backup care needed if provider is sick",
        "Regulation varies by state",
        "Mixed age groups",
      ],
    },
  },
  {
    id: "nanny",
    name: "Nanny (Full-Time)",
    description: "Dedicated caregiver in your home, providing one-on-one care.",
    avgMonthlyInfant: 2800,
    avgMonthlyToddler: 2700,
    avgMonthlyPreschool: 2600,
    prosAndCons: {
      pros: [
        "One-on-one attention",
        "Care in your home — familiar environment",
        "Flexible schedule",
        "Can accommodate sick children",
      ],
      cons: [
        "Most expensive option",
        "You're the employer (taxes, insurance, backup plan)",
        "Less socialization with peers",
        "Finding and vetting is time-consuming",
      ],
    },
  },
  {
    id: "nanny-share",
    name: "Nanny Share",
    description: "A nanny shared between two families, splitting costs while getting personalized care.",
    avgMonthlyInfant: 1800,
    avgMonthlyToddler: 1700,
    avgMonthlyPreschool: 1600,
    prosAndCons: {
      pros: [
        "More affordable than a solo nanny",
        "Small group socialization",
        "Still in a home environment",
        "Shared employer responsibilities",
      ],
      cons: [
        "Requires coordination between families",
        "Schedule conflicts between families",
        "Need compatible parenting styles",
        "Logistics if one family leaves",
      ],
    },
  },
  {
    id: "au-pair",
    name: "Au Pair",
    description: "Young international visitor living with your family, providing up to 45 hours/week of childcare.",
    avgMonthlyInfant: 1600,
    avgMonthlyToddler: 1600,
    avgMonthlyPreschool: 1600,
    prosAndCons: {
      pros: [
        "Cost doesn't increase with number of children",
        "Cultural exchange for your family",
        "Live-in flexibility",
        "Up to 45 hours/week of care",
      ],
      cons: [
        "Must have a spare room",
        "Cultural and language adjustments",
        "Less childcare experience than professionals",
        "Program fees and host family responsibilities",
      ],
    },
  },
];

export interface RegionCostMultiplier {
  region: string;
  multiplier: number;
}

export const REGION_MULTIPLIERS: RegionCostMultiplier[] = [
  { region: "National Average", multiplier: 1.0 },
  { region: "Northeast (NY, MA, CT, NJ)", multiplier: 1.35 },
  { region: "West Coast (CA, WA, OR)", multiplier: 1.3 },
  { region: "Mid-Atlantic (DC, MD, VA)", multiplier: 1.25 },
  { region: "Mountain West (CO, UT)", multiplier: 1.1 },
  { region: "Midwest (IL, MN, OH, MI)", multiplier: 0.95 },
  { region: "Southeast (GA, FL, NC, TX)", multiplier: 0.9 },
  { region: "South (AL, MS, LA, AR)", multiplier: 0.8 },
  { region: "Rural Areas", multiplier: 0.75 },
];

export interface TaxCredit {
  name: string;
  maxBenefit: string;
  description: string;
}

export const TAX_BENEFITS: TaxCredit[] = [
  {
    name: "Child and Dependent Care Tax Credit",
    maxBenefit: "Up to $1,050 for one child, $2,100 for two+",
    description:
      "Federal tax credit for child care expenses while you work or look for work. Covers up to $3,000 in expenses for one child or $6,000 for two or more. Credit is 20-35% of expenses depending on income.",
  },
  {
    name: "Dependent Care FSA",
    maxBenefit: "Up to $5,000/year pre-tax",
    description:
      "If your employer offers a Dependent Care Flexible Spending Account, you can set aside up to $5,000 pre-tax for childcare. This reduces your taxable income. Cannot be combined with the full tax credit.",
  },
  {
    name: "Employer Childcare Benefits",
    maxBenefit: "Varies",
    description:
      "Some employers offer childcare subsidies, backup care programs, or on-site daycare. Check with your HR department.",
  },
];

export function calculateMonthlyCost(
  type: ChildcareType,
  ageGroup: "infant" | "toddler" | "preschool",
  regionMultiplier: number,
  hoursPerWeek: number
): number {
  const fullTimeHours = 40;
  let baseCost: number;

  if (ageGroup === "infant") baseCost = type.avgMonthlyInfant;
  else if (ageGroup === "toddler") baseCost = type.avgMonthlyToddler;
  else baseCost = type.avgMonthlyPreschool;

  // Adjust for part-time (proportional but with a minimum premium)
  const hourFactor = hoursPerWeek >= fullTimeHours ? 1 : Math.max(0.6, hoursPerWeek / fullTimeHours);

  return Math.round(baseCost * regionMultiplier * hourFactor);
}
