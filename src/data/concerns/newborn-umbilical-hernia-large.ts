import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-umbilical-hernia-large',
  title: 'Large Umbilical Hernia in Newborns',
  category: 'medical',
  searchTerms: [
    'large umbilical hernia baby',
    'big belly button hernia newborn',
    'newborn belly button sticking out far',
    'huge umbilical hernia infant',
    'baby belly button hernia large',
    'big hernia belly button treatment',
    'umbilical hernia bigger than normal',
    'newborn large navel hernia',
    'baby hernia growing bigger',
    'when does large umbilical hernia need surgery',
  ],
  quickAnswer:
    'A large umbilical hernia in a newborn, while dramatic-looking, is still usually harmless. Even large hernias (over 2 cm) typically close on their own by age 4-5, though larger ones may take longer. Surgery is generally only considered if the hernia persists past age 4-5 or causes complications, which is rare in children.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Large umbilical hernias can appear quite alarming, with the belly button protruding significantly, especially when your baby cries or strains. The hernia is a soft bulge caused by intestine or fatty tissue pushing through a gap in the abdominal wall muscles near the belly button. Even large hernias are soft, painless, and can usually be gently pushed back in (reducible). Do not put tape, coins, or belly bands over the hernia, as these do not help and can irritate the skin.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Your pediatrician will measure and monitor the hernia at well-child visits. Larger hernias (greater than 1.5-2 cm at the fascial defect) may take longer to close spontaneously but still have a high likelihood of resolution. The hernia may appear to grow as your baby gains weight, but what matters is the size of the abdominal wall opening, not the external bulge.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue monitoring. Many large umbilical hernias begin to decrease in size during the first year. The abdominal wall muscles strengthen as your baby becomes more active. Your pediatrician may discuss a timeline for resolution and potential surgical referral if the hernia remains very large.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Large hernias may still be present but should be slowly decreasing. Surgical referral is typically not considered until age 4-5 unless the hernia is very large (over 2 cm fascial defect), is enlarging, or shows signs of complications. Complications such as incarceration (trapped intestine) are very rare in children with umbilical hernias.',
    },
  ],
  whenNormal: [
    'A soft bulge at the belly button that gets larger with crying or straining and reduces when baby relaxes',
    'The hernia is soft, painless, and can be gently pushed back in',
    'Baby is feeding well and having normal bowel movements',
    'The skin over the hernia appears normal without redness or discoloration',
  ],
  whenToMention: [
    'The hernia seems to be getting significantly larger over time',
    'You have questions about whether surgery may be needed',
    'The hernia is difficult to push back in but baby is comfortable',
  ],
  whenToActNow: [
    'The hernia becomes hard, swollen, discolored, or very tender and cannot be pushed back in (incarcerated hernia requiring emergency evaluation)',
    'Baby is vomiting, extremely fussy, or refusing to eat with a firm, tender hernia',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Umbilical Hernia. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Umbilical-Hernia.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Umbilical Hernia in Children. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459312/',
    },
  ],
  relatedConcernSlugs: ['umbilical-hernia', 'newborn-inguinal-hernia-signs', 'hernia-bulging-when-crying'],
};
