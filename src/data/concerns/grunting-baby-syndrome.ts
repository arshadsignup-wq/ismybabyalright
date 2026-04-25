import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'grunting-baby-syndrome',
  title: 'Grunting Baby Syndrome',
  category: 'digestive',
  searchTerms: [
    'grunting baby syndrome',
    'infant dyschezia',
    'baby grunts and strains',
    'baby grunts all the time',
    'baby grunts and turns red',
    'newborn grunting pooping',
    'baby grunts for 10 minutes before pooping',
    'baby dyschezia',
    'baby can\'t figure out how to poop',
    'baby grunting not constipated',
  ],
  quickAnswer:
    'Grunting baby syndrome, medically called infant dyschezia, is a very common and harmless condition where babies grunt, strain, cry, and turn red for several minutes before passing a perfectly soft stool. It happens because your baby has not yet learned to coordinate relaxing their pelvic floor while pushing with their abdominal muscles. It almost always resolves on its own by 3-4 months of age.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'Infant dyschezia often becomes noticeable in the first few weeks of life. Your baby may grunt, strain, and cry for 10-20 minutes before having a bowel movement, even though the stool is completely soft. This can be very distressing for parents to watch, but it is a normal part of your baby learning to use their muscles. Importantly, do not use rectal stimulation (like thermometers or cotton swabs) as this can prevent your baby from learning the coordination on their own.',
    },
    {
      ageRange: '6 weeks - 3 months',
      context:
        'This is typically when infant dyschezia is most pronounced. Your baby may seem to struggle before every bowel movement. The key distinction from constipation is that the stool itself is soft and normal-looking once it passes. Your baby is healthy, gaining weight, and fine between episodes. No treatment is needed as this resolves with maturity.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most babies outgrow infant dyschezia by around 3-4 months as their nervous system matures and they learn the coordination needed for comfortable bowel movements. If significant grunting and straining persists beyond 4-5 months, or if stools have become hard, it is worth discussing with your pediatrician as it may have transitioned to true constipation.',
    },
  ],
  whenNormal: [
    'Your baby grunts, strains, and turns red but then passes soft, normal-looking stool',
    'The episodes last 10-20 minutes but your baby is completely fine in between',
    'Your baby is under 4 months old and is otherwise feeding well and gaining weight',
    'The grunting happens before most bowel movements but your baby is not otherwise distressed throughout the day',
    'Your baby has been diagnosed with infant dyschezia by your pediatrician',
  ],
  whenToMention: [
    'You are unsure whether your baby has infant dyschezia or constipation and want a professional evaluation',
    'The grunting and straining persists beyond 4-5 months of age',
    'Your baby seems to be in genuine distress that extends well beyond bowel movement episodes',
  ],
  whenToActNow: [
    'Your baby is grunting with every breath (not just during bowel movements), which could indicate a respiratory issue rather than dyschezia',
    'Your baby passes hard, bloody, or very painful stools along with grunting, suggesting true constipation or another issue',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
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
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
  ],
};
