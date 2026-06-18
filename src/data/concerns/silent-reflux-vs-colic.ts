import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'silent-reflux-vs-colic',
  title: 'Silent Reflux vs. Colic: Why Is My Baby So Fussy?',
  category: 'digestive',
  searchTerms: [
    'silent reflux vs colic',
    'baby fussy no spit up reflux',
    'how to tell if baby has silent reflux',
    'colic or reflux baby',
    'baby arching back no vomiting',
    'silent reflux symptoms baby',
    'baby uncomfortable lying flat',
    'baby swallowing back spit up',
    'colic vs gerd baby',
    'fussy baby after feeding no spit up',
  ],
  quickAnswer:
    'Silent reflux and colic can look very similar — both cause excessive crying and fussiness — but they have different causes and patterns. Silent reflux involves acid traveling up the esophagus without visible spit-up, causing pain tied to feeding. Colic is defined by the rule of threes: crying 3+ hours per day, 3+ days per week, for 3+ weeks, and is not necessarily tied to feeds. Understanding the difference helps your pediatrician recommend the right approach.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'Both conditions typically emerge in the first weeks of life. Silent reflux clues: your baby arches during or right after feeds, pulls away from the bottle or breast, seems to swallow something back down, and is worse when laid flat. Colic clues: inconsolable crying peaks in the evening, is not specifically tied to feeding, and your baby draws up their legs. Many babies have elements of both, which makes early diagnosis difficult.',
    },
    {
      ageRange: '6 weeks - 3 months',
      context:
        'Colic typically peaks around 6 weeks and begins improving by 3 months. Silent reflux may persist or worsen. If your baby\'s fussiness is clearly worse during and after feeds, they seem uncomfortable lying flat, and there are signs like hiccups, hoarse cry, or wet-sounding burps without visible spit-up, silent reflux is more likely. If the crying follows an evening pattern and is unrelated to feeding, colic is more likely.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Colic should be resolving by 3-4 months. If your baby is still significantly fussy past this point, particularly around feeds, silent reflux or another cause should be investigated. Your pediatrician may recommend a trial of feeding modifications (thickened feeds, smaller more frequent feeds, upright positioning after feeds) before considering medication.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Both colic and reflux typically improve significantly by 6-12 months as the digestive system matures and your baby spends more time upright. If feeding-related fussiness persists, discuss with your pediatrician whether further evaluation for GERD or food protein sensitivity (such as cow\'s milk protein allergy) is warranted.',
    },
  ],
  whenNormal: [
    'Your baby is fussy in the evenings but feeds well, gains weight, and is content at other times of day — this pattern is consistent with typical colic',
    'Your baby occasionally arches or fusses during feeds but is gaining weight and generally happy between feeds',
    'Some spit-up after feeds is normal — most babies spit up to some degree and are "happy spitters"',
  ],
  whenToMention: [
    'Your baby consistently arches, turns away, or cries during feeds and seems uncomfortable lying flat after eating',
    'You suspect your baby is swallowing back up what would be spit-up and seems in pain',
    'Your baby has a hoarse cry, frequent hiccups, chronic congestion, or wet-sounding breathing after feeds',
    'The fussiness has not improved by 4 months of age',
  ],
  whenToActNow: [
    'Your baby is refusing to eat, losing weight, or not gaining weight adequately',
    'Your baby vomits forcefully (projectile) after feeds — this could indicate pyloric stenosis, which is a medical emergency in young infants',
    'Your baby has blood in their stool or vomit',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Gastroesophageal Reflux in Infants. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/GERD-Reflux.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Acid Reflux (GER & GERD) in Infants.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Colic: Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/colic/symptoms-causes/syc-20371074',
    },
  ],
};
