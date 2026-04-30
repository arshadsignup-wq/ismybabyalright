import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'constipation-from-medication-baby',
  title: 'Constipation from Medication in Babies and Toddlers',
  category: 'digestive',
  searchTerms: [
    'baby constipated from medicine',
    'baby constipation from iron drops',
    'iron supplement constipation baby',
    'baby constipated after antibiotics',
    'medication causing constipation baby',
    'baby hard poop from vitamins',
    'toddler constipation from medication',
    'antacid constipation baby',
    'reflux medication constipation baby',
    'baby not pooping after medicine',
    'iron fortified formula constipation',
  ],
  quickAnswer:
    'Several common baby and toddler medications can cause constipation as a side effect. Iron supplements and iron-fortified formulas are the most frequent culprits, but antacids, certain antibiotics, and some other medications can also slow digestion. Medication-related constipation is usually manageable with dietary adjustments and does not mean you need to stop the medication. Talk to your pediatrician before changing or stopping any prescribed medication.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The most common medication-related constipation at this age comes from iron supplements (often prescribed for anemia or prematurity) and iron-fortified formula. Signs include hard, pellet-like stools, straining, and less frequent bowel movements. If your baby is on iron drops, giving them between meals rather than with milk may reduce constipation. Your pediatrician may also suggest adjusting the dose or trying a different form of iron.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start solids and may still be on iron supplementation, constipation from iron can persist. This is also the age when reflux medications (like ranitidine or omeprazole) may be used, which can sometimes contribute to harder stools. Offering high-fiber purees (prunes, pears, peas) and ensuring adequate fluid intake can help offset medication-related constipation. Do not give over-the-counter laxatives without medical guidance.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers may experience constipation from iron supplements, antihistamines (like diphenhydramine), certain antibiotics, or antacid medications. If your toddler is consistently constipated while on a medication, your pediatrician may adjust the timing, dosage, or formulation. Increasing water intake, offering prune juice (1-2 oz mixed with water), and including fiber-rich foods (whole grains, fruits, vegetables) can help manage symptoms.',
    },
  ],
  whenNormal: [
    'Stools becoming slightly firmer after starting iron supplements but still passing without pain',
    'Bowel movements being less frequent (every 2-3 days) while on iron but remaining soft',
    'Dark or greenish-black stools from iron supplementation, which is expected and harmless',
    'Temporary changes in stool pattern after a course of antibiotics',
  ],
  whenToMention: [
    'Your baby is straining significantly and passing hard, painful stools after starting a new medication',
    'Your baby has not had a bowel movement in 3+ days and seems uncomfortable',
    'You are considering stopping or changing a medication because of constipation',
    'Your baby has blood on the stool surface or in the diaper from straining',
  ],
  whenToActNow: [
    'Your baby has severe abdominal distension (a very swollen, hard belly) with vomiting',
    'Your baby has not had a bowel movement in a week and appears to be in pain',
    'You notice blood mixed into the stool (not just on the surface) along with constipation',
    'Your baby is refusing to eat, is lethargic, or is vomiting bile along with constipation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['constipation', 'hard-pebble-poop', 'straining-to-poop', 'iron-deficiency-from-milk'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Constipation in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Iron Supplementation for Infants. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/126/5/1040/65476/Diagnosis-and-Prevention-of-Iron-Deficiency-and',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
  ],
};
