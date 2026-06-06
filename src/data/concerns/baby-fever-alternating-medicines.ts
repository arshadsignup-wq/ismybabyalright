import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-fever-alternating-medicines',
  title: 'Can I Alternate Tylenol and Motrin for My Baby\'s Fever?',
  category: 'medical',
  searchTerms: [
    'alternating tylenol motrin baby',
    'alternate acetaminophen ibuprofen baby',
    'switching fever medicine baby',
    'can I give both tylenol and motrin',
    'baby fever alternating medicines',
    'rotating fever reducers baby',
    'tylenol and motrin together baby',
    'how to alternate fever medicine',
    'baby fever two medicines',
    'stacking tylenol motrin infant',
  ],
  quickAnswer:
    'Alternating acetaminophen (Tylenol) and ibuprofen (Motrin) is sometimes recommended by pediatricians for stubborn fevers in babies over 6 months, but it carries a risk of accidental overdosing. If your doctor recommends alternating, give one medication, wait 3 hours, then give the other, and keep a written log of every dose to avoid confusion.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Alternating medications is not appropriate for this age group. Only acetaminophen may be used, and only after consulting your pediatrician. Any fever in a baby under 3 months requires immediate medical evaluation rather than home management with medication.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Only acetaminophen is safe at this age since ibuprofen cannot be given before 6 months. Alternating is therefore not possible. If acetaminophen alone is not controlling your baby\'s fever, contact your pediatrician for guidance rather than looking for additional medications.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Alternating is now technically possible since both medications are safe. However, the AAP cautions that alternating increases the risk of dosing errors. If your pediatrician recommends it, write down the name of each medicine, the dose, and the exact time given. A typical schedule might be acetaminophen at noon, ibuprofen at 3 PM, acetaminophen again at 6 PM.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Some pediatricians recommend alternating for persistent high fevers that do not respond well to a single medication. Keep a detailed log and use a timer or phone alarm to avoid doubling up. Remember that the goal is comfort, not getting the temperature to perfectly normal. A slightly feverish but comfortable toddler does not necessarily need more medicine.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Alternating can be helpful for high fevers during more significant illnesses. Continue to track all doses carefully. If you find yourself alternating medications for more than 48 hours, contact your pediatrician to ensure the underlying illness does not need further evaluation or treatment.',
    },
  ],
  whenNormal: [
    'Your baby\'s fever responds to a single medication and alternating is not needed',
    'The fever returns when medication wears off but your baby is comfortable and drinking well between doses',
    'Your pediatrician specifically recommended alternating and you are keeping a written log of all doses',
  ],
  whenToMention: [
    'A single fever reducer does not seem to bring your baby\'s temperature down at all',
    'You are confused about the timing or dosing schedule for alternating medications',
    'Your baby has needed alternating medications for more than 2 days',
  ],
  whenToActNow: [
    'You think you may have accidentally given a double dose of either medication, or your baby shows signs of overdose such as nausea, vomiting, abdominal pain, or excessive drowsiness',
    'Your baby\'s fever remains above 104°F (40°C) despite alternating medications, or your baby shows signs of serious illness such as difficulty breathing, persistent vomiting, rash, or extreme lethargy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-fever-acetaminophen-vs-ibuprofen',
    'baby-fever-not-responding-medicine',
    'infant-tylenol-dosing-concerns',
    'baby-ibuprofen-dosing-safety',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Alternating Acetaminophen and Ibuprofen for Fever. Pediatrics, 2011.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Medications-Used-to-Treat-Fever.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Fever treatment: Quick guide to treating a fever.',
      url: 'https://www.mayoclinic.org/diseases-conditions/fever/in-depth/fever/art-20050997',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Combined and alternating paracetamol and ibuprofen therapy for febrile children. Cochrane Review.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24615164/',
    },
  ],
};
