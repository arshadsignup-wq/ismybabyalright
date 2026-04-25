import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fontanelle-sunken',
  title: 'My Baby\'s Soft Spot Looks Sunken',
  category: 'medical',
  searchTerms: [
    'sunken soft spot baby',
    'sunken fontanelle',
    'baby soft spot indented',
    'depressed fontanelle',
    'baby soft spot looks sunken',
    'is sunken soft spot dangerous',
    'dehydration soft spot',
    'baby fontanelle dip',
    'when to worry about sunken fontanelle',
    'sunken soft spot dehydration',
  ],
  quickAnswer:
    'A sunken fontanelle (soft spot) is most often a sign of dehydration and needs prompt attention. In a well-hydrated baby, the fontanelle should feel flat and firm, though it may dip slightly when your baby is upright or crying. If it appears noticeably sunken, especially with other signs like fewer wet diapers or dry lips, contact your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns can become dehydrated quickly due to their small size. A sunken fontanelle in a young baby, especially if accompanied by poor feeding, fewer than 6 wet diapers per day, or lethargy, needs same-day medical evaluation. Feeding difficulties or illness can lead to dehydration rapidly at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, you may notice slight variations in how the fontanelle looks depending on whether your baby is lying down, sitting, or crying. A very slight dip when upright is normal. However, a clearly sunken fontanelle, especially in a baby who seems unwell, has diarrhea, or is vomiting, is a red flag for dehydration.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby grows, the anterior fontanelle begins to close (this process is complete by 18-24 months). A sunken soft spot at this age, combined with reduced fluid intake, diarrhea, or vomiting, should prompt a call to your pediatrician. Your baby may need extra fluids or medical assessment.',
    },
    {
      ageRange: '12-18 months',
      context:
        'The fontanelle is smaller now and harder to assess, but it should still not appear sunken. Stomach bugs, heat, or refusing fluids during illness can all lead to dehydration. Trust your instinct - if your toddler seems unwell and the soft spot looks noticeably dipped, seek medical advice.',
    },
    {
      ageRange: '18 months+',
      context:
        'Most children\'s fontanelles close between 18 and 24 months. Once closed, you can no longer use the soft spot as an indicator of hydration. If your toddler is dehydrated, look for other signs: dry mouth, no tears when crying, fewer wet diapers, and lethargy.',
    },
  ],
  whenNormal: [
    'Your baby\'s fontanelle appears very slightly lower when they\'re upright versus lying down',
    'The soft spot dips briefly when your baby cries or strains during a bowel movement',
    'Your baby is feeding well, has plenty of wet diapers (6+ per day for infants), and seems happy',
    'The fontanelle feels soft and flat when your baby is calm and lying down',
  ],
  whenToMention: [
    'You\'re unsure whether the fontanelle looks sunken or normal',
    'Your baby has had a mild stomach bug and you want to confirm they\'re well-hydrated',
    'The fontanelle seems to look different than it used to, but your baby is otherwise well',
  ],
  whenToActNow: [
    'Your baby has a clearly sunken fontanelle along with fewer wet diapers, no tears when crying, dry lips, or lethargy',
    'Your baby has persistent vomiting or diarrhea and is unable to keep fluids down',
    'Your baby is listless, difficult to wake, or seems very unwell',
    'Your newborn (under 3 months) has a sunken fontanelle and is feeding poorly',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby Soft Spots (Fontanelles). HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-Head.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Diarrhea: Common Illness, Global Killer. CDC Global Health, 2015.',
      url: 'https://www.cdc.gov/healthywater/global/diarrhea-burden.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Dehydration in Children. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Dehydration.aspx',
    },
  ],
};
