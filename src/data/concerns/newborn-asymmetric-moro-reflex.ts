import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-asymmetric-moro-reflex',
  title: 'Uneven Startle Reflex in Newborns (Asymmetric Moro)',
  category: 'medical',
  searchTerms: [
    'asymmetric moro reflex',
    'baby one arm startle',
    'newborn uneven startle',
    'baby one arm not moving startle',
    'asymmetric startle reflex newborn',
    'moro reflex one side only',
    'baby arm not responding',
    'unequal moro reflex',
    'newborn one arm weaker startle',
    'asymmetric moro erb palsy',
  ],
  quickAnswer:
    'An asymmetric Moro reflex, where one arm responds differently than the other during startle, is an important finding that should be evaluated by your pediatrician. It may indicate a birth injury such as a broken clavicle (collarbone) or brachial plexus injury (Erb\'s palsy). Early evaluation and treatment lead to the best outcomes.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'During a normal Moro reflex, both arms should fling out symmetrically. If one arm does not respond, moves less, or is held differently, this could indicate a birth injury. The most common causes are a fractured clavicle (collarbone) or a brachial plexus injury (damage to the nerves controlling the arm), also known as Erb\'s palsy. These injuries are more common after difficult deliveries, large babies, or shoulder dystocia. Your pediatrician should evaluate any asymmetry promptly. Most clavicle fractures heal on their own in 2-3 weeks, and many brachial plexus injuries improve within the first few months.',
    },
    {
      ageRange: '1-3 months',
      context:
        'If a birth injury was identified, your pediatrician will be monitoring recovery. Most clavicle fractures are fully healed by this time. Brachial plexus injuries typically show significant improvement by 3 months. If there is no improvement in arm movement by 3 months, referral to a pediatric neurologist or orthopedist may be recommended for further evaluation and possible therapy.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The Moro reflex naturally fades by this age, making asymmetry harder to assess. However, overall arm use should be assessed. If your baby is consistently not using one arm as well as the other, physical therapy and continued specialist follow-up may be recommended. About 80-90% of brachial plexus injuries recover fully within the first year.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If a brachial plexus injury has not recovered by this age, surgical options may be considered. Your baby should be using both arms for reaching, grasping, and playing. Continued physical therapy can optimize function even if some nerve damage is permanent.',
    },
  ],
  whenNormal: [
    'Both arms respond symmetrically during the Moro reflex, fanning out and then coming back in together',
  ],
  whenToMention: [
    'You notice one arm moves less than the other during startle responses',
    'One arm seems to be held in a different position (such as against the body or internally rotated)',
    'Your baby does not seem to move one arm as freely as the other',
  ],
  whenToActNow: [
    'One arm is completely limp or your baby shows no movement in one arm, which could indicate a significant nerve injury or fracture',
    'Swelling, bruising, or tenderness over the collarbone area, especially after a difficult delivery',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Birth Injuries. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Brachial Plexus Birth Injury. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532904/',
    },
  ],
  relatedConcernSlugs: ['newborn-brachial-plexus-injury', 'newborn-birth-injury-clavicle', 'newborn-startle-reflex-excessive'],
};
